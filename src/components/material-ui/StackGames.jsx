import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "../Games.css";
import DescriptionIcon from "@mui/icons-material/Description";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CheckIcon from "@mui/icons-material/Check";
import BasicModalGameVideo from "./ModalVideo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const BasicStack = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} sx={{ marginTop: "1.5rem" }}>
        <Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="title-game">Memory Game</h3>
          </div>
          <div style={{ display: "flex" }}>
            <DescriptionIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Memory Game es una herramienta de entrenamiento cognitivo diseñada
              para mejorar la memoria de trabajo visual y espacial. El juego
              presenta una serie de estímulos visuales que el usuario debe
              recordar y reproducir en secuencia.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <PsychologyIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Este juego se basa en el principio de la memoria de trabajo, un
              componente crucial de la función ejecutiva. La memoria de trabajo
              permite el almacenamiento temporal y la manipulación de
              información necesaria para tareas cognitivas complejas. El Memory
              Game se fundamenta en la teoría de Baddeley y Hitch sobre la
              memoria de trabajo, específicamente en el componente de la agenda
              visoespacial.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <EmojiObjectsIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Objetivos:
              <ul>
                <li>
                  Evaluar y mejorar la capacidad de retención visual a corto
                  plazo
                </li>
                <li>Potenciar la atención selectiva y sostenida</li>
                <li>Estimular la flexibilidad cognitiva</li>
              </ul>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <CheckIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Beneficios:
              <ul>
                <li>
                  Mejora en la capacidad de recordar información visual y
                  espacial
                </li>
                <li>Aumento de la concentración y la atención</li>
                <li>
                  Potencial transferencia a actividades de la vida diaria que
                  requieren memoria visual
                </li>
              </ul>
            </p>
          </div>
          {/* <div className="button-center">
            <ColorButton variant="contained">Conozca Memory Game</ColorButton>
          </div> */}
          <BasicModalGameVideo video={"a7O-G3lhkdM"} />
        </Item>
        <Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="title-game">Numerium</h3>
          </div>
          <div style={{ display: "flex" }}>
            <DescriptionIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Numerium es un juego de secuencias numéricas diseñado para
              estimular la memoria de trabajo y la atención. El juego presenta
              secuencias de dígitos que el usuario debe recordar y reproducir,
              con opciones de personalización para adaptar la dificultad.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <PsychologyIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Numerium se basa en el concepto de span de dígitos, una medida
              clásica de la capacidad de la memoria de trabajo. Este juego
              incorpora elementos del test de span de dígitos de la Escala de
              Inteligencia de Wechsler, adaptándolo a un formato interactivo y
              personalizable.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <EmojiObjectsIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Objetivos:
              <ul>
                <li>
                  Evaluar y mejorar la capacidad de la memoria de trabajo
                  auditiva y visual
                </li>
                <li>Potenciar la atención y la concentración</li>
                <li>
                  Desarrollar estrategias de codificación y recuperación de
                  información
                </li>
              </ul>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <CheckIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Beneficios:
              <ul>
                <li>Mejora en la retención de información secuencial</li>
                <li>
                  Incremento en la capacidad de procesamiento de información
                  numérica
                </li>
                <li>
                  Potencial transferencia a actividades que requieren
                  manipulación mental de números
                </li>
              </ul>
            </p>
          </div>
          {/* <div className="button-center">
            <ColorButton variant="contained">Conozca Memory Game</ColorButton>
          </div> */}
          <BasicModalGameVideo video={"fvhIj9yVP4g"} />
        </Item>
        <Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="title-game">Contrarium</h3>
          </div>
          <div style={{ display: "flex" }}>
            <DescriptionIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Contrarium (Go-No-Go) es un juego de control inhibitorio que
              evalúa y entrena la capacidad del usuario para suprimir respuestas
              automáticas. El juego presenta estímulos que requieren una
              respuesta rápida (Go) o la inhibición de la respuesta (No-Go), con
              opciones de personalización de dificultad.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <PsychologyIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Este juego se basa en el paradigma Go/No-Go, ampliamente utilizado
              en neuropsicología para evaluar el control inhibitorio, un
              componente clave de las funciones ejecutivas. El juego incorpora
              principios de la teoría del control cognitivo y la inhibición de
              respuesta de Miyake et al.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <EmojiObjectsIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Objetivos:
              <ul>
                <li>Evaluar y mejorar el control inhibitorio</li>
                <li>
                  Potenciar la atención selectiva y la velocidad de
                  procesamiento
                </li>
                <li>
                  Desarrollar la flexibilidad cognitiva y la toma de decisiones
                  rápidas
                </li>
              </ul>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <CheckIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Beneficios:
              <ul>
                <li>
                  Mejora en la capacidad de inhibir respuestas automáticas
                </li>
                <li>
                  Incremento en la velocidad y precisión de la toma de
                  decisiones
                </li>
                <li>
                  Potencial transferencia a situaciones que requieren
                  autocontrol y regulación del comportamiento
                </li>
              </ul>
            </p>
          </div>
          {/* <div className="button-center">
            <ColorButton variant="contained">Conozca Memory Game</ColorButton>
          </div> */}
          <BasicModalGameVideo video={"IxeTPgcmhOI"} />
        </Item>
        <Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="title-game">Orderium</h3>
          </div>
          <div style={{ display: "flex" }}>
            <DescriptionIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Orderium es una herramienta de entrenamiento cognitivo diseñada
              para mejorar la memoria secuencial y las habilidades
              organizativas. El juego presenta series de palabras que el usuario
              debe ordenar correctamente, incorporando un elemento estratégico
              mediante el uso de una "bomba" que elimina opciones incorrectas.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <PsychologyIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Este juego se fundamenta en los principios de la memoria de
              trabajo y la organización jerárquica de información, componentes
              esenciales de las funciones ejecutivas. Orderium se basa en
              teorías sobre el procesamiento secuencial y la planificación
              estratégica, adaptando estos conceptos a un formato interactivo y
              desafiante.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <EmojiObjectsIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Objetivos:
              <ul>
                <li>
                  Evaluar y mejorar la capacidad de organización secuencial
                </li>
                <li>Potenciar la memoria de trabajo y la planificación</li>
                <li>
                  Desarrollar estrategias de toma de decisiones bajo presión
                </li>
              </ul>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <CheckIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Beneficios:
              <ul>
                <li>
                  Mejora en la capacidad de organizar información
                  jerárquicamente
                </li>
                <li>
                  Incremento en la velocidad y precisión de la toma de
                  decisiones
                </li>
                <li>
                  Potencial transferencia a actividades que requieren
                  planificación y organización
                </li>
              </ul>
            </p>
          </div>
          {/* <div className="button-center">
            <ColorButton variant="contained">Conozca Memory Game</ColorButton>
          </div> */}
          {/* <BasicModalGameVideo video={'IxeTPgcmhOI'}/> */}
        </Item>
        <Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="title-game">Abecedarium</h3>
          </div>
          <div style={{ display: "flex" }}>
            <DescriptionIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Abecedarium es un juego de secuencias alfabéticas diseñado para
              estimular la agilidad mental y la memoria secuencial. El juego
              desafía al usuario a completar series de letras basándose en el
              orden alfabético, adaptando la dificultad para mantener un nivel
              óptimo de desafío cognitivo.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <PsychologyIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Este juego se fundamenta en los principios del procesamiento
              lingüístico secuencial y la automatización de respuestas,
              incorporando elementos de la teoría del aprendizaje procedimental.
              Abecedarium integra conceptos de fluidez cognitiva y procesamiento
              de información serializada.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <EmojiObjectsIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Objetivos:
              <ul>
                <li>
                  Evaluar y mejorar la velocidad de procesamiento lingüístico
                </li>
                <li>Potenciar la memoria de trabajo y la fluidez alfabética</li>
                <li>Desarrollar la automatización de secuencias y patrones</li>
              </ul>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <CheckIcon sx={{ fontSize: "2rem", color: "#2f5496" }} />
            <p className="description-game">
              Beneficios:
              <ul>
                <li>
                  Mejora en la velocidad de procesamiento de información
                  secuencial
                </li>
                <li>Incremento en la fluidez mental y precisión lingüística</li>
                <li>
                  Potencial transferencia a actividades que requieren
                  procesamiento rápido y secuencial
                </li>
              </ul>
            </p>
          </div>
          {/* <div className="button-center">
            <ColorButton variant="contained">Conozca Memory Game</ColorButton>
          </div> */}
          {/* <BasicModalGameVideo video={'IxeTPgcmhOI'}/> */}
        </Item>
      </Stack>
    </Box>
  );
};
