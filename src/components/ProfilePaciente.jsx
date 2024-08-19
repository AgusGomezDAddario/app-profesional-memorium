import React from 'react';
import { useParams } from 'react-router-dom';

export const ProfilePaciente = () => {
    const { id } = useParams();
    // const [paciente, setPaciente] = useState(null);


    return (
        <div>
            <h1>ProfilePaciente</h1>
            <h2>{id}</h2>
        </div>
    )
}