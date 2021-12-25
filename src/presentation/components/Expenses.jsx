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
        <div class="w-full mt-3 ml-4 md:space-y-4">
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}