import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [mostrarMenu, mudarMenu] = useToggle();
  return (
    <div className="m-3">
      <button onClick={mudarMenu}>Clique para abrir</button>
      {mostrarMenu ? <p>OPEN</p> : <p>CLOSE</p>}
    </div>
  );
};

export default Toggle;
