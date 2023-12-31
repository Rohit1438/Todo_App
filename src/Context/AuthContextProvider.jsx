import React, { createContext, useEffect, useState } from 'react'


export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
const[isAuth,setIsAuth]=useState(false)
const [user,setUser]=useState({})
const [id,setId]=useState(null)


useEffect(()=>{
 setId( JSON.parse(localStorage.getItem("todo_app")))
},[])
  return <AuthContext.Provider value={{id,setId,isAuth,setIsAuth,user,setUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
