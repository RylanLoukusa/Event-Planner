// MealDeals.js
import React, { useState } from 'react';
import styles from './MealDeal.module.css';  // Ensure the path is correct based on your project structure

const MealDeal = () => {
  const [selectedMealDeal, setSelectedMealDeal] = useState(null);
  const [details, setDetails] = useState({
    'Popcorn Extravaganza': 12,
    'Pepperoni': 0,
    'Sausage': 0,
    'Cheese': 0,
    'Hot Dogs With Fries': 0,
    'Chicken Strips With Fries': 0
  });
const handleChange = (field, value) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };
  const mealDeals = ['Popcorn Extravaganza', 'Reel Pizza Deal', 'Real Meal Deal'];

  const handleSelect = (deal) => {
    if (selectedMealDeal === deal) {
      setSelectedMealDeal(null);
    } else {
      setSelectedMealDeal(deal);
    }
  };

  

  return (
    <div className={styles.container}>
      <h2>Select Your Meal Deal</h2>
      <div className={styles.mealOptions}>
        {mealDeals.map((deal) => (
          <button
            key={deal}
            onClick={() => handleSelect(deal)}
            className={selectedMealDeal === deal ? styles.buttonSelected : styles.button}
          >
            {deal}
          </button>
        ))}
      </div>
      {selectedMealDeal && (
        <div className={styles.detailContainer}>
          {selectedMealDeal === 'Popcorn Extravaganza' && (
            <div className={styles.detailItems}>
              <label>
                Buckets of Popcorn:
                <input className={styles.numberInput} type="number" value={details['Popcorn Extravaganza']} onChange={(e) => handleChange('Popcorn Extravaganza', e.target.value)} />
              </label>
            </div>
          )}
          {selectedMealDeal === 'Reel Pizza Deal' && (
            <div className={styles.detailItems}>
              <label>
                Pepperoni Pizzas:
                <input className={styles.numberInput} type="number" value={details['Pepperoni']} onChange={(e) => handleChange('Pepperoni', e.target.value)} />
              </label>
              <label>
                Sausage Pizzas:
                <input className={styles.numberInput} type="number" value={details['Sausage']} onChange={(e) => handleChange('Sausage', e.target.value)} />
              </label>
              <label>
                Cheese Pizzas:
                <input className={styles.numberInput} type="number" value={details['Cheese']} onChange={(e) => handleChange('Cheese', e.target.value)} />
              </label>
            </div>
          )}
          {selectedMealDeal === 'Real Meal Deal' && (
            <div className={styles.detailItems}>
              <label>
                Hot Dogs with Fries:
                <input className={styles.numberInput} type="number" value={details['Hot Dogs With Fries']} onChange={(e) => handleChange('Hot Dogs With Fries', e.target.value)} />
              </label>
              <label>
                Chicken Strips with Fries:
                <input className={styles.numberInput} type="number" value={details['Chicken Strips With Fries']} onChange={(e) => handleChange('Chicken Strips With Fries', e.target.value)} />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MealDeal;
