import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import styled from 'styled-components';

const TaskAdder = props => {
    const inputRef = useRef(null);
    
    const handleAdd = e => {
        e.preventDefault();
        
        const text = inputRef.current.value;
        
        if (text.length > 0) {
            const newTodo = {
                id: uuidv4(),
                text,
                checked: false
            };
            
            props.dispatch({
                type: 'ADD',
                newTodo
            });
        }
        
        inputRef.current.value = '';
    }
    
    return (
        <div>
            <input ref={inputRef} placeholder="ENTER A TASK TO BE DONE"></input>
            <button onClick={handleAdd}>ADD</button>
        </div>
    );
}

export default TaskAdder;
