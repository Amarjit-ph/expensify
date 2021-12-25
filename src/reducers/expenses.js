// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; // CREATE NEW ARRAY AND RETURN PREVIOUS ARRAY WITH DATA
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id); // RETURN ONLY WHICH ARE NOT SIMILAR TO PROVIDED ID
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates // OVERRIDE THE PREVIOUS VALUE AND UPDATES
                    }
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
}

export default expensesReducer;