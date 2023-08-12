import React, { createContext, useState } from 'react'
export const DataContext=createContext()
const DataContextProvider = ({children}) => {
// const data=[
//     {
//       "id": 1,
//       "title": "Buy groceries",
//       "description": "Milk, eggs, bread, fruits",
//       "completed": false,
//       "priority": 2
//     },
//     {
//       "id": 2,
//       "title": "Finish homework",
//       "description": "Math assignment, reading",
//       "completed": false,
//       "priority": 1
//     },
//     {
//       "id": 3,
//       "title": "Go for a run",
//       "description": "5 miles, evening",
//       "completed": true,
//       "priority": 3
//     }
//   ]
    const [todos,setTodos]=useState([])
    const [sort,setSort]=useState(false)

  return <DataContext.Provider value={{todos,setTodos,sort,setSort}}>{children}</DataContext.Provider>
}

export default DataContextProvider
