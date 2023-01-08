import { Request, Response } from "express";
import { CreatePostType } from "../schema/post.schema";
import { createPost, getPostByID, getPosts } from "../service/post.service";

export async function createPostHandler(
  req: Request<{}, {}, CreatePostType["body"]>,
  res: Response
) {
  try {
    const post = await createPost(req.body);
    return res.send(post);
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
}

export async function getPostsHandler(req: Request, res: Response) {
  try {
    const posts = await getPosts();
    return res.send(posts);
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
}

export async function getPostByIDHandler(req: Request, res: Response) {
  try {
    const post = await getPostByID(req.params.postID);
    return res.send(post);
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
}
