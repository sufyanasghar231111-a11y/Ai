import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Ai from '../ChatSystem/Ai'
import { provideContext } from '../other/AuthProvider'
function Signup() {
 let {input,handleForm,handleChange,user,signemail, setSignemail,signpass, setSignpass,name,setName}=useContext(provideContext)

 useEffect(()=>{
    localStorage.setItem('logInUser', JSON.stringify(user))
 },[user])
  return (
    <div>
      <div className={`w-full min-h-screen  ${user? 'pt-0':'pt-12'} max-sm:py-2 bg-[#212121]`}>
    {
      user ? <Ai user={user}   />
      :
      <div className='w-full h-full flex items-center justify-center'>
        <form onSubmit={handleForm} className='backdrop-blur-lg bg-white/20 shadow-2xl shadow-black rounded-lg w-96  mx-4 lg:px-8 my-4 md:px-6 max-sm:px-3 px-5 flex items-center text-white flex-col'>
          <div className='lg:py-6 md:py-4 py-3 max-sm:py-2 max-sm:text-2xl md:text-3xl text-3xl  lg:text-4xl  font-semibold'>
            ChatNova
          </div>
          <div className='lg:text-xl max-sm:text-[12px] md:text-lg text-[14px] text-[#E0EDF1] capitalize'>
            Create Account
          </div>
          <div className='w-full lg:pt-7 max-sm:pt-4 md:pt-6'>
            <h1 className='text-sm mb-1'>Full Name</h1>
            <input  value={input.name} name='name' onChange={handleChange}  type="text" placeholder='Enter Your full name' className={`w-full border    rounded-lg ${name ? 'border-red-500 text-red-400':'border'}  py-1.5 outline-0 max-sm:text-sm px-3`} />
              {
              name &&(
                <h1 className='text-red-400'>required:</h1>
              )
            }
          </div>
          <div className='w-full pt-4'>
            <h1 className='text-sm mb-1'>Email Address</h1>
            <input  value={input.email} name='email' onChange={handleChange}  type="email" placeholder='Enter Your email' className={`w-full border    rounded-lg ${signemail ? 'border-red-500 text-red-400':'border'}  py-1.5 max-sm:text-sm outline-0 px-3`} />
             {
              signemail &&(
                <h1 className='text-red-400'>required:</h1>
              )
            }
          </div>
          <div className='w-full pt-4'>
            <h1 className='text-sm mb-1'>Password</h1>
            <input  value={input.password} name='password' onChange={handleChange}  type="text" placeholder='Enter Your password' className={`w-full border    rounded-lg ${signpass ? 'border-red-500 text-red-400':'border'}  py-1.5 max-sm:text-sm outline-0 px-3`} />
             {
              signpass &&(
                <h1 className='text-red-400'>required:</h1>
              )
            }
          </div>
          <div className='w-full pt-5'>
            <button className='bg-[#2F2F2F] rounded-lg border-white border max-sm:text-sm w-full py-1.5 font-semibold cursor-pointer'>
              Login
            </button>
          </div>
          <div className='py-10 max-sm:text-sm'>
            <h1>Already have an account ? <Link to='/' className='text-blue-400 font-semibold cursor-pointer' >
            Login
            </Link> </h1>
          </div>
        </form>
      </div>
    }
    </div>
    </div>
  )
}

export default Signup