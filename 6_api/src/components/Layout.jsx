import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Layout = () => {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()
  const handleLogoutClick = () => {
    logoutUser()
    navigate('/', { replace: true })
  }
  return (
    <div className='body-container'>
      <header className="header-container">
        <div className='box-link'>
          <Link to='/layout/fetch'>Fetch-GET</Link>
          <Link to='/layout/axios'>Axios-GET</Link>
          <Link to='/layout/posts-user'>userPosts</Link>
        </div>
        <button className='btn-logout' onClick={handleLogoutClick}>Logout</button>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
