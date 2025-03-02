import { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState(""); 

    const inputText = (event) => {
        setText(event.target.value); 
    };


    return (
        <input type="text" value={text} onChange={inputText} /> 
    );
};

export default TextInput;
