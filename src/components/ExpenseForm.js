/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();
console.log('DATE : ' + now.format('Do MMMM Y'));

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title:"",
            subtitle:props.subtitle ? props.subtitle:"",
            type:props.type?props.type:"",
            delete:props.deleteRecord?props.deleteRecord:null,

            id:props.expense?props.expense.id:"",
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderfocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderfocused: focused }))

    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state
            const error = "Please enter all values before saving!"
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));

            console.log("SUBMITTED :");
            console.log(this.state.amount);


            // FOR REDUX STORE TO PROPS
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div class="flex flex-col mx-auto max-w-md max-h-full px-2 py-3 mt-6 rounded-lg shadow dark:bg-gray-800 sm:px-2 md:px-8 lg:px-2">
                
                <div class="self-center mt-2 mb-0.5 text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
                    { this.state.description !=="" ? this.state.description : this.state.title}
                </div>

                <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    {this.state.subtitle}
                    
                </span>

                <div class="p-5">
                    <form action="#"
                    onSubmit={this.onSubmit}>

                            
                        

                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent 
                                flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
                                placeholder-gray-400 shadow-sm text-base focus:outline-none 
                                focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="pseudo" placeholder="Name"
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                />
                                </div>
                            </div>
                            <div class="flex gap-4 mb-2">

                                <div class=" relative ">
                                    <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent 
                                    flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 
                                    placeholder-gray-400 shadow-sm text-base focus:outline-none 
                                    focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="Amount"
                                    value={this.state.amount}
                                    onChange={this.onAmountChange}
                                    />
                                </div>

                                <SingleDatePicker
                                    date={this.state.createdAt}
                                    onDateChange={this.onDateChange}
                                    focused={this.state.calenderfocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={(day) => false}
                                />
                            </div>

                            
                            
                            <div class="col-span-2 mt-2">
                                <label class="text-gray-700" for="name">
                                    <textarea class="flex-1 appearance-none border border-gray-300 
                                    w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
                                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    id="comment" placeholder="Enter your description" name="comment" rows="5" cols="40"
                                    value={this.state.note}
                                    onChange={this.onNoteChange}>
                                    </textarea>
                                </label>
                            </div>



                            <div class="flex flex-col"></div>
                            
                                <p className='text-red-800'>{this.state.error && <p>{this.state.error}</p>}</p>
                                <div class="flex w-full my-4">

                                {this.state.type==="Edit"?<>
                                    <button type="submit" class="py-2 mr-3 px-4  bg-red-600 hover:bg-red-700 focus:ring-purple-500 
                                        focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base 
                                        font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                        onClick={()=>this.state.delete(this.state.id)}
                                        >
                                        Delete
                                    </button>
                                    <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-blue-700 focus:ring-purple-500 
                                        focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base 
                                        font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Save
                                    </button>
                                </>:<></>}

                                {this.state.type==="New"?
                                    <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-blue-700 focus:ring-purple-500 
                                        focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base 
                                        font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Save
                                    </button>
                                :<></>}
                                    
                            </div>
                        
                    </form>         
                </div>
            </div>
        );
    }
}

