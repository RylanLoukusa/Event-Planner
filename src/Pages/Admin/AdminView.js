import React,{useState} from 'react';
import AddHost from './AddHostDialog';
import { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ThirdFloorQuestions from './ThirdFloorQuestions';
import FieldTripQuestions from './FieldTripQuestions';
import AuditoriumQuestions from './AuditoriumQuestions';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';
import './AdminView.css'

class AdminView extends Component{
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

async refreshGenericParty(tabIndex) {
  if (tabIndex === 0) { // Check if the active tab is the first tab (index 0)
      fetch(this.API_URL + "api/Web/GetGreaterGenericParty")
          .then(response => response.json())
          .then(data => {
              this.setState({ Generic_party: data });
          });
  } else if (tabIndex === 1) { // Check if the active tab is the second tab (index 1)
      fetch(this.API_URL + "api/Web/GetLesserGenericParty")
          .then(response => response.json())
          .then(data => {
              this.setState({ Generic_party: data });
          });
  }
}
async goHome(){
    window.location.href = "/"
}
  render(){
    const{Generic_party}=this.state;
    //let navigate = useNavigate(); 
    //const [key, setKey] = useState('tab2')
    return (
      <div>
              <button className={GlobalStyles.button}type="button" onClick={() => this.goHome()}>Back</button>

        <Tabs onSelect={(index) => this.refreshGenericParty(index)}>

          <TabList >
            <Tab eventKey="tab1">Upcoming Events</Tab>
            <Tab eventKey="tab2">Past Events</Tab>
            <Tab eventKey="tab3">Add a special booking</Tab>
          </TabList>
          <TabPanel>
            <h2>Upcoming Events</h2>
            <AddHost/>
            <p>List of upcoming events</p>
            {Generic_party.map(Generic_party=>
                <p>
                    <b>{Generic_party.Party_name}&nbsp; {Generic_party.date}</b>&nbsp;
                </p>
            )}
          </TabPanel>
          <TabPanel>
            <h2>Past Events</h2>
            <p>list of the events already past</p>
            {Generic_party.map(Generic_party=>
                <p>
                    <b>{Generic_party.Party_name}&nbsp; {Generic_party.date}</b>&nbsp;
                </p>
            )}
          </TabPanel>
          <TabPanel>
        <div className='setup'>
              <h1 className='title-text'>What kind of booking do you require?</h1>
              <div className='selection-view'>
                <h2 className='header'>Auditorium Rental</h2>
                <AuditoriumQuestions/>

                <h2 className='header'>Third Floor Event</h2>
                <ThirdFloorQuestions/>

                <h2 className='header'>Field Trip</h2>
                <FieldTripQuestions/>
              </div>
            </div> 
          </TabPanel>
        </Tabs>
        
      </div>
    );
  };
}
export default AdminView;

