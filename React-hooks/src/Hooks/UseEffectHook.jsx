import React from 'react'
import { useEffect , useState } from 'react'

//Performs side effects in function components
//Side effect --> Anything that affects something outside of the scope of the current function thats being executed . in our dashboard , this includes :-
// 1. API requests to our backend Service. 
// 2. Calls to our authentication service . 
// 3. Error tracking calls to Sentry. 
//Renders automatically

//When ever the component will re render the usse effect will work automatically 

function UseEffectHook() {

    // useEffect(() => {
    //     console.log("hello useEffect");  //Called after outside console.log
    //   },); 

    //   console.log("outside the useeffect"); //Called first
      
    const [count,setMyCount] = useState(0);

    useEffect(() => {
       document.title = `Notification(${count})`    
    });

    function TriggerButton(){
        setMyCount((prevState)=> prevState + 1); 
        console.log(count);
        
    }
   
    return (
        <>
            <h1>{count}</h1>
            <button onClick={TriggerButton}>Click me</button>
        </>
       
    )
}

export default UseEffectHook