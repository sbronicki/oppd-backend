import { object, string, TypeOf } from "zod";

export const createPostSchema = object({
  body: object({
    post: string({
      required_error: "post is required",
    }).min(1, "post is too short"),
  }),
});

export type CreatePostType = TypeOf<typeof createPostSchema>;
