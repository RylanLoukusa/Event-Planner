import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "../Styles/MealDeal.css";

const MealDealSelectionPage = () => {
  const [selectedMealDeal, setSelectedMealDeal] = useState('');
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [addOnsExpanded, setAddOnsExpanded] = useState(false);
  const [mealDealOptions, setMealDealOptions] = useState({
    popcornBuckets: 0,
    cheesePizzas: 0,
    pepperoniPizzas: 0,
    sausagePizzas: 0,
    hotDogsWithFries: 0,
    chickenStripsWithFries: 0,
  });

  const [addOns, setAddOns] = useState({
    additionalGuests: 0,
    extraPizzas: 0,
    extraTickets: 0,
    snackPacks: 0,
  });

  const handleAddOnsNumberChange = (addOn, value) => {
    setAddOns({ ...addOns, [addOn]: Number(value) });
  };

  const handleDrinkSelection = (drink) => {
    if (selectedDrinks.includes(drink)) {
      setSelectedDrinks(selectedDrinks.filter(d => d !== drink));
    } else if (selectedDrinks.length < 2) {
      setSelectedDrinks([...selectedDrinks, drink]);
    }
  };

  const handleNumberChange = (item, value) => {
    setMealDealOptions({ ...mealDealOptions, [item]: value });
  };

  const handleAddOnsToggle = () => {
    setAddOnsExpanded(!addOnsExpanded);
  };

  let navigate = useNavigate();
  return (
    <div className="setup">
      <h2 className="meal-deal-header">Select Your Meal Deal</h2>
      <div className="meal-deal-options">
        {['PopcornExtravaganza', 'ReelPizzaDeal', 'RealMealDeal'].map((deal) => (
          <label key={deal} className="meal-deal-option">
            <input
              type="radio"
              name="mealDeal"
              value={deal}
              checked={selectedMealDeal === deal}
              onChange={() => setSelectedMealDeal(deal)}
            />
            {deal.replace(/([A-Z])/g, ' $1').trim()}
          </label>
        ))}
      </div>

      <div className={`meal-deal-details ${selectedMealDeal}`}>
        {selectedMealDeal === 'PopcornExtravaganza' && (
          <label className="detail-item">
            How many buckets of popcorn?
            <input
              type="number"
              className="detail-input"
              value={mealDealOptions.popcornBuckets}
              onChange={(e) => handleNumberChange('popcornBuckets', e.target.value)}
            />
          </label>
        )}

        {selectedMealDeal === 'ReelPizzaDeal' && (
          ['cheesePizzas', 'pepperoniPizzas', 'sausagePizzas'].map(pizza => (
            <label key={pizza} className="detail-item">
              {pizza}
              <input
                type="number"
                className="detail-input"
                value={mealDealOptions[pizza]}
                onChange={(e) => handleNumberChange(pizza, e.target.value)}
              />
            </label>
          ))
        )}

        {selectedMealDeal === 'RealMealDeal' && (
          ['hotDogsWithFries', 'chickenStripsWithFries'].map(item => (
            <label key={item} className="detail-item">
              {item.replace(/([A-Z])/g, ' $1').trim()}
              <input
                type="number"
                className="detail-input"
                value={mealDealOptions[item]}
                onChange={(e) => handleNumberChange(item, e.target.value)}
              />
            </label>
          ))
        )}
      </div>

      <h3 className="drinks-header">Select Two Drinks</h3>
      <div className="drinks-options">
        {['Pepsi', 'Diet Pepsi', 'Root Beer', 'Starry', 'Lemonade', 'Dr. Pepper', 'Orange Crush', 'Water'].map((drink) => (
          <label key={drink} className="drink-option">
            <input
              type="checkbox"
              value={drink}
              checked={selectedDrinks.includes(drink)}
              onChange={() => handleDrinkSelection(drink)}
            />
            {drink}
          </label>
        ))}
      </div>

      <h3 className="addons-header">Add-Ons</h3>
      <button className="toggle-button" onClick={handleAddOnsToggle}>
        {addOnsExpanded ? 'Hide Add-Ons' : 'Show Add-Ons'}
      </button>
      
      {addOnsExpanded && (
        <div className="addons-container">
          {Object.entries(addOns).map(([addOn, value]) => (
            <label key={addOn} className="addon-item">
              {addOn.replace(/([A-Z])/g, ' $1').trim()}:
              <input
                type="number"
                className="addon-input"
                value={value}
                onChange={(e) => handleAddOnsNumberChange(addOn, e.target.value)}
                min="0"
              />
            </label>
          ))}
        </div>
      )}

      <button className="continue-button" onClick={() => navigate('/Summary')}>Continue</button>
    </div>
  );
}

export default MealDealSelectionPage;
