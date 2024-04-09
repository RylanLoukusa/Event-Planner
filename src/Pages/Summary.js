import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  }
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Greeting isLoggedIn={false} />);

const Summary = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Booking summary</h1>
      <br></br>
      <h2>
        Party Room - <WhichRoom whichPartyRoom="Party Room" />
      </h2>
      <h2>
        Meal Deal - <WhichDeal whichMealDeal="Popcorn Extravaganza" />
      </h2>
      <h2>
        Addons - <WhichAddOns whichAddOnChosen="Pizza" />
      </h2>
      <h2>Date -</h2>
      <button type="button">Back</button>
      <button type="button">Proceed to payment</button>
    </div>
  );
}

export default Summary;