import './App.css';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoriesPage';
import BudgetPage from './pages/BudgetPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { fetchCategories, fetchTransactions } from './redux/actions';
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

function App() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		const callFetchCategoriesFunction = async () => {
			try {
				fetchCategoriesStart();
				const data = await fetchCategories();
				console.log(data.categories);
				console.log(typeof data.categories);
				console.log(typeof data.category);
				dispatch(fetchCategoriesSuccess(data.categories));
			} catch (error) {
				dispatch(fetchCategoriesFailure(error.message));
			}
		};

		const callFetchTransactionsFunction = async () => {
			try {
				dispatch(fetchTransactionsStart());
				const data = await fetchTransactions();
				console.log(data);
				console.log(Array.isArray(data));

				dispatch(fetchTransactionsSuccess(data));
			} catch (error) {
				dispatch(fetchTransactionsFailure(error.message));
			}
		};

		callFetchCategoriesFunction();
		callFetchTransactionsFunction();
	}, [dispatch, user]);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/categories',
			element: <CategoryPage />,
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
