import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, useState, useImperativeHandle } from 'react';

export const SimpleSnackbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleClick,
  }));

  const reloadPage = () => {
    window.location.reload();
  }

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={reloadPage}>
        ACTUALIZAR
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Anotación guardada"
        action={action}
      />
    </div>
  );
});

// export default SimpleSnackbar;