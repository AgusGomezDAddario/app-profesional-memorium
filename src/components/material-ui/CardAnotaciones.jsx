import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getAnotacionesFromBD } from '../../pacientesInfo/pacientesAnotaciones.js';
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [anotaciones, setAnotaciones] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAnotacionesFromBD(id);
      setAnotaciones(data);
    };
    fetchData();
  }, [id]);
  console.log(anotaciones);
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
