import { createContext, useContext } from 'react'
import { useCatalog } from '../hooks/useCatalog'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const catalogData = useCatalog()
  return (
    <StoreContext.Provider value={catalogData}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)