import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Hero() {
 return (
        <div className='flex flex-col border border-black rounded-lg max-w-[1024px] w-full h-[600px] mx-auto'>
                <div className='h-[88%]'>
                     <Outlet />
                </div>
                <div className='border-t border-black flex items-center justify-center h-[12%]'>
                    <div className='flex' >
                        <NavLink to='/' className={({isActive})=>`flex justify-center items-center px-2 mr-1 cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-6 w-6 mr-1' src="https://img.icons8.com/?size=100&id=5np3hy9ifpiE&format=png&color=000000" alt="home-icon" />
                            <span className='capitalize font-semibold'>home</span>
                        </NavLink>
                        <NavLink to='create-a-room' className={({isActive})=>`flex justify-center items-center px-2  mr-1 cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-7 w-7 mr-1' src="https://img.icons8.com/?size=100&id=qDNClnB7Z4Ky&format=png&color=000000" alt="join-icon" />
                            <span className='capitalize font-semibold'>create a room</span>
                        </NavLink>
                        <NavLink to='chats' className={({isActive})=>`flex justify-center px-2 items-center cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-8 w-8 mr-1' src="https://img.icons8.com/?size=100&id=13724&format=png&color=000000" alt="chat-icon" />
                            <span className='capitalize font-semibold'>chat</span>
                        </NavLink>
                    </div>
                </div>
        </div>
  )
}

export default Hero