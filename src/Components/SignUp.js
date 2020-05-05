import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { TextField, Button, Dialog, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
root: {
  display: "flex",
  flexWrap: "wrap",
},
textField: {
  alignSelf: "center",
  width: "50ch",
},
button: {
  alignSelf: "center",
  justify: "center",
},
dialog: {
},
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
    <div className={classes.root}>
      <Dialog open={true} className={classes.dialog} onBackdropClick={props.show}>
        <form onSubmit={() => handleSubmit()} noValidate autoComplete="on">
          <div>
            <TextField
              className={classes.textField}
              value={values.email}
              onChange={handleChange("email")}
              fullWidth
              placeholder="Email"
            />
            <TextField
              className={classes.textField}
              value={values.password}
              onChange={handleChange("password")}
              type="password"
              fullWidth
              autoComplete="current-password"
              placeholder="Password"
            />
          </div>
          <div>
            <Button
              className={classes.button}
              variant="outlined"
              type="submit"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}




