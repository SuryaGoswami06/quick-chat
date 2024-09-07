import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import {Provider} from 'react-redux'
import store from './store/store.js'
import socket from './utils/socketio.js'

function AppProvider() {

  useEffect(()=>{

      socket.on('connect',()=>{
        console.log('socket connected'+socket.id)
      })

      socket.on('disconnet',()=>{
        console.log('socket disconnect')
      })

      return ()=>{
        socket.off('connect');
        socket.off('disconnect');
      }
  },[])

  return (
      <Provider store={store}>
           <AppRoutes />
      </Provider>
  )
}

export default AppProvider