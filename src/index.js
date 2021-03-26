/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import App from './App';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

// import AdminLayout from 'layouts/Admin.js';
// import AuthLayout from 'layouts/Auth.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);

ReactDOM.render(
	/* <Switch>
    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
    <Redirect from="/" to="/admin/index" />
  </Switch> */
	app,
	document.getElementById('root')
);
