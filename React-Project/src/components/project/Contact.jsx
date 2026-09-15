import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import About from './About';
import Services from './Service';
import Home from './Home';

function Contact() {
    const [ContactData, setContactData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const handleChange = (e) => {
        setContactData({
            ...ContactData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ContactData);
        setContactData({
        name: "",
        email: "",
        phone: "",
        message: ""
    })


    }

    const navigate = useNavigate();
    return (
        <>
          <div className=" h-screen bg-[url('https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/      landscape-mountains-sky-4843193.jpg')] bg-cover bg-center ">

                <div className="absolute inset-0 bg-cyan-950/50  text-center ">
                    <div className="flex flex-row justify-between ">
                        <div className='m-12'>
                            <img className="h-20 w-30" src="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/logo1@2x.png" alt="" />
                        </div>
                        <div className="flex flex-row gap-7 m-16">
                            <div className=" flex flex-row gap-7  font-bold ">
                                <button onClick={() => navigate('/')}>Home</button>
                                <button onClick={() => navigate('/About')}>About</button>
                                <button onClick={() => navigate('/Services')}>Service</button>
                                <button onClick={() => navigate('#')}>Contact Us</button>
                                <button className="bg-gray-500 rounded-md w-32 hover:bg-gray-600 transition-all duration-200">Take Action</button>
                            </div>
                        </div>

                    </div>

                    <div className=" text-7xl font-bold text-white pt-[150px]">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white px-6 py-8 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>

                        <h1 className="text-4xl font-semibold tracking-wide text-[#071a3d]">
                            Get In Touch
                        </h1>
                        <div className="mt-10">
                            <h2 className="text-3xl font-semibold tracking-[0.15em] text-[#071a3d]">
                                Numbers
                            </h2>

                            <div className="mt-8 space-y-5 text-xl text-gray-600">
                                <div className="flex items-center gap-5">
                                    <span className="text-xl">☎</span>
                                    <span>General Inquiries (123) 456 7890</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span className="text-xl">☎</span>
                                    <span>Accounts Inquiries (987) 654 3210</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-3xl font-semibold tracking-[0.15em] text-[#071a3d]">
                                Email
                            </h2>
                            <div className="mt-8 space-y-5 text-xl text-gray-600">
                                <div className="flex items-center gap-5">
                                    <span>●</span>
                                    <span>info@example.com</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>♧</span>
                                    <span>support@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-3xl font-semibold tracking-[0.15em] text-[#071a3d]">
                                Business Hours
                            </h2>
                            <div className="mt-8 space-y-4 text-xl text-gray-600">
                                <p>Monday — Friday 9am – 5pm</p>
                                <p>Saturday — 10am – 3pm</p>
                                <p>Sunday — Closed</p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <h1 className="text-4xl font-semibold tracking-wide text-[#071a3d]">
                            Send Us a Message
                        </h1>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name *"
                            value={ContactData.name}
                            onChange={handleChange}
                            className="h-16 w-full rounded-lg border border-gray-300 px-5 text-xl outline-none placeholder:text-gray-400 focus:border-[#227c89] focus:ring-1 focus:ring-[#227c89]"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone *"
                            value={ContactData.phone}
                            onChange={handleChange}
                            className="h-16 w-full rounded-lg border border-gray-300 px-5 text-xl outline-none placeholder:text-gray-400 focus:border-[#227c89] focus:ring-1 focus:ring-[#227c89]"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={ContactData.email}
                            onChange={handleChange}
                            className="h-16 w-full rounded-lg border border-gray-300 px-5 text-xl outline-none placeholder:text-gray-400 focus:border-[#227c89] focus:ring-1 focus:ring-[#227c89]"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={ContactData.message}
                            onChange={handleChange}
                            className="w-full resize-y rounded-lg border border-gray-300 px-5 py-5 text-xl outline-none placeholder:text-gray-400 focus:border-[#227c89] focus:ring-1 focus:ring-[#227c89]"
                        />
                        <button type="submit" onClick={handleSubmit} className=" rounded-lg bg-[#227c89] px-7 py-4 text-lg font-medium tracking-[0.15em] text-white transition duration-300 hover:bg-[#185f69]">
                            SUBMIT
                        </button>


                    </div>

                </div>

            </div>
            <footer className="h-[105px] flex items-center justify-between px-[15%] bg-white">
                <div className="flex gap-3">

                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/About')}>About</button>
                    <button onClick={() => navigate('/Services')}>Service</button>
                    <button onClick={() => navigate('/Contact')}>Contact Us</button>

                </div>
                <div className="grid grid-cols-2 gap-52 mr-8 " >
                    <div className="">
                        <img className='  w-[150px] h-[50px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/logo1-dark@2x.png" alt="" />
                    </div>

                    <span className="text-[20px] tracking-[2px] pt-5">
                        MOUNTAIN
                    </span>

                </div>
            </footer>
        </>
    )
}

export default Contact