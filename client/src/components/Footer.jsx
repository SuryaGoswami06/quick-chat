import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='absolute bottom-0 w-full flex justify-center'>
        <div className='flex p-2'>
            <NavLink to='/about' className={({isActive})=>`px-2 capitalize ${isActive?'border-b border-black':''}`}>about</NavLink>
            <NavLink to='/privacy-policy' className={({isActive})=>`px-2 capitalize ${isActive?'border-b border-black':''}`}>privacy policy</NavLink>
            <NavLink to='/term-of-service' className={({isActive})=>`px-2 capitalize ${isActive?'border-b border-black':''}`}>term of service</NavLink>
            <NavLink to='/contact' className={({isActive})=>`px-2 capitalize ${isActive?'border-b border-black':''}`}>contact me</NavLink>
        </div>
    </div>
  )
}

export default Footer