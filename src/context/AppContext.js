import { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

const AppReducer = (state, action) => {
    switch(action.type) {
        // check the action type to determine what will be done with the actio and payload.
        case 'ADD_BUDGET':
			return {
				...state,
				budget: action.payload,
			};
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload),
            };
		default:
			return state;
    }
}

// create initial state of budget and expenses
const initalState = {
    budget: 2000,
    expenses:  [
		{ id: 12, name: 'Expense', cost: 0 },
		
	]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            {props.children}

        </AppContext.Provider>
    )
}