import TodoItem from '../todoItem/TodoItem';
import './TodoWrapper.css'
import {useState} from "react";

function TodoWrapper() {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
    }

    function addItem(text) {
        if (!text) {
            return;
        }

        let newItems = [...items];

        newItems.push(
            {
                text: text,
                date: new Date().toString().slice(0, 10),
                checked: false,
                id: new Date().getTime().toString()
            }
        )
        setText('');
        setItems(newItems);
    }


    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="todo-wrapper">
            <div className="title">
                <div className="title__delete-btn">
                    <button>Delete All</button>
                </div>
                <div className="title__text">
                    <input onChange={handleTextChange} type='text' value={text}/>
                </div>
                <div className="title__add-btn">
                    <button onClick={() => addItem(text)}>Add</button>
                </div>
            </div>


            {items.map(item => {
                return <TodoItem
                    style = {{backgroundColor: 'red'}}
                    handleClickRemove={(id) => removeItem(id)}
                    key={item.id}
                    item={item}
                />
            })}
        </div>
    )
}

export default TodoWrapper;