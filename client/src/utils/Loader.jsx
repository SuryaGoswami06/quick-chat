import React from 'react'
import loadingCircle from '/images/loader.gif'
function Loader() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <img className='h-12 w-12' src={loadingCircle} alt="loader" />
    </div>
  )
}

export default Loader