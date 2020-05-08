import React from 'react';

const Task = props => {
    console.log(props);
    return (
        <div>
            <input type="checkbox" checked={props.checked} />
            <input value={props.text} />
            <button id="change-task-text">CHANGE</button>
            <button id="delete-task">DELETE</button>
        </div>
    );
}

export default Task;
