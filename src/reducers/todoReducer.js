const initialState = { todos: [] };
export default function todos(state = initialState, action) {
  switch (action.type) {
    case "todos":
      return action.payload;
    case "addTodos":
      return { ...state };
    case "deleteTodo":
      // delete the todo
      let updatedData = state.todos.filter(s=> s.id!= action.payload)
      return { ...state, todos: updatedData };
    case "receivedTodos":
      console.log(action);
      return { ...state, todos: action.payload };
    case "fetchTodos":
      console.log(action);

      return { ...state, todos: action.payload };
    case "updateTodos":
      console.log(action);
      console.log(state.todos)
      let updatedTodos = state.todos;
      updatedTodos.push({'todo':action.payload[0].todo, 'id':action.payload[0].id})
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
}
