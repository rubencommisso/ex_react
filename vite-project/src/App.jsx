import { Component } from "react";
import Button from './Button.jsx';
import Counter from './Counter.jsx'
import TextInput from "./TextInput.jsx";
import LoginForm from "./LoginForm.jsx";
import UncontrolledInput from "./UncontrolledInput.jsx";

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
      </>
    )
  }
}

export default App;