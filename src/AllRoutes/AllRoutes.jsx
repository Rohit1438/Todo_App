import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../components/Todo'
import Login from '../components/Login/Login'
import SignUp from '../components/Login/Signup'

const AllRoutes = () => {
  return (
<Routes>
    <Route path='/' element={<Todo/>}/>
    <Route path='/login' element={<Login/>}/> 
    <Route path='/signup' element={<SignUp/>}/>
</Routes>
  )
}

export default AllRoutes
