import React, { useContext, useEffect, useState } from 'react'
import { provideContext } from '../other/AuthProvider'
import Login from '../login&signSystem/Login'
import Ai from '../ChatSystem/Ai'

function VerifyLogin() {
     let {userInput,setUserInput,user, setUser,wrong,setWrong}=useContext(provideContext)
     useEffect(()=>{
      let store =JSON.parse(localStorage.getItem('users')) || []
      setUserInput(store)
      let data=JSON.parse(localStorage.getItem('logInUser'))
      if(data){
        setUser(data)
      }
     },[])
     function handleData(email, password){
      let fetch=userInput.find((e)=> e.email=== email && e.password===password)
      if(fetch){
        localStorage.setItem('logInUser',JSON.stringify(fetch))
        setUser(fetch)
      }
      else{
       setWrong(true)
      }
     }
  return (
    <div>
      {
        user? <Ai user={user} /> :  <Login handleData={handleData} /> }
    </div>
  )
}

export default VerifyLogin