import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hook/useFetch.jsx";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        if (todos) setTodoList(todos);
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);