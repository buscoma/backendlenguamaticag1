import React from "react";
import Typography from "../Components/Typography";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button
} from "@material-ui/core";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        <Dialog open={true}  aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Juguemos a Lengua-Mática
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography  variant="body">Por favor Indicanos tu nombre para empezar a jugar</Typography>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button href="/" color="secondary">
              Volver
            </Button>
            <Button href="/landing_page" color="primary">
              Jugar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
