import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionSlice';
import authReducer from './authSlice';
import categoriesReducer from './categorySlice';
import accountsReducer from './accountSlice';
import navLinkTextsReducer from './navLinkTextsSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		transactions: transactionsReducer,
		categories: categoriesReducer,
		accounts: accountsReducer,
		navLinkTexts: navLinkTextsReducer,
	},
});

export default store;
