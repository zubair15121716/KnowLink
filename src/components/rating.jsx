import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Ratingstars({handlechange}){
    const [editorval, setEDval] = useState('');
    
        return (
            <>
            <Typography component="legend">Give Rating</Typography>
            <Rating sx={{marginLeft:"4vh"}}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            /> 
            </>
        );      
}

export default Rating


 