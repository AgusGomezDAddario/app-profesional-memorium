import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import WebIcon from '@mui/icons-material/Web';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import FeedIcon from '@mui/icons-material/Feed';
import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from '@aws-amplify/auth';
import Divider from '@mui/material/Divider';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        getCurrentUser().then(user => {
            setCurrentUser(user.username);
        }).catch(error => {
            console.error("Error obteniendo el usuario actual:", error);
        });
    }, []);

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={'Juegos'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <SportsEsportsIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Juegos'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Plataforma'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <WebIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Plataforma'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Memoria de Trabajo'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <PsychologyIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Memoria de Trabajo'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Conozca Memorium'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <DevicesIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Conozca Memorium'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Nuestro Trabajo'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <FeedIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Nuestro Trabajo'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Mi Perfil'} disablePadding>
                    <ListItemButton sx={{color: '#2f5496'}}>
                        <ListItemIcon>
                            <PersonIcon sx={{color: '#2f5496'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Mi Perfil'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <Authenticator>
                    <ListItem key={'Cerrar Sesión'} disablePadding>
                        <ListItemButton onClick={signOut} sx={{color: 'red'}}>
                            <ListItemIcon>
                                <LogoutIcon sx={{color: 'red'}} />
                            </ListItemIcon>
                            <ListItemText primary={'Cerrar Sesión'} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif' }}} />
                        </ListItemButton>
                    </ListItem>
                </Authenticator>
                <ListItem key={'Sesión Actual'} disablePadding>
                    <ListItemText primary={`Sesión iniciada: ${currentUser}`} sx={{'& .MuiTypography-root': { fontFamily: 'Gentium Plus, serif', color: '#2f5496', paddingLeft: '1.2rem' }}} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Button variant="outlined" endIcon={<MenuIcon />} sx={{ color: 'white', backgroundColor: '#2f5496', border: '2px solid white' }} onClick={toggleDrawer(true)}>
                Menú
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}