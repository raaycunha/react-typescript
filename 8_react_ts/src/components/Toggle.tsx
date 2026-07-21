import useToggle from "../hooks/useToggle"

const Toggle = () => {
  const [mostrarMenu, mudarMenu] = useToggle()
  return (
    <div>
      <button onClick={mudarMenu}>Clique para abrir</button>
      {mostrarMenu ? (
        <p>OPEN</p>
      ) : (
        <p>CLOSE</p>
      )}
    </div>
  )
}

export default Toggle
