import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';

import Auth from 'Auth/Auth';

import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';

class App extends Component {
	// state = {
	// 	login: false,
	// };
	// loginHandler = () => {
	// 	this.setState({ login: true });
	// };
	render = () => {
		let content = (
			<Switch>
				<Route path='/admin' render={(props) => <AdminLayout {...props} />} />
				<Route path='/auth' render={(props) => <AuthLayout {...props} />} />
				<Redirect from='/' to='/admin/index' />
			</Switch>
		);
		return this.props.isLogin ? (
			content
		) : (
			// <button onClick={this.props.onLogin}>Login</button>
			<Auth />
		);
		// <Switch>
		// 	<Route path='/admin' render={(props) => <AdminLayout {...props} />} />
		// 	<Route path='/auth' render={(props) => <AuthLayout {...props} />} />
		// 	<Redirect from='/' to='/admin/index' />
		// </Switch>
	};
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLogin,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: () => dispatch({ type: actionTypes.LOGIN }),
		onLogout: () => dispatch({ type: actionTypes.LOGOUT }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
