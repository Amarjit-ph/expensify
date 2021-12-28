/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react'
import ExpensesSummary from "../../presentation/components/ExpensesSummary.jsx";
import ExpenseListFilters from "../../presentation/components/ExpenseListFilters.jsx";
import ExpenseList from "../../components/ExpenseList";

export const Expenses = () => {
    return (
        <div class="flex flex-col pl-3 pb-10 h-full overflow-scroll overflow-x-hidden">
            <div className='mb-5 mr-3'>
                <ExpensesSummary />
                <ExpenseListFilters />
            </div>
            <div className='flex-grow'>
                <ExpenseList />
            </div>
        </div>
    );
}