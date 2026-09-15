import React from 'react'


const Card1 = ({ name, price, srco, button, size }) => {
  return (
    <>
      <div className="group bg-[#666a74] h-[550px] w-[350px] rounded-2xl mt-32 overflow-hidden shadow-lg shadow-gray-800 hover:scale-105 duration-500  ">
        <div className=" overflow-hidden  rounded-t-2xl h-[350px] w-[350px]  ">
          <img src={srco} alt="" className='h-[350px] w-[350px] object-cover transition-transform duration-500 group-hover:scale-105' />
        </div>
        <div class="pt-7 pl-5">
          <h2 className="text-2xl text-grey decoration-slate-400">{name}</h2>
          <p className="text-gray-200 text-md pt-1">  {price}</p>
          <button>{size}</button>
          <div className="flex gap-24 pt-5">
            <div className="text-white font-bold pl-2"><span className="text-gray-300 text-sm"></span></div>
            <div><button className="bg-blue-200 h-10 w-20 text-gray-700 rounded-full  mr-3 mt-[13px]  hover:text-black hover:bg-blue-400 hover:scale-110 duration-500 hover:cursor-pointer">{button}</button></div>

          </div>  
        </div>
      </div>

    </>
  )
}

export default Card1