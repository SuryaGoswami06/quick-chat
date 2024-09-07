import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import RoomDetails from '../components/RoomDetails';
import { Outlet } from 'react-router-dom';

function AllChats() {
  const roomIds = useSelector((state)=>state?.allChats?.roomIds)
  return (
    <div className='flex w-full h-full'>
      <div className='w-[30%] h-full border-r border-black overflow-y-auto'>
          {
           roomIds?.length!==0?(
            <div className='flex flex-col'>
               {
                roomIds?.map((id,index)=>(
                  <RoomDetails key={index} id={id}/>
                ))
               }
            </div>
           ):(
              <div className='mt-16 text-center'>no rooms😢</div>
           )
          }
      </div>
      <Outlet />
    </div>
  )
}

export default AllChats