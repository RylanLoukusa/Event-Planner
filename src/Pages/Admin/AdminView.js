import React,{useState} from 'react';
import AddHost from './AddHostDialog';
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ThirdFloorQuestions from './ThirdFloorQuestions';
import FieldTripQuestions from './FieldTripQuestions';
import AuditoriumQuestions from './AuditoriumQuestions';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';
import './AdminView.css'





const AdminView = () => {
  let navigate = useNavigate(); 
  const [key, setKey] = useState('tab2')
  return (
    <div>
            <button className={GlobalStyles.button}type="button" onClick={() => navigate('/')}>Back</button>

      <Tabs className="Tabs" activeKey={key} onSelect={(k)=> setKey(k)}>

        <TabList >
          <Tab eventKey="tab1">Upcoming Events</Tab>
          <Tab eventKey="tab2">Past Events</Tab>
          <Tab eventKey="tab3">Add a special booking</Tab>
        </TabList>
        <TabPanel>
          <h2>Upcoming Events</h2>
          <AddHost/>
          <p>List of upcoming events</p>
          <p>select party details where the date is greater than today</p>
        </TabPanel>
        <TabPanel>
          <h2>Past Events</h2>
          <p>list of the events already past</p>
          <p>select party details where the date is less than today </p>
        </TabPanel>
        
      </Tabs>
      
    </div>
  );
};
export default AdminView;

