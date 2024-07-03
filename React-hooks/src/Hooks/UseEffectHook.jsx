import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CComponent from './CComponent';

function UseEffectHook() {
    const [flag,setFlag] = useState(true);

  return (
    <div className="EffectHook">
        <div>
            <button onClick={()=> setFlag(!flag)}>Toggle Class Component</button>
        </div>
        {flag ? <CComponent/> : ""}
    </div>
  )
}

export default UseEffectHook