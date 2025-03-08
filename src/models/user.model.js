import mongoose, {Schema} from "mongoose";  
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
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
    avatar: {
      type: String, //url of the picture
      required: true,
    },
    coverImage: {
      type: String,
    },
    saved: [
      {
        type: Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "orgs",
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

userSchema.pre("save", async function (next) {
  if (!this.isModified == "password") return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); 
};
export const User=mongoose.model("User",userSchema);