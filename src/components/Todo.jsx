import React, { useContext, useEffect, useState } from 'react'
//https://static.vecteezy.com/system/resources/previews/004/257/968/original/abstract-purple-fluid-wave-background-free-vector.jpg
import styled from 'styled-components';
import TodoCards from './TodoCards';
import { DataContext } from '../Context/DataContextProvider';
import axios from "axios"
const Url="http://localhost:8080/todos"

const Todo = () => {
    const {todos,setTodos,sort,setSort}=useContext(DataContext)
    const incompletedTodos = todos.filter((task) => !task.completed);
    const completedTodos = todos.filter((task) => task.completed);
    
const getTodos=async()=>{
let res=await axios.get(Url)
res=await res.data.reverse()
setTodos([...res])
}


useEffect(()=>{
    getTodos()
},[])
const [newTodo,setNewTodo]=useState({})

const handelChange=(e)=>{
    setNewTodo({
        title:e.target.value,
        completed:false
    })
}

//console.log(newTodo)
const handelSubmit=async(e)=>{
    e.preventDefault()
try{

    let res=await axios.post(Url,newTodo)
   // console.log(res)
    setTodos((pre)=>[...pre,res.data])


}catch(err){
    console.log(err)
}
}
  return (
    <Div>
        <div id='heading'>
        <h1>Todo</h1>
        </div>
<DIV>

<div className='form_div'>
<form action="" onSubmit={handelSubmit}>
    <input type="text" onChange={handelChange} />
    <button className='addbtn' type='submit'>
        Add
    </button>
</form>
<div className='sort'>
   <div onClick={()=>setSort(false)} className={sort?"":"not_completed"}><h3>Not Completed</h3></div>
    <div onClick={()=>setSort(true)} className={sort?"completed":""}><h3 >Completed</h3></div>
 

</div>
<div className='todo_item_Container'>

    <TodoCards data={sort?completedTodos:incompletedTodos}/>

</div>
</div>

</DIV>

    </Div>
  )
}

export default Todo
const Div=styled.div`
  width: 50%;

  margin: auto;


  @media(max-width:500px) {
width: 95%;
border: 2px solid red;
p{
    font-size: 15px
}
    }

`
const DIV=styled.div`
  width: 100%;
  /* border: 2px solid purple; */
  margin: auto;

  .form_div>form{
    
    /* width: 100%; */
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 85% 15%;
    justify-content: space-between;
    gap: 10px;;
    font-size: 1.5rem;
  }
  input{
    border: 1px solid #ffffff94;
    font-size: 1.2rem;
    background-color: transparent;
    border-radius: 5px;
    height: 30px;
    color: white;
   /* border: none; */
    outline: none;
  }
  .addbtn{
    font-size: 1.1rem;
    background-color: #b500d5;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
  }
  .addbtn:hover{
    font-size: 1.1rem;
    background-color: white;
    color: #b500d5;
    border-radius: 10px;
  }
.todo_item_Container{
    background-color: white;
 

}
.todo_item_Container{
    color: black;
}

.sort{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* border: 2px solid red; */
    margin-top: 20px;
}
.completed{
    background-color: #0ee50ecb;
    color: white;
}
.not_completed{
    background-color: red;
}
`