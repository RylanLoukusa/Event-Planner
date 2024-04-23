import { useNavigate } from 'react-router-dom';
import { React } from "react";
import { Component } from 'react';
import GlobalStyles from "../Global.module.css";

class Information extends Component{
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

    async addCustomer(){
        var fname= ((document.getElementById("fname")||{}).value)||"";
        var lname= ((document.getElementById("lname")||{}).value)||"";
        var email= ((document.getElementById("email")||{}).value)||"";
        //var confirmEmail= ((document.getElementById("confirmEmail")||{}).value)||"";
        var address= ((document.getElementById("address")||{}).value)||"";
        var city= ((document.getElementById("city")||{}).value)||"";
        var state= ((document.getElementById("state")||{}).value)||"";
        var zip= ((document.getElementById("zip")||{}).value)||"";
        var phone= ((document.getElementById("pNum")||{}).value)||"";


        if (fname == "" || lname == "" || email == "" || address == "" || city == "" || state == "" || zip == "" || phone == "")
        {
            alert("Must fill out all text boxes");
            return;
        }
        /*
        if(email != confirmEmail)
        {
            alert("Emails must be the same");
            return 0;
        }
        */


        const data=new FormData();
        data.append("fname",fname);
        data.append("lname",lname);
        data.append("email",email);
        data.append("address",address);
        data.append("city",city);
        data.append("state",state);
        data.append("zip",zip);
        data.append("phone",phone);
        data.append("partyType", null);

        /*
        for (const value of data.values()) {
            alert(value);
        }
        alert(this.API_URL+"api/Web/AddCustomer");
        */

        fetch(this.API_URL+"api/Web/AddCustomer", {
            method: "POST",
            body:data
        }).then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshCustomers();
        })

        window.location.href = "/AvailableTimes"
        //this.props.navigate('/Date');
    }
    async goHome(){
        window.location.href = "/"
    }

    render(){
        const{customers}=this.state;
        //let navigate = useNavigate();
        return (
            <div>
                <button className={GlobalStyles.button} type="button" onClick={() => this.goHome()}>Back</button>
            <div className={GlobalStyles.setup}>
                
                <div className={GlobalStyles.page}>
                    <h1 className={GlobalStyles.titleText}>YOUR INFORMATION</h1><br />

                    <label className={GlobalStyles.inputPrompt}>First Name</label>
                        <input required placeholder="Enter" id="fname" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>Last Name</label>
                        <input required placeholder="Enter" id="lname" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>Email</label>
                        <input required placeholder="Enter" id="email" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>Phone</label>
                        <input required placeholder="Enter" id="pNum" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>Address</label>
                        <input required placeholder="Enter" id="address" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>City</label>
                        <input required placeholder="Enter" id="city" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>State</label>
                        <input required placeholder="Enter" id="state" className={GlobalStyles.input}/>
                        <label className={GlobalStyles.inputPrompt}>Zip Code</label>
                        <input required placeholder="Enter" id="zip" className={GlobalStyles.input}/>
                    
                    <button className={GlobalStyles.button} onClick={() => this.addCustomer()}>Continue</button>

                    <button className={GlobalStyles.specialButton} onClick={()=>this.goHome()}>Change or Cancel</button>
                </div>
            </div>
        </div>    
        );
    }
}

export default Information;
