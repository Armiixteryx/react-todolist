import React, { useReducer } from 'react';
import TaskAdder from './Todolist/TaskAdder';
import Task from './Todolist/Task';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const testState = [];

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.newTodo];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'EDIT':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, text: action.text}
                } else {
                    return todo;
                }
            });
        case 'CHECKER':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, checked: !todo.checked}
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const Todolist = () => {
    
    const [tasks, dispatch] = useReducer(tasksReducer, testState);
    
    return (
        <Wrapper>
            <TaskAdder dispatch={dispatch}/>
            {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} checked={task.checked} dispatch={dispatch} />)}
        </Wrapper>
    );
}

export default Todolist;
