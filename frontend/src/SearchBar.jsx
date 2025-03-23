import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchAppBar({ onMenuClick }) { 
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(33, 31, 31)" }}> 
        <Toolbar>
          {/* Menu Icon - Calls onMenuClick when clicked */}
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={onMenuClick} // Trigger the menu toggle
          >
            <MenuIcon />
          </IconButton>

          {/* Logout Button */}
          <Button 
            variant="contained" 
            onClick={handleLogout} 
            sx={{ 
              backgroundColor: "rgb(50, 50, 50)", 
              color: "white", 
              '&:hover': { backgroundColor: "rgb(70, 70, 70)" } 
            }} 
          >
            Logout
          </Button>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: "white", textAlign: "center" }}
          >
            MOVIE RECOMMENDATION
          </Typography>


        </Toolbar>
      </AppBar>
    </Box>
  );
}



 