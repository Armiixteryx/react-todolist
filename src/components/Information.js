import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Ubuntu Condensed', sans-serif;
`;

const RepoLink = styled.a`
  color: initial;
  text-decoration: underline;
`;

const Information = () => {
  return (
    <Wrapper>
      <Title>React Todolist Webapp</Title>
      <p>This is a simple todolist made in React.</p>
      <p>
        The code is available in{' '}
        <RepoLink href="https://github.com/Armiixteryx/react-todolist">
          this repository
        </RepoLink>
        .
      </p>
    </Wrapper>
  );
};

export default Information;
