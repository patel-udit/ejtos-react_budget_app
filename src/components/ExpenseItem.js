import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

import CurrencySelection from './CurrencySelection'; // Import the new component

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const decreaseAllocation = (name, id) => {
        const expense = {
            name: name,
            cost: -10, // Negative value to decrease
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };
    
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn-add" onClick={event=> increaseAllocation(props.name)}></button></td>
        <td><button className="btn-subtract" onClick={() => decreaseAllocation(props.name, props.id)}></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;