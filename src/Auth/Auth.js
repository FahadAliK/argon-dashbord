import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Login from './pages/Login';
import Login from './Login';

// import './Auth.css';
//import AddCart from './pages/AddCart'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Logo from './images/Logo.jpg';
import Logo from '../assets/img/brand/OngsterCare.png';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function Auth(props) {
	// console.log(props);
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.root} className='navbar'>
				<AppBar style={{ backgroundColor: 'white' }} position='static'>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'>
							<MenuIcon />
						</IconButton>

						<Typography variant='h6' className={classes.title}>
							<img style={{ height: '60px' }} src={Logo}></img>
						</Typography>
						{/* <Button color="inherit"><Link to="/" className="link">Home</Link></Button> */}
						<Button color='inherit' onClick={props.onLogin}>
							<Link to='/Login' className='link'>
								Login
							</Link>
						</Button>
						{/* <Button color="inherit"> <Link to="/register" className="link">Register</Link></Button>
						 */}
					</Toolbar>
				</AppBar>
			</div>

			<div className='App'>
				<header>
					<div>
						<Switch>
							<Route path='/'>
								<Login />
							</Route>
						</Switch>
					</div>
				</header>
			</div>
		</Router>
	);
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
