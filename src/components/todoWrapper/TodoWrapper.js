import TodoItem from '../todoItem/TodoItem';
import './TodoWrapper.css'
import {useState} from "react";

function TodoWrapper(props){
    return (
        <div class="todo-wrapper">
            <div class="title">
                <div class="title__delete-btn">
                    <button>Delete All</button>
                </div>

                <div class="title__text">
                    <input type='text'/>
                </div>

                <div class="title__add-btn">
                    <button>Add</button>
                </div>
            </div>

        </div>)
}

export default TodoWrapper;