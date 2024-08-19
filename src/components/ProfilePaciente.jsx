import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import Divider from '@mui/material/Divider';

export const ProfilePaciente = () => {
    const { id } = useParams();
    const pacientes = usePacientes();
    const [pacienteProfile, setPacienteProfile] = useState(null);

    useEffect(() => {
        pacientes.forEach((paciente) => {
            if (paciente.id === id) {
                setPacienteProfile(paciente);
                console.log(paciente);
            }
        });
    }, [pacientes, id]);

    return (
        <div>
            <p style={{color: 'white', fontSize: '3rem'}}>{pacienteProfile.nombre}</p>
            <Divider style={{backgroundColor: 'white'}} />
            {pacienteProfile ? (
                <div>
                    <p style={{color: 'white', fontSize: '1.8rem'}}>Edad: {pacienteProfile.edad}</p>
                    <p style={{color: 'white', fontSize: '1.8rem'}}>Desempeño: {pacienteProfile.desempenoGlobal}%</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}