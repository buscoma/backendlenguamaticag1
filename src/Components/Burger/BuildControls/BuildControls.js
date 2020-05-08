import React from "react";
import {Button} from "@material-ui/core";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Carne", type: "meat" },
  { label: "Queso", type: "cheese" },
  { label: "Lechuga", type: "salad" },
  { label: "Panceta", type: "bacon" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingridientAdded(c.type)}
        removed={() => props.ingridientRemoved(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
  </div>
);

export default BuildControls;
