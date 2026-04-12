import { RiArrowRightLongLine, RiLink, RiMailLine, RiStackOverflowLine, RiUserLine } from '@remixicon/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { provideContext } from '../other/AuthProvider';

function ChatUi({ user }) {
  let arr = [
    {
      id: 1, data: "Provide an overview of your capabilities",
      icon: <RiUserLine className='w-4 h-4' />
    },
    {
      id: 2, data: 'How can you support my learning',
      icon: <RiMailLine className='w-4 h-4' />

    },
    {
      id: 3, data: 'Can you help with web development',
      icon: <RiStackOverflowLine className='w-4 h-4' />
    }
  ]
  let { hide, content, handleChatSubmit, chat, setChat, typing, handleDelete,setContent } = useContext(provideContext)
  let bottom = useRef(null)
  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' })
  }, [content])
  useEffect(() => {
    localStorage.setItem('content', JSON.stringify(content))
  }, [content])
  useEffect(() => {
    localStorage.setItem('hide', JSON.stringify(hide))
  }, [hide])
  
  return (
    <div className='w-full h-[78vh]    max-sm:pt-2'>
      <div className='flex items-center text-center  w-full h-full   flex-col '>
        {
          hide && (
            <div className='flex items-center flex-col gap-6 md:gap-7 lg:gap-20 max-sm:gap-10 px-4 py-4'>
              <div className='text-center max-sm:px-6'>
                <h1 className='lg:text-2xl max-sm:text-lg md:text-xl text-xl font-normal mb-2 max-sm:mb-1'>Hi {user.name}</h1>
                <h1 className='font-semibold lg:text-3xl md:text-2xl text-2xl max-sm:text-lg max-sm:mb-1 mb-2'>What would you like to know?</h1>
                <h1 className='font-medium leading-4 max-sm:text-[13px]' >Use one of the most  common prompts below <br /> or use your own to being</h1>
              </div>
              <div className='flex flex-wrap max-sm:justify-center items-center gap-3'>
                {arr.map((elem) => {
                  return <div onClick={() => { setChat(elem.data) }} key={elem.id} className='border w-50 max-sm:w-30 rounded-lg text-sm max-sm:text-[12px] py-4 max-sm:py-2 px-3 cursor-pointer shadow-[0_0_25px_rgba(31,41,55,1)] shadow-gray-800  bg-white/10'>
                    <div className='pb-2'>
                      {elem.icon}
                    </div>
                    <h1>{elem.data}</h1>
                  </div>
                })}
              </div>
            </div>
          )
        }
        <div className='scroll  overflow-y-auto overflow-x-hidden px-4  rounded w-full sm:w-[80%] md:w-[60%] lg:w-[50%]   h-[65vh] max-sm:h-[70vh] '>
          <div>
            {
              content.map((elem, index) => {
                return <div key={index} className={`flex  ${elem.sender === 'user' ? 'justify-end  ' : 'justify-start py-5  '}  items-start  `}>
                  {
                    elem.message && (
                      <h1 className={`rounded-lg px-2 text-start py-2 text-sm sm:text-base max-w-[80%] break-words  ${elem.sender === 'user' ? 'bg-white/10' : 'bg-green-500'} `}>
                        {elem.message}
                      </h1>
                    )
                  }  
                </div>
              })
            }
            <div ref={bottom}></div>
          </div>
          <div className='text-start'>
            {
              typing && (
                <h1>Ai typing...</h1>
              )
            }
          </div>
        </div>
      </div>
      <div className=' w-full flex max-sm:flex-col max-sm:justify-center left-0 right-0 gap-3 max-sm:gap-2  max-sm: items-center justify-center fixed z-20  lg:bottom-10 max-sm:bottom-1 md:bottom-4 bottom-4  '>
        <div className='flex w-full max-w-[600px]  items-center  gap-4 bg-white/10  px-3 py-2 rounded-full'>
          <div className='bg-white  rounded-full px-1.5 rotate-90 cursor-pointer py-1.5'>
            <RiLink className='w-4 h-4 max-sm:w-3 max-sm:h-3  text-black' />
          </div>
          <form onSubmit={handleChatSubmit} className='w-full max-sm:text-sm'>
            <input value={chat} onChange={(elem) => { setChat(elem.target.value) }} type="text" className='w-full outline-0' placeholder='Ask whatever you want' />
          </form>
          <div onClick={handleChatSubmit} className={` rounded-full  ${chat === '' ? 'bg-white/10 rotate-0 px-4 max-sm:px-3  py-1.5 max-sm:py-1 cursor-not-allowed' : 'bg-white px-2 py-2 max-sm:py-1 max-sm:px-1 -rotate-90 cursor-pointer '}`}>
            <RiArrowRightLongLine className={`w-4 h-4  max-sm:w-3 max-sm:h-3 ${chat === ''?"text-white":'text-black '}`} />
          </div>
        </div>
        <div className='px-4 max-sm:px-2  max-sm:text-[10px] py-1 cursor-pointer rounded-full bg-red-500' onClick={() => { handleDelete() }}>
          Delete All Chat
        </div>
      </div>
    </div>
  )
}

export default ChatUi