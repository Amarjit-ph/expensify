/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selector/expenses';


const ExpenseList = (props) => (
    <div className="px-4">
        <table class="table bg-white shadow rounded-lg w-full text-left">
            <thead>
                <tr className='sticky mt-5 top-0 bg-gray-300'>
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        #
                    </th>
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        Name
                    </th>
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        Amount
                    </th>
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        Date
                    </th>
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        Type
                    </th>
                    
                    <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900 ">
                        More Detail
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                props.expenses.length === 0 ? (
                    <></>
                ) : (
                    props.expenses.map((expense, index) => {
                        
                        return <ExpenseListItem no={index+1}key={expense.id} {...expense} />
                    })
                )
            }
            </tbody>
        </table>

    </div>
);

// const ExpenseItemsList = ({ no,id, description, amount, createdAt, }) => {
    
// }



const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);


