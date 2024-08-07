import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableLinks() {

    return (
        <Stack direction="row" spacing={5}>
            <Chip
                label="Monitoreo de Pacientes"
                component="a"
                href="#"
                clickable
                sx={{ fontSize: '2rem', fontFamily: 'Gentium Plus', height: '4.5rem', backgroundColor: '#2f5496', color: 'white', '&:hover': {color: '#2f5496', border: '2px solid #2f5496'} }}
            />
            <Chip
                label="Juegos Disponibles"
                component="a"
                href="#"
                clickable
                sx={{ fontSize: '2rem', fontFamily: 'Gentium Plus', height: '4.5rem', backgroundColor: '#2f5496', color: 'white', '&:hover': {color: '#2f5496', border: '2px solid #2f5496'} }}
            />
            <Chip
                label="Como usar la plataforma"
                component="a"
                href="#"
                clickable
                sx={{ fontSize: '2rem', fontFamily: 'Gentium Plus', height: '4.5rem', backgroundColor: '#2f5496', color: 'white', '&:hover': {color: '#2f5496', border: '2px solid #2f5496'} }}
            />
        </Stack>
    );
}
