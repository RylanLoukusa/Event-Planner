import React, { useState } from 'react';
import styles from './DrinkDeal.module.css';  // Ensure the path matches your project structure

const DrinkDeal = () => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const drinks = ['Pepsi', 'Diet Pepsi', 'Root Beer', 'Starry', 'Lemonade', 'Dr. Pepper', 'Orange Crush', 'Water'];

  const handleSelectDrink = (drink) => {
    if (selectedDrinks.includes(drink)) {
      setSelectedDrinks(selectedDrinks.filter(d => d !== drink));
    } else {
      if (selectedDrinks.length < 2) {
        setSelectedDrinks([...selectedDrinks, drink]);
      } else {
        alert("You can only select up to two drinks.");
      }
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Select Two Drinks</h2>
        </div>
        <div className={styles.drinkContainer}>
          {drinks.map((drink) => (
              <button
                  key={drink}
                  onClick={() => handleSelectDrink(drink)}
                  className={selectedDrinks.includes(drink) ? styles.buttonSelected : styles.button}
              >
                  {drink}
              </button>
          ))}
        </div>
    </div>
  );
};

export default DrinkDeal;

