import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <nav> Get Ready To Complete Your Daily Goals </nav>
    <div className='Header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contacts</Link>
      <Link to='/user/aayush'>User</Link>
    </div>
    </>
  )
}

export default Header