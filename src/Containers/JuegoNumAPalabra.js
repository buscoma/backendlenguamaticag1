import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import bkgMath from "../Images/GameIntro/Childhood04JPG.jpg";
import controller from "../Controllers/JuegoNumAPalabraCtrl";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(" + bkgMath + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "#e0da62",
    height: "100vh",
    padding: "30px",
    textAlign: "center",
  },
  paper: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    opacity: "0.85",
    "&:hover": {
      backgroundColor: "white",
      opacity: "1",
      fontSize: "24px",
    },
    "&:focus": {
      backgroundColor: "white",
      opacity: "1",
      fontSize: "24px",
    },
  },
  paperCorrecta: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "#e0da62",
    color: "white",
    cursor: "pointer",
    opacity: "1",
  },
  paperIncorrecta: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "red",
    color: "black",
    cursor: "pointer",
    opacity: "0.85",
  },
  containerOpciones: {
    marginTop: "50px",
  },
  paperNumero: {
    opacity: "0.85",
    borderRadius: "35px",
  },
}));

const JuegoNumAPalabra = (props) => {
  const classes = useStyles();

  const [nivelState, setNivelState] = useState({
    dificultad: 1,
    nivel: controller.obtenerNivel(1),
    perdio: false,
  });

  const [gameState, setGameState] = useState({
    perdio: false,
  });

  const opcionClickHandler = (opcion) => {
    if (opcion.Correcta === true) {
      console.log("Correcta!");
      subirNivel();
    } else {
      console.log("Incorrecta");
      setGameState({ perdio: true });
    }
  };

  const subirNivel = () => {
    if (nivelState.dificultad === 3) {
      alert("ganaste!")
      return;
    }

    var nuevaDificultad = nivelState.dificultad + 1;
    setNivelState({
      dificultad: nuevaDificultad,
      nivel: controller.obtenerNivel(nuevaDificultad),
    });
  };

  const reiniciar = () => {
    setGameState({ perdio: false });

    setNivelState({
      dificultad: 1,
      nivel: controller.obtenerNivel(1),
    });
  };

  return (
    <div>
      <Container className={classes.container}>
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          <Paper elevation={4} className={classes.paperNumero}>
            {nivelState.nivel.Numero}
          </Paper>
        </Typography>
        <Container className={classes.containerOpciones}>
          {nivelState.nivel.Respuestas.map((opcion) => (
            <Paper
              elevation={4}
              className={
                !gameState.perdio
                  ? classes.paper
                  : opcion.Correcta
                  ? classes.paperCorrecta
                  : classes.paperIncorrecta
              }
              onClick={() =>
                gameState.perdio ? null : opcionClickHandler(opcion)
              }
              key={opcion.Descripcion}
            >
              {opcion.Descripcion}
            </Paper>
          ))}
        </Container>
        {gameState.perdio ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => reiniciar()}
          >
            Jugar de nuevo
          </Button>
        ) : null}
      </Container>
    </div>
  );
};

export default JuegoNumAPalabra;
