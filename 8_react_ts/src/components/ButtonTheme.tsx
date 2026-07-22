import { useThemeContext } from "../contexts/ThemeContext";

const ButtonTheme = () => {
  const { theme, setTheme } = useThemeContext();
  console.log(theme);
  return (
    <div className="m-3">
      <button
        className={`p-5 border-none ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Alterar tema
      </button>
    </div>
  );
};

export default ButtonTheme;
