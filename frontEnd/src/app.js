import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as categoryActions from './actions/categories';
import createStore from './store'
import { Categories, Main, Home, ItemsList, Item, Cart, Admin } from './components';

const store = createStore({cart: {}, itemList: {}, categories: {}})
store.dispatch(categoryActions.fetchAll());
render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/categories' component={Categories}/>
        <Route path='/categories/:categoryId' component={ItemsList}/>
        <Route path='/items/:itemId' component={Item}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/admin' component={Admin}/>
      </Main>
    </Switch>
  </BrowserRouter>
  </Provider>,  document.getElementById('app'));