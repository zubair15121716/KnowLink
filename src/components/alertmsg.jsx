import React from 'react';
import Alert from '@mui/material/Alert';

const Alertmsg = ({ severity, children }) => {
  return (
    <Alert severity={severity}>
      {children}
    </Alert>
  );
}

export default Alertmsg;