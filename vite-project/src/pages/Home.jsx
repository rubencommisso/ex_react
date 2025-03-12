import TodoList from "../TodoList.jsx";
import { TodoProvider } from "../providers/TodoContext.jsx";

const Home = () => {
    return(
        <>
        <TodoProvider>
        <h1>Home</h1>
        <TodoList/>
        </TodoProvider>
        </>
        

    )
}

export default Home