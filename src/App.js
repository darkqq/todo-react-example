import TodoItem from "./components/todoItem/TodoItem";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([
        {
            text: 'text',
            date: new Date().toString().slice(0, 10),
            checked: true,
            id: new Date().getTime().toString()
        },
        {
            text: 'text',
            date: new Date().toString().slice(0, 10),
            checked: false,
            id: new Date().getTime().toString() + '10'
        }
    ]);

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div>
            {items.map(item => {
                return <TodoItem
                    handleClickRemove={(id) => removeItem(id)}
                    key={item.id}
                    item={item}
                />
            })}
        </div>
    );
}

export default App;
