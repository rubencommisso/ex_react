import { useState, useMemo, useRef, useEffect } from "react";
import { useTodos } from "./providers/TodoContext.jsx";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const TodoList = () => {
    const { todoList, loading, error } = useTodos();
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const term = searchParams.get("search");
        if (term) {
            setSearchTerm(term);
        }
    }, [searchParams]);

    // Filtra i to-do in base alla ricerca
    const filteredTodos = useMemo(() => {
        if (!todoList || todoList.length === 0) return [];
        if (!searchTerm) return todoList;
        return todoList.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todoList, searchTerm]);

    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        
        setSearchParams({ search: newSearchTerm });
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
                        <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;





