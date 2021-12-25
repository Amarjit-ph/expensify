import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import selectExpenses from '../../selector/expenses';
import selectExpensesTotal from '../../selector/expenses-total';


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    
    
    return (
        <div className="px-4 pt-5">
            <h1 class="text-4xl font-semibold text-gray-800 text-serif">Expenses</h1>
            
            <h1 class="text-md text-gray-400">
                Here&#x27;s you can view all of your Expenses, Search & sort them by date or amount of your choice.
            </h1>

            <div className="flex justify-between mt-2">
                <div className="text-black font-medium font-mono text-3xl">
                    {
                        expenseCount === 0 ? <h1>No Expense Found </h1> :
                            <h1 className="">Viewing <span className='font-bold text-indigo-500'>{expenseCount}</span> {expenseWord} totalling <span className='font-bold text-indigo-500'>₹{expensesTotal}</span> </h1>

                    }
                    
                </div>
                <div class="w-32 h-15 text-center text-base py-2 px-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        <Link to='/create' className="" >Add Expense</Link>
                </div>
            </div>
            

            
        </div>
    );
};

const mapStateToProps = (state,props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
