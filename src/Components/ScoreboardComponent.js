import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  grid:{
    backgroundColor:'green',
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor:'transparent',
    width:'466px',
    height:'100px',
    alignItems:'left',
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
          <Paper className={classes.paper}><h1>TIEMPO:</h1></Paper>
          <Paper className={classes.paper}><h1>RESTANTES:</h1></Paper>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.grid}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2} >
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}