/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../../components/ExpenseForm';
import { history } from "../../routers/AppRouter";
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'

const EditExpensePage = (props) => {

    const deleteRecord = (id) => {
        props.dispatch(startRemoveExpense({ id: id }));       
        history.push('/dashboard');
    }

    return (
        <div>
            <div className="p-6 bg-gray-100">
            <div className="content-container">
                <FontAwesomeIcon icon={faMoneyCheck} className='text-black text-3xl'/> 
                <p className="text-black text-2xl inline ml-4 font-sans font-bold">
                EXPENSE RECORD</p>
                <p className='text-gray-600 mt-1'>
                    Here's you can view all the details for expense record,<br/>
                    And you can update or delete your record.
                </p>
                
               
                <p className='text-gray-800 mt-2'>Financial freedom can only be achieved by a conscious choice.<br/> It's not an accident.
                -<span className='font-bold'>David Angway</span></p>
            </div>
           
        </div>

            <div className="content-container">
            <ExpenseForm   
                    title=""
                    subtitle="Delete or Update your record"
                    deleteRecord={deleteRecord}
                    

                    type="Edit"
                    onSubmit={(expense) => {
                        console.log('UPDATED:', expense);
                        props.dispatch(startEditExpense(props.expense.id, expense));
                        //props.history.push('/dashboard');
                        history.push('/dashboard');
                    }}
                    expense={props.expense}
                />s
            </div>
        </div>
    );
};

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStatetoProps)(EditExpensePage);


