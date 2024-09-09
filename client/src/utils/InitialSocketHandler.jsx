import React,{useEffect} from 'react'
import socket from './socketio.js'
import { currentParticipants } from '../store/slices/allChats.js'
import { useDispatch} from 'react-redux'

function InitialSocketHandler() {
    const dispatch = useDispatch()
    useEffect(()=>{
  
        socket.on('connect',()=>{
          console.log('socket connected'+socket.id)
        })
  
        socket.on('disconnect',()=>{
          console.log('socket disconnect')
        })
       
        socket.on('current-participant',({roomid,participant})=>{
            dispatch(currentParticipants({roomid,participant}));
        })
  
        return ()=>{
          socket.off('connect');
          socket.off('disconnect');
          socket.off('current-participant')
        }
    },[])
  
  return null
}

export default InitialSocketHandler