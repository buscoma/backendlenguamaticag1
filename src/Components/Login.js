import React, { useContext, useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { TextField, Button, Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Login(props) {
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
    dialog: {},
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    <div className={classes.root}>
      <Dialog
        open={true}
        className={classes.dialog}
        onBackdropClick={props.show}
      >
        <form onSubmit={handleSubmit} noValidate autoComplete="on">
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
              Log in
            </Button>
            <Typography>
              Not registered yet?
              <Button
                className={classes.button}
                variant="outlined"
                onClick={() => handleRegister()}
                color="secondary"
              >
                Register
              </Button>
            </Typography>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
