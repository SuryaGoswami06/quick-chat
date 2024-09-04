import React from 'react'

function Button({
    className='',
    text,
    type='button',
    onClick,
    style={},
    ...props
}) {
  return (
    <div>
        <button
        className={className}
        type={type}
        onClick={onClick}
        style={style}
        {...props}
        > 
        {text}
        </button>
    </div>
  )
}

export default Button