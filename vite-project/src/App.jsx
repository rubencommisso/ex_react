/* import { Component } from "react";
import Button from './Button.jsx';
import Counter from './Counter.jsx'
import TextInput from "./TextInput.jsx";
import LoginForm from "./LoginForm.jsx";
import UncontrolledInput from "./UncontrolledInput.jsx";
import ItemList from "./ItemList.jsx";
import Card from "./Card.jsx";
import useFetch from "./hook/useFetch.jsx";
import TodoList from "./TodoList.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx"; */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";
import Navbar from "./Navbar.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx"

const App = () => {
  
  /* const title = "Titolo 1";

    const {data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts") */
    return (
      <>
       {/*  <p>Hello world!</p>
        <h1>{title}</h1> */}
        {/* <Button name="Peppe"/>
        <Button name="Ruben" lastname="tazzina"/>
        <Button lastname="sgabello"/> */}
        {/* <Counter></Counter>
        <br />
        <TextInput/>
        <br />
        <br />
        <LoginForm/>
        <br />
        <br />
        <UncontrolledInput/>
        <br />
        <ItemList/>
        <br />
        <Card>
          <h2>Titolo della Card</h2>
          <p>Questo è un paragrafo dentro la Card.</p>
        </Card>
        {loading && <p>Caricamento...</p>}
        {error && <p style={{color: "red"}}>Errore: {error}</p>}
        {data?.map((el, index) => (
            <div key={index}>{el.title}</div>
        ))}
        <TodoProvider>
            <div>
                <h1>Gestione To-Do</h1>
                <TodoList />
            </div>
        </TodoProvider>
         */}
         {/* <Navbar/> */}
         <TodoProvider>
         <Routes>
            <Route path="/" element={<PublicLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
         </Routes>
         </TodoProvider>
      </>
    )
  }


export default App;