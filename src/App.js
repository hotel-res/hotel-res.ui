import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import RoomsPage from './RoomsPage';
import HotelInfoPage from './HotelInfoPage';
import NeighborhoodPage from './NeighborhoodPage';
import FaqPage from './FaqPage';
import TeamPage from './TeamPage';
import BookPage from './BookPage';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HotelInfoPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/neighborhood" element={<NeighborhoodPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
