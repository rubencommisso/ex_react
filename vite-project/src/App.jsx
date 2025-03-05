import { Component } from "react";
import Button from './Button.jsx';
import Counter from './Counter.jsx'
import TextInput from "./TextInput.jsx";
import LoginForm from "./LoginForm.jsx";
import UncontrolledInput from "./UncontrolledInput.jsx";
import ItemList from "./ItemList.jsx";
import Card from "./Card.jsx";



class App extends Component {

  title = "Titolo 1";

  render () {
    return (
      <>
        <p>Hello world!</p>
        <h1>{this.title}</h1>
        {/* <Button name="Peppe"/>
        <Button name="Ruben" lastname="tazzina"/>
        <Button lastname="sgabello"/> */}
        <Counter></Counter>
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
      </>
    )
  }
}

export default App;