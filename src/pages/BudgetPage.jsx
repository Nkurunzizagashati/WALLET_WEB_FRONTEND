import { useSelector, useDispatch } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { addIncome, addExpense } from '../redux/actions';

import {
	addIncomeSuccess,
	addIncomeFailure,
	addIncomeStart,
} from '../redux/incomeSlice';

import {
	addExpenseSuccess,
	addExpenseFailure,
} from '../redux/ExpenseSlice';
import toast from 'react-hot-toast';

const BudgetPage = () => {
	const dispatch = useDispatch();

	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const expenses = useSelector((state) => state.expenses.data || []);
	const incomes = useSelector((state) => state.incomes.data || []);
	const { categories } = useSelector((state) => state.categories);

	const [newBudget, setNewBudget] = useState({
		expense: '',
		amount: '',
		categoryId: '',
	});
	const [newIncome, setNewIncome] = useState({
		income: '',
		amount: '',
	});

	// Handle input changes for new income
	const handleIncomeInputChange = (e) => {
		const { name, value } = e.target;
		setNewIncome({ ...newIncome, [name]: value });
	};

	// Handle input changes for budget
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewBudget({ ...newBudget, [name]: value });
	};

	const addNewIncome = async () => {
		try {
			dispatch(addIncomeStart());
			const response = await addIncome({ ...newIncome });
			dispatch(addIncomeSuccess(response));
			toast.success(response.message, {
				duration: 3000,
				position: 'top-right',
			});
		} catch (error) {
			const errorMessage =
				error.message || 'Failed to add income';
			dispatch(addIncomeFailure(errorMessage));
			toast.error(errorMessage, {
				duration: 3000,
				position: 'top-right',
			});
		}
	};

	const addNewExpense = async () => {
		try {
			const response = await addExpense({ ...newBudget });
			dispatch(addExpenseSuccess(response));
			toast.success(response.message, {
				duration: 3000,
				position: 'top-right',
			});
		} catch (error) {
			const errorMessage =
				error.message || 'Failed to add expense';
			dispatch(addExpenseFailure(errorMessage));
			toast.error(errorMessage, {
				duration: 3000,
				position: 'top-right',
			});
		}
	};

	// Calculate progress for overall budget
	const calculateOverallProgress = () => {
		const totalBudget = expenses.reduce(
			(acc, budget) => acc + parseFloat(budget.amount || 0),
			0
		);
		const totalSpent = expenses.reduce(
			(acc, expense) => acc + parseFloat(expense.amount || 0),
			0
		);

		return totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
	};

	console.log('CATEGORIES:  ', categories);

	return (
		<div className="h-screen">
			<Navbar className="max-h-[10%]" />
			<div className="h-screen mt-[5.1%] flex">
				<Aside
					className={`${
						showNavLinkTexts ? 'w-[15%]' : 'w-[5%]'
					}`}
				/>
				<div
					className={`${
						showNavLinkTexts ? 'ml-[15.2%]' : 'ml-[5.2%]'
					} p-6 bg-light-gray w-full`}
				>
					<h1 className="text-2xl font-bold mb-4">
						Budget Management
					</h1>

					<div className="mb-6 bg-white shadow rounded p-4">
						<h2 className="text-xl font-semibold mb-4">
							Add Income Sources
						</h2>
						<div className="flex space-x-4">
							<input
								type="text"
								name="income"
								value={newIncome.source}
								onChange={handleIncomeInputChange}
								placeholder="Income Source"
								className="border border-gray-300 p-2 rounded w-full"
							/>
							<input
								type="number"
								name="amount"
								value={newIncome.amount}
								onChange={handleIncomeInputChange}
								placeholder="Income Amount"
								className="border border-gray-300 p-2 rounded w-full"
							/>
							<button
								onClick={() => addNewIncome()}
								className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-500"
							>
								Add
							</button>
						</div>

						{incomes.length > 0 && (
							<ul className="mt-4 space-y-2">
								{incomes.map((income, index) => (
									<li
										key={index}
										className="flex justify-between p-2 bg-gray-100 rounded"
									>
										<span>{income.source}</span>
										<span>{income.amount} RWF</span>
									</li>
								))}
							</ul>
						)}
					</div>

					<div className="mb-6 bg-white shadow rounded p-4">
						<h2 className="text-xl font-semibold mb-4">
							Add New Budget
						</h2>
						<div className="flex space-x-4">
							<input
								type="text"
								name="expense"
								value={newBudget.expense}
								onChange={handleInputChange}
								placeholder="Budget Name"
								className="border border-gray-300 p-2 rounded w-full"
							/>
							<input
								type="number"
								name="amount"
								value={newBudget.amount}
								onChange={handleInputChange}
								placeholder="Budget Amount"
								className="border border-gray-300 p-2 rounded w-full"
							/>

							<select
								name="categoryId"
								value={newBudget.categoryId}
								onChange={handleInputChange}
								className="w-full border rounded-md p-2"
								required
							>
								<option value="" disabled>
									Select a category
								</option>
								{categories?.map((category, index) => (
									<option
										key={index}
										value={category?._id}
									>
										{category?.name}
									</option>
								))}
							</select>

							<button
								onClick={() => addNewExpense()}
								className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-500"
							>
								Add
							</button>
						</div>
					</div>

					<div className="mt-6 bg-white p-4 rounded shadow-md">
						<h2 className="text-xl font-semibold mb-4">
							Overall Budget Progress
						</h2>
						<div className="w-full bg-gray-200 rounded-full h-2.5">
							<div
								className="bg-green-600 h-2.5 rounded-full"
								style={{
									width: `${calculateOverallProgress()}%`,
								}}
							></div>
						</div>
						<p className="mt-2">
							Total Progress:{' '}
							{calculateOverallProgress().toFixed(2)}%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BudgetPage;
