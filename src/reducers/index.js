import { ADDTASK, TOGGLECOMPLETED } from "../actions";

const initialState = {
  todos: [
    { value: "Walk the dog", completed: false, id: 1 },
    { value: "Wash Dishes", completed: false, id: 2 },
    { value: "Do Homework", completed: false, id: 3 }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      // Using Object.assign:
      //  return Object.assign({}, state, { todos: [...state.todos, action.payload] });
      // Using spread:
      return { ...state, todos: [...state.todos, action.payload] };
    case TOGGLECOMPLETED:
      let todos = state.todos.slice();
      todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      // Way 1a: Object.assign:
      return Object.assign({}, state, { todos: todos });

    // Way 1b: Spread Operator
    // return { ...state, todos: todos };

    // Second way: return the mapped object in the spread copy.
    /*return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        })
      };*/
    default:
      return state;
  }
};
