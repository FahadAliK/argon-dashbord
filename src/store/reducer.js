import * as actionTypes from './actions';

const initialState = {
	isLogin: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				isLogin: true,
			};
		case actionTypes.LOGOUT:
			return {
				isLogin: false,
			};
		default:
			return state;
	}
};

export default reducer;
