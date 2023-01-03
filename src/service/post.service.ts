import { DocumentDefinition, FilterQuery } from "mongoose";
import Post, { PostDocument } from "../models/post.model";

export async function createPost(
  input: DocumentDefinition<Omit<PostDocument, "createdAt" | "updatedAt">>
) {
  try {
    return await Post.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getPosts() {
  //query: FilterQuery<PostDocument>
  try {
    return await Post.find();
  } catch (error: any) {
    throw new Error(error);
  }
}
