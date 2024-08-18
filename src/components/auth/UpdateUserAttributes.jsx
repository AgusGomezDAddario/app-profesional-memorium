import React from 'react';
import { updateUserAttribute } from 'aws-amplify/auth';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Form from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './UpdateUserAttributes.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

// async function handleUpdateUserAttribute(attributeKey, value) {
//   try {
//     const output = await updateUserAttribute({
//       userAttribute: {
//         attributeKey,
//         value
//       }
//     });
//     handleUpdateUserAttributeNextSteps(output);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function handleUpdateUserAttributeNextSteps(output) {
//   const { nextStep } = output;

//   switch (nextStep.updateAttributeStep) {
//     case 'CONFIRM_ATTRIBUTE_WITH_CODE':
//       const codeDeliveryDetails = nextStep.codeDeliveryDetails;
//       console.log(
//         `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
//       );
//       break;
//     case 'DONE':
//       console.log(`attribute was successfully updated.`);
//       break;
//   }
// }

export const UpdateUser = () => {
    return (
        <Card sx={{ maxWidth: '60em', justifySelf: 'center', margin: '0 auto', marginTop: '2em' }}>
            <CardHeader sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }}
                title="Actualizar información de usuario"
                subheader="Ingrese la información a modificar"
            />
            <CardContent>
                <Form>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="given_name" label="Nombre" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="family_name" label="Apellido" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="custom:matricula" label="Matrícula" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="password" label="Contraseña" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="confirm_password" label="Repetir Contr." variant="outlined" />
                            </Grid>
                        </Grid>
                        <Divider sx={{paddingTop: '1.3rem'}} />
                        <Link to='/login' >
                            <Button sx={{ color: '#2f5496' }}>
                                <ListItemText primary={'Volver'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                            </Button>
                        </Link>
                        <Button sx={{ color: 'green' }}>
                            <ListItemText primary={'Enviar'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                        </Button>
                    </Box>
                </Form>
            </CardContent>
        </Card>
    )
}