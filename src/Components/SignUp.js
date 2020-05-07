import React, { useContext, useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { TextField, Button, Dialog} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RegistrarLogo from '../Images/jugar.svg';
import CloseLogo from '../Images/interfaz.svg';
import Typography from '@material-ui/core/Typography';
import {TitleH2, TextBold} from '../css/BaseStyle.js';
import {paperScrollPaper,buttom,  paper, logo, logoClose} from '../css/BaseLineDialog';

export default function SignUp(props){
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const useStyles = makeStyles({
    root:{
      padding:'1rem',
    },
    paperScrollPaper,
    paper,
    logo,logoClose,
    TitleH2,
    TextBold,
    buttom
  });
  const history = useHistory();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
        history.push("/landing_page");
      } catch (error) {
        alert(error);
      }
    },
    [history, values]
  );
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles(props);
  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/landing_page" />;
  }
  return (
      <Dialog  open={true} classes={classes}  onBackdropClick={props.show}>
        <form onSubmit={handleSubmit} noValidate autoComplete="on">
          <Container  >
            <Grid container spacing={2}  alignItems="center" >
              <Grid item xs={12} style={{textAlign:'right'}} >
                <img src={CloseLogo} onClick={props.show} className={classes.logoClose}  alt="React Logo" />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}} >
                <img src={RegistrarLogo} className={classes.logo}  alt="React Logo" />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}} >
              <Typography className={classes.TitleH2 + " " + classes.TextBold}  >Registrate para jugar!!</Typography> 
              </Grid>
              <Grid item xs={12} justify="strech" alignItems="center" style={{textAlign:'center'}}>
                <TextField
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange("email")}
                  fullWidth
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={12} justify="center" alignItems="center" style={{textAlign:'center'}}>
                <TextField
                  className={classes.textField}
                  value={values.password}
                  onChange={handleChange("password")}
                  type="password"
                  fullWidth
                  autoComplete="current-password"
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12} justify="center" alignItems="center" style={{textAlign:'center'}}>
                <Button
                  className={classes.buttom}
                  variant="outlined"
                  type="submit"
                  color="primary"
                >
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </Dialog>
  );
}
