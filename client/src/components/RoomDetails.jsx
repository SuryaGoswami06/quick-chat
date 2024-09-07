import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function RoomDetails({key,id}) {
    const roomDetails = useSelector((state)=>state?.allChats?.roomDetails);
  return (
    <Link key={key} to={`/chats/${id}`} className='flex border-black border-b p-2'>
        <img src={roomDetails[id]['roomAvatar']} alt="profile-pic" className='w-10 h-10 rounded-full'/>
        <span className='ml-2'>{roomDetails[id]['roomName']}</span>
    </Link>
  )
}

export default RoomDetails