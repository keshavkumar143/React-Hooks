import React, { useEffect, useState, useRef } from 'react';
// Used for accessing the DOM element directly
// It creates a mutable variable which will not re-render the components

function UseRefHook() {
  const [myData, setMyData] = useState(""); 
  const [submittedData, setSubmittedData] = useState(""); // State to hold the submitted value

  const count = useRef(0); // Returns an object with a "current" property
  // console.log(count);

  useEffect(() => { 
    count.current = count.current + 1; // Update the "current" value of the ref
  }, []); // The effect runs only once when the component mounts

  const input = useRef(""); 

  const changeStyle = () => {
    input.current.style.backgroundColor = "grey";// Change input background color
    input.current.focus(); 
    setSubmittedData(input.current.value); // Set the value of the input to submittedData state
  }

  return (
    <>
      <input 
        ref={input}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)} 
      />

      <button onClick={changeStyle}>Submit</button>
      {submittedData && <h1>{submittedData}</h1>} 
    </>
  );
}

export default UseRefHook;
