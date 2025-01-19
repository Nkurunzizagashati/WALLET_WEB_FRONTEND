import './App.css';
import HomePage from './pages/HomePage';
import BudgetPage from './pages/BudgetPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import {
	fetchAccounts,
	fetchCategories,
	fetchTransactions,
} from './redux/actions';
import {
	fetchCategoriesSuccess,
	fetchCategoriesFailure,
	fetchCategoriesStart,
} from './redux/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTransactionsFailure,
	fetchTransactionsStart,
	fetchTransactionsSuccess,
} from './redux/transactionSlice';
import {
	fetchAccountsFailure,
	fetchAccountsStart,
	fetchAccountsSuccess,
} from './redux/accountSlice';

function App() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		const callFetchCategoriesFunction = async () => {
			try {
				fetchCategoriesStart();
				const data = await fetchCategories();
				dispatch(fetchCategoriesSuccess(data.categories));
			} catch (error) {
				dispatch(fetchCategoriesFailure(error.message));
			}
		};

		const callFetchTransactionsFunction = async () => {
			try {
				dispatch(fetchTransactionsStart());
				const data = await fetchTransactions();

				dispatch(fetchTransactionsSuccess(data.transactions));
			} catch (error) {
				dispatch(fetchTransactionsFailure(error.message));
			}
		};

		const callFetchAccountsFunction = async () => {
			try {
				dispatch(fetchAccountsStart());
				const data = await fetchAccounts();
				dispatch(fetchAccountsSuccess(data.accounts));
				console.log(data.accounts);
			} catch (error) {
				dispatch(fetchAccountsFailure(error.message));
			}
		};

		callFetchCategoriesFunction();
		callFetchTransactionsFunction();
		callFetchAccountsFunction();
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
