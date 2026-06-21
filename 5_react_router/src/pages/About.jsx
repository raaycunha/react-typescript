import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>Sobre essa empresa...</h1>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contato</Link>
    </div>
  )
}

export default About
