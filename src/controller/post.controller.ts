import { Request, Response } from "express";
import { CreatePostInput } from "../schema/post.schema";
import { createPost, getPosts } from "../service/post.service";

export async function createPostHandler(
  req: Request<{}, {}, CreatePostInput["body"]>,
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

export async function getPostHandler(req: Request, res: Response) {
  const posts = await getPosts();
  return res.send(posts);
}
