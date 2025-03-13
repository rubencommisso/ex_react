import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx"
import TodoListPage from "./pages/TodoListPage.jsx";
import TodoDetail from "./pages/TodoDetail.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";

const App = () => {
  
    return (
 
         <>
         <TodoProvider>
         <Routes>
            <Route path="/" element={<PublicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="TodoListPage" element={<TodoListPage/>}/>
                <Route path="/todo/:id" element={<TodoDetail/>} />
            </Route>
         </Routes>
         </TodoProvider>
        
      </>
    )
  }


export default App;