import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import Pacientes from '../pages/Pacientes'

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }
  return (
    <div className='container'>
      <header className="header-container">
        <nav className="menu">
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 
                'active' : ''} to='consultas'>
                Consultas
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 
                'active' : ''} to='pacientes'>
                Pacientes
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ?
                'active' : ''} to='financeiro'>
                Financeiro
              </NavLink>
            </li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard
