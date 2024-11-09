import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const SimpleBackdrop = ({ open }) => {
  return (
    <Backdrop open={open} style={{ color: "#fff", zIndex: 1000 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
