import { useState, useEffect } from "react";
import pacientes from "./pacientes";

function calcularPorcentajeAciertos(globalScores) {
    let totalCorrect = 0;
    let totalAttempts = 0;
    
    for (let key in globalScores) { // Iterar sobre las claves de globalScores
        const game = globalScores[key]; // Acceder a cada objeto de juego
        for (let i = 1; i <= Object.keys(game).length; i++) {
            totalCorrect += game[i].scorecorrect; // Sumar los aciertos correctos
            totalAttempts += game[i].scorecorrect + game[i].scoreincorrect; // Sumar intentos totales
        }
    }
    const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0; // Evitar división por cero
    return porcentajeAciertos.toFixed(2); // Redondear a dos decimales
}

export function usePacientes() {
    const [pacientesData, setPacientesData] = useState([]);
    const [game, setGame] = useState(1);

    useEffect(() => {
        if (!Array.isArray(pacientes)) return;

        const mappedPacientes = pacientes.map((paciente) => ({
            id: paciente.dni,
            nombre: paciente.name,
            edad: paciente.age,
            desempenoGlobal: calcularPorcentajeAciertos(paciente.globalScores),

            historial: Object.entries(paciente.globalScores).map(([juego, scores]) => ({
                juego: juego,
                aciertos: calcularAciertosPorJuego(scores),
                errores: calcularErroresPorJuego(scores),
            })),
        }));
        setPacientesData(mappedPacientes);
    }, [pacientes]);
    return pacientesData;
}

export function calcularPorcentajeAciertosPorJuego(historial) {
    // let totalCorrect = 0;
    // let totalAttempts = 0;
    
    // totalCorrect += historial.aciertos; 
    // totalAttempts += historial.errores + historial.aciertos;
    
    // const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
    // return porcentajeAciertos.toFixed(2); 
    return 100;
}

export function calcularAciertosPorJuego(scores) {
    let totalCorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        totalCorrect += scores[i].scorecorrect;
    }
    return totalCorrect;
}

export function calcularErroresPorJuego(scores) {
    let totalIncorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        totalIncorrect += scores[i].scoreincorrect;
    }
    return totalIncorrect;
}