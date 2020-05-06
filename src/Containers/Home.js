import React, { useState, useContext } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthContext } from "../Components/Auth.js";
import Login from "../Components/Login.js";
import SignUp from "../Components/SignUp.js";
import Background from "../Images/background.jpg";
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleH1, ButtomDefualt,ContainerCenter} from '../css/BaseStyle.js';


const root = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};


const useStyles = makeStyles({
  root,
  TitleH1,
  label:ButtomDefualt,
  container: ContainerCenter
});

export default function Home(props) {
  const [dialogLogin, setDialogLogin] = useState(false);
  const [dialogSignUp, setDialogSignUp] = useState(false);
  const handleLoginClick = () => {
    setDialogLogin(!dialogLogin);
  }
  const handleSignUpClick = () => {
    setDialogSignUp(!dialogSignUp);
  }
  const classes = useStyles(props);
  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    console.log({currentUser: currentUser})
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <ThemeProvider >
        <Typography className={classes.TitleH1}  >Matemática</Typography>
        </ThemeProvider>
        <Button
          onClick={handleLoginClick}
          variant="contained" 
          className={classes.label}
          color="primary"
        >
          Comencemos a Jugar!
        </Button>
        {dialogLogin ? <Login show={handleLoginClick} showSignUp={handleSignUpClick} /> : null}
        {dialogSignUp ? <SignUp show={handleSignUpClick} /> : null}
      </Container>
    </div>
  );
}