import React from 'react';
import "../css/MathGameOne.css";
import NavBar from "../Components/NavBar.js"

//Importar componentes//
import GridComponent from '../Components/GridComponent'


let user = {Name: "Ale" }

function MathGameOne() {

  return (
    <div className="MathGameOne">
      <NavBar User={user}/>
      <GridComponent/>
    </div>
  );
}

export default MathGameOne;
