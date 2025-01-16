import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CategoryPage from './pages/CategoriesPage';
import BudgetPage from './pages/BudgetPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/dashboard',
			element: <DashboardPage />,
		},
		{
			path: '/categories',
			element: <CategoryPage />,
		},
		{
			path: '/budget',
			element: <BudgetPage />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
