import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
      <header className='header-container'>
        <Link to='catalog'>Catálogo</Link>
        <Link to='cart'>Carrinho</Link>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
