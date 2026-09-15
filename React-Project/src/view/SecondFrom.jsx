import React, { useState } from 'react'

const SecondFrom = () => {
const[Name , SetName] = useState("");
    const [email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    const [Phone, setPhone] = useState(""); 
    const [Password , setPassword]   = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Name);
        console.log(email);
        console.log(Country);
        console.log(Phone);
        console.log(Passwor);   
    }
  return (
    <>
    
     <div className="min-h-screen flex items-center justify-center bg-blue-600 p-5">
      <div className="relative w-full max-w-md bg-white px-9 py-7 shadow-xl">
        <button className="absolute right-4 top-3 text-xl text-teal-400 hover:text-teal-600">
          ×
        </button>
        <h2 className="text-center text-xl font-bold tracking-wide mb-6">
          <span className="text-blue-500">· Registration Form ·</span>
        </h2>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-0 border-b-2 border-teal-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
              value={Name}
                        onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border-0 border-b-2 border-teal-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
            value={email}onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Country
          </label>
          <input
            type="text"
            placeholder="Country"
            className="w-full border-0 border-b-2 border-teal-300 px-2 py-2 text-sm outline-none focus:border-teal-500"value={Country}onChange={(e)=> setCountry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Phone
          </label>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border-0 border-b-2 border-teal-300 px-2 py-2 text-sm outline-none focus:border-teal-500"value={Phone}onChange={(e)=> setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-0 border-b-2 border-teal-300 px-2 py-2 pr-8 text-sm outline-none focus:border-teal-500" value={Password}onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-start gap-2 mb-5">
          <input
            type="checkbox"
            className="mt-1 accent-teal-500"
          />

          <p className="text-[9px] leading-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
          </p>
        </div>
        <button
          className="w-full bg-blue-500
                     py-3 text-xs font-bold tracking-[3px] text-white
                     hover:bg-blue-600 transition " onClick={handleSubmit}
        >
          CREATE ACCOUNT
        </button>
        <p className="text-center text-[10px] text-gray-500 mt-4">
          Already have an account?
          <span className="text-blue-500 cursor-pointer ml-1">
            Sign in
          </span>
        </p>

      </div>
    </div>
    </>
  )
}

export default SecondFrom