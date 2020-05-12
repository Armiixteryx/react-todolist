import React, { useState, useRef, useEffect } from 'react';

const Task = props => {
    // Task text
    const [value, setValue] = useState(props.text);
    
    // Edit text permission
    const [editDisabled, setEditDisabled] = useState(true);
    
    const textRef = useRef(null);
    
    useEffect(() => {
        if (textRef !== null && !editDisabled) {
            textRef.current.focus();
        }
    });
    
    const onChangeHandler = e => {
        setValue(e.target.value);
    };
    
    const editBtnHandler = e => {
        e.preventDefault();
        setEditDisabled(false);
    };
    
    const handleEdit = e => {
        setEditDisabled(true);
        props.dispatch({
            type: 'EDIT',
            id: props.id,
            text: value
        });
    };
    
    const handleCheck = e => {
        props.dispatch({
            type: 'CHECKER',
            id: props.id
        });
    };
    
    const handleDelete = e => {
        props.dispatch({
           type: 'DELETE',
           id: props.id
        });
    };
    
    const handleKeyUp = e => {
        if (e.key === 'Enter')
            handleEdit();
    };
    
    return (
        <div>
            <input type="checkbox" checked={props.checked} onChange={handleCheck} />
            <input value={value} onChange={onChangeHandler} disabled={editDisabled} ref={textRef} onBlur={() => handleEdit()} onKeyUp={handleKeyUp} />
            <button id="change-task-text" onClick={editBtnHandler}>EDIT</button>
            <button id="delete-task" onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default Task;
