import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Wrapper = styled.div`
  /*background-color: #9A7F6B;*/
  background-color: #d4d4d4;
  display: flex;
  height: 2.25em;
  border-bottom: solid 5px #333333;
`;

const InputBox = styled.input`
  flex: 1;
  min-width: 10px;
  background-color: transparent;
  border: none;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
`;

const InputBtn = styled.button`
  background-color: #666666;
  border: none;
  border-radius: 0;
  font-family: 'Ubuntu', sans-serif;
  color: white;
`;

const TaskAdder = (props) => {
  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();

    const text = inputRef.current.value;

    if (text.length > 0) {
      const newTodo = {
        id: uuidv4(),
        text,
        checked: false,
      };

      props.dispatch({
        type: 'ADD',
        newTodo,
      });
    }

    inputRef.current.value = '';
  };

  return (
    <Wrapper>
      <InputBox ref={inputRef} placeholder="ENTER A TASK TO BE DONE" />
      <InputBtn onClick={handleAdd}>ADD</InputBtn>
    </Wrapper>
  );
};

// const inputStyle = {
//     flex: '1',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '1.25em',
//     fontWeight: 'light',
//     fontStyle: 'italic',
//     textAlign: 'center',
// }

// const btnStyle = {
//     flex: 'none',
//     backgroundColor: 'transparent',
//     border: 'none',
// }

export default TaskAdder;
