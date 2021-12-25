/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
export const LoginPage = ({ startLogin }) => ( 
    <div className="sm:mt-28 md:mt-28 h-screen mx-auto max-w-4xl lg:mt-28 xl:mt-36">
            {/* <main class="h-1/3 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"> */}
            <main class="px-4  sm:px-6 lg:px-8">
                <div class="sm:text-center md:text-center lg:text-center">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        <span class="block text-indigo-600 text-7xl">Expensify</span>
                        <span class="block ">Get your expenses under controls.</span><br/>
                    </h1>

                    <p className='mt-2 text-gray-500 md:text-xl'>
                        Control & Monitor your Expenses to cut a little bit add up to a Meaningful Sum.<br/>
                        It's not how much money you make, but how much money you keep, how hard it works for you,
                        and how many generations you keep it for. - Robert Kiyosaki
                    </p>
                    {/* <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"> */}
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                        <div class="rounded-md shadow">
                            <button onClick={startLogin} class="w-full flex items-center justify-center px-8 
                            py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-base md:px-5">
                            Login with Google
                            </button>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                            <a href="https://github.com/Amarjit-ph/expensify-app" target="_blank" 
                            class="w-full flex items-center justify-center px-8 py-3 border border-transparent
                            text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-base md:px-5">
                                Get Source code
                            </a>
                        </div>
                    </div>
                </div>
        </main>        
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage); 