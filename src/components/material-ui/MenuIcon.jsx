import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';

export default function ShowMenuButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<MenuIcon />}>
        Menú
      </Button>
    </Stack>
  );
}