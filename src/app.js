import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters));
})

store.dispatch(addExpense({ description: "Trans Electrolysis", amount: 8000}));
store.dispatch(addExpense({ description: "Trans FFS", amount: 4000000}));

store.dispatch(setTextFilter('Elec'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
