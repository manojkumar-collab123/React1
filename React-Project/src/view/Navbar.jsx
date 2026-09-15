import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Navbar()  {
const user = useContext(UserContext);

  return (
    <>
    <h2>Navbar</h2>
    <p>Welcome :{user.name}</p>
    <p>Role:{user.role}</p>

    </>
  )
}

export default Navbar