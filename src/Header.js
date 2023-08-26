import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Hotel Booking App</h1>
    </HeaderContainer>
  );
};

export default Header;
