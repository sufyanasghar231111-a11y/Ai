import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
    const [input,setInput]=useState('')
    const [error, setError]=useState(false)
    const [success, setSuccess]=useState(false);
    const [loading, setLoading]=useState(false)
    function handleSubmit(e){
        e.preventDefault()
        if(!input){
            setError(true)
            return;
        }
        if(input){
            setSuccess(true)
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSuccess(false)
            setInput('')
        }, 1500);
    }
  return (
    <div className='w-full min-h-screen pt-40  max-sm:py-20 bg-[#212121] text-white relative '>
        <div className='w-full h-full flex items-center justify-center'>
                 <form onSubmit={handleSubmit} className='backdrop-blur-lg bg-white/20 shadow-2xl shadow-black rounded-lg w-96  lg:px-8 md:px-6 max-sm:px-3 px-5 mx-4 my-5 flex items-center text-white flex-col'>
          <div className='lg:py-6 md:py-4 py-3 max-sm:py-2 max-sm:text-2xl md:text-3xl text-3xl  lg:text-4xl font-semibold'>
            ChatNova
          </div>
          <div className='lg:text-xl max-sm:text-[12px] md:text-lg text-[14px] text-[#E0EDF1] capitalize'>
            Forgot Password 
          </div>
          <div className='w-full  lg:pt-7 max-sm:pt-4 md:pt-6'>
            <h1 className='text-sm mb-1'>Email Address</h1>
            <input value={input} onChange={(elem)=>{setInput(elem.target.value)
                setError('')
            }} type="email"  placeholder='Enter Your email' className={`w-full border  rounded-lg ${error?'border-red-500':"border-white"} py-2 outline-0 max-sm:text-sm px-3`} />
            {
                error ? (

                    <p className='text-sm pt-1 pb-3 text-red-500'>Please Enter Your Email.</p>
                ):''
            }
            {
              success ? (

                    <p className='text-sm pt-1 pb-3 text-green-500'>If this email exists, we’ve sent a reset link. Please check your inbox.</p>
                ):''
            }
          </div>
         
          <div className='w-full pt-3 pb-10 max-sm:pb-6'>
            <button disabled={loading} className='bg-[#2F2F2F] rounded-lg border-white border w-full py-2 font-semibold cursor-pointer max-sm:text-sm disabled:opacity-50'>
              {loading? 'Sending...':'Resend it'}
            </button>
          </div>
          <div className='mb-4  text-sm text-gray-300 hover:underline'>
            <Link to='/' >
            Back To Login
            </Link>
          </div>
          
        </form>

        </div>
    </div>
  )
}

export default ForgetPassword