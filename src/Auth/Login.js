import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		// backgroundColor: theme.palette.secondary.main,
		backgroundColor: '#FF69B4',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignIn(props) {
	const classes = useStyles();
	const [emailState, setEmailState] = useState({ value: '', isValid: false });
	const [password, setPassword] = useState('');
	const emailChangeHandler = (event) => {
		console.log(event.target.value);
		let isValid = null;
		if (event.target.value < 5) {
			isValid = true;
		}
		setEmailState({
			value: event.target.value,
			isValid: isValid,
		});
	};
	const passwordChangeHandler = (event) => {
		console.log(event.target.value);
		setPassword(event.target.value);
	};
	return (
		<Container
			component='main'
			maxWidth='xs'
			style={{ backgroundColor: 'white' }}>
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					LOGIN
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						error={emailState.isValid}
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={emailChangeHandler}
						value={emailState.value}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={passwordChangeHandler}
						value={password}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' style={{ color: '#87CEEB' }} />}
						label='Remember me'
					/>
					<Button
						onClick={(event) => {
							event.preventDefault();
							const loginData = {
								name: 'admin',
								email: emailState.value,
								password: password,
							};
							axios
								.post('https://api.ongstercare.com/admin/login', loginData)
								.then((response) => {
									console.log(response);
									console.log(response.status);
									if (response.status === 200) {
										props.onLogin();
									}
								})
								.catch((err) => {
									alert('Login fail');
									console.log(err);
								});
							// props.onLogin();
						}}
						type='submit'
						fullWidth
						variant='contained'
						style={{ backgroundColor: '#87CEEB' }}
						className={classes.submit}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2' style={{ color: 'black' }}>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href='#' variant='body2' style={{ color: 'black' }}>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
