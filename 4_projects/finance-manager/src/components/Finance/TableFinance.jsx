import { useState } from "react";

const TableFinance = ({ tableList, onFilter, onPreview, onRemove, startEdit, onClean }) => {
  return (
    <div>
      <div className="container-finance-list">
        <div className="filter-wrapper">
          <div className="box-select">
            <label htmlFor="previewSelect">Filtrar por: </label>
            <select
              id="previewSelect"
              onChange={(e) => onPreview(e.target.value)}
              value={onFilter}
            >
              <option value="all">Todos os lançamentos</option>
              <option value="in">Entradas (Receitas)</option>
              <option value="out">Saídas (Despesas)</option>
            </select>
          </div>
          <button onClick={() => onClean(true)}>Limpar Histórico</button>
        </div>
        {tableList.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Origem</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Editar ↓</th>
                <th>Remover ↓</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => (
                <tr
                  className={item.finance === "Entrada" ? "entrada" : "saida"}
                  key={item.id}
                >
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.finance}</td>
                  <td>
                    <button onClick={() => startEdit(item)}>
                    Editar</button>
                  </td>
                  <td>
                    <button onClick={() => onRemove(item.id)}>
                    Remover</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default TableFinance;
