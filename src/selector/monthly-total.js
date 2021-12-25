/*
 * Author: Amarjit Pheiroijam
 * Created Date: Saturday, December 25th 2021, 8:47:23 pm
 * Copyright (c) 2021
 */
import moment from "moment";
 const getMonthlyExpenses = (expenses)=>{
    if(expenses.length === 0){
        return 0;
    }else{
        return expenses
        .filter((expense) => {
            const thisMonth = moment().format("MMMM,YYYY");
            const createdAtMoment = moment(expense.createdAt).format("MMMM,YYYY");;
            return createdAtMoment === thisMonth;

        });
    }
}
export default getMonthlyExpenses;