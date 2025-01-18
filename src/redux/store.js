import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionSlice';
import authReducer from './authSlice';
import categoriesReducer from './categorySlice';
import accountsReducer from './accountSlice';
import navLinkTextsReducer from './navLinkTextsSlice';
import incomeReducer from './incomeSlice';
import expenseReducer from './ExpenseSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		transactions: transactionsReducer,
		categories: categoriesReducer,
		accounts: accountsReducer,
		navLinkTexts: navLinkTextsReducer,
		expenses: expenseReducer,
		incomes: incomeReducer,
	},
});

export default store;
