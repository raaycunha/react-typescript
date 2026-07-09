import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useFinanceContext } from '../context/FinanceContext'
import Toast from '../components/Toast'

const Layout = () => {
  const { 
    moneyUser,
    valueIn,
    valueOut,
    handleClear,
    toClean,
    clearConfirm,
  } = useFinanceContext()
  const porcent = valueIn > 0 ? (valueOut / valueIn) * 100 : 0
  const porcentLimited = Math.min(Math.max(porcent, 0), 100);
  return (
    <div className='body-container'>
      <header className='header-container'>
        <Link to='dashboard'>Dashboard</Link>
        <Link to='transaction-manager'>Gerenciador de Transações</Link>
        <span>
          <strong>
            {moneyUser.toLocaleString('pt-BR', {
              style: 'currency', currency: 'BRL'
            })}
          </strong>
        </span>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <div className="container-toast">
        <Toast 
          handleClear={handleClear}
          onClean={toClean}
          onConfirm={clearConfirm}
        />
      </div>
    </div>
  )
}

export default Layout
 