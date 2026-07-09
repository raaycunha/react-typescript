const Toast = ({ handleClear, onClean, onConfirm }) => {
  return (
    <div>
      {onClean && (
        <div className="box-toast">
          <p>
            Tem certeza que quer limpar todo o historico? 
            (<span className="text-color">Irreversivel</span>).
          </p>
          <div className="box-btn">
            <button className="btn-toast" 
            onClick={onConfirm}>
              Sim
            </button>
            <button className="btn-toast" 
            onClick={() => handleClear(false)}>
              Não
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Toast
