import React from "react";
import NavBar from "../components/NavBar";

export default function inGame(Component) {
  function inGame(props) {
    return (
      <React.Fragment>
        <NavBar />
        <Component {...props} />
      </React.Fragment>
    );
  }

  return inGame;
}
