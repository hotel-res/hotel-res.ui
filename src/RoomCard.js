import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  color: #555;
`;

const RoomCard = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default RoomCard;
