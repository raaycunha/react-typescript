import axios from "axios";
import { useState } from "react";
import type { PostItem } from "../types/axios";

const AxiosPost = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const axiosApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setTimeout(() => {
        setPosts(response.data.slice(0, 5));
      }, 500);
    } catch (err) {
      console.log("Erro:", err);
    } finally {
      setLoading(false);
    }
  };
  axiosApi();
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Lista de postagens</h1>
      <div className="flex flex-col gap-2">
        {!loading && posts.length > 0 ? (
          posts.map((post: PostItem, index: number) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
    </div>
  );
};

export default AxiosPost;
