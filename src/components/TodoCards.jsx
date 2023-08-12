import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContextProvider'
import { styled } from 'styled-components'
import TodoCard from './TodoCard'

const TodoCards = ({data}) => {
const {todos,setTodos,sort,setSort}=useContext(DataContext)

const filteredTodos = todos.filter((task) => !task.completed);

//console.log(filteredTodos);



  return (
    <Div>

        <div>
            {data.map((el)=>{
                return (
                    // <div className='todo_card'>
                    //     <div className='todoTextDiv'>
                    //     <button className='editBtn' onClick={handelEdit(el.id)}><i class="fa-regular fa-pen-to-square"></i></button>
                    //     <p>{el.title}</p>
                    //     </div>
                    // <div className='todoBtnDiv'>
                    // <button className='tickBtn'><i class="fa-regular fa-circle-check"></i></button>
                    //     <button className='delbtn'><i class="fa-solid fa-trash"></i></button>
                    // </div>
                    // </div>
                    <TodoCard el={el} key={el.id}/>
                )
            })}
        </div>
      
    </Div>
  )
}

export default TodoCards

const Div=styled.div`
width: 100%;
margin: auto;
/* display: flex;
align-items: center;
padding: 20px 30px 20px; */
.todo_card{
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

.todoBtnDiv{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.delbtn{
    height: 60%;
    background-color: #ff1a5f;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 5px  15px 5px;
    border: none;

}
.delbtn:hover{
   
color: #ff1a5f;
background-color: white;
  border: 1px solid #ff1a5f87;
   
    outline: none;
  }

  .tickBtn{
    height: 40px;
    width: 40px;
    color: #23da63;
    background-color: white;
    border-radius: 100%;
    /* color: white; */
    font-size: 20px;
    padding: 5px  5px 5px;
    border: none;
  }
  .tickBtn:hover{
    height: 40px;
    width: 40px;
    background-color: #1dce5bbb;

    border-radius: 100%;
    color: white;
    font-size: 20px;
    padding: 5px  5px 5px;
    border: none;
  }
  .editBtn{
    height: 40px;
    width: 40px;
    color: #ff9500;
    background-color: white;
    border-radius: 100%;
    border: 2px solid #ff9500;
    /* color: white; */
    font-size: 20px;
    padding: 5px  5px 5px;
    /* border: none; */
  }
  p{
    padding: 0px 15px 0px;
  }
`