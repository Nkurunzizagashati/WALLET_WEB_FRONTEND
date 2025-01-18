import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import BudgetPage from './pages/BudgetPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';

import { useDispatch, useSelector } from 'react-redux';

import {
	callFetchAccountsFunction,
	callFetchCategoriesFunction,
	callFetchTransactionsFunction,
} from './fetch';

function App() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		callFetchCategoriesFunction(dispatch);
		callFetchTransactionsFunction(dispatch);
		callFetchAccountsFunction(dispatch);
	}, [dispatch, user]);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/budget',
			element: <BudgetPage />,
		},
		{
			path: '/transactions',
			element: <TransactionsPage />,
		},
		{
			path: '/reports',
			element: <ReportsPage />,
		},
		{
			path: '/settings',
			element: <SettingsPage />,
		},
		{
			path: '/register',
			element: <RegistrationPage />,
		},
		{
			path: '/login',
			element: <LoginPage />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
