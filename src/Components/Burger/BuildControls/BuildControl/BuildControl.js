import React from "react";
import {Button} from "@material-ui/core";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <Button variant="contained" color="secondary" onClick={props.removed} disabled={props.disabled}>
      Quitar
    </Button>
    <Button variant="contained" color="primary" onClick={props.added} disabled={props.disabled}>
      Agregar
    </Button>
  </div>
);

export default BuildControl;
