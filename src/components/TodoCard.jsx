import axios from "axios";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { DataContext } from "../Context/DataContextProvider";
const Url="http://localhost:8080/todos"
const TodoCard = ({ el }) => {
    const {todos,setTodos,sort,setSort}=useContext(DataContext)
const [edit,setEdit]=useState(false)
const [editedTodo,setEditedTodo]=useState({})

   
// console.log(el,"el")
    
  const handelComplete = async () => {
    try {
        const updatedTodo = { ...el, completed: !el.completed };
        const res = await axios.patch(`${Url}/${el.id}`, updatedTodo);
      console.log(res)
      const updatedTodos=todos.filter((task)=>task.id!==el.id)
      console.log(updatedTodos)
      await setTodos((pre)=>[res.data,...updatedTodos])
    } catch (err) {
      console.log(err);
    }
  };


 


  const handelEditChange = (e) => {
  setEditedTodo({...el,title:e.target.value})
    
}
//console.log(newTodo)


const handelEditSubmit = async (e) => {
    e.preventDefault();
    console.log(editedTodo)
    try {
        let res = await axios.patch(`${Url}/${el.id}`, editedTodo)
        console.log(res)
        const updatedTodos=todos.filter((task)=>task.id!==el.id)
      console.log(updatedTodos)
      await setTodos((pre)=>[res.data,...updatedTodos])
      await setEdit(false)
    } catch (err) {
        console.log(err)
    }
}
//console.log(edit)

  return (
    <div >
      <div className="todo_card">
        <div className="todoTextDiv">
          <button className="editBtn" onClick={()=>setEdit((pre)=>!pre)}>
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
<div>
{!edit?(<p>{el.title}</p>):(<form action="" id="editinput" onSubmit={handelEditSubmit}>
    <input  type="text" onChange={handelEditChange}/>
</form>)}
</div>
        </div>
        <div className="todoBtnDiv">
          <button className={el.completed?"completed tickBtn":"tickBtn"} onClick={()=>handelComplete(el.id)}>
            <i class="fa-regular fa-circle-check"></i>
          </button>
          <button className="delbtn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

const Div = styled.div`
  .todo_card {
    display: grid;
    grid-template-columns: 80% 20%;
    /* justify-content: space-between;
    align-items: center; */
    background-color: #b4b4ff;
    border: 1px solid white;
    font-size: 1.1rem;
    padding: 2px 20px 2px;
    border-radius: 5px;
  }
  .todoTextDiv {
    display: flex;

    align-items: center;
  }

  .todoBtnDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delbtn {
    height: 60%;
    background-color: #ff1a5f;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 5px 15px 5px;
    border: none;
  }
  .delbtn:hover {
    color: #ff1a5f;
    background-color: white;
    border: 1px solid #ff1a5f87;

    outline: none;
  }

  .tickBtn {
    height: 40px;
    width: 40px;
    color: #23da63;
    background-color: white;
    border-radius: 100%;
    /* color: white; */
    font-size: 20px;
    padding: 5px 5px 5px;
    border: none;
  }
  .tickBtn:hover {
    height: 40px;
    width: 40px;
    background-color: #1dce5bbb;

    border-radius: 100%;
    color: white;
    font-size: 20px;
    padding: 5px 5px 5px;
    border: none;
  }
  #completed{
    height: 40px;
    width: 40px;
    background-color: #1dce5bbb;

    border-radius: 100%;
    color: white;
    font-size: 0px;
    padding: 5px 5px 5px;
    border: none;
  }
  .editBtn {
    height: 40px;
    width: 40px;
    color: #ff9500;
    background-color: white;
    border-radius: 100%;
    border: 2px solid #ff9500;
    /* color: white; */
    font-size: 20px;
    padding: 5px 5px 5px;
    /* border: none; */
  }
  p {
    padding: 0px 15px 0px;
  }
  #editinput{
    padding: 0px 15px 0px; 
  }
`;
