import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
// import Contact from "./Pages/Contract";
import Date from "./Pages/Date";
import Information from "./Pages/Information";
import InformationSpecial from "./Pages/InformationSpecial";
import MealDeal from "./Pages/MealDeal";
import Payment from "./Pages/Payment";
import Questionaire from "./Pages/Questionaire";
import Summary from "./Pages/Summary";
import AuditoriumQuestions from "./Pages/AuditoriumQuestions";
import FieldTripQuestions from "./Pages/FieldTripQuestions";
import ThirdFloorQuestions from "./Pages/ThirdFloorQuestions";
import AdminVerify from "./Pages/AdminVerify";
import AdminView from "./Pages/AdminView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AdminVerify" element={<AdminVerify />} />
                <Route path="/AdminView" element={<AdminView />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/AuditoriumQuestions" element={<AuditoriumQuestions />} />
                <Route path="/ThirdFloorQuestions" element={<ThirdFloorQuestions />} />
                <Route path="/FieldTripQuestions" element={<FieldTripQuestions />} />
                <Route path="/Summary" element={<Summary />} />
                <Route path="/Questionaire" element={<Questionaire />} />
                {/* <Route path="/Contract" element={<Contact/>} /> */}
                <Route path="/Date" element={<Date />} />
                <Route path="/MealDeal" element={<MealDeal />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/InformationSpecial" element={<InformationSpecial />} />
            </Routes>
        </Router>
    );
}

export default App;
