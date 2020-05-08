import React, { useContext, useState, useCallback } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import app from '../../base.js';
import { AuthContext } from '../Auth.js';
import { Button, Dialog, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GanasteSvg from '../../Images/dialogSvg/ganaste.svg';
import PerdisteSvg from '../../Images/dialogSvg/icon.svg';
import BienvenidoSvg from '../../Images/dialogSvg/bienvenido.svg';

/*
El componente dialogo tiene los siguientes propiedades
- nivel={nivel} posibles valores 1, 2, 3
- resultado="Ganador" posibles valores "Ganador", "Perdedor", "NombreDeSuJuego" 
Respecto al nombre  del juego lo selecciona ustedes, lo importante es que el mismo nombre que utilicen 
en el dialog, lo utilicen apra crear un elemento en el json de abajo con la descripcion de su juego.
*/

const json = [
	{
		name: 'Ganaste',
		descripcion: ' Felicistaciones, ganaste el juego, estas listo para pasar al siguiente nivel.'
	},
	{
        name: 'Perdiste',
		descripcion: 'Sos un perdedor, intentalo de nuevo !!'
    },
    {
        name:'MathGameOne',
        descripcion:'Bienvenido a este juego. El objetivo es que toques los botones en orden asendente.Suerte'
    }
];



const useStyles = makeStyles({
	root: {
		padding: '1rem'
	},
	TitleH2: {
		fontSize: '1.5rem',
		padding: '.5rem',
		textAlign: 'center',
		'@media (min-width: 768px)': {
			fontSize: '2rem',
			padding: '1rem'
		}
    },
    text: {
		fontSize: '1.3rem',
		padding: '.3rem',
		textAlign: 'center',
		'@media (min-width: 300px)': {
			fontSize: '1.5rem',
			padding: '1rem'
		}
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	paper: {
		margin: '0px',
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	},
	paperScrollPaper: {
		maxHeight: 'unset',
		height: '100%',
		width: '100vw'
	},
	buttom: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		/* TABLET */
		'@media (min-width: 768px)': {
			fontSize: '2rem'
		}
    },
    logo:{
        height: '15vh',
        width: '15vw',
        paddingTop:'1rem'
    },
    label:{
        maxHeight:'100px'
    }
});


const SelectImagen = function(estado){
    if (estado === "Ganaste"){
        return GanasteSvg;
    }
    if (estado === "Perdiste"){
        return PerdisteSvg;
    }
    return BienvenidoSvg;
}

export default function DialogMessage(props) {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		// Gano, perdio o bienvenido
        name: props.tipo,
		// El nivel en el que esta o al que pasa
        nivel: props.nivel,
        volverJugar: props.volverJugar,
        volverPagAnterior : props.volverPagAnterior,
        siguienteNivel: props.siguienteNivel
	});

	const history = useHistory();

    const handleSubmit = useCallback(
        async (event) => {
          event.preventDefault();
          try {
            await app
              .auth()
              .createUserWithEmailAndPassword(values.email, values.password);
            history.push("/landing_page");
          } catch (error) {
            alert(error);
          }
        },
        [history, values]
      );
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
	const classes = useStyles(props);
	
	return (
		<Dialog open={true} classes={classes} onBackdropClick={props.show} scroll="body">
			<form onSubmit={handleSubmit} noValidate autoComplete="on">
				<Container alignItems="center">
					<Grid container spacing={3} style={{textAlign:'center'}}>
						<Grid item xs={12} >
                            <img src={SelectImagen(values.name)} onClick={props.show} className={classes.logo} alt="React Logo" />
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.TitleH2}>{values.name}</Typography>
						</Grid>
                        <Grid item xs={12}>
							<Typography className={classes.TitleH2}>Nivel : {values.nivel}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.text}>
								{json.filter(function(item){ return item.name === values.name})[0].descripcion}
							</Typography>
						</Grid>
						{ values.volverPagAnterior ? <Grid item xs={12} sm={6} style={{maxHeight:'100px'}} >
                            <Button 
                                variant="contained"
                                size="large" 
                                color="primary" 
                                href={values.volverPagAnterior}
                                spacing={2} >
                                Volver
                            </Button>
						</Grid> : null}
                        {props.bienvenida  ? 
                            <Grid item xs={3} sm={6} style={{maxHeight:'100px'}} >
                                <Button 
                                    variant="contained"
                                    size="large" 
                                    color="primary" 
                                    onClick={props.show}
                                    spacing={2} >
                                    Jugar
                                </Button>
                            </Grid> 
                        : null}
						{ values.volverJugar ?<Grid item xs={3} sm={6} >
                            <Button 
                                variant="contained" 
                                size="large" 
                                href={values.volverJugar}
                                color="primary" 
                                spacing={2}>
                                Jugar otra vez
                            </Button>
						</Grid>: null}
                        { values.siguienteNivel ?<Grid item xs={6} sm={12} >
                            <Button 
                                variant="contained" 
                                size="large" 
                                href={values.siguienteNivel}
                                color="primary" 
                                spacing={2}>
                                Jugar siguiente nivel
                            </Button>
						</Grid>: null}
					</Grid>
				</Container>
			</form>
		</Dialog>
	);
}