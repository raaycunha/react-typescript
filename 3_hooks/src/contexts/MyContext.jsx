import { useState, createContext } from 'react'

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
  const [message, setMessage] = useState('Mensagem inicial!')
  const valorChildren = {
    message,
    setMessage
  }
  return (
    <MyContext.Provider value={valorChildren} >
      {children}
    </MyContext.Provider>
  )
}