import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

import CurrencySelection from './CurrencySelection'; // Import the new component

const Budget = () => {
  const { budget, expenses, setBudget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 0) {
      const totalExpense = calculateTotalExpense();
      if (newValue >= totalExpense) { // Validate if new budget is sufficient
        setNewBudget(newValue);
      } else {
        alert('Budget cannot be lower than the total spending of £' + totalExpense);
      }
    } else {
      setNewBudget(0); // Set to minimum non-negative value (0)
      alert('Budget cannot be negative.');
    }
  };
  

  const handleBudgetUpdate = () => {
    if (newBudget >= 0 && (!expenses || calculateTotalExpense() <= newBudget)) {
      setBudget(newBudget); // Update budget in context
    } else {
      alert('Budget cannot be negative or lower than total spending.'); // Inform user of invalid input
    }
  };

  const calculateTotalExpense = () => {
    return expenses?.reduce((total, item) => total + item.cost, 0) || 0; // Calculate total expense or default to 0
  };

  useEffect(() => {
    setNewBudget(budget); // Sync newBudget with context on budget change
  }, [budget]); // Update newBudget when budget in context changes

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        max="20000"
        onChange={handleBudgetChange}
      />
      <button onClick={handleBudgetUpdate}>Update</button>
    </div>
  );
};

export default Budget;
