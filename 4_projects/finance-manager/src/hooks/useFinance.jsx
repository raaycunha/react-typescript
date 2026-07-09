import { useEffect, useMemo, useState } from 'react'

export const useFinance = () => {
  const [financeList, setFinanceList] = useState(() => {
    const data = localStorage.getItem('finance')
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem('finance', JSON.stringify(financeList))
  }, [financeList])
  const moneyUser = useMemo(() => {
    return financeList.reduce((ac, item) =>
      item.finance === 'Entrada' ? ac + item.value : ac - item.value
    , 0)
  }, [financeList])
  const valueIn = useMemo(() => {
    return financeList.reduce((ac, item) => 
      item.finance === 'Entrada' ? ac + item.value : ac
    , 0)
  }, [financeList])
  const valueOut = useMemo(() => {
    return financeList.reduce((ac, item) => 
      item.finance === 'Saida' ? ac + item.value : ac
    , 0)
  }, [financeList])
  const [itemEdit, setItemEdit] = useState(false)
  const handleFinance = (name, value, date, finance, id) => {
    const valueFinance = Number(value)
    const dateBrazil = date.split('-').reverse().join('/')
    if (id) {
      const newList = financeList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: name, 
            value: valueFinance,
            date: dateBrazil,
            finance: finance,
          }
        } else return item
      })
      setItemEdit(false)
      setFinanceList(newList)
    } else {
      const newFinance = {
        id: crypto.randomUUID(),
        name,
        value: valueFinance,
        date: dateBrazil,
        finance,
      }
      setFinanceList([...financeList, newFinance])
    }
  }
  const [currentFilter, setCurrentFilter] = useState('all')
  const handlePreview = (previewType) => {
    setCurrentFilter(previewType)
  }
  const previewList = financeList.filter((item) => {
    if (currentFilter === 'in') return item.finance === 'Entrada'
    if (currentFilter === 'out') return item.finance === 'Saida'
    return true
  })
  const handleRemove = (id) => {
    setFinanceList(financeList.filter((item) => item.id !== id))
  }
  const handleEdit = (item) => {
    setItemEdit(item)
  }
  const [toClean, setToClean] = useState(false)
  const handleClear = (response) => {
    if (toClean === response || financeList.length === 0) return
    setToClean(response)
  }
  const clearConfirm = () => {
    setToClean(false)
    setFinanceList([])
  }
  return {
    moneyUser,
    handleFinance,
    handlePreview,
    previewList,
    currentFilter,
    handleRemove,
    valueIn,
    valueOut,
    itemEdit,
    handleEdit,
    handleClear,
    toClean,
    clearConfirm,
  }
}