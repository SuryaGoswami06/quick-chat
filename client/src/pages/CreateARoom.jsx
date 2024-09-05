import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function CreateARoom() {

  const [roomId,setRoomId] = useState('')
  const [isCreateRoomDialogboxOpen,setIsCreateRoomDialogboxOpen]=useState(false);
  const [avatarOption,setAvatarOption]=useState([])
  const [roomAvatar,setRoomAvatar]=useState(null)
  const [isSelected,setIsSelected]=useState(null)
  
  useEffect(()=>{
    let avatars = [];
    for(let i=0;i<9;i++){
      fetch(`https://api.multiavatar.com/${new Date() +i}`)
      .then(res=>res.text())
      .then(data=>{
        avatars.push(`data:image/svg+xml,${encodeURIComponent(data)}`)
        if(avatars.length==9){
          setAvatarOption(avatars)
        }
      })
      .catch(err=>setError(err))
    }
  },[])

  const handleSetRoomAvatar=(img,index)=>{
    setRoomAvatar(img);
    setIsSelected(index);
  }

  return (
    <div className='flex items-center h-full justify-center md:flex-row flex-col p-3'>
      <div className=''>
            <h1 className='text-xl uppercase font-bold'>ephemeral</h1>
            <Input type='text' className='my-2' value={roomId} onChange={(e)=>setRoomId(e.target.value)} placeholder='Enter A Room Id' />
            <Button text='Join The Room' img='https://img.icons8.com/?size=100&id=2460&format=png&color=ffffff'/>
      </div>
      <div className='md:mx-14 rotate-90 md:rotate-0'>
          <div className='h-20 md:h-40 w-[1px] bg-black relative'>
            <span className='absolute md:top-14 -rotate-90 md:rotate-0  bg-white top-[1.5rem] -left-4 md:-left-6 h-8 w-8 md:h-12 md:w-12 flex items-center justify-center rounded-md border border-black text-black  font-semibold uppercase'>or</span>
          </div>
      </div>
      <div>
          <Button 
          img='https://img.icons8.com/?size=100&id=7LhMaNDFgoYK&format=png&color=000000'
          text='Create A Room' 
          onClick={()=>setIsCreateRoomDialogboxOpen(!isCreateRoomDialogboxOpen)} 
          />
          <div className={`${isCreateRoomDialogboxOpen?'block':'hidden'} mt-2`}>
            <Input type='text' className='my-2' value={roomId} onChange={(e)=>setRoomId(e.target.value)} placeholder='Enter A Room Id' />
            <h3 className='font-semibold text-lg my-1'>Select Your Avatar</h3>
             <div className='flex w-[180px] md:w-60 flex-wrap mx-auto'>
                {
                  avatarOption.length!==0?avatarOption.map((img,index)=>(
                    <div key={index} onClick={()=>handleSetRoomAvatar(img,index)} className={`md:h-20 md:w-20 md:p-2 h-[60px] w-[60px] p-[6px] cursor-pointer ${isSelected==index?'border border-primaryColor':''}`}>
                      <img src={img} alt={`avatar-${index}`} className='md:h-16 md:w-16 h-12 w-12 rounded-full object-cover' />
                    </div>
                  )):'some error occured!!!'
                }
             </div>
             <Button text='Join The Room' img='https://img.icons8.com/?size=100&id=2460&format=png&color=ffffff'/>
          </div>
      </div>
    </div>
  )
}

export default CreateARoom