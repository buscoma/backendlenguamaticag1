import React, { Component } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import "./BurgerBuilder.css";

import DialogOperacion from "../../Components/Burger/DialogOperacion";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';




class BurgerBuilder extends Component {
  
  

  randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  };

  

  recuperarOperacion = (nivel) => {
    console.log("recuperarOperacion called");

    if (nivel === 1) {
      let n1 = this.randomInt(1, 9);
      let n2 = this.randomInt(1, 9);
      let respuesta = n1 + n2;
      return {
        numero1: n1,
        numero2: n2,
        operador: "+",
        respuesta: respuesta,
      };
    }

    if (nivel === 2) {
      let n1 = this.randomInt(1, 100);
      let n2 = this.randomInt(1, 30);
      let respuesta = n1 + n2;
      return {
        numero1: n1,
        numero2: n2,
        operador: "+",
        respuesta: respuesta,
      };
    }

    if (nivel === 3) {
      let n1 = this.randomInt(16, 100);
      let n2 = this.randomInt(1, 16);
      let respuesta = n1 - n2;
      return {
        numero1: n1,
        numero2: n2,
        operador: "-",
        respuesta: respuesta,
      };
    }
  };

  configurarNivel = (nivel) => {
    if (nivel === 1)
      return {
        numero: nivel,
        orden: {
          lechuga: 0,
          panceta: 0,
          queso: 1,
          carne: 1,
        },
        operacion: this.recuperarOperacion(nivel),
      };

    if (nivel === 2)
      return {
        numero: nivel,
        orden: {
          lechuga: 0,
          panceta: 1,
          queso: 1,
          carne: 1,
        },
        operacion: this.recuperarOperacion(nivel),
      };

    if (nivel === 3)
      return {
        numero: nivel,
        orden: {
          lechuga: 1,
          panceta: 1,
          queso: 1,
          carne: 1,
        },
        operacion: this.recuperarOperacion(nivel),
      };
  };

  state = {
    nivel: this.configurarNivel(1),
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },
    openDialog: false,
    perdiste: false,
  };

  addIngridientHandler = (type) => {
    this.setState({
      openDialog: true,
    });

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    this.setState({
      ingredients: updatedIngredients,
    });
  };

  removeIngridientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    this.setState({
      ingredients: updatedIngredients,
    });
  };

  handleDialogClose = () => {
    console.log("handleDialogClose called!");
    if (
      this.state.nivel.operacion.respuesta !=
      this.state.nivel.operacion.respuestaUsuario
    ) {
      this.setState({
        perdiste: true,
      });
    } else {
      const nivelActual = this.state.nivel;
      nivelActual.operacion = this.recuperarOperacion(nivelActual.numero);
      this.setState({
        openDialog: false,
        nivel: nivelActual,
      });
    }
  };

  handleRespuestaChanged = (event) => {
    console.log("handlerespuestachanged called!");
    
    const nivelActual = this.state.nivel;
    nivelActual.operacion.respuestaUsuario = event.target.value;
    this.setState({
      nivel: nivelActual,
    });
  };

  handleGameOver = () => {
    console.log("handleGameOver called!");
    this.setState({
      nivel: this.configurarNivel(1),
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
      },
      openDialog: false,
      perdiste: false,
    });
  };

  handleNextLevel = () => {
    console.log("handleNextLevel called!");
    let nivelSiguiente = this.state.nivel;
    if (nivelSiguiente.numero === 3) {
      alert('Ganaste!')
      return; 
    }

    nivelSiguiente = this.configurarNivel(nivelSiguiente.numero + 1);
    this.setState({
      nivel: nivelSiguiente,
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
      },
    });

    //TODO: guardar en la bd el progreso.
  };

  handleBotonOrdenar = () => {
    console.log("handleBotonOrdenar called");
    //TODO: validar que la orden este cumplida.
    if (
      this.state.ingredients.salad === this.state.nivel.orden.lechuga &&
      this.state.ingredients.bacon === this.state.nivel.orden.panceta &&
      this.state.ingredients.cheese === this.state.nivel.orden.queso &&
      this.state.ingredients.meat === this.state.nivel.orden.carne
    ) {
      this.handleNextLevel();
    } else {
      alert('Te faltan o sobran ingredientes!')
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 0;
    }

    return (
      <div className="BurgerBuilder">
              <CssBaseline />

        <Paper className="OrderDetail" elevation={4}>
          <Typography variant="h6">Nivel {this.state.nivel.numero}</Typography>
          <Typography variant="inherit">
            Arma una hamburguesa con los siguientes ingredientes: Carne:{" "}
            {this.state.nivel.orden.carne}, Queso:{" "}
            {this.state.nivel.orden.queso}, Lechuga:{" "}
            {this.state.nivel.orden.lechuga}, Panceta:{" "}
            {this.state.nivel.orden.panceta},
          </Typography>
        </Paper>
        <Burger ingredients={this.state.ingredients} />
        
        <Grid container spacing={2} justify="center"  alignItems="center">
          <Grid item xs={12} md={8}>
            <BuildControls
                        ingridientAdded={this.addIngridientHandler}
                        ingridientRemoved={this.removeIngridientHandler}
                        disabled={disabledInfo}
                        ingredients={this.state.ingredients}
                      ></BuildControls>
          </Grid>
          <Grid item xs={12} md={4}>
              <Button
                          variant="contained"
                          color="primary"
                          onClick={() => this.handleBotonOrdenar()}
                          className="OrderButton"
                        >
                          Marchar pedido!
                        </Button>
          </Grid>
        </Grid>
          
          
          
        
        <DialogOperacion
          open={this.state.openDialog}
          handleClose={this.handleDialogClose}
          respuestaChanged={this.handleRespuestaChanged}
          operation={this.state.nivel.operacion}
          gameStatus={this.state.perdiste}
          handleGameOver={this.handleGameOver}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
