import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction, Button, MenuItem, Menu } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../src/assets/logo.png.png';

const Header = () => {
    const [value, setValue] = useState();
    const [age, setAge] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const handleChange = (event) => {
        setAge(event.target.value);
    }

    return (
        <header>
            <div className="header-brand">
                <img src={Logo} alt="logo" />
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ backgroundColor: "#1A73E8", color: "white", marginRight: "16px"}}
                    >
                        Courses <ExpandMoreIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
            <Box>
                <BottomNavigation sx={{ height: "min-content" }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Refer & Earn" sx={{ width: "120px" }} />
                    <BottomNavigationAction label="Resources" />
                    <BottomNavigationAction label="About Us" />
                    <Button variant="contained" sx={{ marginRight: "16px", backgroundColor: "#94A3B833", color: "black" }}>Login</Button>
                    <Button variant="contained">Try for free</Button>
                </BottomNavigation>
            </Box>
        </header>
    );
}

export default Header;