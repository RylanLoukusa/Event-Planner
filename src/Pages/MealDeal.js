import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MealDealSelectionPage = () => {
  let navigate = useNavigate();
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px'}}>
      <h2>Select Your Meal Deal</h2>
      <div style = {{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        <label>
          <input
            type="radio"
            name="mealDeal"
            value="PopcornExtravaganza"
            checked={selectedMealDeal === 'PopcornExtravaganza'}
            onChange={() => setSelectedMealDeal('PopcornExtravaganza')}
          />
          Popcorn Extravaganza
        </label>
        <label>
          <input
            type="radio"
            name="mealDeal"
            value="ReelPizzaDeal"
            checked={selectedMealDeal === 'ReelPizzaDeal'}
            onChange={() => setSelectedMealDeal('ReelPizzaDeal')}
          />
          Reel Pizza Deal
        </label>
        <label>
          <input
            type="radio"
            name="mealDeal"
            value="RealMealDeal"
            checked={selectedMealDeal === 'RealMealDeal'}
            onChange={() => setSelectedMealDeal('RealMealDeal')}
          />
          Real Meal Deal
        </label>
      </div>
      
      {selectedMealDeal === 'PopcornExtravaganza' && (
        <div>
          <label>How many buckets of popcorn?
            <input
              type="number"
              value={mealDealOptions.popcornBuckets}
              onChange={(e) => handleNumberChange('popcornBuckets', e.target.value)}
            />
          </label>
        </div>
      )}

      {selectedMealDeal === 'ReelPizzaDeal' && (
        <div style = {{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
          <label>Cheese
            <input
              type="number"
              value={mealDealOptions.cheesePizzas}
              onChange={(e) => handleNumberChange('cheesePizzas', e.target.value)}
            />
          </label>
          <label>Pepperoni
            <input
              type="number"
              value={mealDealOptions.pepperoniPizzas}
              onChange={(e) => handleNumberChange('pepperoniPizzas', e.target.value)}
            />
          </label>
          <label>Sausage
            <input
              type="number"
              value={mealDealOptions.sausagePizzas}
              onChange={(e) => handleNumberChange('sausagePizzas', e.target.value)}
            />
          </label>
        </div>
      )}

      {selectedMealDeal === 'RealMealDeal' && (
        <div style = {{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
          <label>Hot Dogs with Fries
            <input
              type="number"
              value={mealDealOptions.hotDogsWithFries}
              onChange={(e) => handleNumberChange('hotDogsWithFries', e.target.value)}
            />
          </label>
          <label>Chicken Strips with Fries
            <input
              type="number"
              value={mealDealOptions.chickenStripsWithFries}
              onChange={(e) => handleNumberChange('chickenStripsWithFries', e.target.value)}
            />
          </label>
        </div>
      )}

      <h3>Select Two Drinks</h3>
      <div style = {{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        {['Pepsi', 'Diet Pepsi', 'Root Beer', 'Starry', 'Lemonade', 'Dr. Pepper', 'Orange Crush', 'Water'].map((drink) => (
          <label key={drink}>
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

      <h3>Add-Ons</h3>
      <button onClick={handleAddOnsToggle}>{addOnsExpanded ? 'Hide Add-Ons' : 'Show Add-Ons'}</button>
      
      {addOnsExpanded && (
        <div>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Additional Guests:
            <input
              type="number"
              value={addOns.additionalGuests}
              onChange={(e) => handleAddOnsNumberChange('additionalGuests', e.target.value)}
              min="0"
            />
          </label>
          <label>
            Extra Pizzas:
            <input
              type="number"
              value={addOns.extraPizzas}
              onChange={(e) => handleAddOnsNumberChange('extraPizzas', e.target.value)}
              min="0"
            />
          </label>
          <label>
            Extra Tickets:
            <input
              type="number"
              value={addOns.extraTickets}
              onChange={(e) => handleAddOnsNumberChange('extraTickets', e.target.value)}
              min="0"
            />
          </label>
          <label>
            Snack Packs:
            <input
              type="number"
              value={addOns.snackPacks}
              onChange={(e) => handleAddOnsNumberChange('snackPacks', e.target.value)}
              min="0"
            />
          </label>
        </div>
        </div>
         )}
         <button>Continue</button>
    </div>
  );
}


export default MealDealSelectionPage;
