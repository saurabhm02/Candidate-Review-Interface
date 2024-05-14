import React from 'react';
import { IoHome } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { RxBox } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 pr-4 pl-2">
        <div className="flex gap-5 items-center font-semibold cursor-pointer">
            <div className="flex flex-col relative">
                <div className="flex">
                    <div className="relative">
                        <RxBox/> <span className="absolute top-0 left-1">^</span> 
                    </div>
                    <div className="relative">
                        <RxBox/> <span className="absolute top-0 left-1">^</span> 
                    </div>
                </div> 
                <div className="absolute top-4 left-2">
                    <div className="relative">
                        <RxBox/> <span className="absolute top-[-6px] left-1 rotate-180">^</span> 
                    </div>
                </div>
            </div>
            <div className="text mt-5">
                Hi, AltWorld 
            </div>
        </div>

        <div className="flex gap-4 items-center cursor-pointer font-semibold">
            <IoHome style={{color: "#1ec3b3"}} /> Dashboard
        </div>

        <div className="bg-[#4FD1C5] w-[16rem] text-sm p-4 rounded-2xl text-white flex flex-col gap-4">
            <div className='text-[#728197] bg-white p-1 w-10 rounded-xl flex items-center cursor-pointer'>
                <HiPlus size={35}  />
            </div>
            
            <div className="flex flex-col gap-3">
                <p className="text-base">New Assignment?</p>
                <div className=" text-gray-200">
                    Select from pre-defined questions to have a quick turnaround
                </div>
                <div className="bg-white text-black rounded-xl p-2 flex items-center justify-center font-semibold cursor-pointer">
                    Create a New Assignment
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar