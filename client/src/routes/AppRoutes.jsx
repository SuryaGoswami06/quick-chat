import Layout from '../layout/Layout'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import CreateARoom from "../pages/CreateARoom"
import AllChats from '../pages/AllChats'
import PrivateChat from "../pages/PrivateChat"
import Intro from '../pages/Intro'
import About from '../pages/About'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermOfService from '../pages/TermOfService'
import Contact from '../pages/Contact'

function AppRoutes() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path='' element={<Intro/>}/>
            <Route path="create-a-room" element={<CreateARoom />} />
            <Route path="chats" element={<AllChats />}>
              <Route path=":roomid" element={<PrivateChat/>} />
            </Route>
            <Route path='about' element={<About/>} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='term-of-service' element={<TermOfService/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
