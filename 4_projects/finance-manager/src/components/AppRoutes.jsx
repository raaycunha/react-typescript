import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Layout from '../pages/Layout'
import TransactionManagerPage from '../pages/TransactionManagerPage'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='transaction-manager' element={<TransactionManagerPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes