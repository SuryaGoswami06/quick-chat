import React from 'react'
import AppRoutes from './routes/AppRoutes'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { ToastContainer } from 'react-toastify'
import InitialSocketHandler from './utils/InitialSocketHandler.jsx'

function AppProvider() {
  
  return (
      <Provider store={store}>
           <ToastContainer />
           <InitialSocketHandler />
           <AppRoutes />
      </Provider>
  )
}

export default AppProvider