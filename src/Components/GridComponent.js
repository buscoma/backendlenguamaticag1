import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonComponent from './ButtonComponent'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  grid:{
    backgroundColor:'green',

  },
  root: {

    backgroundColor:'green',
    alignItems:'center',
    flexGrow: 1,
    
  },


}));

export default function NestedGrid() {
  const classes = useStyles();
 

  function FormRow() {
    return (
      <Container  >

      <Grid container >

            <Grid Item xs={6} >
                <ButtonComponent /> 
            </Grid >
            <Grid Item xs={6}>
                <ButtonComponent  />
            </Grid >        
            <Grid Item xs={6}>
                <ButtonComponent />
            </Grid >         
           <Grid Item xs={6}>
                <ButtonComponent />
            </Grid >

      </Grid>
      </Container>

    );
  }


  return (
    <div className={classes.root}>
    
        <Container  >
          <Grid container  justify='center' allingItems='center'  >
                 <FormRow />
           </Grid>
          <Grid container  justify='center' allingItems='center' >
            < FormRow/>
          </Grid>
        </Container>

    </div>
  );
}