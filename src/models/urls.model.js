import mongoose, { Schema } from "mongoose";

const urlsSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      lowercase: true,
    },
    originalUrl: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Urls = mongoose.model("Urls", urlsSchema);
