import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { provideContext } from '../other/AuthProvider'
import { RiLoader4Line } from '@remixicon/react'

function Login({handleData}) {
  let {erroremail, setErroremail,errorpass,setErrorpass,loginDelay, setLoginDelay,wrong,setWrong}=useContext(provideContext)
  let [email, setEmail]=useState('')
  let [password, setPassword]=useState('')

  function handleLoginForm(e){
    e.preventDefault();
    setTimeout(() => {
      setLoginDelay(false)
      if(email && password && password.length>=8){
        handleData(email,password)
      }
      setEmail('')
      setPassword('')
    }, 1500);
    setLoginDelay(true)
    if(!email){
      setErroremail(true)
      setLoginDelay(false)
    }
    if(!password){
      setErrorpass(true)
      setLoginDelay(false)
    }
  }
  
  return (
    <div className='w-full min-h-screen  pt-16 max-sm:py-6  bg-[#212121]'>
      <div className='w-full h-full flex items-center justify-center'>
        <form onSubmit={handleLoginForm} className='backdrop-blur-lg bg-white/20 shadow-2xl shadow-black rounded-lg w-96 mx-4 my-4 lg:px-8 md:px-6 max-sm:px-3 px-5 flex items-center text-white flex-col'>
          <div className='lg:py-6 md:py-4 py-3 max-sm:py-2 max-sm:text-2xl md:text-3xl text-3xl  lg:text-4xl  font-semibold'>
            ChatNova
          </div>
          <div className='lg:text-xl max-sm:text-[12px] md:text-lg text-[14px] text-[#E0EDF1] capitalize'>
            Welcome Back 
          </div>
          <div className='w-full lg:pt-7 max-sm:pt-4 md:pt-6'>
            <h1 className='text-sm mb-1'>Email Address</h1>
            <input value={email} onChange={(elem)=>{setEmail(elem.target.value)
              setErroremail(false)
              setWrong(false)
            }} type="email" placeholder='Enter Your email' className={`w-full border    rounded-lg ${erroremail ? 'border-red-500 text-red-400':'border'}  py-1.5 max-sm:text-sm outline-0 px-3`} />
            {
              erroremail &&(
                <h1 className='text-red-400 text-sm'>Email is required.</h1>
              )
            }
          </div>
          <div className='w-full pt-4'>
            <h1 className='text-sm mb-1'>Password</h1>
            <input value={password} onChange={(elem)=>{setPassword(elem.target.value)
              setErrorpass(false)
              setWrong(false)
            }} type="text" placeholder='Enter Your password' className={`w-full border    rounded-lg ${errorpass ? 'border-red-500 text-red-400':'border'}  py-1.5 max-sm:text-sm outline-0 px-3`} />
            {
              errorpass &&(
                <h1 className='text-red-400 text-sm' >Password is required.</h1>
              )
            } 
            {
              password.length>1 && password.length <8  &&(
                <h1 className='text-red-400 text-sm' >Password must be at least 8 characters.</h1>
              )
            } 
          <Link to='/forgetpassword' className='text-sm pt-1 hover:underline'>Forget Password ?</Link>
          </div>
          <div className='w-full pt-3'>
            {
              loginDelay ? ( <button   className='bg-[#2F2F2F] rounded-lg border-white max-sm:text-sm border w-full py-1 cursor-not-allowed opacity-70 font-semibold '>
              <RiLoader4Line className='w-full rotate' />
            </button>)
              :
              ( <button className='bg-[#2F2F2F] rounded-lg border-white max-sm:text-sm border w-full py-1 font-semibold cursor-pointer'>
              Login
            </button>)
            } 
            {
              wrong &&(

                <div className='text-center text-red-400 pt-2'> 
              Invalid email or password.
            </div>
              )
            }
          </div>
          <div className='py-7 max-sm:text-sm'>
            <h1>Are You New Member ? 
              <Link to='/signin' className='text-blue-400 font-semibold cursor-pointer hover:underline ' >
            Sign Up
            </Link> </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login