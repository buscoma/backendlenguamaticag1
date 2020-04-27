import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const url = 'http://www.mocky.io/v2/5ea453e13000006e00ce2cc9';


const useStylesAutoGridNoWrap = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),   
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  topo :{
    [theme.breakpoints.down('sm')]: {
      fontSize : '1.8rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize : '1.5rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize : '1.2rem'
    },
  }
  
}));


function ColorRaking(posicion){
  console.log(posicion)
  if(posicion === 1){
    return "rgb(212,175,55)";
  }
  if(posicion === 2){
    return "rgb(192,192,192)";
  }
  if(posicion === 3){
    return "rgb(224, 155, 91)";
  }
  
}



function AutoGridNoWrap(props) {
  const classes = useStylesAutoGridNoWrap();
  const [data] = useState(props);
  const backgroundColorPosition = ColorRaking(data.posicion)
  return (
    <div className={classes.root}  >
      <Paper  className={classes.paper}  style={{backgroundColor:backgroundColorPosition }} elevation={3} >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={2} md={4} >
            <Typography  className={classes.topo} noWrap> #{data.posicion}</Typography>
          </Grid>
          <Grid item xs={4}    zeroMinWidth>
            <Typography   className={classes.topo} noWrap>{data.nombre}</Typography>
          </Grid>
          <Grid item xs={6} md={4} zeroMinWidth>
            <Typography  className={classes.topo} noWrap>{data.puntos}pts</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
  

export default function TableResponsive(){

  const [refresh, setRefresh] = useState(false);
  const [setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [row, setRow] = useState([]);
  
    async function fetchApi() {
      try {
        setLoading(true);
        const res = await fetch(url);
        await res.json()
          .then(json => { setRow(json); console.log(json)});
      } catch (e) {
        setErrors(e);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
        fetchApi();
        setRefresh(false);
      }, [refresh]);

    return (
      <div style={{  display: 'flex', alignItems:'center',justifyContent:'center'}}>
        {loading ? "Loading" : 
          <Container maxWidth='md'> 
            <Grid container wrap="wrap" spacing={2}>
              <Grid item xs={12} md={12} >
                <Typography  variant="h3" style={{textAlign:'Left'}} noWrap> Mi Raking </Typography>
              </Grid>
              <Grid item xs={12}  >
                <AutoGridNoWrap posicion={row[2].posicion} nombre={row[2].nombre} puntos={row[2].puntos} />
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography  variant="h3" style={{textAlign:'Left'}} noWrap> Raking </Typography>
              </Grid>
              <Grid item xs={12} md={6} style={{textAlign:'Left'}} >
                <Grid container justify="center" alignItems="flex-end" wrap="wrap" spacing={2}>
                  <Grid item xs={9}>
                    <TextField id="standard-search" label="Buscate a tus amigos" fullWidth type="search" />
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" size="medium" color="primary" >
                      BUSCAR
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}  >
                {row.map((data) => <AutoGridNoWrap posicion={data.posicion} nombre={data.nombre} puntos={data.puntos} />)}
              </Grid>
            </Grid>          
          </Container>}
      </div>
      );
}