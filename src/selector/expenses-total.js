
/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

export default (expense) => {
    if(expense===0){
        return 0;
    }
    if (expense.length === 0) {
        return 0;
    } else {
        return expense
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0);
    }
}