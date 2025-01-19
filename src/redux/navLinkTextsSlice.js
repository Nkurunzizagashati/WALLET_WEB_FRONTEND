import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showNavLinkTexts: true,
};

const navLinkTextsSlice = createSlice({
	name: 'nav-link-texts',
	initialState,
	reducers: {
		toggleNavLinkTexts: (state) => {
			state.showNavLinkTexts = !state.showNavLinkTexts;
		},
	},
});

export const { toggleNavLinkTexts } = navLinkTextsSlice.actions;

export default navLinkTextsSlice.reducer;
