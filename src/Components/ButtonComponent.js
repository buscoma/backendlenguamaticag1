import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  margin: {
    
    margin: theme.spacing(2),
   /*height:'200',
    width:'200',*/
  },
}));

const theme = createMuiTheme({

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#FFA726',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 100,
        width:100,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },

      label:{

        color:'white',
        height:'25vw',
        width:'25vw',

      },

    },
  },

 
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
  
      <ThemeProvider theme={theme}>
        <Button variant="contained" color='primary' className={classes.margin}>
            <Typography variant='h1'>1</Typography>
        </Button>
      </ThemeProvider>
     
    </div>
  );
}