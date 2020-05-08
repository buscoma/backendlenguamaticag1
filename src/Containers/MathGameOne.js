import React, { useState } from 'react';
import ButtonComponent from '../Components/ButtonComponent';
import {  Grid } from '@material-ui/core';
import Clock from '../Components/Clock';
import Typography from '@material-ui/core/Typography';
import Background from '../Images/backgroundMat.jpg';
import NavBar from '../Components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {TitleH2,TitleH1,ButtomDefualt,TextBlackShadow} from '../css/BaseStyle'
import { Redirect } from "react-router-dom";
import DialogMessage from '../Components/Dialog/Dialog.js';

	const root = {
		backgroundImage: `url(${Background})`,
		backgroundSize: "cover",
		height: "100vh",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
	};

	const useStyles = makeStyles({root,TitleH2,TitleH1,ButtomDefualt,TextBlackShadow});

export default function MathGameOne(props) {

	const classes = useStyles(props);
	const buttonsData = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];
	const [ values, setValues ] = useState([]);
	const [ lastID, setLastID ] = useState(0);
	const [ arraySize ] = useState(buttonsData.length);
	const [ showLevel, setShowLevel ] = useState(1);
	const [ clockTimer, setClockTimer ] = useState(30);
	const [ bienvenida, setBienvenida] = useState(true);
	const [ showWinning, setShowWinning ] = useState(false);
	const [ showDialog, setShowDialog ] = useState(false);
	const [result, setResult] = useState();
	const [caption, setCaption]=useState();
	
	const handleShowDialog = () => {
		setShowDialog(!showDialog);
	  };

	  const handleBienvenida = () => {
		setBienvenida(!bienvenida);
	  };
	  
	//FUNCTION THAT VERIFIES INPUTS
	const methodAddId = (id) => {
		if (id > lastID) {
			setValues(values.concat(id));
			setLastID(id);
				if (values.length === arraySize - 1) {
					endLevel(true);
				}
		}
		else{
		endLevel(false);
		}
	};
	//FUNCTION TO IDENTIFY WHEN TIME EXPIRES or FUNCTION TO STOP CLOCK AND ADD LEVEL 
	const endLevel = (value) => {//PERDISTE
		if(value === false){
		setResult(false);
		setShowWinning(false);
		handleShowDialog();
	}else{//GANASTE
		setShowLevel(showLevel + 1);
		setResult(true);
		setShowWinning(true);
		handleShowDialog();
	}
}

	//FUNCTION TO CONTROL LEVEL DETAILS
	const gameHandler = (showLevel) =>{}

	//FUNCTION TO GO TO LANDING PAGE AFTER EXITING BUTTON ON GAME 
	const goBack = () =>{

	}

	let user = { Name: 'Ale' };

	return (
		<div className={classes.root} >
			<CssBaseline /> 

			<NavBar User={user} />

			<Grid container style={{marginBottom:'3rem'}}>
			
				<Grid Item xs={12}>
					<Typography  className={classes.TitleH1} variant="h2" align="center" style={{ fontSize: '6vh' }}>
						NIVEL : {showLevel}
					</Typography>
				</Grid>

				<Grid Item xs={12}>
					<Clock time={30/showLevel}  endLevel={endLevel} stopTimer={result} />
				</Grid>
			</Grid>

			<Grid container >
				{buttonsData.map((image) => (
					<Grid Item xs={6} sm={3} align="center">
						<ButtonComponent className={classes.ButtomDefualt} id={image.id} methodAddId={methodAddId} />
					</Grid>
				))}

				{bienvenida ? 
					<DialogMessage bienvenida={true} show={handleBienvenida} volverPagAnterior="landing_page"   tipo="MathGameOne" nivel={showLevel}/> :
					null}

				{showDialog ? 
					(showWinning ? 
						<DialogMessage show={true} volverPagAnterior="landing_page" volverJugar="math_game_one" siguienteNivel="..." tipo="Ganaste" nivel={showLevel}/>  : 
						<DialogMessage show={true} volverPagAnterior="landing_page" volverJugar="math_game_one"  tipo="Perdiste" nivel={showLevel}/> )
					:  null}
				
			</Grid>
		
		</div>
	);
}