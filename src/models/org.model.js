import mongoose, { Schema } from "mongoose";

import bcrypt from "bcrypt";

const orgSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, //url of the picture
      required: true,
    },
    coverImage: {
      type: String,
    },
    visits: {
      type: Number,
      default: 0,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

orgSchema.pre("save", async function (next) {
  if (!this.isModified == "password") return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

orgSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export const Organisation = mongoose.model("Organisation", orgSchema);
