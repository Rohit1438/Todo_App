import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { AuthContext } from '../../Context/AuthContextProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
// import { color, useToast } from '@chakra-ui/react'
const UserUrl="http://localhost:8080/data"
const SignUp = () => {
    const navigate=useNavigate()
    const toast = useToast()


const {user,setUser,id}=useContext(AuthContext)
const [userObj,setUserObj]=useState({userdetails:{},todos:[]})

console.log(id,"id")
const handelChange = (e) => {
    const { name, value } = e.target;
  
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  
    setUserObj((prevUserObj) => ({
      ...prevUserObj,
      userdetails: {
        ...prevUserObj.userdetails,
        [name]: value,
      },
    }));
  };

  

console.log(userObj)
const handelSubmit=async(e)=>{
    console.log(userObj)

    e.preventDefault()
try{
 let res=await axios.post(UserUrl,userObj)

await toast({
    title: 'Failed!!',
    description: 'Please fill all the fields.',
    status: 'error',
    position: 'top',
    duration: 4000,
    isClosable: true,
  }) 
// navigate(location.state, {replace:true})
setTimeout(()=>{
navigate("/login")
},1000)

}catch(err){
    console.log(err)
}
}

  return (
    <Div>
<div className='LoginPageContainer'>
<div>
        <h3>Just a few steps more🥳🎆</h3>
        <h1>Sign up now!</h1>
      </div>
      <div className='LoginFormContainer'>
<form action="" onSubmit={handelSubmit}>
<input type="text" name='username' onChange={handelChange} placeholder='username' />
    <input type="text" name='email' onChange={handelChange} placeholder='email id' />
    <input type="text" name='password' onChange={handelChange} placeholder='password' />
    <button type='submit'>Login</button>
</form>
<p>the above all information are collected just for educational purpose.Its all safe and well provide assurance of the security of your valuable data</p>
<div className='anchor'>
<p>Already have an account? </p> <a href="login">Login here</a>
</div>
      </div>
</div>
    </Div>
  )
}

export default SignUp

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
        

    }
    h3{
   
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
    height: 60%;
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
