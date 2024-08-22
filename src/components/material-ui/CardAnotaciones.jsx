import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getAnotacionesFromBD } from '../../pacientesInfo/pacientesAnotaciones.js';
import { useParams } from "react-router-dom";

const CustomCardContent = ({ content, fecha }) => {
  content = content || "No hay anotaciones";
  return (
    <CardContent>
      <Typography sx={{ fontFamily: 'Gentium Plus', fontSize: '1.5rem' }} color="text.primary">
        {content}
      </Typography>
      <Typography sx={{ fontFamily: 'Gentium Plus', fontSize: '1.2rem' }}>
        {fecha}
      </Typography>
    </CardContent>
  );
};

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

  return (
    <Box sx={{ maxWidth: '300px'}}>
      {anotaciones.map((anotacion, index) => (
        <Card key={index} variant="outlined" sx={{margin: '10px'}}>
          <CustomCardContent content={anotacion.anotacion} fecha={anotacion.date} />
        </Card>
      ))}
    </Box>
  );
};