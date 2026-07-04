import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Layout from '../pages/Layout'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='catalog' element={<Catalog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
