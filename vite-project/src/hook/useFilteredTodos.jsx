import { useState, useEffect } from "react";

const useFilteredTodos = (todos = [], searchTerm) => { // Aggiunto valore predefinito []
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!todos || todos.length === 0) { // Se todos è null o vuoto, impostiamo un array vuoto
            setFilteredTodos([]);
            return;
        }

        if (!searchTerm) {
            setFilteredTodos(todos);
        } else {
            setFilteredTodos(
                todos.filter(todo => 
                    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [todos, searchTerm]);

    return filteredTodos;
};

export default useFilteredTodos;
