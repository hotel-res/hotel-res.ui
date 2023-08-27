import React from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';

const PageContainer = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const roomsData = [
    {
      id: 1,
      image: 'standard-rm-logo.png',
      title: 'Standard Room',
      description: 'A comfortable and cozy standard room.',
    },
    {
      id: 2,
      image: 'deluxe-rm-logo.png',
      title: 'Deluxe Room',
      description: 'A luxurious deluxe room with a great view.',
    },
    // Add more room data...
  ];

const HotelInfoPage = () => {
  return (
    <PageContainer>
      <h2>Available Rooms</h2>
      <div>
        {roomsData.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            title={room.title}
            description={room.description}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default HotelInfoPage;
