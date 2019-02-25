import React from 'react';

// const itemLi = (item, deleteItem) => (
//     <li key={item.key} onClick={() => deleteItem(item.key)}>{item.text}</li>
// );

const TodoItems = (props) => (
    <div>
        <h1>TodoItems</h1>
        <ul>
            {
                props.items.map(item => (
                        <li key={item.key} onClick={() => props.deleteItem(item.key)}>{item.text}</li>
                    )
                )
            }
        </ul>
    </div>
)

export default TodoItems;