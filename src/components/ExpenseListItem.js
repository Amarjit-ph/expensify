import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ no, id, description, amount, createdAt}) => (   

        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
                {no}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                {description}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                ₹{amount}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                {moment(createdAt).format('Do MMMM YYYY')}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Personal
            </td>
            
            <td class="border-b-2 p-4 dark:border-dark-5">
                <Link className=""
                    to={`/edit/${id}`}>
                    <button class="w-24 text-right flex justify-center">
                        <svg width="20" fill="currentColor" height="20" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </Link>  
            </td>
                   
        </tr>

);

export default ExpenseListItem;