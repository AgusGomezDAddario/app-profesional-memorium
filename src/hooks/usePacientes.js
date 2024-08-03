import { useState, useEffect } from "react";
import { pacientes } from "../mocks/pacientes";

export function usePacientes() {
    const [pacientesData, setPacientesData] = useState([]);

    function calcularPorcentajeAciertos(globalScores) {
        let totalCorrect = 0;
        let totalAttempts = 0;
        
        for (let key in globalScores) { // Iterar sobre las claves de globalScores
            const game = globalScores[key]; // Acceder a cada objeto de juego
            totalCorrect += game.scorecorrect; // Sumar los aciertos correctos
            totalAttempts += game.scorecorrect + game.scoreincorrect; // Sumar intentos totales
        }
        
        const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0; // Evitar división por cero
        return porcentajeAciertos.toFixed(2); // Redondear a dos decimales
    }

    useEffect(() => {
        if (!Array.isArray(pacientes)) return;

        const mappedPacientes = pacientes.map((paciente) => ({
            id: paciente.dni,
            nombre: paciente.name,
            edad: paciente.age,
            condicion: paciente.condition,
            desempenoGlobal: calcularPorcentajeAciertos(paciente.globalScores),
        }));
        setPacientesData(mappedPacientes);
    }, [pacientes]);
    return pacientesData;
}