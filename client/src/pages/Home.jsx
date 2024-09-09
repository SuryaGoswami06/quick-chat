import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
 return (
    <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col border border-black rounded-lg max-w-[1024px] w-full h-[96%] md:h-[620px] mx-auto'>
                <div className='h-[93%] overflow-y-auto'>
                     <Outlet />
                </div>
                <div className='border-t border-black flex items-center justify-center h-[7%]'>
                    <div className='flex' >
                        <NavLink to='/' className={({isActive})=>`flex justify-center items-center px-2 mr-1 cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-6 w-6 mr-1' src="https://img.icons8.com/?size=100&id=5np3hy9ifpiE&format=png&color=000000" alt="home-icon" />
                            <span className='capitalize font-semibold text-sm md:text-base'>home</span>
                        </NavLink>
                        <NavLink to='create-a-room' className={({isActive})=>`flex justify-center items-center px-2  mr-1 cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-7 w-7 mr-1' src="https://img.icons8.com/?size=100&id=qDNClnB7Z4Ky&format=png&color=000000" alt="join-icon" />
                            <span className='capitalize font-semibold text-sm md:text-base'>create a room</span>
                        </NavLink>
                        <NavLink to='chats' className={({isActive})=>`flex justify-center px-2 items-center cursor-pointer ${isActive?'border-b-2 border-black':''}`}>
                            <img className='h-8 w-8 mr-1' src="https://img.icons8.com/?size=100&id=13724&format=png&color=000000" alt="chat-icon" />
                            <span className='capitalize font-semibold text-sm md:text-base'>chat</span>
                        </NavLink>
                    </div>
                </div>
        </div>
        <div className='h-[4%]'>
            <Footer />
        </div>
    </div>    
  )
}

export default Home