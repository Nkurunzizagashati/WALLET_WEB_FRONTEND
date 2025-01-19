import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
	loading: false,
	error: null,
	message: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},

		loginSuccess: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.accessToken;
			state.loading = false;
			state.error = null;
		},

		loginFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		logout: (state) => {
			state.user = null;
			state.token = null;
		},

		registerStart: (state) => {
			state.loading = true;
			state.error = null;
		},

		registerSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},

		registerFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		clearAuthUser: (state) => {
			state.user = null;
			state.token = null;
			state.message = null;
			state.error = null;
			state.loading = false;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
	clearError,
	registerFailure,
	registerSuccess,
	registerStart,
	clearAuthUser,
} = authSlice.actions;

export default authSlice.reducer;
