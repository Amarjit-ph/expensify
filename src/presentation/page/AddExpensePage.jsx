
/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../../actions/expenses';
import { history } from "../../routers/AppRouter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'


const AddExpensePage = (props) => (
    <div>
        <div className="p-6 bg-gray-100">
            <div className="content-container">
                <FontAwesomeIcon icon={faMoneyCheck} className='text-black text-3xl'/> 
                <p className="text-black text-2xl inline ml-4 font-sans font-bold">
                CREATE A NEW EXPENSE RECORD</p>
                <p className='text-gray-600 mt-1'>
                    Here's you can enter all the details to create a new expense record,<br/>
                    And use them to better understand your choices.
                </p>
                
               
                <p className='text-gray-800 mt-2'>Beware of little expenses. A small leak will sink a great ship.<br/>-<span className='font-bold'>Benjamin Franklin</span></p>
            </div>
           
        </div>

        <div className="content-container">
            <ExpenseForm 
                title="New Expense Record"
                type="New"
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense));
                    history.push('/dashboard');
            }} />
        </div>
    </div>
);

export default connect()(AddExpensePage)