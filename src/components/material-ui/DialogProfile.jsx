import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { signOut } from '@aws-amplify/auth';
import { Link } from 'react-router-dom';


async function getUserInformation() {
    try {
        const userAttributes = await fetchUserAttributes();
        return {
            family_name: userAttributes.family_name,
            given_name: userAttributes.given_name,
            email: userAttributes.email,
            username: userAttributes.user,
            birthdate: userAttributes.birthdate,
            address: userAttributes.address,
            matricula: userAttributes['custom:matricula'],
        };
    } catch (error) {
        console.log(error);
    }
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogProfile = () => {
    const [userInformation, setuserInformation] = useState({});
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        async function fetchUserInformation() {
            const information = await getUserInformation();
            setuserInformation(information);
            console.log(userInformation);
        }
        fetchUserInformation();
    }, []);

    const handleClickOpen = (event) => {
        event.stopPropagation();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ListItem key={'Mi Perfil'} disablePadding>
                <ListItemButton sx={{ color: '#2f5496' }} onClick={handleClickOpen}>
                    <ListItemIcon>
                        <PersonIcon sx={{ color: '#2f5496' }} />
                    </ListItemIcon>
                    <ListItemText primary={'Mi Perfil'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                </ListItemButton>
            </ListItem>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                >
                <DialogTitle sx={{ color: '#2f5496', fontWeight: 'bold', fontFamily: 'Gentium Plus, serif', fontSize: '1.4rem' }}>{"Perfil del usuario"}</DialogTitle>
                <DialogContent sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif', fontSize: '1.3rem' } }}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <p><strong>Nombre:</strong> {userInformation.given_name}</p>
                        <p><strong>Apellido:</strong> {userInformation.family_name}</p>
                        <p><strong>Email:</strong> {userInformation.given_name}</p>
                        <p><strong>Residencia:</strong> {userInformation.address}</p>
                        <p><strong>Nacimiento:</strong> {userInformation.birthdate}</p>
                        <p><strong>Matricula:</strong> {userInformation.matricula}</p>
                        <p><strong>Pacientes:</strong> 1</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={signOut} sx={{ color: 'red' }}>
                        <ListItemText primary={'Cerrar Sesión'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                    </Button>
                    <Link to='/update-user' >
                        <Button sx={{ color: '#2f5496' }}>
                            <ListItemText primary={'Editar'} sx={{ '& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' } }} />
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
