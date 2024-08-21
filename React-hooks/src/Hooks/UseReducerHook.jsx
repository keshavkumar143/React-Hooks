import React from 'react'
import { useReducer } from 'react'

// const [count,dispatch] = useReducer(reducer,0);
//0 is the initial value of the state
// const -> variable key 
// dispatch -> To send action to the reducer function 
//Reducer function -> A function that takes the current state and an action as arguement and return the new state  
//...state -> Highlights Another properties and also known as spread operator (...)
// const reducer = (state,action)=>{ 
//     console.log(state,action);
    
//     if(action.type == "Increament"){
//         return state+1; 
//     }

//     if(action.type == "Decreament"){
//         return state-1; 
//     }

//     if(action.type == "Reset"){
//         return state*0; 
//     }
// }; 

const reducer = (state,action) => { 
    switch (action.type) {
        case "Increament":
            return { ...state,count: state.count + 1 };
    
        case "Decreament":
            return { ...state,count: state.count - 1 };
    
        case "Reset":
            return { ...state,count: 0 };
    
        default:
            return state;
    }
};


function UseReducerHook() {

    const initialState = {
        count:0, 
        inc : 2, 
        dec : 2
    }

const[state,dispatch] = useReducer(reducer,initialState); 
  return (
    <>
    <h1>useReducer Example</h1>

    <h1>{state.count}</h1>
    
    <button onClick={()=> dispatch({type:"Increament"})}>Increament</button>
    <button onClick={()=> dispatch({type:"Decreament"})}>Decreament</button>
    <button onClick={()=> dispatch({type:"Reset"})}>Reset</button>
    </>
  )
}

export default UseReducerHook