import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Contract from "./Pages/Contract/Contract.js";
import Information from "./Pages/Information/Information.js";
import SpecialRequest from "./Pages/Information/SpecialRequest.js";
import MealDeal from "./Pages/Meal/Meal.js";
import Payment from "./Pages/Payment/Payment.js";
import Questionaire from "./Pages/Questionaire/Questionaire.js";
import Summary from "./Pages/Summary/Summary.js";
import AvailableTimes from "./Pages/AvailableTimes/AvailableTimes.js";
import AuditoriumQuestions from "./Pages/Admin/AuditoriumQuestions.js";
import FieldTripQuestions from "./Pages/Admin/FieldTripQuestions.js";
import ThirdFloorQuestions from "./Pages/Admin/ThirdFloorQuestions.js";
import AdminVerify from "./Pages/Admin/AdminVerify.js";
import AdminView from "./Pages/Admin/AdminView.js";
import AddHost from "./Pages/Admin/AddHostDialog.js"
import Confirmation from "./Pages/Confirmation/Confirmation.js";
import Welcome from "./Pages/Welcome.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/AdminVerify" element={<AdminVerify />} />
                <Route path="/AdminView" element={<AdminView />} />
                <Route path="/AddHost" element={<AddHost />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/AuditoriumQuestions" element={<AuditoriumQuestions />} />
                <Route path="/ThirdFloorQuestions" element={<ThirdFloorQuestions />} />
                <Route path="/FieldTripQuestions" element={<FieldTripQuestions />} />
                <Route path="/Summary" element={<Summary />} />
                <Route path="/AvailableTimes" element={<AvailableTimes />} />
                <Route path="/Questionaire" element={<Questionaire />} />
                <Route path="/Contract" element={<Contract/>} />
                <Route path="/MealDeal" element={<MealDeal />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/SpecialRequest" element={<SpecialRequest />} />
                <Route path="/Confirmation" element={<Confirmation />} />
            </Routes>
        </Router>
    );
}

export default App;
