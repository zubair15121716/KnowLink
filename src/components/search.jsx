import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper } from '@mui/material';
import '../App.css'

function CustomDialog({ buttonText, dialogTitle, dialogContent}) {
  const [open, setOpen] = useState(false);
  const [searchtext,setSearch] =useState('');

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    
  };

  const handleSearch = () => {
    setSearch(searchtext);
    console.log(searchtext);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnter = (e) => {
    if(e.key=='Enter'){
      console.log(searchtext);
      handleClose();
    }
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </Button> */}
      <img className='searchIcon' width={40} height={40} onClick={handleClickOpen} src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png' alt="" />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm' PaperComponent={Paper} PaperProps={{elevation:3}} sx={{fontFamily:'Poppins'}}>
        <DialogTitle sx={{color:'#000000',fontFamily:'Poppins'}}>{dialogTitle}</DialogTitle>
        <DialogContent sx={{color:'#000000',fontFamily:'Poppins'}}>
          <DialogContentText sx={{color:'#000000',fontFamily:'Poppins'}}>
            {dialogContent}
          </DialogContentText>
          <TextField sx={{color:'#000000',fontFamily:'Poppins'}}
            autoFocus
            margin="dense"
            id="search"
            label="Search"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeSearch}
            onKeyDown={handleEnter}
          />
        </DialogContent>
        <DialogActions sx={{fontFamily:'Poppins'}}>
          <Button onClick={()=>{ handleSearch(); handleClose(); }}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog;