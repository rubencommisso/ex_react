import { useState } from "react"

const Counter = ()=> {
    const [number,setNumber]= useState(0);

    const clickOnButtonAdd = () => {
        setNumber((_counter) => {
            return _counter +1;
        });
    }

    const clickOnButtonCut = () => {
        setNumber((_counter) => {
            return _counter -1;
        });
    }

    return (
        <div>
            <button onClick={clickOnButtonAdd}>Add</button>
            <button onClick={clickOnButtonCut}>cut</button>

            <p>Counter: {number}</p>
            
        </div> )
}

export default Counter 