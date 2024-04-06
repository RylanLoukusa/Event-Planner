import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
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
                <Route path="/admin-verify" element={<AdminVerify />} />
                <Route path="/admin-view" element={<AdminView />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/auditorium-questions" element={<AuditoriumQuestions />} />
                <Route path="/third-floor-questions" element={<ThirdFloorQuestions />} />
                <Route path="/field-trip-questions" element={<FieldTripQuestions />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/questionaire" element={<Questionaire />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/date" element={<Date />} />
                <Route path="/meal-deal" element={<MealDeal />} />
                <Route path="/information" element={<Information />} />
                <Route path="/information-special" element={<InformationSpecial />} />
            </Routes>
        </Router>
    );
}

export default App;
