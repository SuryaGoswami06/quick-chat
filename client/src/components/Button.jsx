import React from 'react'

function Button({
    text,
    img,
    type='button',
    onClick,
    ...props
}) {
  return (  
      <button
        className='border-none text-white flex items-center w-60 p-2 md:p-3 bg-primaryColor justify-center rounded-md cursor-pointer'
        type={type}
        onClick={onClick}
        {...props}
        > 
          <img 
          src={img} 
          alt="join-icon" 
          className='h-5 w-5 pr-1'
          />
          <span>{text}</span>
      </button>
  )
}

export default Button