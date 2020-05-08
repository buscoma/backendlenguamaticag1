import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6AA5',
    fontSize: '45pt'
  },
  iconEmpty:{
    fontSize:'45pt'
  }
})(Rating);

export default function SimpleRating(props) {
  return (
    <div>
      <Box borderColor="transparent">
        <Typography component="legend" variant="h3" style={{textAlign:"center", fontWeight:"bold"}}>
          Nivel {props.Nivel}
        </Typography>
        <StyledRating
          name="read-only"
          value={props.Dificultad}
          readOnly
          size="large"
          max={3}
        />
      </Box>
    </div>
  );
}
