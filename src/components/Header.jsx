import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to='/' className="link">Home</Link> | <Link to='/newticket'>Create Ticekt</Link>
    </div>
  )
}

export default Header