import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Urls } from "../models/urls.model.js";
import shortid from "shortid";
import { redis } from "../lib/redis.js";

// Validate URL
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const CompressUrl = asyncHandler(async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl?.trim()) {
    throw new ApiError(400, "Original URL is required");
  }

  if (!isValidUrl(originalUrl)) {
    throw new ApiError(400, "Invalid URL format");
  }

  const cacheKey = `chats:${originalUrl.trim()}`;

  try {
    // Check cache
    const cachedKey = await redis.get(cacheKey);
    if (cachedKey) {
      const chats = JSON.parse(cachedKey);
      console.log("Cache hit 🍃: ShortUrl Data", chats);
      return res
        .status(200)
        .json(new ApiResponse(200, "Cache Retrieved", chats));
    }

    const existingUrl = await Urls.findOne({
      originalUrl: originalUrl.trim(),
    }).select("-__v");
    if (existingUrl) {
      await redis.set(cacheKey, JSON.stringify(existingUrl), "EX", 3600);
      return res
        .status(200)
        .json(new ApiResponse(200, "Existing URL fetched", existingUrl));
    }

    const short_id = shortid.generate();
    const baseUrl = process.env.BASE_URL || "http://localhost:8080";
    const short_url = `${baseUrl}/api/urls/${short_id}`;

    const newUrl = await Urls.create({
      shortId: short_id,
      originalUrl: originalUrl.trim(),
      shortUrl: short_url,
    });

    const urlResponse = newUrl.toObject();
    delete urlResponse.__v;

    //Cache Setup
    await redis.set(cacheKey, JSON.stringify(urlResponse), "EX", 3600);

    return res
      .status(201)
      .json(
        new ApiResponse(201, "Short URL created successfully", urlResponse)
      );
  } catch (error) {
    console.error("Error processing request: ", error);
    throw new ApiError(500, "Error processing URL shortening request");
  }
});

const redirectShortUrl = asyncHandler(async (req, res) => {
  try {
    const { short_id } = req.params;
    // console.log("🔥Short ID: ", short_id);
    const urlEntry = await Urls.findOne({ shortId: short_id });

    if (!urlEntry) {
      return res.status(404).json(new ApiResponse(404, "URL not found"));
    }

    return res.redirect(urlEntry.originalUrl);
  } catch (error) {
    throw new ApiError(500, "Error processing redirect request", error);
  }
});

export { CompressUrl, redirectShortUrl };
