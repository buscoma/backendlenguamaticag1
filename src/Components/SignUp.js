import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { TextField, Button, Dialog} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RegistrarLogo from '../Images/jugar.svg';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root:{
    padding:'1rem',
  },
  paperScrollPaper:{
    maxHeight:'unset',
    height:'100%',
    width:'100vw',
    overflow:'hidden'
  },
  paper:{
    margin:'0px',
    display:'flex',justifyContent:'center'

  },
  logo:{
    height: '25vh',
    width: '25vw'
  }
});


export default function SignUp(props){
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleSubmit = () => {
      console.log({email: values.email, password: values.password})  
      try {
        app.auth().createUserWithEmailAndPassword(values.email, values.password);
        history.push("/landing_page");
      } catch (error) {
        alert(error)
      }
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles(props);
  
  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/landing_page" />;
  }
  return (
  
      <Dialog    open={true} classes={classes}  onBackdropClick={props.show}>
        <form onSubmit={() => handleSubmit()} noValidate autoComplete="on">
          <Container>
            <Grid container spacing={2} justify="center" style={{height:'100%'}} alignItems="center" >
              <Grid item xs={12} style={{textAlign:'center'}} >
                <img src={RegistrarLogo} style={{height:'30vh',width:'30vh'}} alt="React Logo" />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}} >
              <Typography >Registrate para jugar!!</Typography> 
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
                  className={classes.button}
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



/*
 

*/
