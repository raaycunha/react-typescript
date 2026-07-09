import React, { useEffect, useState } from 'react'

const TransactionManager = ({ addFinance, newEdit }) => {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [finance, setFinance] = useState('Entrada')
  useEffect(() => {
    if (newEdit) {
      setName(newEdit.name)
      setValue(newEdit.value)
      const dateEdit = newEdit.date.split('/').reverse().join('-')
      setDate(dateEdit)
      setFinance(newEdit.finance)
    }
  }, [newEdit])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !value || !date) return
    addFinance(name, value, date, finance, newEdit.id)
    setName('')
    setValue('')
    setDate('')
    setFinance('Entrada')
  }
  return (
    <form onSubmit={handleSubmit} id="frm">
      <div className="box-input">
        <input 
          type="text" 
          id='inName'
          placeholder='Digite o nome do que foi ganho/gasto..'
          title='Digite o nome do que foi ganho/gasto'
          required minLength={1}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="box-input">
        <input 
          type="number" 
          id='value'
          placeholder='Digite o valor do que foi ganho/gasto..'
          title='Digite o valor do que foi ganho/gasto'
          required minLength={1}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <div className="box-input">
        <input 
          type="date" 
          id='inDate'
          placeholder='Digite a data de quando foi ganho/gasto..'
          title='Digite a data de quando foi ganho/gasto'
          required minLength={1}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <select id="financeCategory"
        onChange={(e) => setFinance(e.target.value)}>
        <option value="Entrada">Receita</option>
        <option value="Saida">Despesa</option>
      </select>
      <button type='submit'>{newEdit ? 'Salvar Edição' : 'Enviar'}</button>
    </form>
  )
}

export default TransactionManager
