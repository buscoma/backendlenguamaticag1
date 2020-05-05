import React, { useState, useContext } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthContext } from "../Components/Auth.js";
import Login from "../Components/Login.js";
import SignUp from "../Components/SignUp.js"
import Background from "../Images/background.jpg";

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  container: {
    alignSelf: "center",
    justifyContent: 'center',
    textAlign: "center",
  }
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
      <Container className={classes.container}>
        <ThemeProvider theme={theme}>
        <Typography variant="h1">LenguaMatica</Typography>
        </ThemeProvider>
        <Button
          onClick={handleLoginClick}
          variant="contained" 
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