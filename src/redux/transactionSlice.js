import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	transactions: [],
	loading: false,
	error: null,
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		addTransactionSuccess: (state, action) => {
			state.transactions = [
				...state.transactions,
				action.payload,
			];
		},
		addTransactionFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		addTransactionStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		deleteTransactionStart: (state) => {
			state.loading = true;
		},
		deleteTransactionSuccess: (state, action) => {
			state.transactions = state.transactions.filter(
				(transaction) => transaction.id !== action.payload
			);
		},
		deleteTransactionFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		updateTransaction: (state, action) => {
			const updatedTransactions = state.transactions.map(
				(transaction) =>
					transaction.id === action.payload.id
						? action.payload
						: transaction
			);
			state.transactions = updatedTransactions;
		},
		fetchTransactionsStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchTransactionsSuccess: (state, action) => {
			state.transactions = action.payload;
			state.loading = false;
		},
		fetchTransactionsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addTransactionFailure,
	addTransactionStart,
	addTransactionSuccess,
	deleteTransactionStart,
	deleteTransactionSuccess,
	deleteTransactionFailure,
	fetchTransactionsStart,
	fetchTransactionsSuccess,
	fetchTransactionsFailure,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
