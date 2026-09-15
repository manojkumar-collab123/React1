import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function ContextDashboard ()  {
    const user = useContext(UserContext);
  return (
    <>
    <h2>Dashborad</h2>
    <p>Welcome :{user.name}</p>
    <p>Role:{user.role}</p>


    </>
  )
}

export default ContextDashboard