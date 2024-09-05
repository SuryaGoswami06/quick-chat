import React from 'react'

function Input({
    type='text',
    placeholder,
    value,
    onChange,
    className
}) {
   
  return (
    <div tabIndex='0' className={`flex w-60 border items-center rounded-md ${className}`}>
        <img 
         src='https://img.icons8.com/?size=100&id=zap0euE0Pd9F&format=png&color=000000' 
         alt="typing-icon" 
         className='h-6 w-6 pl-1'
         />
        <input
         type={type} 
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         className='p-2 md:p-3 w-full focus:outline-none rounded-md'
         />
    </div>
  )
}

export default Input