import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [],
	loading: false,
	error: null,
	message: null,
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchCategoriesStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchCategoriesSuccess: (state, action) => {
			state.categories = action.payload;
			state.loading = false;
		},
		fetchCategoriesFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		createCategoryStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},

		createCategorySuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.categories = [
				...state.categories,
				action.payload.categories,
			];
		},

		createCategoryFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},

		deleteCategoryStart: (state) => {
			state.loading = true;
			state.error = null;
			state.message = null;
		},

		deleteCategorySuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.categories = state.categories.filter(
				(category) =>
					category._id !== action.payload._id &&
					category.parentCategoryId !== action.payload._id
			);
		},
		deleteCategoryFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
	},
});

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailure,
	createCategoryFailure,
	createCategoryStart,
	createCategorySuccess,
	deleteCategoryFailure,
	deleteCategoryStart,
	deleteCategorySuccess,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
