import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Home, ItemsList, Item, Cart } from './components';

render(  
  <BrowserRouter>
    <Switch>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/items' component={ItemsList}/>
        <Route path='/items/:itemId' component={Item}/>
        <Route exact path='/cart' component={Cart}/>
      </Main>
    </Switch>
  </BrowserRouter>,  document.getElementById('app'));