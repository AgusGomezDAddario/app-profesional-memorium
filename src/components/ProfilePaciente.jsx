import React from 'react';
import { useParams } from 'react-router-dom';

export const ProfilePaciente = () => {
    const { pacienteId } = useParams();
    return (
        <div>
            <h1>ProfilePaciente</h1>
        </div>
    )
}