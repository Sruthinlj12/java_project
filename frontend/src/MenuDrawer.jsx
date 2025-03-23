import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './MenuDrawer.css';

const drawerWidth = 300;
const navItems = ['Movies','Genre','Rating', 'About', 'Contact'];

function MenuDrawer({ mobileOpen, onDrawerClose }) { // Receive mobileOpen and onDrawerClose as props
  const drawer = (
    <Box onClick={onDrawerClose} className="drawer-container">
      <Typography variant="h6" className="drawer-title">
        Movie App
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="drawer-button">
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen} // Controlled by Home.jsx
      onClose={onDrawerClose} // Close when clicking outside
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{ width: drawerWidth, flexShrink: 0 }}
    >
      {drawer}
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};

export default MenuDrawer;
