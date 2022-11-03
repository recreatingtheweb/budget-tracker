import React, { useContext, useState, useEffect } from 'react';
import Expenseitem from './ExpenseItem'
import { AppContext } from '../context/AppContext';

function ExpenseList(){

    

    const { expenses } = useContext(AppContext);

    // map through lists of expenses to display in a list
    return (
        <ul className="list-group" >
            {expenses.map((expense) => (
                <Expenseitem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
    )
}

export default ExpenseList;