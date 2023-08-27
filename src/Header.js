import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  margin-right: 1rem;
  position: relative;

  &:hover .dropdown-content {
    display: block;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #007bff;
  padding: 1rem;
  display: none;
  top: 100%;
  left: 0;
`;

const MenuItem = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <DropdownButton>
          Hotel
          <DropdownContent className="dropdown-content">
            <MenuItem href="/">Hotel Info</MenuItem>
            <MenuItem href="/team">Team</MenuItem>
          </DropdownContent>
        </DropdownButton>
        <Link to="/rooms">
          <DropdownButton>Rooms</DropdownButton>
        </Link>
        <a href="/neighborhood">
          <DropdownButton>Neighborhood</DropdownButton>
        </a>
        <a href="/faq">
          <DropdownButton>FAQ</DropdownButton>
        </a>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
