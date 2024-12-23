import { Router } from "express";
import { CompressUrl } from "../controllers/compressUrl.controller.js";

const router = Router();

router.route("/compressUrl").post(CompressUrl);

export default router;
