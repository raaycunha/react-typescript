import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage({
    key: "name-user",
    initialValue: "",
  });
  return (
    <div className="m-3">
      <input
        type="text"
        id="inName"
        placeholder="Digite seu nome.."
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <p>{name}</p>
    </div>
  );
};

export default LocalStorage;
