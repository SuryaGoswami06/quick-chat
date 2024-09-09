import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoomDetails from '../components/RoomDetails';
import { Outlet } from 'react-router-dom';
import { setUserName } from '../store/slices/user.js';
import toastify from '../utils/Toast.js';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

function AllChats() {
  const isDesktop = useMediaQuery({minWidth:788})
  console.log(isDesktop)
  const roomIds = useSelector((state)=>state?.allChats?.roomIds);
  const userName = useSelector((state)=>state?.user?.name);
  const [editUserName,setEditUserName]=useState(userName);

  const dispatch = useDispatch();
  const {roomid} = useParams();

  const handleUserNameChange = (e)=>{
    dispatch(setUserName(editUserName))
    toastify('success','successfully changed the profile name ')
  }

  return (
    <div className='flex w-full h-full'>
      { 
     (isDesktop || !roomid&&!isDesktop) && <div className={ `phone:w-[30%] w-full relative h-full border-r border-black overflow-y-auto`}>
          {
           roomIds?.length!==0?(
            <div className='flex flex-col'>
               {
                roomIds?.map((id,index)=>(
                  <RoomDetails key={id} index={index} roomid={id}/>
                ))
               }
            </div>
           ):(
              <div className='mt-16 text-center'>no rooms😢</div>
           )
          }
          <div className='absolute bottom-0 flex items-center w-full'>
              <input 
              type="text" 
              className='p-3 w-[85%] border-t border-r border-black' 
              value={editUserName} 
              onChange={(e)=>setEditUserName(e.target.value)} 
              />
              <div onClick={handleUserNameChange} className='cursor-pointer w-[15%] border-t border-black h-[48.8px] flex items-center justify-center'>
                 <img className='w-7 h-7' src="https://img.icons8.com/?size=100&id=119003&format=png&color=000000" alt="edit" />
             </div>
          </div>
      </div>
      }
      { 
    (isDesktop || roomid) && <div className={` w-full h-full `}>
        <Outlet />
      </div>
      }
    </div>
  )
}

export default AllChats