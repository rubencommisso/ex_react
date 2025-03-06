
import useFetch from "./hook/useFetch.jsx";

const TodoList = () => {
    const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;
    
    return (
        <div>
            <h2>Lista To-Do</h2>
            <ul>
                {todos.map(todo => (
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
