import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


const initialState = {
    isLoading : false,
    isAuth:false,
    isError : false,
    todos : []
}

export const reducer=(state=initialState,{type,payload})=>{

switch(type){
    case LOGIN_REQUEST :{
        return {
            ...state,
            isLoading : true,
            isError : false
           }
    }
    case LOGIN_SUCCESS: {
        console.log("payload", payload,"loginsuccess");
        return {
          ...state,
          isLoading: false,
          isAuth:true,
          isError: false,
          todos: [...payload], // Make sure to update todos immutably
        };
      }
    
    case LOGIN_FAILURE :{
        return {
            ...state,
            isLoading : false,
            isError : true,
            todos:[]
           }
    }
    
    case AUTH_SUCCESS :{
        return {
            ...state,
            isLoading : true,
            isError : false
           }
    }
    case AUTH_FAILURE :{
        return {
            ...state,
            isLoading : false,
            isError : true
           }
    }

    default : {
        return state
       }
    
}


}