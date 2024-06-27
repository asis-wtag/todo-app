import { Fragment, useState } from "react";
import Todo from "./components/todo/Todo";
import Counter from "./components/counter/Counter";
import "./app.css"

function App() {
  return (
    <Fragment>
      <div className="root">
        <Counter />
        <Todo />
      </div>
    </Fragment>
  );
}

export default App;
