import { useState } from "react"

const Counter = ()=> {
    const [number,setNumber]= useState(0);

    const clickOnButtonAdd = () => {
        setNumber((_counter) => {
            return _counter +1;
        });
    }

    const clickOnButtonCut = () => {
        if(number==0){
            alert("non puoi scendere sotto lo 0") 
            return
        }
        setNumber((_counter) => {
            return _counter -1;  
        });
    }

    return (
        <div>
            <button onClick={clickOnButtonAdd}>Add</button>
            <button onClick={clickOnButtonCut}>cut</button>
            <button onClick={()=>setNumber(0)}>Reset</button>

            <p>counter: {number}</p>
            
        </div> )
}

export default Counter 