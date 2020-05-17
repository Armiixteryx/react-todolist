import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../links-styles.css';

// const Title = styled.header`
//     font-family: Lobster;
// `

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

const ListItem = styled.li`
    list-style-type: none;
`;

const Header = () => {
    return (
        <header style={headerStyle}>
            <Title>TODOLIST</Title>
            <NavContainer>
                <NavLink exact to="/" activeClassName="link-selected"><ListItem>APP</ListItem></NavLink>
                <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <NavLink class="link" to="/info" activeClassName="link-selected"><ListItem>INFO</ListItem></NavLink>
            </NavContainer>
        </header>
    );
};

const headerStyle = {
    //borderBottom: 'dashed',
    //backgroundColor: '#6E2C31',
    backgroundColor: '#333333',
    color: 'white',
} 

export default Header;
