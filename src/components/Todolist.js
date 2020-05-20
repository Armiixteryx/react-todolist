import React from 'react';
import TaskAdder from './Todolist/TaskAdder';
import Task from './Todolist/Task';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Todolist = ({tasks, dispatch}) => {
  return (
    <Wrapper>
      <TaskAdder dispatch={dispatch} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          checked={task.checked}
          dispatch={dispatch}
        />
      ))}
    </Wrapper>
  );
};

export default Todolist;
