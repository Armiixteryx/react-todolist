import React from 'react';
import styled from 'styled-components';

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
                    <ListItem>INFO</ListItem>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <ListItem>APP</ListItem>
                </NavList>
            </nav>
        </header>
    );
};

const headerStyle = {
    borderBottom: 'dashed'
}
  

export default Header;