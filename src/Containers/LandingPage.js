import React, {Component} from 'react';
import '../css/LandingPage.css';
import TrippleButton from '../Components/TrippleButton';
import RankingList from '../Components/RankingList';
import Navbar from '../Components/NavBar'

class LandingPage extends Component {

  state = {
    showRanking: true
  }

  // se ejecutará una vez el usuario le de click al boton "Ranking"
  toggleRankingListHandler = () => {
    const doesShow = this.state.showRanking;
    this.setState({showRanking: !doesShow});
  }

  render () {
    
    // rankingList va a almacenar el componente = RankingList y solo lo va a mostrar cuando el boton de "Ranking" sea seleccionado
    let rankingList = null;

    if(this.state.showRanking){
      rankingList = (
        <div>
          <h1> Ranking: </h1>
          <RankingList />
        </div>
      )
    }

    let user = {Name: "Ale" }

    return (      
        <div className="LandingPage">
        
          <Navbar User={user} />

          <h1>Juego de Matematica!</h1>

          <TrippleButton onClick={this.toggleRankingListHandler} />
          
          { rankingList }

          { /* <img src={TestImg} alt='' /> */ }

        </div>
      );
    }
}


export default LandingPage;
