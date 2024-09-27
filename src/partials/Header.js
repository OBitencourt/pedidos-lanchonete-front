import React, {useState} from 'react'


import {
    Typography,
    Container,
    Button,
    Toolbar,
    AppBar
} from '@mui/material/';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


const Header = () => {



  const [menuOpen, setMenuOpen] = useState(false)

  const [selectedButton, setSelectedButton] = useState('')

  const handleToggleMenu = (selected) => {
    setMenuOpen(!menuOpen)
    setSelectedButton(selected)
    
  }

  const renderMenu = () => {

    switch (selectedButton) {
        case 'products':
            
            return (
                <List>
                    <ListItem button > 
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>         
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InventoryIcon />
                        </ListItemIcon>
                        <ListItemText>Products</ListItemText>         
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText>Add Product</ListItemText>         
                    </ListItem>
                </List>
            );
        
    
        case 'customers':

            return (
                <List>
                    <ListItem button > 
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>         
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText>Customers</ListItemText>         
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>Add Customer</ListItemText>         
                    </ListItem>
                </List>
            );
        
        case 'orders': 

            return (
                <List>
                    <ListItem button > 
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>         
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText>Orders</ListItemText>         
                    </ListItem>               
                </List>
            );
        
        default: return('')
    }
  } 


  return (
    <>
    
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
                
            onClick={() => handleToggleMenu('products')}
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Products
          </Button>

          <Button
                
            onClick={() => handleToggleMenu('customers')}
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Customers
          </Button>

          <Button
                
            onClick={() => handleToggleMenu('orders')}
            sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}
          >
            Orders
          </Button>
                   
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        {renderMenu()}
    </Drawer>
    </>
  );
}
export default Header;
