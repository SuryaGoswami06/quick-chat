import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [authorAvatar,setAuthorAvatar]=useState('')
  useEffect(()=>{
      fetch('https://api.github.com/users/SuryaGoswami06')
      .then((res)=>res.json())
      .then(data=>setAuthorAvatar(data.avatar_url))
      .catch(err=>console.log(err))
  },[])
  return (
    <div className='h-full w-full flex flex-col p-7'>
        <div className='flex md:flex-row flex-col'>
          <img src={authorAvatar} alt="author" className='h-64 w-64 mx-auto' />
          <p className='p-4'>hi,i'm suryakant goswami,a full stack developer with a passion for turning ideas into interactive and visually engaging web experiences.i specialize in the mern stack and have a deep love for javascript,which drives my creativity in building both the front and back ends in applications.i'm always exploring new technologies and refining my skills to create efficient and user friendly solutions.</p>
        </div>
        <div className='text-center'>
          <p className='inline'>drop a message if you like my work</p>
          <Link className='text-primaryColor underline decoration-dashed ml-2' to='https://midnightblue-gull-513325.hostingersite.com/'>portfolio</Link>
        </div>

    </div>
  )
}

export default Contact