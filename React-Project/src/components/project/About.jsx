import React from 'react'
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import Services from './Service';
import Home from './Home';

const About = () => {

    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="text-[#102342]  h-screen bg-[url('https://websitedemos.net/mountain-02/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg')] bg-cover bg-center   ">
                    <div className="absolute inset-0 bg-cyan-950/50  text-center ">
                        <div className="flex flex-row justify-between ">
                            <div className='m-12'>
                                <img className="h-20 w-30" src="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/logo1@2x.png" alt="" />
                            </div>
                            <div className="flex flex-row gap-7 m-16">
                                <div className=" flex flex-row gap-7  font-bold ">


                                    <button onClick={() => navigate('/')}>Home</button>
                                    <button onClick={() => navigate('#')}>About</button>
                                    <button onClick={() => navigate('/Services')}>Service</button>
                                    <button onClick={() => navigate('/Contact')}>Contact Us</button>
                                    <button className="bg-gray-500 rounded-md w-32 hover:bg-gray-600 transition-all duration-200">Take Action</button>
                                </div>
                            </div>
                        </div>
                        <section>
                            <h1 className="text-white text-[228px] font-bold align-middle text-center pt-[70px]">
                                about
                            </h1>
                        </section>
                    </div>


                </div>
                <section className="min-h-[310px] grid grid-cols-2 gap-[70px] px-[16%] py-[50px] text-2xl ">
                    <div>
                        <h2 className="text-[26px] pt-14  tracking-wide">
                            established in 1995
                        </h2>
                    </div>
                    <div className="max-w-[390px]">

                        <h3 className="text-[20px] leading-[1.5] font-bold mb-5">
                            Tell people about what you, your expertise and experience.
                            Think about what you would want to see on this page if you were
                            looking at an about page. This is your chance to tell about how
                            you are qualified to serve them.
                        </h3>

                        <p className="text-[#777] text-[16px] leading-[1.6] mb-3">
                            Nulla hendrerit metus et tincidunt tristique. Fusce molestie
                            commodo mauris, vitae vestibulum tortor venenatis non.
                            Pellentesque quis urna a magna bibendum volutpat at a nisl.
                            Suspendisse finibus, tortor id gravida feugiat, nulla leo
                            venenatis nisi, et aliquam quam ligula eget dui.
                        </p>

                        <p className="text-[#777] text-[16px] leading-[1.6] mb-3">
                            We look forward to your stay.
                        </p>

                        <h4 className="text-[20px] font-bold mt-7">
                            John & Steven
                        </h4>

                    </div>

                </section>
                <section className="bg-[#eef7fa] grid grid-cols-3 gap-[60px] px-[17%] py-[45px]">
                    <div>
                        <h2 className="text-[50px] font-medium mb-2">
                            mission
                        </h2>

                        <p className="text-[#777] text-[20px] leading-[1.6] max-w-[180px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[50px] font-medium mb-2">
                            vision
                        </h2>

                        <p className="text-[#777] text-[20px] leading-[1.6] max-w-[180px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[50px] font-medium mb-2">
                            values
                        </h2>

                        <ul className="pl-4 text-[#777] list-disc">
                            <li className="text-[20px] mb-2">
                                Lorem ipsum dolor sit amet
                            </li>

                            <li className="text-[20px] mb-2">
                                Luctus nec ullamcorper
                            </li>

                            <li className="text-[20px] mb-2">
                                Pulvinar dapibus leo
                            </li>
                        </ul>
                    </div>

                </section>
                <footer className="h-[105px] flex items-center justify-between px-[15%] bg-white">
                    <div className="flex gap-3">

                        <button onClick={() => navigate('/')}>Home</button>
                        <button onClick={() => navigate('#')}>About</button>
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

            </div>


        </>
    )
}

export default About