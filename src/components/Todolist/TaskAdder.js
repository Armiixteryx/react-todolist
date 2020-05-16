import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #9A7F6B;
    display: flex;
    height: 2.25em;
`;

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
        <Wrapper>
            <input style={inputStyle} ref={inputRef} placeholder="ENTER A TASK TO BE DONE"></input>
            <button style={btnStyle} onClick={handleAdd}>ADD</button>
        </Wrapper>
    );
}

const inputStyle = {
    flex: '1',
    backgroundColor: 'transparent',
    border: 'none',
}

const btnStyle = {
    flex: 'none',
    backgroundColor: 'transparent',
    border: 'none',
}

export default TaskAdder;
