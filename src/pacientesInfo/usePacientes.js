import { useState, useEffect } from "react";
import pacientes from "./pacientes";
import fetchScores from '../firebase/config.js';

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
    const [pacientesDataFirebase, setPacientesDataFirebase] = useState([]);

    useEffect(() => {
        fetchScores().then((data) => {
            if (!Array.isArray(data)) {
                console.error("fetchScores did not return an array:", data);
                return;
            }

            const mappedPacientesFirebase = data.map((pacienteFirebase) => ({
                id: pacienteFirebase.dni,
                nombre: pacienteFirebase.name,
                edad: pacienteFirebase.age,
                desempenoGlobal: 0,
        
                // historial: Object.entries(pacienteFirebase.globalScores).map(([juego, scores]) => ({
                //     juego: juego.replace(/\D/g, ''), // Eliminar todo excepto los dígitos
                //     aciertos: calcularAciertosPorJuego(scores),
                //     errores: calcularErroresPorJuego(scores),
                //     partidas: Object.entries(scores).map(([, partida]) => ({
                //         aciertos: partida.scorecorrect,
                //         errores: partida.scoreincorrect,
                //         tiempo: partida.time,
                //         facilitaciones: partida.facilitations,
                //     })),
                // })),
            }));
            setPacientesDataFirebase(mappedPacientesFirebase);
            console.log(mappedPacientesFirebase);
        }).catch((error) => {
            console.error("Error fetching scores:", error);
        });
    }, []);

    useEffect(() => {
        if (!Array.isArray(pacientes)) return;
    
        const mappedPacientes = pacientes.map((paciente) => ({
            id: paciente.dni,
            nombre: paciente.name,
            edad: paciente.age,
            desempenoGlobal: calcularPorcentajeAciertos(paciente.globalScores),
    
            historial: Object.entries(paciente.globalScores).map(([juego, scores]) => ({
                juego: juego.replace(/\D/g, ''), // Eliminar todo excepto los dígitos
                aciertos: calcularAciertosPorJuego(scores),
                errores: calcularErroresPorJuego(scores),
                partidas: Object.entries(scores).map(([, partida]) => ({
                    aciertos: partida.scorecorrect,
                    errores: partida.scoreincorrect,
                    tiempo: partida.time,
                    facilitaciones: partida.facilitations,
                })),
            })),
        }));
    
        setPacientesData(mappedPacientes);
    }, [pacientes, pacientesDataFirebase]);

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

export function obtenerTiemposDePaciente(id, juego) {
    const paciente = pacientes.find((paciente) => paciente.dni === id);
    if (!paciente) {
        console.error(`Paciente con id ${id} no encontrado`);
        return [];
    }

    const scores = paciente.globalScores[juego];
    const tiempos = Object.values(scores).map(score => score.time);
    const tiemposChart = tiempos.join(', ');
    console.log(tiemposChart);
    return tiempos;
}