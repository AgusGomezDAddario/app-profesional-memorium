import { useState, useEffect } from "react";
import fetchScores from "../firebase/config.js";

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
  const porcentajeAciertos =
    totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
  return porcentajeAciertos.toFixed(2);
}

export function usePacientes() {
    const [pacientesDataFirebase, setPacientesDataFirebase] = useState([]);
  
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
            desempenoGlobal: 0,
            historial: establecerHistorialJugadorFirebase(pacienteFirebase),
          }));
          setPacientesDataFirebase(mappedPacientesFirebase);
        } catch (error) {
          console.error("Error fetching scores:", error);
        }
      }
  
      getPacientes();
    }, []);
  
    return pacientesDataFirebase;
  }

export function establecerHistorialJugadorFirebase(paciente) {
  const historial = [];
  const partidas_nulas = [];

  partidas_nulas.push({
    aciertos: 0,
    errores: 0,
    tiempo: 0,
    facilitaciones: 0,
  });

  //Para el resto de los juegos, previsoriamente se van a cargar con valores nulos
  for (let i = 0; i < 2; i++) {
    historial.push({
      juego: (i + 1).toString(),
      aciertos: 0,
      errores: 0,
      partidas: partidas_nulas,
    });
  }

  const partidas_go_no_go = [];
  const partidas_orderium = [];
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
      aciertos: 0,
      errores: 0,
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
      aciertos: 0,
      errores: 0,
      partidas: partidas_orderium,
    });
  }

  historial.push({
    juego: "5",
    aciertos: 0,
    errores: 0,
    partidas: partidas_nulas,
  });
  return historial;
}

export function calcularPorcentajeAciertosPorJuego(historial) {
  let totalCorrect = 0;
  let totalAttempts = 0;

  totalCorrect += historial.aciertos;
  totalAttempts += historial.errores + historial.aciertos;

  const porcentajeAciertos =
    totalAttempts > 0 ? (totalCorrect * 100) / totalAttempts : 0;
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

    paciente.historial.forEach((entry, index) => {
        console.log(`Juego ${index} en historial: ${entry.juego}`);
    });

    // Convert juego to numeric string
    const juegoNumeric = juego.replace(/\D/g, "");

    const juegoHistorial = paciente.historial.find((entry) => entry.juego === juegoNumeric);
    if (!juegoHistorial || !Array.isArray(juegoHistorial.partidas)) {
        console.error(`Partidas no encontradas para el juego ${juego} del paciente con id ${id}`);
        return [];
    }

    const tiempos = juegoHistorial.partidas.map((partida) => partida.tiempo);
    const tiemposChart = tiempos.join(", ");
    return tiempos;
}
