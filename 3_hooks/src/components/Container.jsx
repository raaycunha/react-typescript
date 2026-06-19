import React from 'react'

const Container = ({ children }) => {
  return (
    <div>
      <header className='header-container'>CABEÇALHO</header>
      <main className='main-container'>{children}</main>
      <footer className='footer-container'>RODAPÉ</footer>
    </div>
  )
}

export default Container
