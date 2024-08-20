import React, { createContext } from 'react'
//THIS COMPONENT IS JUST A WAREHOUSE WHERE DATA IS STORED USING USECONTEXT

// It is a way of passing through the componnets tree without having to pass proper down manually at every level 
// 1.createContext :  Create a context object --> warehouse
// 2. Provider : A component that provides the context value to its children 
// 3. useContext(Consumer) : A hook that allows you to consume a context

//Can pass data to any components 

//step 1
export const BioData = createContext(); //works as a component , not as a variable 

//2nd step 
export const BioProvider = ({ children }) => {
  const myName = "keshav";
  const myAge = 20;
  console.log(children);


  return <BioData.Provider value={{ myName, myAge }}>
    {children}
  </BioData.Provider>
}
