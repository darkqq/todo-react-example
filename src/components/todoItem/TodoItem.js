import './TodoItem.css'
import {useState} from "react";

function TodoItem(props) {
    let [checked, isChecked] = useState(!!props.item.checked);

    return (
        <div className="todo-item" style={props.style}>
            <div className="todo-item__checkbox">
                <input
                    onChange={() => isChecked(!checked)}
                    defaultChecked={checked}
                    type={'checkbox'}/>
            </div>
            <div className="todo-item__text">
                <input
                    type={'text'} 
                    style={checked ? {textDecoration: 'line-through'} : {}}
                    value={props.item.text}
                    disabled={true}
                    readOnly={true}/>
            </div>
            <div className="todo-item__actions">
                <button onClick={() => props.handleClickRemove(props.item.id)}>X</button>
                <input
                    type={'text'}
                    defaultValue={new Date().toString().slice(0, 10)}/>
            </div>
        </div>)
}

export default TodoItem;