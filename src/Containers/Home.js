import React from "react";
import { Button, Container } from "@material-ui/core";
var background = "../Images/background.jpg"

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container background={background}>
        <Button href="/sign_in" variant="contained" color="primary">Ingresar</Button>
        <Button href="/sign_up" variant="contained" color="primary">Registrarse</Button>
        </Container>
      </React.Fragment>
    );
  }
}
