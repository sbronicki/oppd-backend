import { Express, Request, Response } from "express";
import {
  createPostHandler,
  getPostHandler,
} from "./controller/post.controller";
import validate from "./middleware/validateResource";
import { createPostSchema } from "./schema/post.schema";

function routes(app: Express) {
  app.post("/api/posts", validate(createPostSchema), createPostHandler);
  app.get("/api/posts", getPostHandler);
}

export default routes;
