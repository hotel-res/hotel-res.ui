import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const NavigationHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hotel Res
        </Typography>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          Hotel
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">Hotel Info</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/team">Team</MenuItem>
        </Menu>
        <Button component={Link} to="/book" color="inherit">Book</Button>
        <Button component={Link} to="/rooms" color="inherit">Rooms</Button>
        <Button component={Link} to="/neighborhood" color="inherit">Neighborhood</Button>
        <Button component={Link} to="/faq" color="inherit">FAQ</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;
