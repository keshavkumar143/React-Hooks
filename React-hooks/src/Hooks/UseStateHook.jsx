import React, { useState } from 'react';

function UseStateHook() {
    const [value, setValue] = useState(""); // Dealing with strings
    const [flag, setFlag] = useState(false); // Dealing with booleans
    const [steps, setSteps] = useState(()=> { 
        console.log("clicked");
        return 0; 
    }); // Dealing with numbers and running this only once , it is helpful while working with complex and havey operations
    const [names, setNames] = useState([]); // Dealing with arrays
    const [name, setName] = useState(""); // Dealing with single name input
    

    function changeName() {
        console.log("Name function");
        setValue("Boy");
        setFlag(!flag);
    }

    function increment() {
        // setSteps(steps + 1); // For just updating the state
        // setSteps(steps + 1); 

        // For the above case it will update the step value only by one, not by two 

        setSteps((prevState) => prevState + 1);
        setSteps((prevState) => prevState + 1);

        // it will update two numbers at one click
    }

    function decrement() {
        // setSteps(steps - 1); // Decrement by one 

        setSteps((prevState) => prevState - 1);
        setSteps((prevState) => prevState - 1);

        // it will update two numbers at one click
    }

    function addNames(e) {
        e.preventDefault(); 
        setNames([...names, { id: names.length, name }]); // For array
        setName(""); // Clear the input
    }

    return (
        <>
            <h1 style={styles.h1}>USE STATE HOOK</h1>
            <hr />
            <div className="App" style={styles.app}>
                <h1 style={styles.heading}>Hello, {flag ? value : ""}</h1>
                <button onClick={changeName} style={styles.button}>Change</button>
            </div>

            <hr />

            <div style={styles.counter}>
                <button onClick={increment} style={styles.button}>+</button>
                <h1 style={styles.steps}>{steps}</h1>
                <button onClick={decrement} style={styles.button}>-</button>
            </div>

            <hr />

            <form onSubmit={addNames} style={styles.form}>
                <input 
                    type="text" 
                    value={name} 
                    placeholder='Add names'
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Submit</button>
            </form>

            <ul>
                {names.map((item) => (
                    <li key={item.id} style={styles.listItem}>{item.name}</li>
                ))}
            </ul>

            <hr />
        </>
    );
}

const styles = {
    h1: {
        textAlign: 'center'
    },
    app: {
        textAlign: 'center',
        margin: '20px',
    },
    heading: {
        fontSize: '2em',
        color: '#333',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    },
    counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
    },
    steps: {
        fontSize: '2em',
        margin: '20px 0',
    },
    form: {
        textAlign: 'center',
        margin: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginRight: '10px',
    },
    listItem: {
        fontSize: '1.5em',
        listStyleType: 'none',
    }
};

export default UseStateHook;
