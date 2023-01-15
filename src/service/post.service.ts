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
  try {
    return await Post.find().sort({ _id: -1 }).limit(7);
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getPostByID(postID: string) {
  try {
    return await Post.findOne({ _id: postID });
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getLastPostTime() {
  try {
    return await Post.find().sort({ _id: -1 }).select("createdAt").limit(1);
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function checkPostAllow() {
  try {
    const lastPost = await getLastPostTime();
    const lastPostDate = new Date(lastPost[0]["createdAt"]);
    const postAllowedDate = new Date(
      lastPostDate.setHours(lastPostDate.getHours() + 12)
    );
    return new Date() > postAllowedDate;
  } catch (error: any) {
    throw new Error(error);
  }
}
