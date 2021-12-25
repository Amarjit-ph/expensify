/*
 * Project : Expensify
 * Control & Monitor your Expenses to cut a little bit add up to a Meaningful Sum
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, November 29th 2021, 11:07:15 am
 */

import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from './routers/AppRouter';

//import 'normalize.css';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selector/expenses';

import LoadingPage from './components/LoadingPage';

import { firebase } from './firebase/firebase';

const store = configureStore();

const state = store.getState();
console.log(state);
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("root"));
        hasRendered = true;
    }
}

//COMPONENTS RENDER
ReactDOM.render(<LoadingPage />, document.getElementById("root"));

//FIREBASE AUTHENTICATION
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('SESSION : LOGIN');
        console.log('USER ID:', user.uid);
        console.log('NAME : ' + user.displayName);

        //STORE THE UID IN REDUCER
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpense())
            .then(() => {
                renderApp();
                //ReactDOM.render(jsx, document.getElementById("root"));

                //REDIRECT TO DASHBOARD IF LOGIN
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            });
    } else {
        console.log('SESSION : LOGOUT');
        store.dispatch(logout());
        renderApp();
        //ReactDOM.render(jsx, document.getElementById("root"));
        history.push('/');
    }
});


