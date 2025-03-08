import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  },
  {
    timestamps: true,
  }
);

export const Events = mongoose.model("Events", eventSchema);
