import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import type { PostItem } from "../types/blog";
import { BlogContext } from "./BlogContext";

interface ChildrenProps {
  children: ReactNode;
}

interface ApiResponsePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const BlogProvider = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [postEdit, setPostEdit] = useState<PostItem | null>(null);
  const editPost = async (postEdit: PostItem, title: string, body: string) => {
    if (postEdit.source === "api") {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${postEdit.id}`,
          {
            title,
            body,
          },
        );
      } catch (err) {
        console.error("ERRO API:", err);
      }
    }
    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post.id === postEdit.id ? { ...post, title, body } : post,
      );
    });
    setPostEdit(null);
  };
  const addPost = (title = "", body = "") => {
    if (!title.trim() || !body.trim()) return;
    const id = crypto.randomUUID();
    setPosts((currentPosts) => [
      ...currentPosts,
      { id, title, body, source: "user" },
    ]);
  };

  useEffect(() => {
    let active = true;

    const fetchPosts = async (): Promise<void> => {
      const URL = "https://jsonplaceholder.typicode.com/posts";
      try {
        const response = await axios.get<ApiResponsePost[]>(URL);
        const formattedPosts: PostItem[] = response.data.map(
          ({ id, title, body }) => ({
            id,
            title,
            body,
            source: "api",
          }),
        );
        if (active) {
          setPosts((currentPosts) => [
            ...currentPosts,
            ...formattedPosts.slice(0, 10),
          ]);
        }
      } catch (err) {
        if (active) console.error("ERRO API:", err);
      }
    };

    fetchPosts();

    return () => {
      active = false;
    };
  }, []);
  const handleDelete = async (postDelete: PostItem): Promise<void> => {
    if (postDelete.source === "api") {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${postDelete.id}`,
        );
      } catch (err) {
        console.error("ERRO API:", err);
      }
    }
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postDelete.id),
    );
  };
  const handleEdit = (item: PostItem) => {
    setPostEdit(item);
    navigate("new-post");
  };
  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        handleDelete,
        handleEdit,
        postEdit,
        editPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
