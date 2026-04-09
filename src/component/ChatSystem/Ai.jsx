import React, { useContext, useEffect, useState } from 'react'
import Logout from '../ChatSystem/Logout'
import { provideContext } from '../other/AuthProvider'
import ChatUi from './ChatUi'

function Ai({user}) {
  let {logOut, setLogOut,handleLogOut,handleDelete}=useContext(provideContext)
  
  return (
    <div className='w-full h-screen  relative  bg-[#212121] text-white'>
       {
        logOut && (
          <>
<div onClick={()=>{setLogOut(false)}} className="absolute inset-0 bg-black/50"></div>
          <div className=' absolute lg:w-100 w-80 max-sm:w-70 rounded-lg  z-10 bg-[#212121]  -translate-x-1/2 -translate-y-1/2  top-1/2 max-sm:top-50 left-1/2 '>
       <div className='flex items-center justify-center flex-col text-center py-6 max-sm:py-3 px-10'>
        <h1 className='lg:text-3xl text-xl max-sm:text-xl md:text-2xl font-medium'>Are you sure you <br /> want to log out?</h1>
        <p className='pt-4  text-lg pb-4 max-sm:text-sm'>Log out of ChatGPT as {user.email}?</p>
        <button onClick={()=>{handleLogOut()
          handleDelete()
        }} className='w-full  cursor-pointer bg-white py-2 max-sm:py-1.5 rounded-full mb-3 text-neutral-700 font-semibold'>Log out</button>
        <button onClick={()=>{setLogOut(false)}} className='w-full cursor-pointer  bg-white py-2 max-sm:mb-1 rounded-full mb-3 max-sm:py-1.5 text-neutral-700 font-semibold'>Cancel</button>
       </div>
        </div>
          </>
        )
       }
     <Logout user={user} />
     <div>
     <ChatUi user={user} />
     </div>
     
    </div>
  )
}

export default Ai



