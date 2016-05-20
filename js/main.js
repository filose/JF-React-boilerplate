import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

/*
  Components
*/

import App from './components/App';

/*
  Routes
*/

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
