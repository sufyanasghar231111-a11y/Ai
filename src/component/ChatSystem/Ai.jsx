import React, { useContext } from 'react'
import Logout from '../ChatSystem/Logout'
import { provideContext } from '../other/AuthProvider'
import ChatUi from './ChatUi'
import { RiLoader2Fill, RiLoader4Line } from '@remixicon/react'

function Ai({user}) {
  let {logOut, setLogOut,handleLogOut,handleDelete,hideContent, setHideContent,handleEdit,edit,handleChangeEdit,delay}=useContext(provideContext)
  
  
  return (
    <div className='w-full h-screen  relative  bg-[#212121] text-white'>
       {
        logOut && (
          <>
<div onClick={()=>{setLogOut(false)}} className="absolute z-90 inset-0 bg-black/50"></div>
          <div className=' absolute lg:w-100 w-80 max-sm:w-70 rounded-lg  z-100 bg-[#212121]  -translate-x-1/2 -translate-y-1/2  top-1/2 max-sm:top-50 left-1/2 '>
       <div className='flex items-center justify-center flex-col text-center py-6 max-sm:py-3 px-10'>
        <h1 className='lg:text-3xl text-xl max-sm:text-xl md:text-2xl font-medium'>Are you sure you <br /> want to log out?</h1>
        <p className='pt-4  text-lg pb-4 max-sm:text-sm'>Log out of ChatGPT as {user.email}?</p>
        {
          delay ?(
             <button onClick={()=>{handleLogOut()
          handleDelete()
        }} className='w-full  cursor-not-allowed opacity-70 bg-white py-2 max-sm:py-1.5 rounded-full mb-3  text-neutral-700 font-semibold'><RiLoader4Line className=' rotate w-full' /></button>
          ):( <button onClick={()=>{handleLogOut()
          handleDelete()
        }} className='w-full  cursor-pointer bg-white py-2 max-sm:py-1.5 rounded-full mb-3 text-neutral-700 font-semibold'>Log out</button>)
        }

       
        <button disabled={delay} onClick={()=>{setLogOut(false)}} className='w-full cursor-pointer  bg-white py-2 max-sm:mb-1 rounded-full mb-3 max-sm:py-1.5 text-neutral-700 font-semibold'>Cancel</button>
       </div>
        </div>
          </>
        )
       }
       {
        hideContent &&(
           <>
<div onClick={()=>{setHideContent(false)}}  className="absolute cursor-pointer  z-100 inset-0 bg-black/50"></div>
          <form onSubmit={handleEdit} className=' absolute lg:w-100 w-80 max-sm:w-70 rounded-lg  z-100 bg-[#212121]  -translate-x-1/2 -translate-y-1/2  md:top-60 top-60 lg:top-60 xl:top-65 max-sm:top-60 left-1/2 '>
          <div className='lg:pt-3 pt-2 px-3 max-sm:text-sm max-sm:pt-2 md:pt-2 max-sm:px-2 font-semibold'>
            Edit Profile
          </div>
       <div className='flex items-center justify-center flex-col text-center md:py-2 py-2 lg:py-3 xl:py-6  max-sm:py-2 px-10'>
        <div className=' rounded-full max-sm:w-18 md:w-20 md:h-20 w-20 h-20 lg:w-25 xl:w-35 lg:h-25 xl:h-35 max-sm:h-18 overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.profilePic} alt="" />
        </div>
       </div>
        <div className='lg:my-2 xl:my-3 md:my-2 my-2 max-sm:my-2 lg:text-sm text-[11px] max-sm:text-[10px] md:text-[11px] px-3 py-2 mx-4 rounded-lg border-neutral-400 border '>
          <h1 className='lg:mb-1 xl:mb-2 md:mb-1 mb-1  max-sm:mb-1'>Display name</h1>
          <input name='editname' value={edit.editname}  onChange={handleChangeEdit}  type="text"  className='outline-0 w-full' />
        </div>
        <div className='my-1.5  max-sm:my-1 lg:text-sm text-[11px] max-sm:text-[10px] md:text-[11px] px-3 py-2 mx-4 rounded-lg border-neutral-400 border '>
          <h1 className='lg:mb-1 xl:mb-2 md:mb-1 mb-1 max-sm:mb-1'>Username</h1>
          <input name='edituser' value={edit.edituser}  onChange={handleChangeEdit} type="text" className='outline-0 w-full' />
        </div>
        <p className='text-center  md:text-[10px] text-[10px] lg:text-[11px] max-sm:text-[10px] mx-4 max-sm:py-0.5 md:py-0.5  max-sm:leading-3 py-0.5 lg:py-1 xl:py-1.5 text-[#a3a3a3]'>Your profile helps people recognize you. Your name and username are also used in the Sora app.</p>
        <div className='flex gap-3 md:py-2 py-2 lg:py-1.5 xl:py-3 max-sm:py-1.5  px-3 justify-end'>
          <button onClick={()=>{setHideContent(false)}} className='rounded-full px-3.5 max-sm:py-1 max-sm:text-[11px] max-sm:px-2.5  text-sm  font-semibold border-white/10 bg-white/10 hover:bg-white/20 cursor-pointer py-1.5 border'>Cancel</button>
          {
            delay? (

              <button type='submit'  className='rounded-full px-3.5  max-sm:py-1 max-sm:text-[11px] max-sm:px-2.5 text-sm  font-semibold border-white/10 bg-white text-black hover:bg-white/80 cursor-not-allowed opacity-70 py-1.5 border'><RiLoader4Line className='w-4 h-4 rotate' /></button>
            ):(
              <button type='submit'  className='rounded-full px-3.5  max-sm:py-1 max-sm:text-[11px] max-sm:px-2.5 text-sm  font-semibold border-white/10 bg-white text-black hover:bg-white/80 cursor-pointer py-1.5 border'>Save</button>

            )
          }
        </div>
        </form>
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



