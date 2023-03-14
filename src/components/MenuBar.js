import React from 'react';
import styled from 'styled-components';

const MenuBar = () => {
  return (
    <Nav>
      <Menu>
        <MenuItem to="hello">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: var(--text);
  color: var(--background);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Logo = styled.a`
    padding: 0.5rem;
    margin-right: 1rem;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Helvetica Neue';
    text-decoration: none;
    color: var(--background);
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.a`
  padding: 0.5rem;
  margin-right: 1rem;
  font-size: 2em;
  font-weight: bold;
  font-family: 'Helvetica Neue';
  text-decoration: none;
  color: var(--background);
  &:hover {
    text-decoration: underline;
  }
`;

export default MenuBar;