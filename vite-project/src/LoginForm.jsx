import { useState } from "react";
import ItemList from "./ItemList";

const LoginForm = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;

        setForm((_form) => ({
            ..._form,
            [name]: value
        }));
    };

    const submitButton = (event) => {
        event.preventDefault();
        alert(`Username: ${form.username} \nPassword: ${form.password}`);
    };


    return (
        <div>
            <form onSubmit={submitButton}>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={form.username} 
                    onChange={handleInput}
                />
                <br />

                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={form.password} 
                    onChange={handleInput}
                />
                <br />

                <button type="submit">Submit</button>
            </form>

         
            <ItemList />
        </div>
    );
};

export default LoginForm;

