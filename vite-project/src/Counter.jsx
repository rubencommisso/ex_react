import { useState } from "react"

const Counter = ()=> {
    const [number,setNumber]= useState(0);

    const clickOnButton = () => {
        setNumber((_counter) => {
            return _counter +1;
        });
    }

    return (
        <div>
            <button onClick={clickOnButton}>Add</button>
            <p>Counter: {number}</p>
            
        </div> )
}

export default Counter 