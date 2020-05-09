import React, { useState, useRef, useEffect } from 'react';

const Task = props => {
    const [editDisabled, setEditDisabled] = useState(true);
    const [value, setValue] = useState(props.text);
    const textRef = useRef(null);
    
    useEffect(() => {
        if (textRef !== null && !editDisabled) {
            textRef.current.focus();
        }
    });
    
    const handleEdit = e => {
        setValue(e.target.value);
    };
    
    const changeBtnHandler = (e) => {
        e.preventDefault();
        setEditDisabled(false);
    };
    
    const handleEditDispatch = e => {
        if (e.key === 'Enter') {
            setEditDisabled(true);
            props.dispatch({
                type: 'EDIT',
                id: props.id,
                text: value
            });
        }
    }
    
    const handleCheck = e => {
        props.dispatch({
            type: 'CHECKER',
            id: props.id
        });
    }
    
    const handleDelete = e => {
        props.dispatch({
           type: 'DELETE',
           id: props.id
        });
    }
    
    return (
        <div>
            <input type="checkbox" checked={props.checked} onChange={handleCheck} />
            <input value={value} onChange={handleEdit} disabled={editDisabled} ref={textRef} onBlur={() => setValue(props.text)} onKeyUp={handleEditDispatch} />
            <button id="change-task-text" onClick={changeBtnHandler}>CHANGE</button>
            <button id="delete-task" onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default Task;
