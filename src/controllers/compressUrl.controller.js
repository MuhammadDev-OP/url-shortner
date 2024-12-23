import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const CompressUrl = asyncHandler(async (req, res) => {
  return res.status(201).json(new ApiResponse(200, "Connected Successfully"));
});

export { CompressUrl };
