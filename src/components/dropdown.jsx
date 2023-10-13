import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function CustomMenu({ buttonText, menuItems ,handleselection}) {
  const [anchorEl, setanchorEl] = React.useState(null);
  const [selection, setselection] = React.useState(null);
  const open = Boolean(anchorEl);

  const handledrop =(item)=>{
    setselection(item);
    handleselection(item);
  }

  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <div>
      <Button 
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{fontSize:"1.1rem",color:'rgb(206, 206, 206)',fontFamily:"Poppins"}}
      >
        {buttonText}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem  sx={{color:'white',backgroundColor:'black',paddingTop:'0',paddingBottom:'0'}}  key={index} onClick={()=>{
            handleClose();
            handledrop(item);}} >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default CustomMenu;