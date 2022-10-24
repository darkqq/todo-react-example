import './TodoItem.css'
import {useState} from "react";

function TodoItem(props) {
    let [checked, isChecked] = useState(!!props.item.checked);

    return (
        <div className="todo-item">
            <div className="todo-item__checkbox">
                <input
                    onChange={() => isChecked(!checked)}
                    type={'checkbox'} checked={checked}/>
            </div>
            <div className="todo-item__text">
                <input
                    type={'text'} 
                    style={checked ? {textDecoration: 'line-through'} : {}}
                    value={'Text'}
                    disabled={true}/>
            </div>
            <div className="todo-item__actions">
                <button onClick={() => props.handleClickRemove(props.item.id)}>X</button>
                <input
                    type={'text'}
                    value={new Date().toString().slice(0, 10)}/>
            </div>
        </div>)
}

export default TodoItem;