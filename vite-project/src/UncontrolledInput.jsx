import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null); 

    const handleClick = () => {
        alert(`Valore dell'input: ${inputRef.current.value}`); 
    };

    return (
        <div>
            <input type="text" ref={inputRef} /> {}
            <button onClick={handleClick}>Mostra Valore</button>
        </div>
    );
};

export default UncontrolledInput;
