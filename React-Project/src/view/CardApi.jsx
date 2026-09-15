import React, { useEffect, useState } from 'react'

function CardApi  () {
  const[user, setUser] = useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json()).then((data)=>{
      setUser(data)
      setLoading(false)

    })
  },[])
   if (loading){
      return <h1 className="mt-10 text-center text-3xl font-bold text-gray-80">Loading...</h1>
    }
  return (
 <div className="min-h-screen bg-green-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Users</h1>
 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {user.map((user) => (
            <div
              key={user.id}
              className="h-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-200 hover:-translate-y-1">
              <img
                src={`https://i.pravatar.cc/300?img=${user.id}`}
                alt={user.name}
                className="h-52 w-full object-cover"
              /> 
               <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <div className="text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-800">Email:</span> {user.email}
                </p>  
                 <p>  
                    <span className="font-medium text-gray-800">City:</span> {user.address.city}
                  </p>
                </div>
              </div>
              
            </div>  
          ))}
        </div>
      </div>
    </div>  
  )
}
export default CardApi
