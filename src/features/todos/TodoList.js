import React, {useState} from 'react'
import {TextField , Button } from '@mui/material';
import { useDispatch } from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    let [todo, setTodo] = useState("");
    let addTodo = () => {
        dispatch({ type: "addTodos", payload: todo });
        setTodo("");
    };
    let changeTodohandler = (e) => {
        setTodo(e.target.value);
    };
    return (
            <form>
            <TextField className="todo_form" id="outlined-basic" label="Make Todo" variant="outlined" style={{width:"0px 5px"}} size="small" value={todo}
                       onChange={changeTodohandler} />
            <Button variant="contained" color="primary" onClick={addTodo}  >Add Todo</Button>
            </form>
    )
}

export default TodoList
