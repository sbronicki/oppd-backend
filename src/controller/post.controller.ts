import { Request, Response } from "express";
import { PostDocument } from "../models/post.model";
import { CreatePostType } from "../schema/post.schema";
import {
  checkPostAllow,
  createPost,
  getPostByID,
  getPosts,
} from "../service/post.service";

export async function createPostHandler(
  req: Request<{}, {}, CreatePostType["body"]>,
  res: Response
) {
  try {
    const postAllowed: boolean = await checkPostAllow();
    if (postAllowed) {
      const post: PostDocument = await createPost(req.body);
      if (!post) {
        throw new Error("Could not create post");
      }
      return res.send({ success: post.createdAt });
    } else {
      res.status(405).send({ error: "Posting is not allowed at this time." });
    }
  } catch (error: any) {
    return res.status(400).send(
      JSON.stringify({
        message: "Could not create post",
        errorMsg: error.message,
      })
    );
  }
}

export async function getPostsHandler(req: Request, res: Response) {
  try {
    const posts = await getPosts();
    if (!posts) {
      throw new Error("Could not get posts");
    }
    return res.send(posts);
  } catch (error: any) {
    return res.status(400).send(
      JSON.stringify({
        message: "Could not get posts",
        errorMsg: error.message,
      })
    );
  }
}

export async function getPostByIDHandler(req: Request, res: Response) {
  try {
    const postID = req.params.postID;
    const post = await getPostByID(postID);
    if (!post) {
      throw new Error("Could not find post with ID " + postID);
    }
    return res.send(post);
  } catch (error: any) {
    return res.status(400).send(
      JSON.stringify({
        error: "Could not find post",
        errorMsg: error.message,
      })
    );
  }
}
