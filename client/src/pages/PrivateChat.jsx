import React ,{useState,useEffect}from 'react'
import { useParams,Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {addMessage} from '../store/slices/allChats.js'
import socket from '../utils/socketio.js'

function PrivateChat() {
  const {roomid}=useParams();
  const [message,setMessage]=useState('')

  const dispatch = useDispatch();
  const roomDetails = useSelector(state=>state?.allChats?.roomDetails[roomid])
  const userName = useSelector(state=>state?.user?.name)

  const handleSendMessageButton=()=>{
    if(message.trim()!==''){
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; 
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const time = `${year}-${month}-${day} ${hours}:${minutes}`
      socket.emit('send-message',{
        userName,
        message,
        roomid,
        time
      })
      dispatch(addMessage({userName,message,roomid,time,role:'sender'}))
    }
  }
  
  useEffect(()=>{
    const handleReceiveMessage =({roomid,userName,message,time})=>{
      dispatch(addMessage({userName,message,roomid,time,role:'receiver'}))
    }
      socket.on('receive-message',handleReceiveMessage)
      return ()=>{
        socket.off('receive-message',handleReceiveMessage)
      }
  },[])

  return (
    <div className='w-full flex flex-col relative'>
        <div className='flex justify-between bg-[#E5E4E2] p-2 overflow-hidden'>
           <div className='flex items-center'>
              <Link to='/chats'>
                <img className='rotate-180 h-6 w-6 mx-3' src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000" alt="back-to-chat-icon" />
              </Link>
              <img className='h-12 w-12 rounded-full mx-3' src={roomDetails?.roomAvatar} alt="room-image" />
              <div className='flex flex-col'>
                <span>{roomDetails?.roomName}</span>
                <span>{roomid}</span>
              </div>
           </div>
           <div>

           </div>
        </div>
        <div className='overflow-y-auto'>
            {
              roomDetails?.content?.map((msg,index)=>{
              return <div key={index} className={` flex w-full ${msg?.role=='sender'?'justify-end bg-primaryColor':'justify-start bg-gray-400'}`}>
                          <div className='flex flex-col'>
                            <span>{msg?.userName}</span>
                            <p>{msg?.message}</p>
                            <span>{msg?.time}</span>
                          </div>
                    </div>
              })
            }
        </div>
        <div className='absolute border-t border-black bottom-0 left-0 right-0 w-full'>
            <input 
            type="text" 
            className=' p-3 w-[90%]' 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <button 
            className='bg-primaryColor text-white uppercase w-[10%] p-3'
            onClick={handleSendMessageButton}
            >send</button>
        </div>
    </div>
  )
}

export default PrivateChat