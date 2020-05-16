import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    border-bottom: solid 1px gray;
    height: 2.25em;
    background-color: #fafafa;
`;

const TaskElement = styled.div`
    background-color: transparent;
    border: none;
`

const TaskTextBox = styled(TaskElement)`
    flex-grow: 1; 
`;

const TaskButton = styled(TaskElement)`
`;

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
        <Wrapper>
            <input type="checkbox" checked={props.checked} onChange={handleCheck} />
            <TaskTextBox as="input" value={value} onChange={onChangeHandler} disabled={editDisabled} ref={textRef} onBlur={() => handleEdit()} onKeyUp={handleKeyUp} />
            <TaskButton as="button" id="change-task-text" onClick={editBtnHandler}>EDIT</TaskButton>
            <TaskButton as="button" id="delete-task" onClick={handleDelete}>DELETE</TaskButton>
        </Wrapper>
    );
}

export default Task;
