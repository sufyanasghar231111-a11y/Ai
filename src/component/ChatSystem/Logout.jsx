import React, { useContext, useState } from 'react'
import { provideContext } from '../other/AuthProvider'
import { RiAddLargeFill, RiAddLargeLine, RiLoader4Line, RiUserLine } from "@remixicon/react";
import { Link } from 'react-router-dom';

function Logout({user}) {
    let {logOut, setLogOut,hideContent, setHideContent,handleLogOut, handleDelete,delay, setDelay}=useContext(provideContext)
    let [hide, setHide]=useState(false)
    
  return (
    <div className='  relative'>
      <div onClick={()=>{setHide(false)}} className='inset-0 absolute '>  
        </div>
      <div className='flex items-center text-white max-sm:gap-6 justify-between  lg:px-15 max-sm:px-4 md:px-9 px-6 lg:py-7 max-sm:py-2 md:py-5 py-3'>
        <div>
          <h1 className='text-white font-semibold lg:text-4xl md:text-3xl text-2xl max-sm:text-xl'> ChatNova</h1>
        </div>
        <div className='relative'>
          <div onClick={()=>{setHide(prev => !prev)}} className='rounded-full lg:w-12 md:w-9 w-7 max-sm:w-6  lg:h-12 md:h-9 h-7 max-sm:h-6   overflow-hidden  cursor-pointer'>
            <img className='w-full h-full object-cover' src={user.profilePic} alt="" />
          </div>
          <div className={`absolute right-0  backdrop-blur-lg bg-white/20 rounded-lg lg:w-80 md:w-70 w-65 max-sm:w-50 ${hide? 'max-h-100':'h-0'} overflow-hidden transition-all duration-500  lg:top-14 max-sm:top-7 md:top-10 top-8  `}>
            <div className='lg:px-6 md:px-5 max-sm:px-3 px-4 lg:py-6 md:py-5 max-sm:py-3 py-4'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-4 max-sm:gap-2'>
              <div className='rounded-full lg:w-12 md:w-9 w-7 max-sm:w-6  lg:h-12 md:h-9 h-7 max-sm:h-6 overflow-hidden cursor-pointer'>
                <img className='w-full h-full object-cover' src={user.profilePic} alt="" />
              </div>
              <div className='leading-4'>
                <h1 className='text-[14px] max-sm:text-sm'>{user.name}</h1>
                <h1 className='text-sm max-sm:text-[10px]'>Free</h1>
              </div>
              </div>
                <div onClick={()=>{setHide(false)}} className='px-2 py-2 max-sm:px-1 max-sm:py-1 rounded-full bg-gray-400 rotate-45 cursor-pointer'>
                  <RiAddLargeFill className='w-4 max-sm:w-3 h-4  max-sm:h-3' />
                </div>  
              </div>
              <div onClick={()=>{handleLogOut()
          handleDelete()
        }}className='flex items-center hover:bg-gray-500 transition-all duration-100 px-4 max-sm:px-1 rounded-lg mt-3 pt-3 gap-3  mb-3 pb-2'> 
        {delay ?
        (
          <div className='flex items-center justify-center w-full'>
           <RiLoader4Line className='  rotate w-full' />
          </div>
        ):
         (
          <>
          
          <RiAddLargeLine className='w-5 h-5 max-sm:w-3 max-sm:h-3' />
          <div  className='max-sm:text-sm'>Add another account</div>
          </>
        )
        
        }  

              </div>
              <div className='border-b border-neutral-500 mx-3'>
              </div>
              <div onClick={()=>{setHideContent(true)
                setHide(false)
              }} className='py-3 cursor-pointer hover:bg-gray-500 rounded-lg transition-all duration-100 lg:px-2  lg:my-2 max-sm:py-3 mx-2 max-sm:mx-1 flex items-center gap-3'>
                <div  className=' border rounded-full flex items-center justify-center w-7 h-7 overflow-hidden'>
                  <RiUserLine className='w-4 h-4' />
                </div>
                <h1 className='max-sm:text-sm'>Profile</h1>
              </div>
              <div  className='mx-4 max-sm:mx-2 max-sm:text-sm max-sm:pt-1 pt-3'>
                <button onClick={
                  ()=>{setHide(false)
                  setLogOut(true)   
                }} className='px-4 max-sm:px-3 max-sm:py-1.5 py-2 w-full rounded-full bg-white text-black font-semibold cursor-pointer'>Log out</button>
              </div>
            </div>
          </div>
        </div>
    </div>   
    </div>
  )
}

export default Logout