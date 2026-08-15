import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogHook";

const NewPost = () => {
  const navigate = useNavigate();
  const { addPost, postEdit, editPost } = useBlogContext();
  const [title, setTitle] = useState(postEdit?.title ?? "");
  const [body, setBody] = useState(postEdit?.body ?? "");
  const handleSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (postEdit) {
      await editPost(postEdit, title, body);
      navigate("/");
    } else addPost(title, body);
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <form
        className="flex flex-col gap-2 mx-auto mt-10 p-4 rounded-xl w-full max-w-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center">Inserir Novo Post</h2>
        <div className="flex flex-col gap-1">
          <span className="font-medium">Titulo:</span>
          <input
            className="border border-gray-600 h-11 px-2 rounded-xl"
            type="text"
            placeholder="Digite o titulo..."
            title="Digite o titulo"
            required
            minLength={1}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">Texto:</span>
          <input
            className="border border-gray-600 h-11 px-2 rounded-xl"
            type="text"
            placeholder="Digite o titulo..."
            title="Digite o titulo"
            required
            minLength={1}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white h-8 px-2 rounded-md "
        >
          Postar
        </button>
      </form>
    </div>
  );
};

export default NewPost;
