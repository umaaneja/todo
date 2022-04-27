import React from 'react'
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
const TodoListItem = ({ props }) => {
    const dispatch = useDispatch();
    let [todo, setTodo] = useState("");
    let deleteTodo = (todoId) => {
        console.log(todoId)
        dispatch({ type: "deleteTodo", payload: [todoId] });
    };

    return (
        <div class="todo_listing">
            {props.todos.map((todo, i) => {
                return (
                    <List className="todo__list">
                    <ListItem>
                        <ListItemText primary= {todo.todo}  />
                        <DeleteIcon  className="del__item" fontSize="small" style={{opacity:0.7}} onClick={()=>deleteTodo(todo.id)} />
                    </ListItem>
                    </List>
                );
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return { props: state.todos };
};

export default connect(mapStateToProps, null)(TodoListItem);



