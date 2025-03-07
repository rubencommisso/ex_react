import { useState, useCallback} from "react";
import useFetch from "./hook/useFetch.jsx";
import useFilteredTodos from "./hook/useFilteredTodos.jsx";

const TodoList = () => {
    const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(todos, searchTerm);

    const handleSearchChange = useCallback((e)=>{
        setSearchTerm(e.target.value)
        console.log("handleSerachChange sta funzionando")
    },[])

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div>
            <h2>Lista To-Do</h2>
            <input
                type="text"
                placeholder="Cerca to-do..."
                value={searchTerm}
                onChange = {handleSearchChange}
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

