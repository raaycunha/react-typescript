import { createContext, useContext } from 'react'
import { useFinance } from '../hooks/useFinance'

const FinanceContext = createContext()

export const FinanceProvider = ({ children }) => {
  const financeData = useFinance()
  return (
    <FinanceContext.Provider value={financeData}>
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)