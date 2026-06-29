import { useContext, useState, createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const userAuth = localStorage.getItem('auth')
    return userAuth ? JSON.parse(userAuth) : false
  })
  const loginUser = (userInfo) => {
    localStorage.setItem('auth', JSON.stringify(userInfo))
    setIsLoggedIn(true)
  }
  const logoutUser = () => {
    localStorage.removeItem('auth')
    setIsLoggedIn(false)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}