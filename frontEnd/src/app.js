import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, ItemsList, Item, Cart } from './components';


render(  
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/items' component={ItemsList}/>
          <Route path='/items/:itemId' component={Item}/>
          <Route path='/items/:itemId/' component={Item}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
    </BrowserRouter>,  document.getElementById('app'));