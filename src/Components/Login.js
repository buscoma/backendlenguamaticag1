import React, { useContext, useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { TextField, Button, Dialog, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {TitleH2, TextBold} from '../css/BaseStyle.js';
import {paperScrollPaper, buttom, paper, logo, logoClose, input} from '../css/BaseLineDialog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {RegistrarLogo, CloseLogo} from '../Images';

export default function Login(props){
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
    buttom,
    input
  });
  const history = useHistory();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
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
  const handleRegister = () => {
    props.show();
    props.showSignUp();
  };
  const classes = useStyles(props);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/landing_page" />;
  }
  return (
      <Dialog open={true}  classes={classes} onBackdropClick={props.show}>
        <form onSubmit={handleSubmit} noValidate autoComplete="on">
        <Container  >
            <Grid container spacing={2}   alignItems="center" >
              <Grid item xs={12} style={{textAlign:'right'}} >
                <img src={CloseLogo} onClick={props.show} className={classes.logoClose} alt="React Logo" />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}} >
                <img src={RegistrarLogo} style={{height:'15vh',width:'15vh'}} alt="React Logo" />
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
                className={classes.input}
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
                Iniciar
              </Button>
              </Grid>
              <Grid item xs={12} justify="center" alignItems="center" style={{textAlign:'center'}}>
                <Typography className={classes.TitleH2 + " " + classes.TextBold}>  No estas registrado? </Typography>
              </Grid>
              <Grid item xs={12} justify="center" alignItems="center" style={{textAlign:'center'}}>
                <Button
                  className={classes.buttom}
                  variant="outlined"
                  onClick={() => handleRegister()}
                  color="secondary"
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
