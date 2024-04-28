import React from 'react';
import { Component } from 'react';
//import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';
import styles from './Summary.module.css';

//import ReactDOM from 'react-dom/client';

//<mealDeal prop={true} />

//Input: What type of room they ordered
//Function: Prints that to the screen
function WhichRoom(props) {
  const whichPartyRoom = props.whichPartyRoom;
  if (whichPartyRoom === 'Dining Room') {
    return <h6>Dining Room</h6>;
  } else if (whichPartyRoom === 'Party Room') {
    return <h6>Party Room</h6>;
  } else {
    return <h6>Party Room</h6>;
  }
}
//Input: What type of deal they ordered
//Function: Prints that to the screen
function WhichDeal(props) {
  const whichMealDeal = props.whichMealDeal;
  if (whichMealDeal === 'Popcorn Extravaganza') {
    return <h6>Popcorn Extravaganza</h6>;
  } else if (whichMealDeal === 'Reel Pizza Deal') {
    return <h6>Reel Pizza Deal</h6>;
  } else if (whichMealDeal === 'Reel Meal Deal') {
    return <h6>Reel Meal Deal</h6>;
  }
}
//Input: What type of addOns they have
//Function: Prints that to the screen
function WhichAddOns(props) {
  const whichAddOnChosen = props.whichAddOnChosen;
  if (whichAddOnChosen === 'Tickets') {
    return <h6>Tickets</h6>;
  } else if (whichAddOnChosen === 'Pizza') {
    return <h6>Pizza</h6>;
  } else if (whichAddOnChosen === 'Guests') {
    return <h6>Guests</h6>;
  } else {
    return <h6>Guests</h6>;
  }
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Greeting isLoggedIn={false} />);

class Summary extends Component{
  constructor(props){
    super(props);
    this.state={
    Generic_party:[]
    }
}

//5038 is other url
API_URL="http://localhost:5092/";

componentDidMount(){
    this.refreshGenericParty();
}

async refreshGenericParty(){
    fetch(this.API_URL+"api/Web/GetGenericParty").then(response=>response.json())
    .then(data=>{
    this.setState({Generic_party:data});
    })
}
async goQuestionaire(){
  window.location.href = "/Questionaire"
}
async goContract(){
  window.location.href = "/Contract"
}
async goHome(){
    window.location.href = "/"
}
  render(){
    const{Generic_party}=this.state;
    //let navigate = useNavigate();
    return (
      <div className={GlobalStyles.setup}>
        <div className={GlobalStyles.page}>
          <button className={GlobalStyles.backButton} type="button" onClick={() => this.goQuestionaire()}>Back</button>
          <div className={styles.container}>
              <h1 className={GlobalStyles.titleText}>Booking Summary</h1>
              <h2 className={GlobalStyles.headerText}> Party Room: </h2>
              {Generic_party.map(Generic_party=>
                  <WhichRoom whichPartyRoom={Generic_party.Room} />
              )}
              <h2 className={GlobalStyles.headerText}> Meal Deal: </h2>
              {Generic_party.map(Generic_party=>
                  <WhichDeal whichMealDeal={Generic_party.Deal_name} />
              )}
              <h2 className={GlobalStyles.headerText}>Addons: </h2>
              {Generic_party.map(Generic_party=>
                  <WhichAddOns whichAddOnChosen={Generic_party.Room} />
              )}
              <h2 className={GlobalStyles.headerText}>Date:</h2>
              {Generic_party.map(Generic_party=>
                  <h6>{Generic_party.date}</h6>
              )}
              <button className={GlobalStyles.button} type="button" onClick={() => this.goContract()}>Continue</button>
            </div>
        </div> 
      </div>
    );
  };
}
export default Summary;