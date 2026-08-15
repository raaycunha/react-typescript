import { useBlogContext } from "../context/BlogHook";

const Manager = () => {
  const { posts, handleDelete, handleEdit } = useBlogContext();
  return (
    <div className="flex flex-col gap-14">
      <h1 className="font-bold text-4xl text-center mt-10">Ultimos Posts</h1>
      <div className="flex flex-col items-center gap-6">
        {posts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-6 bg-gray-200 w-full max-w-300 p-8 rounded-xl"
          >
            <h2 className="mb-4">{item.title}</h2>
            <p className="mb-2">{item.body}</p>
            <button
              className="h-11 px-6 cursor-pointer bg-gray-800 text-white rounded-md"
              onClick={() => handleEdit(item)}
            >
              Editar
            </button>
            <button
              className="h-11 px-6 cursor-pointer bg-red-500 text-white rounded-md"
              onClick={() => handleDelete(item)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manager;
