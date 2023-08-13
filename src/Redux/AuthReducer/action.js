import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const Url = "http://localhost:8080/data";

export const loginAction = (loginObj) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.get(Url);
    const data = response.data;

    // Find the user that matches the login credentials
    const matchedUser = data.find(
      (user) =>
        user.userdetails.email === loginObj.email &&
        user.userdetails.password === loginObj.password
    );

    if (matchedUser) {
      // Create a new array with the todos from the matched user
      const todosArray = matchedUser.todos || [];

      // Dispatch LOGIN_SUCCESS with the new array
      dispatch({ type: LOGIN_SUCCESS, payload: todosArray });
    } else {
      // No user matched, dispatch LOGIN_FAILURE
      dispatch({ type: LOGIN_FAILURE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE });
  }
};









// import axios from "axios";
// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

// const Url = "http://localhost:8080/data";

// export const loginAction = (loginObj) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const response = await axios.get(Url);
//     const data =await response.data;


//     // for(let i=0;i<data.length;i++){
   
//     //         if (data[i].userdetails.email === loginObj.email && data[i].userdetails.password === loginObj.password) {
//     //           console.log(data[i].todos)
//     //           dispatch({ type: LOGIN_SUCCESS, payload:data[i].todos });
//     //           // return el.todos
//     //         }else{
//     //             console.log("dispatching error")
//     //       dispatch({ type: LOGIN_FAILURE });
//     //         }

        
//     // }
//  data.map((el) => {
//       if (el.userdetails.email === loginObj.email && el.userdetails.password === loginObj.password) {
//         console.log(el.todos)
//         dispatch({ type: LOGIN_SUCCESS, payload:el.todos });
//         // return el.todos
//       }
//     });


//   } catch (error) {
//     console.log(error);
//     dispatch({ type: LOGIN_FAILURE });
//   }
// };
