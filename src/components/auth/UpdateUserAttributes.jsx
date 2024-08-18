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
import { useState } from 'react';
import { updatePassword } from 'aws-amplify/auth';

// async function handleSendUserAttributeVerificationCode(key) {
//     try {
//       await sendUserAttributeVerificationCode({
//         userAttributeKey: key
//       });
//       console.log(`Verification code sent for attribute ${key}.`);
//     } catch (error) {
//       console.log(error);
//     }
//   }

async function handleUpdateUserAttribute(attributeKey, value) {
    try {
        const output = await updateUserAttribute({
            userAttribute: {
                attributeKey,
                value
            }
        });
        handleUpdateUserAttributeNextSteps(output);
    } catch (error) {
        console.log(error);
    }
}

function handleUpdateUserAttributeNextSteps(output) {
    const { nextStep } = output;

    switch (nextStep.updateAttributeStep) {
        case 'CONFIRM_ATTRIBUTE_WITH_CODE':
            const codeDeliveryDetails = nextStep.codeDeliveryDetails;
            console.log(
                `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
            );
            break;
        case 'DONE':
            console.log(`attribute was successfully updated.`);
            break;
    }
}

async function handleUpdatePassword(oldPassword, newPassword) {
    if (!oldPassword || !newPassword) {
        console.log('Both oldPassword and newPassword are required to change the password.');
        return;
    }
    try {
        await updatePassword({ oldPassword, newPassword });
        console.log('Password updated successfully.');
    } catch (err) {
        console.log(err);
    }
}

export const UpdateUser = () => {
    const [userData, setUserData] = useState({
        given_name: '',
        family_name: '',
        'custom:matricula': '',
        oldPassword: '',
        newPassword: ''
    });

    function submitForm(event) {
        event.preventDefault();
        console.log(userData);
        Object.entries(userData).forEach(([key, value]) => {
            if (value !== '') {
                handleUpdateUserAttribute(key, value);
            }
        });

        if (userData.oldPassword && userData.newPassword) {
            handleUpdatePassword(userData.oldPassword, userData.newPassword);
        }
    }

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.id]: event.target.value,
        });
        console.log("Cambiando")
    }

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
                                <TextField id="given_name" label="Nombre" variant="outlined" onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="family_name" label="Apellido" variant="outlined" onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="custom:matricula" label="Matrícula" variant="outlined" onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="newPassword" label="Contraseña Nueva" variant="outlined" onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <TextField id="oldPassword" label="Contraseña Actual" variant="outlined" onChange={handleInputChange} />
                            </Grid>
                        </Grid>
                        <Divider sx={{ paddingTop: '1.3rem' }} />
                        <Link to='/login' >
                            <Button sx={{ color: '#2f5496' }}>
                                <ListItemText primary={'Volver'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                            </Button>
                        </Link>
                        <Button sx={{ color: 'green' }}>
                            <ListItemText primary={'Enviar'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} onClick={submitForm} />
                        </Button>
                    </Box>
                </Form>
            </CardContent>
        </Card>
    )
}