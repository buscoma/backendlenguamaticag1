import React from "react";
import SimpleRating from "../Components/SimpleRating";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Container,
  Box,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import NavBar from "../Components/NavBar";

import bkgMath from "../Images/GameIntro/Childhood04JPG.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  rating: {
    textAlign: "center",
  },
  container: {
    backgroundImage: "url(" + bkgMath + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize:"cover",
    backgroundColor: "#AAbbCC",
    height: "100vh",
    padding: "20px",
    textAlign:"center"
  },
  nivel: {
    fontWeight: "bold",
  },
  boxNivel:{
    margin: "30pt 0 0 0"
  },
  boxTexto:{
    margin: "20pt 0 20pt 0"
  }
}));

export default function GameIntro(props) {
  const classes = useStyles();
  let user = { Name: "Pablo" };
  let level = {
    nivel: 1,
    dificultad: 1,
    descripcion:
      "Tenes que calcular una serie de cuentas matemáticas. Podras???? Estoy seguro de que perderas",
  };

  var handleJugar = () => {
    console.log("handlejugar clicked!");
  };

  return (
    <div className={classes.root}>
      <NavBar User={user}></NavBar>
      <Container className={classes.container}>
        <Box xs={12} className={classes.boxNivel}>
          <SimpleRating
            className={classes.rating}
            Nivel={level.nivel}
            Dificultad={level.dificultad}
          />
        </Box>
        <Box xs={12} className={classes.boxNivel}>
          <Paper style={{ padding: "20px" }} elevation={3}>
            <Typography
              className={classes.typography}
              variant="h6"
              color="inherit"
            >
              {level.descripcion}
            </Typography>
          </Paper>
        </Box>
        <Box xs={12} className={classes.boxTexto}>
          <Button size="large" href="/xx" variant="contained" color="secondary">
            Jugar!
          </Button>
        </Box>
      </Container>
    </div>
  );
}
