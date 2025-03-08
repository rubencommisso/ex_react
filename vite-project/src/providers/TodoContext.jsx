import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) {
                    throw new Error("Errore nel recupero dei dati");
                }
                const data = await response.json();
                setTodoList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook per accedere al contesto
export const useTodos = () => useContext(TodoContext);
