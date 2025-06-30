import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function RoomDetails({index,roomid}) {
    const roomDetails = useSelector((state)=>state?.allChats?.roomDetails);
  return (
    <Link key={index} to={`/chats/${roomid}`} className='flex items-center border-[#e2e8f0] border-b p-2'>
        <span className='ml-2 font-semibold'>{roomDetails[roomid]['roomName']}</span>
    </Link>
  )
}

export default RoomDetails