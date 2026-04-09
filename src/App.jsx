import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Signup from './component/login&signSystem/Signup'
import Login from './component/login&signSystem/Login'
import ForgetPassword from './component/login&signSystem/ForgetPassword'
import VerifyLogin from './component/ChatSystem/VerifyLogin'

function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<VerifyLogin />} />
            <Route path='/signin' element={<Signup />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
    </div>
  )
}

export default App