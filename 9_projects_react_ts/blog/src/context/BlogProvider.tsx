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
  const editPost = async (post: PostItem, title: string, body: string) => {
    if (post.source === "api") {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          {
            title,
            body,
          },
        );
        setPosts((prevPosts) => {
          if (prevPosts === null) return prevPosts;
          return prevPosts.map((postEdit) =>
            postEdit.id === post.id ? { ...postEdit, title, body } : postEdit,
          );
        });
        setPostEdit(null);
      } catch (err) {
        console.error("ERRO API:", err);
      }
    } else {
      setPosts((prevPosts) => {
        if (prevPosts === null) return prevPosts;
        return prevPosts.map((postEdit) =>
          postEdit.id === post.id ? { ...postEdit, title, body } : postEdit,
        );
      });
    }
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

    const renderApi = async (): Promise<void> => {
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

    renderApi();

    return () => {
      active = false;
    };
  }, []);
  const handleDelete = async (post: PostItem): Promise<void> => {
    if (posts === null) return;
    if (post.source === "api") {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        );
        setPosts((prevPosts) => {
          if (prevPosts === null) return prevPosts;
          else return prevPosts.filter((post) => post.id !== post.id);
        });
      } catch (err) {
        console.error("ERRO API:", err);
      }
    } else {
      setPosts((currentPosts) => {
        if (currentPosts === null) return currentPosts;
        return currentPosts.filter((item) => item.id !== post.id);
      });
    }
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
