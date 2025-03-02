import { useState } from "react";

const LoginForm = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;

        setForm((_form) => ({
            ..._form, // Usa _form per prendere lo stato attuale
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={form.username} 
                    onChange={handleInput} // Usa onChange
                />
                <br />

                <label>Password:</label>
                <input 
                    type="password" // Tipo corretto per la password
                    name="password" 
                    value={form.password} 
                    onChange={handleInput} // Usa onChange
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;
