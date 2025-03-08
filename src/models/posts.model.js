import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    engagement: {
      type: Number,
      default: 0,
    },
    share: {
      type: String, //it need to be generated automatically
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Organisation",
    },
  },
  {
    timestamps: true,
  }
);

export const Posts = mongoose.model("Posts", postSchema);
