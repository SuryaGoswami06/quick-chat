import React from 'react'
import Home from '../pages/Home'
import Footer from '../components/Footer';

function Layout(){
    return(
        <div className="p-3 h-screen w-full flex items-center justify-center">
             <Home />
             <Footer />
        </div>
    )
}
export default Layout;