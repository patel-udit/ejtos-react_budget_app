import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppContext } from './context/AppContext';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencySelection from './components/CurrencySelection'; // Import the new component

const App = () => {

    // const { currency, dispatch } = useContext(AppContext);
    // const [selectedCurrency, setSelectedCurrency] = useState(currency);

    // const handleCurrencyChange = (event) => {
    //     setSelectedCurrency(event.target.value);
    //     dispatch({ type: 'CHG_CURRENCY', payload: event.target.value }); // Update context with new currency
    // };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    
                    {/* <div className='col-sm'>
                        <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        <option value='£'>£ Pound</option>
                        <option value='$'>$ Dollar</option>
                        <option value='€'>€ Euro</option>
                        <option value='₹'>₹ Rupee</option>
                        </select>
                    </div> */}
                    {/* I want to add dropdown list for currencies here */}
                    <div className='col-sm'>
                        <CurrencySelection />  {/* Add the CurrencySelection component here */}
                    </div>
                
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;