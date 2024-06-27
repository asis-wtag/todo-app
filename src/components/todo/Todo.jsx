import React, { Fragment, useState } from "react";
import "./todo.css";
import { addTodo, deleteTodo, removeTodo } from "../../actions/todo/actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder="Add Items.. " value={inputData} onChange={(event) => setInputData(event.target.value) }/>
            <i className="add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>+</i>
          </div>
          <div className="showItems">
              {
                list.map((element)=>{
                  return (
                    <div className="eachItem" key={element.id}>
                    <h3>{element.data}</h3>
                    <i className="delete-btn" title="Delete Item" onClick={()=> dispatch(deleteTodo(element.id))}>-</i>
                  </div>
                  )
                })
              }
          </div>
          <div className="showItems">
          <button className="remove-all-btn" onClick={()=>dispatch(removeTodo())}>Remove All</button>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
