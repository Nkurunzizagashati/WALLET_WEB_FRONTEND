import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fetch: false,
};

const fetNewDataSlice = createSlice({
	name: 'fetNewData',
	initialState,
	reducers: {
		fetchNewData: (state) => {
			state.fetch = !state.fetch;
		},
	},
});

export const { fetchNewData } = fetNewDataSlice.actions;

export default fetNewDataSlice.reducer;
