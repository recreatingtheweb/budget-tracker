import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Remaining(){
    const { expenses, budget } = useContext(AppContext);
    // show the remaining budget and alert the user if over budget
    const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';


    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining;