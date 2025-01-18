import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	expenses: [],
	error: null,
	message: null,
};

const expenseSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		fetchExpenseStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchExpenseSuccess: (state, action) => {
			state.loading = false;
			state.incomes = action.payload;
		},
		fetchExpenseFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		addExpenseStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},
		addExpenseSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.incomes = [...state.incomes, action.payload];
		},
		addExpenseFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchExpenseStart,
	fetchExpenseSuccess,
	fetchExpenseFailure,
	addExpenseStart,
	addExpenseSuccess,
	addExpenseFailure,
} = expenseSlice.actions;

export default expenseSlice.reducer;
