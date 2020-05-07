import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
    text-align: center;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListItem = styled.li`
    list-style-type: none;
`;

const Header = () => {
    return (
        <header style={headerStyle}>
            <Title>TODOLIST</Title>
            <nav>
                <NavList>
                    <Link to="/info"><ListItem>INFO</ListItem></Link>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <Link to="/"><ListItem>APP</ListItem></Link>
                </NavList>
            </nav>
        </header>
    );
};

const headerStyle = {
    borderBottom: 'dashed'
}
  

export default Header;