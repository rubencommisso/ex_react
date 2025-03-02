import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null); 

    

    return (
        <div>
            <input type="text" ref={inputRef} /> {}
            
        </div>
    );
};

export default UncontrolledInput;
