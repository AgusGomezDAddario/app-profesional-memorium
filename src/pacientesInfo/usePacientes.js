import { useState, useEffect } from "react";
import pacientes from "./pacientes";

function calcularPorcentajeAciertos(globalScores) {
    let totalCorrect = 0;
    let totalAttempts = 0;
    
    for (let key in globalScores) {
        const game = globalScores[key];
        for (let i = 1; i <= Object.keys(game).length; i++) {
            if (game[i]) {
                totalCorrect += game[i].scorecorrect;
                totalAttempts += game[i].scorecorrect + game[i].scoreincorrect;
            }
        }
    }
    const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
    return porcentajeAciertos.toFixed(2);
}

export function usePacientes() {
    const [pacientesData, setPacientesData] = useState([]);

    useEffect(() => {
        if (!Array.isArray(pacientes)) return;

        const mappedPacientes = pacientes.map((paciente) => ({
            id: paciente.dni,
            nombre: paciente.name,
            edad: paciente.age,
            desempenoGlobal: calcularPorcentajeAciertos(paciente.globalScores),

            historial: Object.entries(paciente.globalScores).map(([juego, scores]) => ({
                juego: juego.replace(/\D/g, ''), // Eliminar todo excepto los dígitos
                partidas: Object.entries(scores).map(([num, partida]) => ({
                    aciertos: partida.scorecorrect,
                    errores: partida.scoreincorrect,
                    tiempo: partida.time,
                    facilitaciones: partida.facilitations,
                })),
            })),
        }));
        setPacientesData(mappedPacientes);
    }, [pacientes]);
    return pacientesData;
}

export function calcularPorcentajeAciertosPorJuego(historial) {
    let totalCorrect = 0;
    let totalAttempts = 0;
    
    totalCorrect += historial.aciertos; 
    totalAttempts += historial.errores + historial.aciertos;
    
    const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
    return porcentajeAciertos.toFixed(2); 
}

export function calcularAciertosPorJuego(scores) {
    let totalCorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        if (scores[i] && scores[i].scorecorrect !== undefined) {
            totalCorrect += scores[i].scorecorrect;
        }
    }
    return totalCorrect;
}

export function calcularErroresPorJuego(scores) {
    let totalIncorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        if (scores[i] && scores[i].scoreincorrect !== undefined) {
            totalIncorrect += scores[i].scoreincorrect;
        }
    }
    return totalIncorrect;
}