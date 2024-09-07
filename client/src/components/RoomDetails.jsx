import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function RoomDetails({index,roomid}) {
    const roomDetails = useSelector((state)=>state?.allChats?.roomDetails);
  return (
    <Link key={index} to={`/chats/${roomid}`} className='flex border-black border-b p-2'>
        <img src={roomDetails[roomid]['roomAvatar']} alt="profile-pic" className='w-10 h-10 rounded-full'/>
        <span className='ml-2'>{roomDetails[roomid]['roomName']}</span>
    </Link>
  )
}

export default RoomDetails