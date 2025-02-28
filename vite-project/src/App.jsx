import { Component } from "react";
import Button from './Button.jsx';
import Counter from './Counter.jsx'

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
      </>
    )
  }
}

export default App;