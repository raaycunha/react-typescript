import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contatos...</h1>
      <ul>
        <li>
          <Link to='/home'>Contato 1</Link>
        </li>
        <li>
          <Link to='/about'>Contato 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Contact
