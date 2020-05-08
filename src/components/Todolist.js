import React, { useState } from 'react';
import TaskAdder from './Todolist/TaskAdder';
import Task from './Todolist/Task';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Todolist = () => {
    const testState = [
        {id: 0, text: 'Buy milk', checked: false},
        {id: 1, text: 'Do homework', checked: true}
    ];
    
    const [tasks, setTasks] = useState(testState);
    
    return (
        <Wrapper>
            <TaskAdder />
            {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} checked={task.checked} />)}
        </Wrapper>
    );
}

export default Todolist;
