import "./App.css";
import { connect } from "react-redux";
import TodoListItem from './features/todos/TodoListItem'
import TodoList from './features/todos/TodoList'

function App({ props }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Test Todo App</h2>
      </header>
      <TodoList />
      <TodoListItem />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { props: state.todos };
};

export default connect(mapStateToProps, null)(App);
