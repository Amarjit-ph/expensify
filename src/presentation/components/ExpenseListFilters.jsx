/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null,
        startDate:0,
        endDate:0,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));

    }

    render() {
        return (
            <div className="px-4 pt-2 flex justify-between items-center">

                <div className="border border-solid border-gray-300 rounded">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            showClearDates={true}
                            isOutsideRange={() => false}
                        />
                </div>

                <div className='flex justify-end'>
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300
                            rounded-md py-2 pl-9 pr-3
                            text-black
                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"

                            placeholder="Search for expenses..." type="text" name="search"
                            value={this.props.filters.text} onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }} />
                    </label>

                    <div class="">
                        <div class="ml-2 w-36">
                            <select class="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-400
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                            
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount());
                                }
                            }}
                            
                            >
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>   
                            </select>
                        </div>
                    </div>
                </div>

               
            </div>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStatetoProps)(ExpenseListFilters);