import { Fragment, useState } from "react";
import Todo from "./components/todo/Todo";
import Counter from "./components/counter/Counter";
import "./app.css"
import Quote from "./components/quote/Quote";

function App() {
  return (
    <Fragment>
      <div className="root">
        <Counter />
        <Todo />
        <Quote />
      </div>
    </Fragment>
  );
}

export default App;
