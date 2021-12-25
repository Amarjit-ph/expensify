/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, December 20th 2021, 12:12:24 am
 * Copyright (c) 2021
 */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../presentation/page/LoginPage.jsx';
import {ExpenseDashboardPage} from '../presentation/page/ExpenseDashboardPage.jsx';
import AddExpensePage from '../presentation/page/AddExpensePage.jsx';
import EditExpensePage from '../presentation/page/EditExpensePage.jsx';
import NotFoundPage from '../components/NotFoundPage';
export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' component={LoginPage} exact={true} />
            <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
            <PrivateRoute path='/create' component={AddExpensePage} />
            <PrivateRoute path='/edit/:id' component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router >
);
export default AppRouter;