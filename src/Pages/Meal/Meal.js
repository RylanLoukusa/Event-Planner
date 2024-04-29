import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Meal.module.css";
import GlobalStyles from "../Global.module.css";
import MealDeal, {addMealDeal} from "./MealDeal/MealDeal.js";
import DrinkDeal, {addDrinkDeal} from "./DrinkDeal/DrinkDeal.js";

const MealDealSelectionPage = () => {
  const [addOnsExpanded, setAddOnsExpanded] = useState(false);
  const [addOns, setAddOns] = useState({
    AdditionalGuests: 0,
    ExtraPizzas: 0,
    ExtraTickets: 0,
    SnackPacks: 0,
  });
  //const deal = require('./MealDeal/MealDeal.js');

  const handleAddOnsNumberChange = (addOn, value) => {
    setAddOns({ ...addOns, [addOn]: Number(value) });
  };

  const handleAddOnsToggle = () => {
    setAddOnsExpanded(!addOnsExpanded);
  };

  const confirm = () => {    
    addMealDeal();  
    addDrinkDeal();

    //push that to the API


    //Go to the next webpage

    
  };

  let navigate = useNavigate();
  return (
    <div className={GlobalStyles.setup}>
      <div className={GlobalStyles.page}>
        <button className={GlobalStyles.backButton}type="button" onClick={() => navigate('/AvailableTimes')}>Back</button>
        <h2 className={GlobalStyles.titleText}>Meal Deal</h2>
        <MealDeal/>
        <DrinkDeal/>
        {addOnsExpanded && (
          <div className={styles.addContainer}>
            <h2>Add-Ons</h2>
            {Object.entries(addOns).map(([addOn, value]) => (
              <label key={addOn}>
                {addOn.replace(/([A-Z])/g, ' $1').trim()}:
                <input
                  type="number"
                  className={styles.numberInput}
                  value={value}
                  onChange={(e) => handleAddOnsNumberChange(addOn, e.target.value)}
                  min="0"
                />
              </label>
            ))}
          </div>
        )}
        <button className={styles.addOnToggle} onClick={handleAddOnsToggle}>
          {addOnsExpanded ? 'Hide Add-Ons' : 'Show Add-Ons'}
        </button>

        <button className={GlobalStyles.continueButton} onClick={() => confirm()}>Continue</button>
      </div>
    </div>
  );
}

export default MealDealSelectionPage;
