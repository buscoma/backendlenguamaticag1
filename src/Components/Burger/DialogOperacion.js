import React from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const DialogOperacion = (props) => {
  const dialogoOperacion = (
    <Dialog open={props.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">A Resolver!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h5">
            {props.operation.numero1} {props.operation.operador} {props.operation.numero2} = ?
          </Typography>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Respuesta"
          fullWidth
          onChange={props.respuestaChanged}
          pattern="[0-9]*"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );

  const dialogoGameOver = (
    <Dialog open={props.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Ups</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">
            Perdiste! la respuesta era {props.operation.respuesta}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleGameOver} color="secondary">
          Volver a jugar!
        </Button>
      </DialogActions>
    </Dialog>
  );

  return props.gameStatus ? dialogoGameOver : dialogoOperacion;
};

export default DialogOperacion;
