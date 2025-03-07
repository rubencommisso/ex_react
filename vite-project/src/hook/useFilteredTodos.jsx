import { useEffect, useState } from "react";

const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
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

export default useFilteredTodos