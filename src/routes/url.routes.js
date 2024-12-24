import { Router } from "express";
import {
  CompressUrl,
  redirectShortUrl,
} from "../controllers/url.controller.js";

const router = Router();

router.post("/compressUrl", CompressUrl);

router.get("/:short_id", redirectShortUrl);

export default router;
