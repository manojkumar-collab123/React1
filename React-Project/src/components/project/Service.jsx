import React from 'react'
import { useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function Services() {
    const navigate = useNavigate();
    return (
        <>
            <div className=" relative h-screen bg-[url('https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg')] bg-cover bg-center   ">

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
                                <button onClick={() => navigate('/Contact')}>Contact Us</button>
                                <button className="bg-gray-500 rounded-md w-32 hover:bg-gray-600 transition-all duration-200">Take Action</button>
                            </div>
                        </div>
                    </div>
                    <div className=" align-middle text-center pt-[140px]">
                        <p className='text-[123px] text-white'>Service</p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white flex flex-row items-center">                                            
                <div className="w-full max-w-[1650px] mx-auto px-8 md:px-16">                                              
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">        
                        <div className="max-w-[750px]">                                                         
                            <h1 className="text-4xl md:text-5xl font-semibold text-[#071b3a] mb-7">                            
                                service 1                                                                             
                            </h1>                                                                                                   
                            <p className="text-lg md:text-[18px] leading-[1.5] text-gray-600">                        
                                A short description of your service. Lorem ipsum dolor amet,                                 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt                       
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,                               
                                quis nostrud exer citation ullamco la enim lorem isae ni.                              
                            </p>                     
                            <button className=" mt-16 w-[170px] h-[50px]] border-2 border-[#16758a] text-[#16758a] tracking-[5px] text-lg font-lighthover:bg-[#16758a]hover:text-white transition-all duration-300">
                                CONTACT
                            </button>
                        </div>
                        <div className="w-full"><img src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg" alt="Mountain" className=" w-[400px] h-[400px] object-cover" /></div>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">                           
                        <div className="max-w-[750px]">                                                         
                            <h1 className="text-4xl md:text-5xl font-semibold text-[#071b3a] mb-7">                            
                                service 1                                                                             
                            </h1>                                                                                                   
                            <p className="text-lg md:text-[18px] leading-[1.5] text-gray-600">                        
                                A short description of your service. Lorem ipsum dolor amet,                                 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt                       
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,                               
                                quis nostrud exer citation ullamco la enim lorem isae ni.                              
                            </p>                     
                            <button className=" mt-16 w-[235px] h-[72px] border-2 border-[#16758a] text-[#16758a] tracking-[5px] text-lg font-lighthover:bg-[#16758a]hover:text-white transition-all duration-300">
                                CONTACT
                            </button>
                        </div>
                        <div className="w-full"><img src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg" alt="Mountain" className="w-[400px] h-[400px] object-cover" /></div>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">                           
                        <div className="max-w-[750px]">                                                         
                            <h1 className="text-4xl md:text-5xl font-semibold text-[#071b3a] mb-7">                            
                                service 1                                                                             
                            </h1>                                                                                                   
                            <p className="text-lg md:text-[18px] leading-[1.5] text-gray-600">                        
                                A short description of your service. Lorem ipsum dolor amet,                                 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt                       
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,                               
                                quis nostrud exer citation ullamco la enim lorem isae ni.                              
                            </p>                     
                            <button className=" mt-16 w-[235px] h-[72px] border-2 border-[#16758a] text-[#16758a] tracking-[5px] text-lg font-lighthover:bg-[#16758a]hover:text-white transition-all duration-300">
                                CONTACT
                            </button>
                        </div>
                        <div className="w-full"><img src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg" alt="Mountain" className=" w-[400px] h-[400px] object-cover" /></div>
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

export default Services