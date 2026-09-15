import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Authentication () {
    const {user, login ,logout} = useContext(AuthContext)
  return (
    <>
    <div>

            <h1>Authentication</h1>

            {user ? (

                <div>

                    <h2>Welcome {user.name}</h2>

                    <p>Email: {user.email}</p>

                    <p>Role: {user.role}</p>

                    <button 
                    className='bg-slate-900 h-12 w-40 text-white '
                    onClick={logout}>
                        Logout
                    </button>

                </div>

            ) : (

                <div>

                    <h2>User is not logged in</h2>

                    <button onClick={login}>
                        Login
                    </button>

                </div>

            )}

        </div>

    </>
  )
}

export default Authentication