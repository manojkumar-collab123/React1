import React, { use, useState } from 'react'
const ContactForm = () => {
    const [Firstname, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setconpany] = useState("");
    const [PhysicalAddres, setPhysicalAddres] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Firstname);
        console.log(LastName);
        console.log(email);
        console.log(company);
        console.log(PhysicalAddres);
    };
    return (
        <div>
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
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-green-500"
                            type="text"
                            placeholder="Enter your First name"
                            value={Firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-green-500"
                            type="text"
                            placeholder="Enter your Last Name"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-green-500"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Company (if Applicable)
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-green-500"
                        type="text"
                        placeholder="Enter your Company"
                        value={company}
                        onChange={(e) => setconpany(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Physical Address
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-green-500"
                        type="text"
                        placeholder="Enter your Physical Address"
                        value={PhysicalAddres}
                        onChange={(e) => setPhysicalAddres(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        <select className="border border-gray-300 rounded-md px-3 py-3 outline-none">
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>Agust</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <select className="border border-gray-300 rounded-md px-3 py-3 outline-none">
                            <option>Day</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className="border border-gray-300 rounded-md px-3 py-3 outline-none">
                            <option>Year</option>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
                        onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ContactForm