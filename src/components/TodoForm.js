import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        name="todoInput"
        value={props.todoInput}
        placeholder="Add Todos"
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit}>Add</button>
    </form>
  );
};

export default TodoForm;
