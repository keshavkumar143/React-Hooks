import React from 'react';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseRefHook from './Hooks/UseRefHook';
import { BioProvider } from './Hooks/ContextApi/UseContextHook';
import Home from './Hooks/ContextApi/Home';
import UseMemoHook from './Hooks/UseMemoHook';
import UseReducerHook from './Hooks/UseReducerHook';

function App() {
  return (
    //Just remove the comments to see the functioning of each hook on browser
    <>

      {/* <UseStateHook/>  */}

      {/* <UseEffectHook/> */}

      {/* <UseRefHook/> */}

  {/* -->Below is the example of UseContext Hook  */}

  {/* <BioProvider> 
    <Home/>
  </BioProvider> */}

  {/* <UseMemoHook/> */}

  <UseReducerHook/>
    </>
  )
}

export default App