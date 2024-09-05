import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full flex justify-center'>
        <div className='flex p-2'>
            <NavLink to='/about' className={({isActive})=>`md:px-2 px-1 text-sm md:text-base tracking-tight md:tracking-normal capitalize ${isActive?'border-b border-black':''}`}>about</NavLink>
            <NavLink to='/privacy-policy' className={({isActive})=>`md:px-2 px-1 text-sm md:text-base tracking-tight md:tracking-normal capitalize ${isActive?'border-b border-black':''}`}>privacy policy</NavLink>
            <NavLink to='/term-of-service' className={({isActive})=>`md:px-2 px-1 text-sm md:text-base tracking-tight md:tracking-normal capitalize ${isActive?'border-b border-black':''}`}>term of service</NavLink>
            <NavLink to='/contact' className={({isActive})=>`md:px-2 px-1 text-sm md:text-base tracking-tight md:tracking-normal capitalize ${isActive?'border-b border-black':''}`}>contact me</NavLink>
        </div>
    </div>
  )
}

export default Footer