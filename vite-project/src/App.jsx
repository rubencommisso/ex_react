import { Component } from "react";

class app extends Component {

  title = "Titolo 1";

  render () {
    return (
      <>
        <p>Hello world!</p>
        <h1>{this.title}</h1>
      </>
    )
  }
}

export default app;