import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as itemsActions from './actions/items';
import createStore from './store'
import { Main, Home, ItemsList, Item, Cart } from './components';

const store = createStore({cart: {}, itemList: {}})
store.dispatch(itemsActions.fetchAll());
render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/items' component={ItemsList}/>
        <Route path='/items/:itemId' component={Item}/>
        <Route exact path='/cart' component={Cart}/>
      </Main>
    </Switch>
  </BrowserRouter>
  </Provider>,  document.getElementById('app'));