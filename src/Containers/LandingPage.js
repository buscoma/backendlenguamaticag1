import React from 'react';
import '../css/LandingPage.css';

//Importar componentes//
import DobleBoton from '../Components/DobleBoton.js';
import NavBar from '../Components/NavBar.js';

export default function LandingPage() {
    let user = {Name: "Ale" }
    return (
        <div>
            <NavBar User={user}/>
            <div className="LenguaMatica"> Juego de Lengua!</div>
            <div className="mainBox">
                <DobleBoton />     
            </div>
        </div>
    );
}
