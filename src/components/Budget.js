import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Budget(props){
    
    const {budget, dispatch} = useContext(AppContext);
    const budgetMessage = "Please enter your desired budget.";
    const budgetDefault = "2000";
    let myBudget = 0;

    // submit the new budget
    function onSubmit(value) {

		
		dispatch({
			type: 'ADD_BUDGET',
			payload: value.myBudget,
		});
            
	};

    // prompt the user to input a new budget
    function onEdit(){
         const myPrompt = prompt(budgetMessage, budgetDefault)
         if(myPrompt == null){
            alert("A value was not entered.");
         }
         else{
             myBudget = parseInt(myPrompt);
            console.log(myBudget)
            onSubmit(myBudget)

         }
    }
   
    // submit the new budget to the reducer
    function onSubmit(props) {

		
		dispatch({
			type: 'ADD_BUDGET',
			payload: myBudget,
		});
            
	};

    return(
        <div className="alert alert-secondary">
            <span>Budget: ${budget}</span>
            <button type="button" class="btn btn-light btn-sm edit-button"  onClick={onEdit}> Edit</button>
        </div>
    )
}

export default Budget;