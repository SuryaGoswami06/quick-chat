import React from 'react'

function Intro() {
  return (
    <div>
        <h1 className='text-center text-2xl mt-4 font-bold uppercase'>welcome to ephemeral!</h1>
        <p className='text-center'>Experience the ultimate in private,secure and ephemeral chatting</p>
        <h2 className='text-xl font-semibold px-8 mt-4'>key features and benefits-</h2>
        <ul className='px-8'>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>No Data Storage:</h3>
            <p className='inline'>We respect your privacy. Unlike other chat apps, ephemeral does not store your messages in any database. Once your conversation ends, the data is gone forever.</p> 
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>End-to-End Encryption:</h3>
            <p className='inline'>Your messages are fully encrypted from the moment you send them to the moment they are received. Only you and the recipient can read them, keeping your conversations safe from prying eyes.</p>
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>Ephemeral Chats:</h3>
            <p className='inline'>Quick and private chats that disappear once the browser is closed or you leave the group. No traces, no history, just pure communication.</p>
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>No Fancy UI – Just Quick Chat:</h3>
            <p className='inline'>We focus on speed and simplicity. No fancy UI elements, no unnecessary distractions. Just straightforward, efficient communication.</p>
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>Perfect for Temporary Conversations:</h3>
            <p className='inline'>Great for temporary chats, group discussions, or quick coordination without the hassle of saving or managing messages.</p>
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>No User Tracking:</h3>
            <p className='inline'> We don’t track you. We don’t collect any personal information. Your usage is entirely anonymous and secure.</p>
          </li>
          <li className='list-disc'>
            <h3 className='text-lg font-semibold inline'>Process:</h3>
            <p className='inline'> No sign-ups, No downloads, just instant communication</p>
          </li>
        </ul>
    </div>
  )
}

export default Intro