import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Title = styled.h1`
  font-family: 'Ubuntu Condensed', sans-serif;
  text-align: center;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
`;

const activeClassName = 'link-selected';

const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  color: white;
  text-decoration: none;

  &.${activeClassName} {
    text-decoration: underline;
  }
`; 

const ListItem = styled.li`
  list-style-type: none;
`;

const Header = () => {
  return (
    <header style={headerStyle}>
      <Title>TODOLIST</Title>
      <NavContainer>
        <StyledLink exact to="/" activeClassName={activeClassName}>
          <ListItem>APP</ListItem>
        </StyledLink>
        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <StyledLink to="/info" activeClassName={activeClassName}>
          <ListItem>INFO</ListItem>
        </StyledLink>
      </NavContainer>
    </header>
  );
};

const headerStyle = {
  //borderBottom: 'dashed',
  //backgroundColor: '#6E2C31',
  backgroundColor: '#333333',
  color: 'white',
};

export default Header;
