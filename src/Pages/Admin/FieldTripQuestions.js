import React from 'react';
import { Component } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Dialog.css';
import Select from 'react-select';
import GlobalStyles from '../Global.module.css';

const seatingOptions = [{label:'Front two Rows'},{label:'Middle of the Auditorium'}, {label:'Back two rows'}];

class FieldTripQuestions extends Component{
  constructor(props){
    super(props);
    this.state={
    customers:[]
    }
}

//5038 is other url
API_URL="http://localhost:5092/";

componentDidMount(){
    this.refreshCustomers();
}

async refreshCustomers(){
    fetch(this.API_URL+"api/Web/GetCustomer").then(response=>response.json())
    .then(data=>{
    this.setState({customers:data});
    })
}

async addQuestionnaireAnswers(){
    var party= ((document.getElementById("party")||{}).value)||"";
    var attendance= ((document.getElementById("attendance")||{}).value)||"";
    var movie= ((document.getElementById("movie")||{}).value)||"";
    //Haven't gotten select values to work yet
    //var WhatSeat= ((document.getElementById("WhatSeat")||{}).value)||"";

    /*
    if(email != confirmEmail)
    {
        alert("Emails must be the same");
        return 0;
    }
    */
    const responses = [party,
      attendance,
      movie
    ];


    const data=new FormData();
    data.append("customerID", 2);
    /*
    for (const value of data.values()) {
        alert(value);
    }
    alert(this.API_URL+"api/Web/AddCustomer");
    */
    //this for loop populates the answer table for each answer
    for (let i = 0; i < responses.length; i++) {
      data.append("questionID", (i+7));
      data.append("response", responses[i]);

      fetch(this.API_URL+"api/Web/AddQuestionnaireAnswers", {
          method: 'POST',
          body: data
          // body: JSON.stringify({
          //   customerID: 2,
          //   questionID: i,
          //   response: responses[i]
          }).then(res=>res.json())
      
      data.delete("questionID");
      data.delete("response");
    }
    
    alert("Saved Changes");

    //window.location.href = "/AdminView";
    //this.props.navigate('/Date');
}
async goHome(){
    window.location.href = "/";
}


  render(){
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button orange">Book Now</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          {/* <Dialog.Overlay className="DialogOverlay" /> */}
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Field Trip</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Questionnaire
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className={GlobalStyles.descriptionText} htmlFor="party">
              Business/organization name?  
              </label>
              <input className={GlobalStyles.input} id="party" defaultValue="enter" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className={GlobalStyles.descriptionText} htmlFor="attendance">
                Expected Attendance  
              </label>
              <input className={GlobalStyles.input} id="attendance" defaultValue="enter" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className={GlobalStyles.descriptionText} htmlFor="movie">
                What movie will they watch?  
              </label>
              <input className={GlobalStyles.input} id="movie" defaultValue="enter" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className={GlobalStyles.descriptionText}>
                Seating preference:
              </label>
              <Select options={seatingOptions}/>
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button className={GlobalStyles.continueButton} onClick={() => this.addQuestionnaireAnswers()}>Save Changes</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
}

export default FieldTripQuestions;