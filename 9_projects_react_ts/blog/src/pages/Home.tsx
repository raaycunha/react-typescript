import { useState } from "react";
import { useBlogContext } from "../context/BlogHook";
import type { PostItem } from "../types/blog";

const Home = () => {
  const { posts } = useBlogContext();
  const [postSelected, setPostSelected] = useState<PostItem | null>(null);
  return (
    <div className="flex flex-col items-center gap-12 bg-gray-800">
      <h1 className="font-bold text-4xl text-center mt-10 text-white">
        Ultimos Posts
      </h1>
      <div className="flex flex-col gap-6 bg-gray-600 p-8 rounded-xl">
        {!postSelected ? (
          posts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-6 bg-gray-200 w-full max-w-300 p-8 rounded-xl"
            >
              <h2 className="text-xl font-semibold">Titulo: {item.title}</h2>
              <p className="text-md text-black">Texto: {item.body}</p>
              <button
                onClick={() => setPostSelected(item)}
                className="h-11 px-6 cursor-pointer bg-gray-800 text-white rounded-md"
              >
                Ler mais
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-start gap-6 bg-gray-200 w-full max-w-300 p-8 rounded-xl">
            <h2 className="text-xl font-semibold">{postSelected.title}</h2>
            <p className="text-md text-black">{postSelected.body}</p>
            <button onClick={() => setPostSelected(null)}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
