import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Meal.module.css";
import GlobalStyles from "../Global.module.css";
import MealDeal from "./MealDeal/MealDeal.js";
import DrinkDeal from "./DrinkDeal/DrinkDeal.js";

const MealDealSelectionPage = () => {
  const [addOnsExpanded, setAddOnsExpanded] = useState(false);
  const [addOns, setAddOns] = useState({
    AdditionalGuests: 0,
    ExtraPizzas: 0,
    ExtraTickets: 0,
    SnackPacks: 0,
  });

  const handleAddOnsNumberChange = (addOn, value) => {
    setAddOns({ ...addOns, [addOn]: Number(value) });
  };

  const handleAddOnsToggle = () => {
    setAddOnsExpanded(!addOnsExpanded);
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

        <button className={GlobalStyles.continueButton} onClick={() => navigate('/Questionaire')}>Continue</button>
      </div>
    </div>
  );
}

export default MealDealSelectionPage;
