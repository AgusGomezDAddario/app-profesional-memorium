import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const MoreInformationButton = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <ControlPointIcon />
      </IconButton>
    </Stack>
  );
}