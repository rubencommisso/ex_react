import { useState, useMemo, useRef, useEffect } from "react";
import { useTodos } from "./providers/TodoContext.jsx";

const TodoList = () => {
    const { todoList, loading, error } = useTodos();
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();

    // Filtra i to-do in base alla ricerca
    const filteredTodos = useMemo(() => {
        if (!todoList || todoList.length === 0) return [];
        if (!searchTerm) return todoList;
        return todoList.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todoList, searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div>
            <h2>Lista To-Do</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Cerca to-do..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} readOnly />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;



