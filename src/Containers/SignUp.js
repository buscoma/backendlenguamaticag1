import React from "react";
import "../css/SignUp.css";
import {
  Grid,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";
import {Avatars} from "../Images";

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
              Por favor elegí un avatar y decinos tu nombre antes de empezar!
            </DialogContentText>
            <Grid item spacing={10} xs={12}>
              {Avatars.map((avatar) => (
              <Button >
                <Avatar
                  alt={avatar.alt}
                  src={avatar.src}
                />
              </Button>
              ))}
            </Grid>
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
