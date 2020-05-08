import React from 'react';
import TaskAdder from './Todolist/TaskAdder';
import Task from './Todolist/Task';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Todolist = () => {
    return (
        <Wrapper>
            <TaskAdder />
            <Task />
        </Wrapper>
    );
}

export default Todolist;
