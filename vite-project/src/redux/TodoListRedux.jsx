import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { fetchTodos, toggleComplete } from "./todoSlice.jsx";

const TodoListRedux = () => {
    const dispatch = useDispatch();
    const { data: todoList, loading, error } = useSelector(state => state.todo);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    useEffect(() => {
        const term = searchParams.get("search");
        if (term) {
            setSearchTerm(term);
        }
    }, [searchParams]);

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

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
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
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        />
                        <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListRedux;
