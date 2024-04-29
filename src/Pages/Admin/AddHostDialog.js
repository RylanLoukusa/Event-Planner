import React from 'react';
import { Component } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Dialog.css';
import GlobalStyles from '../Global.module.css'

class AddHost extends Component{
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

    async addHost(){
        //var pname= ((document.getElementById("party")||{}).value)||"";
        var fname= ((document.getElementById("first name")||{}).value)||"";
        var lname= ((document.getElementById("last name")||{}).value)||"";

        /*
        if(email != confirmEmail)
        {
            alert("Emails must be the same");
            return 0;
        }
        */


        const data=new FormData();
        //data.append("pname",pname);
        data.append("fname",fname);
        data.append("lname",lname);


        /*
        for (const value of data.values()) {
            alert(value);
        }
        alert(this.API_URL+"api/Web/AddCustomer");
        */

        fetch(this.API_URL+"api/Web/AddHost", {
            method: "POST",
            body:data
        }).then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshCustomers();
        })

        //this.props.navigate('/Date');
    }
    async goHome(){
        window.location.href = "/"
    }

    render(){
      //const{customers}=this.state;
      //let navigate = useNavigate();
      return (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="Button Brown">Add A Host</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
              <Dialog.Title className="DialogTitle">Add A Host</Dialog.Title>
              <Dialog.Description className="DialogDescription">
                Identify the party and the Host below. Click save when you're done.
              </Dialog.Description>
              <fieldset className="Fieldset">
                <label className={GlobalStyles.descriptionText} htmlFor="party">
                  Party Name:
                </label>
                <input className={GlobalStyles.input} id="party" placeholder="enter party name" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className={GlobalStyles.descriptionText}  htmlFor="first name">
                  First Name:
                </label>
                <input className={GlobalStyles.input} id="first name" placeholder="enter first name" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className={GlobalStyles.descriptionText}  htmlFor="last name">
                  Last Name:
                </label>
                <input className={GlobalStyles.input} id="last name" placeholder="enter last name" />
              </fieldset>
              <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                <Dialog.Close asChild>
                  <button onClick={() => this.addHost()} className="Button green">Save changes</button>
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

export default AddHost;