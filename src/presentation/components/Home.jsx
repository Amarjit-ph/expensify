/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 13th 2021, 6:07:44 pm
 * Copyright (c) 2021
 */

import React from 'react';
import moment from "moment";
import { connect } from 'react-redux';
import selectExpenses from '../../selector/expenses';
import selectExpensesTotal from '../../selector/expenses-total';
import getMonthlyExpenses from '../../selector/monthly-total';
import { setStartDate, setEndDate } from '../../actions/filters';
import { useDispatch } from "react-redux";
import getYearlyExpenses from '../../selector/yearly-total';


const Home = ({expenseCount,expensesTotal,expensesMonthlyTotal,expensesYearlyTotal,displayName,url}) => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(setStartDate(0));
        dispatch(setEndDate(0));
    },);
    const generateGreetings=()=>{
        if (moment().isBetween(5, 12, 'HH')){
            return "Good Morning !";
        } else if (moment().isBetween(12, 15, 'HH')){
            return "Good Afternoon !";
        }   else if (moment().isBetween(15, 20, 'HH')){
            return "Good Evening !";
        } else if (moment().isBetween(20, 3, 'HH')){
            return "Good Night !";
        } else {
            return "Hello ! 🦉"
        }
    }
    const visualSpending = (expensesTotal) =>{
        const percentage = (expensesTotal/480000)*100;
        if(percentage<5){
            return <div class="w-1 h-full text-center text-xs text-white bg-green-400"></div>
        }else if(percentage<10){
            return <div class="w-3 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<20){
            return <div class="w-1/5 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<30){
            return <div class="w-1/4 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<40){
            return <div class="w-4/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<50){
            return <div class="w-1/2 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<60){
            return <div class="w-7/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<70){
            return <div class="w-8/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<80){
            return <div class="w-9/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<90){
            return <div class="w-10/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage<100){
            return <div class="w-11/12 h-full text-center text-xs text-white bg-green-400"></div>
        }
        else if(percentage>99){
            return <div class="w-full h-full text-center text-xs text-white bg-green-400"></div>
        }
        
    }

    return (
        <div class="flex flex-col w-full mt-1 ml-3 md:space-y-4">
            
            <div class="overflow-auto h-screen pb-24 px-4 pt-5 md:px-6">
                <h1 class="text-3xl font-bold text-gray-800">
                    {generateGreetings()}
                </h1>
                <h1 class="text-4xl mt-1 font-semibold text-indigo-600 ">
                {displayName}
                </h1>
                <h2 class="text-md text-gray-400">
                    Here&#x27;s what&#x27;s  your expenses looks like up till today.
                </h2>

                <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                    <div class="w-full md:w-6/12">
                        <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                            <div class="w-full h-full block">
                                <div class="flex items-center justify-between px-4 py-6 space-x-4">
                                    <div class="flex items-center">
                                        
                                        <img src={url} className='inline object-cover w-12 h-12 mr-2 rounded-full' alt="" />
                                       
                                         
                                        <p class="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                                        Total spending of this year<br/>
                                        
                                        </p>
                                    </div>
                                    <div class="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                                    ₹{expensesYearlyTotal}.00
                                        <span class="text-xs text-gray-400">
                                            /₹4.8 L
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full h-3 bg-gray-100">
                                    {visualSpending(expensesTotal)}
                                    {/* <div class="w-full h-full text-center text-xs text-white bg-green-400"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center w-full md:w-1/2 space-x-4">
                        <div class="w-1/2">
                            <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                <p class="text-2xl text-black dark:text-white font-bold">
                                    {expenseCount}
                                </p>
                                <p class="text-gray-400 text-sm">
                                    Total number of expenses
                                </p>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                <p class="text-2xl text-black dark:text-white font-bold">
                                    ₹{expensesMonthlyTotal}.00
                                </p>
                                <p class="text-gray-400 text-sm">
                                    Total spending of this month
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex items-center space-x-4">
                    <button class="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                        <svg width="20" height="20" fill="currentColor" class="mr-2 text-gray-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z">
                            </path>
                        </svg>
                        Last month
                        <svg width="20" height="20" class="ml-2 text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                    <span class="text-sm text-gray-400">
                        Compared to oct 1- otc 30, 2020
                    </span>
                </div>


                <div class="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                Personal
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    12
                                </p>
                                <span class="text-green-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    22%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                    <p>
                                        Groceries
                                    </p>
                                    <div class="flex items-end text-xs">
                                        34
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            22%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Fast Food
                                    </p>
                                    <div class="flex items-end text-xs">
                                        13
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Clothing
                                    </p>
                                    <div class="flex items-end text-xs">
                                        45
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            41%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                            Entertainment
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    23
                                </p>
                                <span class="text-green-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    12%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Internet
                                    </p>
                                    <div class="flex items-end text-xs">
                                        21
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            20%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Electronics
                                    </p>
                                    <div class="flex items-end text-xs">
                                        10
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            2%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Travel
                                    </p>
                                    <div class="flex items-end text-xs">
                                        434
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                Utilities
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    15
                                </p>
                                <span class="text-red-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    2%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Loads
                                    </p>
                                    <div class="flex items-end text-xs">
                                        34
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            22%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Insurance
                                    </p>
                                    <div class="flex items-end text-xs">
                                        13
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Education
                                    </p>
                                    <div class="flex items-end text-xs">
                                        45
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            41%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                Sign in
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    16
                                </p>
                                <span class="text-red-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3 transform rotate-180" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    14%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        America
                                    </p>
                                    <div class="flex items-end text-xs">
                                        43
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Europe
                                    </p>
                                    <div class="flex items-end text-xs">
                                        133
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            19%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Asia
                                    </p>
                                    <div class="flex items-end text-xs">
                                        23
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            4%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                Sales
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    9
                                </p>
                                <span class="text-green-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    34%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Templates
                                    </p>
                                    <div class="flex items-end text-xs">
                                        345
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Components
                                    </p>
                                    <div class="flex items-end text-xs">
                                        139
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            10%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Icons
                                    </p>
                                    <div class="flex items-end text-xs">
                                        421
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            4%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                            <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                Maintenance
                            </p>
                            <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                    15
                                </p>
                                <span class="text-green-500 text-xl font-bold flex items-center">
                                    <svg width="20" fill="currentColor" height="20" class="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                        </path>
                                    </svg>
                                    34%
                                </span>
                            </div>
                            <div class="dark:text-white">
                                <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Cloud
                                    </p>
                                    <div class="flex items-end text-xs">
                                        123
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-red-500 rotate-180 transform" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            22%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                    <p>
                                        Infra
                                    </p>
                                    <div class="flex items-end text-xs">
                                        134
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            9%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                    <p>
                                        Office
                                    </p>
                                    <div class="flex items-end text-xs">
                                        23
                                        <span class="flex items-center">
                                            <svg width="20" fill="currentColor" height="20" class="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                                                </path>
                                            </svg>
                                            41%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div> 
    );
}

const mapStateToProps = (state,props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const visibleMonthlyExpenses = getMonthlyExpenses(visibleExpenses);
    const visibleYearlyExpenses = getYearlyExpenses(visibleExpenses);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesMonthlyTotal: selectExpensesTotal(visibleMonthlyExpenses),
        expensesYearlyTotal:selectExpensesTotal(visibleYearlyExpenses),
        displayName:state.auth.name,
        url:state.auth.url,
    };
};

export default connect(mapStateToProps)(Home);
