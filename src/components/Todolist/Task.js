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
  font-family: 'Ubuntu', sans-serif;
`;

const TaskTextBox = styled(TaskElement)`
  flex-grow: 1;
  min-width: 10px;
  background-color: #d4d4d4;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.1em;

  :enabled {
    color: ${props => props.checked ? 'black' : 'inherit'};
    text-decoration: ${props => props.checked ? 'none' : 'inherit'};
    font-style: ${props => props.checked ? 'normal' : 'inherit'};
  }

  :disabled {
    /* color: initial; */
    background-color: #fafafa;
  }

  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  font-style: ${props => props.checked ? 'italic' : 'normal'};
  color: ${props => props.checked ? '#757575' : 'black'};
`;

const TaskButton = styled(TaskElement)`
  background-color: #666666;
  color: white;
  font-stretch: condensed;
  border-radius: 0;
`;

const TaskCheckBox = styled.input`
  margin: 10px;
`;

const Task = (props) => {
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

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const editBtnHandler = (e) => {
    e.preventDefault();
    setEditDisabled(false);
  };

  const handleEdit = (e) => {
    setEditDisabled(true);
    props.dispatch({
      type: 'EDIT',
      id: props.id,
      text: value,
    });
  };

  const handleCheck = (e) => {
    props.dispatch({
      type: 'CHECKER',
      id: props.id,
    });
  };

  const handleDelete = (e) => {
    props.dispatch({
      type: 'DELETE',
      id: props.id,
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') handleEdit();
  };

  return (
    <Wrapper>
      <TaskCheckBox
        type="checkbox"
        checked={props.checked}
        onChange={handleCheck}
      />
      <TaskTextBox
        as="input"
        checked={props.checked}
        value={value}
        onChange={onChangeHandler}
        disabled={editDisabled}
        ref={textRef}
        onBlur={() => handleEdit()}
        onKeyUp={handleKeyUp}
      />
      <TaskButton as="button" id="change-task-text" onClick={editBtnHandler}>
        EDIT
      </TaskButton>
      <TaskButton as="button" id="delete-task" onClick={handleDelete}>
        DELETE
      </TaskButton>
    </Wrapper>
  );
};

export default Task;
