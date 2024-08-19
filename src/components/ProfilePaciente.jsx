import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import Divider from '@mui/material/Divider';
import DenseTable from './DenseTable.jsx';
import { Link } from 'react-router-dom';

export const ProfilePaciente = () => {
    const { id } = useParams();
    const pacientes = usePacientes();
    const [pacienteProfile, setPacienteProfile] = useState(null);

    useEffect(() => {
        pacientes.forEach((paciente) => {
            if (paciente.id === id) {
                setPacienteProfile(paciente);
            }
        });
    }, [pacientes, id]);

    return (
        <div>
            {pacienteProfile ? (
                <div>
                    <p style={{color: 'white', fontSize: '3rem', marginTop: '0.7rem'}}>{pacienteProfile.nombre}</p>
                    <Divider style={{backgroundColor: 'white'}} />
                    <p style={{color: 'white', fontSize: '1.8rem', marginTop: '0.3rem'}}>Edad: {pacienteProfile.edad}</p>
                    <p style={{color: 'white', fontSize: '1.8rem', marginTop: '0.3rem'}}>Desempeño: {pacienteProfile.desempenoGlobal}%</p>
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <a style={{color: 'white', fontSize: '1.2rem', marginTop: '0.3rem', marginLeft: '1.5rem', display: 'flex', fontFamily: 'Gentium Plus'}}>Volver a Pacientes</a>
                    </Link>
                    <DenseTable id={id}/>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}