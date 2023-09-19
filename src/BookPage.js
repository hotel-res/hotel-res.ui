import React from 'react';
import styled from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Container, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PageContainer = styled.div`
  padding: 2rem;
`;

const BookPage = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      <h1>Hotel Booking</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-in Date"
              value={startDate}
              onChange={handleStartDateChange}
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-out Date"
              value={endDate}
              onChange={handleEndDateChange}
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookPage;
