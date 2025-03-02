import { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState(""); 

    const inputText = (event) => {
        setText(event.target.value); 
    };


    return (
        <div>
        <input type="text" value={text} onChange={inputText} /> 
        <p>{text}</p>
        </div>
    );
};

export default TextInput;
