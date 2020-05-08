import React from 'react';
import '../css/LandingPage.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//Importar componentes//
import DobleBoton from '../Components/DobleBoton.js';
import NavBar from '../Components/NavBar.js';
import {TitleH1, ContainerCenter} from '../css/BaseStyle';


const useStyles = makeStyles({
    TitleH1,
    
  });
  

export default function LandingPage() {
    let user = {Name: "Ale" }
    const classes = useStyles();
    return (
        <div >
            <CssBaseline />
            <NavBar User={user}/>
            
            <div className="mainBox">
            <div className={classes.TitleH1}> Juego de Matemática!</div>
                <DobleBoton />     
            </div>
        </div>
    );
}
