import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { addTask, toggleCompleted } from "../actions";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      value: this.state.todoInput,
      completed: false,
      index: this.props.task.length + 1
    };
    this.props.addTask(newTodo);
    this.setState({ todoInput: "" });
  };

  toggleCompleted = id => {
    this.props.toggleCompleted(id);
    console.log("props is: ", this.props);
  };
  render() {
    return (
      <div>
        {this.props.task.map(todo => {
          return <Todo toggleCompleted={this.toggleCompleted} key={todo.id} todo={todo} />;
        })}
        <TodoForm
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTask, toggleCompleted }
)(Todos);
