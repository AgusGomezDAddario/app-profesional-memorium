import * as React from "react";
import { Card } from "@mui/material/Card";
import { CardActions } from "@mui/material/CardActions";
import { CardContent } from "@mui/material/CardContent";
import { Typography } from "@mui/material/Typography";
import { Grid } from "@mui/material/Grid";
import { Link } from "react-router-dom";

export const cardPacientes = (
  <React.Fragment>
    <CardContent
      sx={{
        backgroundColor: "#2f5496",
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: "1.8rem",
          fontFamily: "Gentium Plus",
          color: "white",
          marginBottom: "1.3rem",
        }}
      >
        Sección Pacientes
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "1.1rem", fontFamily: "Gentium Plus", color: "white" }}
      >
        Siga la evolución de sus pacientes en sus tratamientos y brinde una
        mejor atención
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        backgroundColor: "#2f5496",
        fontFamily: "Gentium Plus",
        color: "white",
        borderBottom: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Link
        style={{ fontFamily: "Gentium Plus", color: "white" }}
        clickable
        to="/login"
      >
        Ingresar
      </Link>
    </CardActions>
  </React.Fragment>
);

export const cardJuegos = (
  <React.Fragment>
    <CardContent
      sx={{
        backgroundColor: "#2f5496",
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: "1.8rem",
          fontFamily: "Gentium Plus",
          color: "white",
          marginBottom: "1.3rem",
        }}
      >
        Sección Juegos
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "1.1rem", fontFamily: "Gentium Plus", color: "white" }}
      >
        Conozca los juegos disponibles en la app móvil para el entrenamiento de
        la memoria de trabajo
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        backgroundColor: "#2f5496",
        fontFamily: "Gentium Plus",
        color: "white",
        borderBottom: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Link
        style={{ fontFamily: "Gentium Plus", color: "white" }}
        clickable
        to="/juegos"
      >
        Conocer más
      </Link>
    </CardActions>
  </React.Fragment>
);

export const cardPlataforma = (
  <React.Fragment>
    <CardContent
      sx={{
        backgroundColor: "#2f5496",
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: "1.8rem",
          fontFamily: "Gentium Plus",
          color: "white",
          marginBottom: "1.3rem",
        }}
      >
        Conozca la plataforma
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "1.1rem", fontFamily: "Gentium Plus", color: "white" }}
      >
        Si tiene dudas sobre cómo utilizar la plataforma, aquí encontrará
        información que necesita
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        backgroundColor: "#2f5496",
        fontFamily: "Gentium Plus",
        color: "white",
        borderBottom: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
      }}
    >
      <Link
        style={{ fontFamily: "Gentium Plus", color: "white" }}
        clickable
        to="/plataforma"
      >
        Conocer más
      </Link>
    </CardActions>
  </React.Fragment>
);

export const OutlinedCard = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              margin: "1.8rem",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))",
              },
            }}
          >
            {cardPacientes}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              margin: "1.8rem",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))",
              },
            }}
          >
            {cardJuegos}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              margin: "1.8rem",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))",
              },
            }}
          >
            {cardPlataforma}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
