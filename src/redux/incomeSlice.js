import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	incomes: [],
	error: null,
	message: null,
};

const expenseSlice = createSlice({
	name: 'incomes',
	initialState,
	reducers: {
		fetchIncomeStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchIncomeSuccess: (state, action) => {
			state.loading = false;
			state.incomes = action.payload;
		},
		fetchIncomeFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		addIncomeStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},
		addIncomeSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.incomes = [...state.incomes, action.payload];
		},
		addIncomeFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchIncomeStart,
	fetchIncomeSuccess,
	fetchIncomeFailure,
	addIncomeStart,
	addIncomeSuccess,
	addIncomeFailure,
} = expenseSlice.actions;

export default expenseSlice.reducer;
