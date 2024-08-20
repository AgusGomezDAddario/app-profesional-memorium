import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontFamily: 'Gentium Plus', fontSize: '1.5rem' }} color="text.primary">
        Anotaciones Paciente
      </Typography>
      <Typography sx={{ fontFamily: 'Gentium Plus' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus id incidunt ex qui corporis iure perferendis corrupti delectus dolor, eveniet placeat exercitationem at fuga repellat illo mollitia saepe. Ducimus!
      </Typography>
    </CardContent>
  </React.Fragment>
);

export const OutlinedCard = () => {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
