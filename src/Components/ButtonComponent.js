import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  margin: {
    
    margin: theme.spacing(2),
  
  },
}));
const theme = createMuiTheme({

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#FFD740',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height:100,
        width:100,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      label:{
        color:'white',
        height:'12vw',
        width:'12vw',
        //SCALE FOR TABLET
        '@media (min-width: 768px)': {
          height:'8vw',
        width:'8vw',
      },
      },
    },
  },

});


export default function CustomizedButtons(props) {
  const classes = useStyles();

  const [showButton, setShowButton] = useState(false)

  const handleClick = () => {
    setShowButton(true);
    props.methodAddId(props.id);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button disabled={showButton} onClick={()=>handleClick()} variant="contained" color='primary' className={classes.margin}>
      <Typography variant='h4'>{props.id}</Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
}