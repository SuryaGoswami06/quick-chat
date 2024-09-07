import React from 'react'
import { useParams } from 'react-router-dom'

function PrivateChat() {
  const {roomid}=useParams();
  console.log(roomid)
  return (
    <div className='w-full flex flex-col'>
        <div>
          
        </div>
        <div className='overflow-y-auto'>

        </div>
        <div>

        </div>
    </div>
  )
}

export default PrivateChat