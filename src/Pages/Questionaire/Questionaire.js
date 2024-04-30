// import QuestionnaireTextField from '../../Components/QuestionnaireTextField.jsx';
// import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { React } from 'react';
import { Component } from 'react';
import GlobalStyles from '../Global.module.css';


const seatingOptions = [
  { value: 'Front', label: 'Front two rows' },
  { value: 'Middle', label: 'Middle of the auditorium' },
  { value: 'Back', label: 'Back two rows' }
]

class Questionaire extends Component{
  constructor(props){
    super(props);
    this.state={
    customers:[]
    }
}

//5038 is other url
API_URL="http://localhost:5092/";


async addQuestionnaireAnswers(){
    var WhatIsName= ((document.getElementById("WhatIsName")||{}).value)||"";
    var HowOld= ((document.getElementById("HowOld")||{}).value)||"";
    var HowManyChildren= ((document.getElementById("HowManyChildren")||{}).value)||"";
    //var confirmEmail= ((document.getElementById("confirmEmail")||{}).value)||"";
    var HowManyAdults= ((document.getElementById("HowManyAdults")||{}).value)||"";
    var WhatMovie= ((document.getElementById("WhatMovie")||{}).value)||"";
    //Haven't gotten select statement values yet
    //var WhatSeat= ((document.getElementById("WhatSeat")||{}).value)||"";
    var WhatSeat="Front two rows (Temp)";
    var AnyQuestions= ((document.getElementById("AnyQuestions")||{}).value)||"";

    /*
    if(email != confirmEmail)
    {
        alert("Emails must be the same");
        return 0;
    }
    */

    if (WhatIsName === "" || HowOld  === "" || HowManyChildren === "" || HowManyAdults === "" || WhatMovie === "" || WhatSeat === "")
    {
      alert("Please fill out the questions");
      return;
    }

    const responses = [WhatIsName,
    HowOld,
    HowManyChildren,
    HowManyAdults,
    WhatMovie,
    WhatSeat,
    AnyQuestions
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
      data.append("questionID", i);
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
    
    alert("Thank you for filling out the Questionaire");

    window.location.href = "/Summary";
    //this.props.navigate('/Date');
}
async goHome(){
    window.location.href = "/";
}


  render(){
    return (
      <div className={GlobalStyles.setup}>
        <div className={GlobalStyles.page}>
        <button className={GlobalStyles.backButton} onClick={() => this.goHome()}> Back </button>
          <h1 className={GlobalStyles.titleText}>Questionnaire</h1>
          <label className={GlobalStyles.inputPrompt}>What is your birthday child's name? </label>
          <input id="WhatIsName" required placeholder='Enter' className={GlobalStyles.input}/>
          <label className={GlobalStyles.inputPrompt}>How old is the birthday child?</label>
          <input id="HowOld" required placeholder='Enter' className={GlobalStyles.input}/>
          <label className={GlobalStyles.inputPrompt}>How many children will be attending the event? </label>
          <input id="HowManyChildren" required placeholder='Enter' className={GlobalStyles.input}/>
          <label className={GlobalStyles.inputPrompt}>How many adults will be attending the event?</label>
          <input id="HowManyAdults" required placeholder='Enter' className={GlobalStyles.input}/>
          <label className={GlobalStyles.inputPrompt}>What movie would you like to see?</label>
          <input id="WhatMovie" required placeholder='Enter' className={GlobalStyles.input}/>
          <label className={GlobalStyles.inputPrompt}>What is you seating preference?</label>
          <Select id="WhatSeat" options={seatingOptions} required/>
          <label className={GlobalStyles.inputPrompt}>Any questions or concerns the Cinema should know about?</label>
          <input id="AnyQuestions" placeholder='Enter' className={GlobalStyles.input}/>

          <button className={GlobalStyles.button} onClick={() => this.addQuestionnaireAnswers()} type='submit'>
            View booking summary
          </button>
          {/* <p>Booking TIME on DATE</p> */}
        </div>
      </div>
    );
  }
}

export default Questionaire;
