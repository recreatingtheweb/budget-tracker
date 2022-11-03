import React, { useContext, useRef } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

function ExpenseItem(props){
    const myId = props.id

    const { dispatch } = useContext(AppContext);

    
    // delete the expense clicked on
    const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
            payload: props.id
		});
        

	};

    return (
        <li  className="list-group-tem d-flex justify-content-between align-items-center">
            {props.name}
            <div >
                <span  className=" mr-3">
                    <strong >${props.cost} </strong>
                </span>
                <TiDelete onClick={handleDeleteExpense}  size='1.5em' ></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem