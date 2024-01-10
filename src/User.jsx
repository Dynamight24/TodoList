import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const User = () => {
    const Params=useParams()
    const navigation=useNavigate();

    console.log(Params.id)
  return (
    <div className='user'>
    <button onClick={()=>navigation("/about")}>Click Me</button>
    </div>

  )
}

export default User