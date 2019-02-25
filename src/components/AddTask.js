import React from 'react';

const AddTask = (props) => (
    <div>
        <h2>Add Task</h2>
        <form onSubmit={props.addItem}>
            <input
                placeholder="Task"
                ref={props.inputElement}
                value={props.currentItem.text}
                onChange={props.handleInput}
            />
            <button type="submit"> Add Task </button>
        </form>
    </div>
);

export default AddTask;