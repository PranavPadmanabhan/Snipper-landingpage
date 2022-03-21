import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='fixed z-10 flex items-center justify-between bg-transparent h-[10vh] w-[100vw] box-border px-[20px] sm:h-[20vh]' >
            <img className='w-[30%] max-w-[100px] sm:ml-[6vw] sm:w-[15%] sm:max-w-[150px]' src={'/Logo.svg'} />
            <div className="flex w-[30%] h-[50%] invisible sm:visible items-center justify-start ">
                <div className="flex w-[25%] h-[80%] items-center justify-evenly  mr-[5px]">
                    <img className='w-[25%] min-w-[30px] max-w-[50px]' src={'/Search Icon.svg'} />
                    <span className="text-gray-800 text-[1.5vw] whitespace-nowrap">sign in</span>
                </div>
                <div className="bg-black w-[45%] h-[70%] rounded-[8px] flex items-center justify-center">
                    <span className="text-white text-[1vw] font-bold">Get Started<span className="text-gray-400 font-light"> &#160;-&#160; it's free</span></span>
                </div>
                <img className='visible sm:invisible ' src={"/Hamburger Menu.svg"} />
            </div>
        </div>
    )
}

export default Header

