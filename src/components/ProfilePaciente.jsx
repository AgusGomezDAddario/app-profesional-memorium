import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import Divider from '@mui/material/Divider';
import DenseTable from './DenseTable.jsx';

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
            {pacienteProfile ? (
                <div>
                    <p style={{color: 'white', fontSize: '3rem'}}>{pacienteProfile.nombre}</p>
                    <Divider style={{backgroundColor: 'white'}} />
                    <p style={{color: 'white', fontSize: '1.8rem'}}>Edad: {pacienteProfile.edad}</p>
                    <p style={{color: 'white', fontSize: '1.8rem'}}>Desempeño: {pacienteProfile.desempenoGlobal}%</p>
                    <DenseTable id={id}/>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}