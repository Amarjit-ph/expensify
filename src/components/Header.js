/*
 * Author: Amarjit Pheiroijam
 * Created Date: Monday, November 29th 2021, 11:07:15 am
 */

import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => {
return (
  <nav class="bg-white shadow mb-0.5">
    <div class="bg-white mx-auto px-6 sm:px-6 lg:px-8 ">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-10 w-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </div>
          <h1 class="text-3xl ml-5 font-bold text-gray-900">Expensify</h1>
        </div>
        <button class="text-md text-gray-900 font-semibold" onClick={startLogout}>Logout</button>
      </div>
      
    </div>
  </nav>);
}


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);

