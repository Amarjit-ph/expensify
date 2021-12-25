/*
 * Author: Amarjit Pheiroijam
 * Created Date: Saturday, December 25th 2021, 10:51:57 pm
 * Copyright (c) 2021
 */
import moment from "moment";
 const getYearlyExpenses = (expenses)=>{
    if(expenses.length === 0){
        return 0;
    }else{
        return expenses
        .filter((expense) => {
            const thisMonth = moment().format("YYYY");
            const createdAtMoment = moment(expense.createdAt).format("YYYY");;
            return createdAtMoment === thisMonth;

        });
    }
}
export default getYearlyExpenses;