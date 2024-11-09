import { useState, useEffect } from "react";
import fetchScores from "../firebase/config.js";

export function usePacientes() {
  const [pacientesDataFirebase, setPacientesDataFirebase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPacientes() {
      try {
        const data = await fetchScores();
        if (!Array.isArray(data)) {
          console.error("fetchScores did not return an array:", data);
          return;
        }

        const mappedPacientesFirebase = data.map((pacienteFirebase) => ({
          id: pacienteFirebase.dni,
          nombre: pacienteFirebase.name,
          edad: pacienteFirebase.age,
          historial: establecerHistorialJugadorFirebase(pacienteFirebase),
          desempenoGlobal: calcularPorcentajeAciertos(establecerHistorialJugadorFirebase(pacienteFirebase)),
        }));
        setPacientesDataFirebase(mappedPacientesFirebase);
      } catch (error) {
        console.error("Error fetching scores:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getPacientes();
  }, []);

  return { pacientesDataFirebase, loading, error };
}

export function establecerHistorialJugadorFirebase(paciente) {
    const historial = [];

    const partidas_memory_game = [];
    const partidas_numerium = [];
    const partidas_go_no_go = [];
    const partidas_orderium = [];
    const partidas_abecedarium = [];

    if (Array.isArray(paciente.memoryGame)) {
        for (let i = 0; i < paciente.memoryGame.length; i++) {
            const partida = paciente.memoryGame[i];
            partidas_memory_game.push({
                aciertos: partida.correct,
                errores: partida.incorrect,
                tiempo: partida.timeSpent,
                dificultad: partida.difficulty,
            });
        }
        historial.push({
            juego: "1",
            aciertos: calcularAciertosPorJuego(partidas_memory_game),
            errores: calcularErroresPorJuego(partidas_memory_game),
            partidas: partidas_memory_game,
        });
    }

    if (Array.isArray(paciente.numerium)) {
        for (let i = 0; i < paciente.numerium.length; i++) {
            const partida = paciente.numerium[i];
            partidas_numerium.push({
                aciertos: partida.correct,
                errores: partida.incorrect,
                tiempo: partida.timeSpent,
                dificultad: partida.difficulty,
            });
        }
        historial.push({
            juego: "2",
            aciertos: calcularAciertosPorJuego(partidas_numerium),
            errores: calcularErroresPorJuego(partidas_numerium),
            partidas: partidas_numerium,
        });
    }

    if (Array.isArray(paciente.gonoGo)) {
        for (let i = 0; i < paciente.gonoGo.length; i++) {
            const partida = paciente.gonoGo[i];
            partidas_go_no_go.push({
                aciertos: 1,
                errores: parseInt(partida.attempts) - 1,
                tiempo: 0,
                facilitaciones: partida.facilitations,
            });
        }
        historial.push({
            juego: "3",
            aciertos: calcularAciertosPorJuego(partidas_go_no_go),
            errores: calcularErroresPorJuego(partidas_go_no_go),
            partidas: partidas_go_no_go,
        });
    }

    if (Array.isArray(paciente.orderium)) {
        for (let i = 0; i < paciente.orderium.length; i++) {
            const partida = paciente.orderium[i];
            partidas_orderium.push({
                aciertos: 1,
                errores: parseInt(partida.attempts) - 1,
                tiempo: partida.timeSpent,
                facilitaciones: partida.facilitations,
            });
        }
        historial.push({
            juego: "4",
            aciertos: calcularAciertosPorJuego(partidas_orderium),
            errores: calcularErroresPorJuego(partidas_orderium),
            partidas: partidas_orderium,
        });
    }

    if (Array.isArray(paciente.abecedarium)) {
        for (let i = 0; i < paciente.abecedarium.length; i++) {
            const partida = paciente.abecedarium[i];
            partidas_abecedarium.push({
                errores: partida.equivocaciones.reduce((total, num) => total + num, 0),
                aciertos: partida.vecesJugadas,
                tiempo: partida.tiempo,
                palabra: partida.palabra,
            });
        }
        historial.push({
            juego: "5",
            aciertos: calcularAciertosPorJuego(partidas_abecedarium),
            errores: calcularErroresPorJuego(partidas_abecedarium),
            partidas: partidas_abecedarium,
        });
    }
    console.log(historial);
    return historial;
}

export function calcularPorcentajeAciertosPorJuego(juego) {
    let totalCorrect = 0;
    let totalAttempts = 0;

    for (let i = 0; i < juego.partidas.length; i++) {
        totalCorrect += juego.partidas[i].aciertos;
        totalAttempts += juego.partidas[i].errores + juego.partidas[i].aciertos;
    }

    const porcentajeAciertos =
        totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
    return porcentajeAciertos.toFixed(2);
}

export function calcularAciertosPorJuego(scores) {
    let totalCorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        if (scores[i] && scores[i].aciertos !== undefined) {
            totalCorrect += scores[i].aciertos;
        }
    }
    return totalCorrect;
}

export function calcularErroresPorJuego(scores) {
    let totalIncorrect = 0;
    for (let i = 1; i <= Object.keys(scores).length; i++) {
        if (scores[i] && scores[i].errores !== undefined) {
            totalIncorrect += scores[i].errores;
        }
    }
    return totalIncorrect;
}

function calcularPorcentajeAciertos(historial) {
    let totalCorrect = 0;
    let totalAttempts = 0;

    for (const game of historial) {
        for (const partida of game.partidas) {
            totalCorrect += partida.aciertos;
            totalAttempts += partida.aciertos + partida.errores;
        }
    }

    const porcentajeAciertos = totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
    return porcentajeAciertos.toFixed(2);
}

export function obtenerTiemposDePaciente(pacientes, id, juego) {
    const paciente = pacientes.find((paciente) => paciente.id.trim().localeCompare(id.trim()) === 0);
    if (!paciente) {
        console.error(`Paciente con id ${id} no encontrado`);
        return [];
    }

    if (!paciente.historial || !Array.isArray(paciente.historial)) {
        console.error(`Historial no encontrado para el paciente con id ${id}`);
        return [];
    }

    // Convert juego to numeric string
    const juegoNumeric = juego.replace(/\D/g, "");

    const juegoHistorial = paciente.historial.find((entry) => entry.juego === juegoNumeric);
    if (!juegoHistorial || !Array.isArray(juegoHistorial.partidas)) {
        console.error(`Partidas no encontradas para el juego ${juego} del paciente con id ${id}`);
        return [];
    }

    const tiempos = juegoHistorial.partidas.map((partida) => partida.tiempo);
    // const tiemposChart = tiempos.join(", ");
    return tiempos;
}