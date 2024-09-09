import React,{Suspense} from 'react'
import Loader from '../utils/Loader'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
const Layout =React.lazy(()=>import('../layout/Layout')) 
const CreateARoom = React.lazy(()=>import("../pages/CreateARoom"))
const AllChats = React.lazy(()=>import('../pages/AllChats')); 
const PrivateChat = React.lazy(()=>import("../pages/PrivateChat")); 
const Intro = React.lazy(()=>import('../pages/Intro')); 
const Contact = React.lazy(()=>import('../pages/Contact')); 

function AppRoutes() {
 return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path='' element={<Intro/>}/>
              <Route path="create-a-room" element={<CreateARoom />} />
              <Route path="chats" element={<AllChats />}>
                <Route path=":roomid" element={<PrivateChat/>} />
              </Route>
              <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
