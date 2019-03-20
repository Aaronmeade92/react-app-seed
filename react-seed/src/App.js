import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Dashboard from './components/Dashboard.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Route exact path='/' component={Dashboard}/>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;