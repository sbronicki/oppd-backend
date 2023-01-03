import { Schema, Document, model, models } from "mongoose";

export interface PostDocument extends Document {
  post: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema(
  {
    post: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
