import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import About from '../project/About';
import Contact from '../project/Contact';
import Services from '../project/Service';
function Home() {
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
                                <button onClick={() => navigate('/Home')}>Home</button>
                                <button onClick={() => navigate('/About')}>About</button>
                                <button onClick={() => navigate('/Services')}>Service</button>
                                <button onClick={() => navigate('/Contact')}>Contact Us</button>
                                <button className="bg-gray-500 rounded-md w-32 hover:bg-gray-600 transition-all duration-200">Take Action</button>
                            </div>
                        </div>
                    </div>

                    <div className='text-center pt-[180px] font-extrabold text-white'>
                        <h1 className="text-2xl text-hite-900">multi-purpose template</h1>
                        <h1>Create Your Website</h1>
                        <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex flex-row gap-5 justify-center">
                            <div>
                                <button onClick={() => navigate('/Services')} className="border-white border-2 w-32 h-14 text-white hover:bg-gray-500 hover:border-gray-500 transition-all duration-200 mt-5">Services</button></div>
                            <div> <button onClick={() => navigate('/About')} className="bg-white text-gray-500 h-14 w-32 border-2 hover:border-gray-500 hover:bg-gray-500 hover:text-white hover:border-2 transition-all duration-200 mt-5">About Us</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 mt-10 justify-between justify-around'>
                <div className='bg-[url("https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg")] bg-cover size-80 text-center'>
                    <h1 className="text-2xl text-white">Service 1</h1>
                </div>
                <div className='bg-[url("https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/snowy-mountain-1287145.jpg")] bg-cover size-80 text-center'>
                    <h1 className="text-2xl text-white">Service 2</h1>
                </div>
                <div className='bg-[url("https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/photo-of-people-standing-on-top-of-mountain-near-grasses-733162.jpg")] bg-cover size-80 text-center'>
                    <h1 className="text-2xl text-white ">Service 3</h1>
                </div>
            </div>
            <div className='flex flex-row gap-10 mt-10 justify-around'>
                <div className='pt-20'>
                    <h1 className="text-2xl font-bold text-[#000f2b]">Amazing things for you !</h1>

                </div>
                <div>
                    <h1 className="text-[#3a3a3a] pt-16">Always write benefits over features. Mention all the benefits or services <br />with some real examples. Focus on how you can help and benefit your <br /> user. Use simple words so that you don’t confuse people. Say as much <br /> in as few words as possible. </h1>  <br />
                    <h1 className="text-[#3a3a3a]">Speak directly to users using you not I or we.</h1><br />
                    <button className="border-2 border-[#153243] text-[#153243] px-4 py-2 rounded-md hover:bg-[#153243] hover:text-white transition-colors duration-200" onclick={() => navigate('#')}>Our History</button>
                </div>
            </div>
            <div className=" relative bg-fixed bg-[url('https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/fogs-on-green-mountain-1054222.jpg')] bg-cover mt-10 h-[550px] bg-center ">
                <div className="absolute inset-0 bg-cyan-950/50  text-center  pt-60"> <p>Call to Action</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br />luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button onclick={() => navigate('/Contact')} className=" text-[#000f2b] px-4 py-2 rounded-md bg-none border-2 border-white hover:bg-[white] transition-colors duration-200 mt-4 w-28 ">
                        Contact
                    </button></div>

            </div>
            <div className='grid grid-cols-3 gap-y-10 justify-items-center pt-20 pb-10 pr-28 pl-28 bg-blue-50   '>
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/snowy-mountain-1287145.jpg" alt="" />
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg" alt="" />
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/green-grass-field-and-mountain-1034887.jpg" alt="" />
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/bird-s-eye-view-photography-of-green-forest-1208379.jpg" alt="" />
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/photo-of-people-standing-on-top-of-mountain-near-grasses-733162.jpg" alt="" />
                <img className='w-[323px] h-[215px]' src="https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/mountain-and-lake-at-sunset-135157.jpg" alt="" />
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
export default Home