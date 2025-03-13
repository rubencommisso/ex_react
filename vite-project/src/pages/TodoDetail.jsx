import { useParams } from "react-router-dom";
import { useTodos } from "../providers/TodoContext.jsx";

const TodoDetail = () => {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const { todoList } = useTodos();

  const todo = todoList.find(todo => todo.id === parseInt(id));

  if (!todo) return <p>To-Do non trovato!</p>;

  return (
    <div>
      <h2>Dettagli del To-Do</h2>
      <p>ID: {todo.id}</p>
      <p>Titolo: {todo.title}</p>
      <p>Completato: {todo.completed ? "✅ Sì" : "❌ No"}</p>
    </div>
  );
};

export default TodoDetail;