import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


const Header = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdminPanelSettingsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap    
            sx={{
              ml: 3,
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Admin Menu
          </Typography>

          <Button
                
            
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Products
          </Button>

          <Button
                
            
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Customers
          </Button>

          <Button
                
            
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Orders
          </Button>
                   
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
