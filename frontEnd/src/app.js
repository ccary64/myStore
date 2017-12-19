import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemsList, Item, Cart } from './components/index';


render(  
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/items' component={ItemsList}/>
          <Route exact path='/items/:itemId' component={Item}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
    </BrowserRouter>,  document.getElementById('app'));