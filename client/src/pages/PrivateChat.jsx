import React ,{useState,useEffect,useRef}from 'react'
import { useParams,Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {addMessage} from '../store/slices/allChats.js'
import socket from '../utils/socketio.js'
import toastify from '../utils/Toast.js'
import EmojiPicker from 'emoji-picker-react';
import emoji from '/images/emoji.webp'
import { encrypt,decrypt } from '../utils/crypto.js'

function PrivateChat() {
  const {roomid}=useParams();
  const [message,setMessage]=useState('')
  const [isEmojiPickerOpen,setIsEmojiPickerOpen]=useState(false);

  const dispatch = useDispatch();
  const roomDetails = useSelector(state=>state?.allChats?.roomDetails[roomid])
  const userName = useSelector(state=>state?.user?.name)
  const participants = useSelector(state=>state?.allChats?.roomDetails[roomid]?.participants)
  const roomIdCopyRef = useRef(null);
  const chatContainerRef = useRef(null);

  const handleSendMessageButton= async()=>{
    if(message.trim()!==''){
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; 
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const time = `${year}-${month}-${day} ${hours<12?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}`
      const encryptedMessage =await encrypt(message);
      socket.emit('send-message',{
        userName,
        message:encryptedMessage,
        roomid,
        time
      })
      dispatch(addMessage({userName,message,roomid,time,role:'sender'}))
      setMessage('');
    }
  }
  
  useEffect(()=>{
    const handleReceiveMessage = async({roomid,userName,message,time})=>{
      const decryptedMessage = await decrypt(message)
      dispatch(addMessage({
        userName,
        message:decryptedMessage,
        roomid,
        time,
        role:'receiver'
      }))
    }
      socket.on('receive-message',handleReceiveMessage)
      return ()=>{
        socket.off('receive-message',handleReceiveMessage)
      }
  },[])

  useEffect(()=>{
    const sendMessageUsingEnterButton = (e)=>{
      if(e.code=='Enter'){
        handleSendMessageButton()
      }
    }
      chatContainerRef?.current?.addEventListener('keydown',sendMessageUsingEnterButton)
      return ()=>{
        chatContainerRef?.current?.removeEventListener('keydown',sendMessageUsingEnterButton)
      }
  },[])

  const handleCopyRoomId = ()=>{
    if(roomIdCopyRef.current){
      window.navigator.clipboard.writeText(roomIdCopyRef.current.innerHTML);
      toastify('success','roomId copied sucessfully')
    }
  }
  const handleEmojiSelect = (emojiData)=>{
      setMessage(prev=>prev.concat(emojiData.emoji))
      setIsEmojiPickerOpen(false);
  }
  return (
    <div ref={chatContainerRef} className='w-full h-full flex flex-col relative'>
        
        <EmojiPicker 
         open={isEmojiPickerOpen}
         height={350}
         width={300} 
         className='bottom-14 left-2 z-50' 
         style={{position:'absolute'}}
         onEmojiClick={handleEmojiSelect}
          />
        <div className='h-[9.9%] flex justify-between border-b border-black overflow-hidden'>
           <div className='flex items-center'>
              <Link to='/chats'>
                <img className='rotate-180 h-6 w-6 mx-3' src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000" alt="back-to-chat-icon" />
              </Link>
              <img className='sm:h-12 sm:w-12 h-8 w-8 rounded-full mx-3' src={roomDetails?.roomAvatar} alt="room-image" />
              <div className='flex flex-col'>
                <span>{roomDetails?.roomName}</span>
                <div className='flex items-center justify-center text-xs sm:text-base'>
                  <span>room-id : &nbsp;</span>
                  <span ref={roomIdCopyRef}>{roomid}</span>
                  <img onClick={handleCopyRoomId} className='h-5 w-5 ml-1 sm:ml-2 cursor-pointer' src='https://img.icons8.com/?size=100&id=5OYsjZnVeN8Z&format=png&color=000000' alt="" />
                </div>
              </div>
           </div>
           <div className='flex items-center pr-3'>
              <img className='w-6 h-6 mr-1' src="https://img.icons8.com/?size=100&id=UWNhN9bLYG1k&format=png&color=000000" alt="participants" />
              <span>{participants}</span>
           </div>
        </div>

        <div className='overflow-y-auto h-[81%]'>
            {
              roomDetails?.content?.length!==0?roomDetails?.content?.map((msg,index)=>{
              return <div key={index} className={` flex w-full ${msg?.role=='sender'?'justify-end':'justify-start'}`}>
                          <div className={`flex flex-col ${msg?.role=='sender'?'pl-2':'pr-2'}`}>
                            <span className={`text-primaryColor text-sm ${msg?.role=='sender'?'pl-3':'pl-1'}`}>{msg?.role!=='sender'?msg?.userName:'you'}</span>
                            <p className={`px-4 py-1 border-black border-y ${msg?.role=='sender'?'rounded-l-full border-l border-r-0':'rounded-r-full border-r border-l-0'}`}>{msg?.message}</p>
                            <span className={`text-xs ${msg?.role=='sender'?'text-end pr-1':'pl-1 text-start'}`}>{msg?.time}</span>
                          </div>
                    </div>
              }):<div className='text-center mt-44'>no chats😢🤦‍♀️</div>
            }
        </div>

        <div className='absolute flex border-t border-black bottom-0 left-0 right-0 '>
           <div onClick={()=>setIsEmojiPickerOpen(prev=>!prev)} className='
            flex items-center justify-center cursor-pointer border-r border-black'>
             <img src={emoji} className='h-6 w-6 my-3 mx-5' alt="emoji picker" />
           </div>
            <input 
            type="text" 
            className=' p-3 w-full' 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <button 
            className='bg-primaryColor text-white uppercase p-3'
            onClick={handleSendMessageButton}
            >send</button>
        </div>

    </div>
  )
}

export default PrivateChat