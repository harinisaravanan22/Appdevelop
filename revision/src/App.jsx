import React from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<PrivateRoute/>}>
        <Route index element={<Home/>}/>
      </Route> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Register/>}/>
      
      </Routes>
  )
}
export default App