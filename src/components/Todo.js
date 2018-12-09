import React from "react";

const Todo = props => {
  return <div onClick={() => props.toggleCompleted(props.todo.id)}>{props.todo.value}</div>;
};

export default Todo;
