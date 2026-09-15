import React, { useState } from 'react'

const FromTask2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }
    return (
        <>
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-green-500">
                    YourEvent
                </h1>
            </div>
            <div className="bg-green-50 py-4 text-center mb-6">
                <h2 className="text-xl font-medium text-gray-700">
                    Online Registration
                </h2>
            </div>
            <div className="space-y-5">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input className="border-black border-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input className="border-black border-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input className="border-black border-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                Submit
            </button>
        </>
    )
}

export default FromTask2