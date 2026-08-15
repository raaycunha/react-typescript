import { createContext } from "react";
import type { PostItem } from "../types/blog";

interface ContextObject {
  posts: PostItem[];
  addPost: (title: string, body: string) => void;
  handleDelete: (post: PostItem) => Promise<void>;
  handleEdit: (post: PostItem) => void;
  postEdit: PostItem | null;
  editPost: (post: PostItem, title: string, body: string) => Promise<void>;
}

export const BlogContext = createContext<ContextObject | null>(null);
