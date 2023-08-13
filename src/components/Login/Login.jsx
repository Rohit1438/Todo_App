import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { loginAction } from '../../Redux/AuthReducer/action'
const Url="http://localhost:8080/data"
const Login = () => {
const [loginObj,setLoginObj]=useState({username:"",email:"",password:""})
const [allData,setAllData]=useState([])
const dispatch=useDispatch()

const getAllData=async()=>{
// try{
// let res=await axios.get(Url)
// res=await res.data
// console.log(res)
// await setAllData([...res])
// }catch(err){
//     console.log(err)
// }
}


const todos = useSelector((store)=>store.authReducer)

console.log(todos,"loginpage")



const handelChange=(e)=>{
    setLoginObj({...loginObj,[e.target.name]:e.target.value})
}
//console.log(loginObj)
const handelLoginSubmit=(e)=>{
    e.preventDefault()
    console.log("form submitted",loginObj)

dispatch(loginAction(loginObj))

    // if(loginCheck()){
       
    //     alert("login successfull")
    // }else{
    //     alert("wrong credentials")
    // }
 
}

const loginCheck=()=>{

// for(let i=0;i<allData.length;i++){
//     console.log("checking")
//     console.log(allData[i].userdetails.email,loginObj.email)
//     if(allData[i].userdetails.email==loginObj.email && allData[i].userdetails.password==loginObj.password  ){
//         console.log("matched")
//         localStorage.setItem("todo_app",JSON.stringify(allData[i].id))
//         return true
//     }
// }
// return false
}
useEffect(()=>{
getAllData()
},[])
  return (
    <Div>
<div className='LoginPageContainer'>
<div>
        <h3>Welcome to your personal todo_app🥳🎆</h3>
        <h1>Login</h1>
      </div>
      <div className='LoginFormContainer'>
<form action="" onSubmit={handelLoginSubmit}>
    <input type="text" name='email' onChange={handelChange} placeholder='username/email id' />
    <input type="text" name='password' onChange={handelChange} placeholder='password' />
    <button type='submit'>Login</button>
</form>
<p>the above all information are collected just for educational purpose.Its all safe and well provide assurance of the security of your valuable data</p>
<div className='anchor'>
<p>Not have an account? </p> <a href="/signup">Sign up now!</a>
</div>
      </div>
</div>
    </Div>
  )
}

export default Login

const Div=styled.div`
  
    color: black;
/* border: 2px solid orange; */
display: flex;
height: 100vh;
    .LoginPageContainer{
        width: 400px;
        height: 500px;
        background-color: #f9f9f9ec;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: rgba(255, 255, 255, 0.586) 0px 3px 18px;
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;


        
        /* position:relative;
        
        background-position:"center";
     background-repeat:"no-repeat";
     background-size:"cover"; */

    }
p{
    text-align: justify;
    padding: 0px 15px 0px;
}
.anchor{
    display: flex;
    flex-direction: row;
    align-items:center;
}
    form{
        display: flex;
        flex-direction: column;
    align-items: center;
    height: 70%;
    }
    input{
        width: 90%;
        border-radius: 5px;
        padding: 0px 10px 0px;
    height: 35px;
    border: none;
    outline:  none;
    margin: 10px 0px 10px;
    }
    button{
  
        width: 150px;
        height: 35px;
        background-color: #921eff;
        font-weight: 600;
        border-radius: 5px;
        font-size: 20px;
        color: white;
        border: none;
        box-shadow: rgba(208, 0, 255, 0.586) 0px 3px 18px;
    }
    button:hover{
        background-color: white;
        color: #921eff;
    }
`
