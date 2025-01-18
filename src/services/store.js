import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionSlice';
import authReducer from './authSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		transactions: transactionsReducer,
	},
});

export default store;
