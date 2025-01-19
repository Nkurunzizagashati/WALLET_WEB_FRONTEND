import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	accounts: [],
	loading: false,
	error: null,
	message: null,
};

const accountSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		// Fetch Accounts
		fetchAccountsStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchAccountsSuccess: (state, action) => {
			state.accounts = action.payload;
			state.loading = false;
		},
		fetchAccountsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		// Create Account
		createAccountStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},
		createAccountSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.accounts = [
				...state.accounts,
				action.payload.account,
			];
		},
		createAccountFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},

		// Delete Account
		deleteAccountStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},
		deleteAccountSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.accounts = state.accounts.filter(
				(account) => account._id !== action.payload._id
			);
		},
		deleteAccountFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
	},
});

export const {
	fetchAccountsStart,
	fetchAccountsSuccess,
	fetchAccountsFailure,
	createAccountStart,
	createAccountSuccess,
	createAccountFailure,
	deleteAccountStart,
	deleteAccountSuccess,
	deleteAccountFailure,
} = accountSlice.actions;

export default accountSlice.reducer;
