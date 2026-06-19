const Layout = ({ children }) => {
  return (
    <div>
      <header className="header-container">
        <h1>Lista de Tarefas</h1>
      </header>
      <main className='main-container'>
        {children}
      </main>
    </div>
  )
}

export default Layout
