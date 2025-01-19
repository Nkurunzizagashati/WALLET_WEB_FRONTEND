import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const BudgetPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	// Sample predefined categories for selection
	const predefinedCategories = [
		'Groceries',
		'Entertainment',
		'Bills',
		'Transport',
		'Savings',
		'Healthcare',
	];

	const [budgets, setBudgets] = useState([]); // Budget list
	const [newBudget, setNewBudget] = useState({
		name: '',
		amount: '',
		selectedCategories: [], // For selected categories
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewBudget({ ...newBudget, [name]: value });
	};

	const handleCategoryChange = (e) => {
		const { value } = e.target;
		// Add or remove the category from selected categories
		setNewBudget((prevBudget) => {
			const updatedCategories =
				prevBudget.selectedCategories.includes(value)
					? prevBudget.selectedCategories.filter(
							(cat) => cat !== value
					  )
					: [...prevBudget.selectedCategories, value];
			return {
				...prevBudget,
				selectedCategories: updatedCategories,
			};
		});
	};

	const addBudget = () => {
		if (
			newBudget.name &&
			newBudget.amount &&
			newBudget.selectedCategories.length > 0
		) {
			setBudgets([...budgets, newBudget]);
			setNewBudget({
				name: '',
				amount: '',
				selectedCategories: [],
			}); // Clear form
		} else {
			alert('Please fill in all fields and select categories');
		}
	};

	// Calculate the overall progress and category-wise progress
	const calculateOverallProgress = () => {
		const totalBudget = budgets.reduce(
			(acc, budget) => acc + parseFloat(budget.amount),
			0
		);
		const totalSpent = budgets.reduce(
			(acc, budget) =>
				acc +
				budget.selectedCategories.reduce(
					(accCat, cat) => accCat + 50, // Simulating a random amount spent per category
					0
				),
			0
		);
		return (totalSpent / totalBudget) * 100;
	};

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

					{/* Budget Form */}
					<div className="mb-6 bg-white shadow rounded p-4">
						<h2 className="text-xl font-semibold mb-4">
							Add New Budget
						</h2>
						<div className="flex space-x-4">
							<input
								type="text"
								name="name"
								value={newBudget.name}
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
							<button
								onClick={addBudget}
								className="bg-blue-600 text-white px-4 py-2 rounded"
							>
								Add
							</button>
						</div>

						{/* Categories Selection */}
						<div className="mt-6">
							<h3 className="font-semibold text-lg">
								Select Categories
							</h3>
							<div className="space-y-2 mt-4">
								{predefinedCategories.map(
									(category, index) => (
										<div
											key={index}
											className="flex items-center"
										>
											<input
												type="checkbox"
												value={category}
												checked={newBudget.selectedCategories.includes(
													category
												)}
												onChange={
													handleCategoryChange
												}
												className="mr-2"
											/>
											<span>{category}</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>

					{/* Budget List */}
					<div className="bg-white shadow rounded p-4">
						<h2 className="text-xl font-semibold mb-4">
							Budgets
						</h2>
						{budgets.length > 0 ? (
							<ul className="space-y-2">
								{budgets.map((budget, index) => {
									// Simulating budget progress per category
									const categoryProgress =
										budget.selectedCategories
											.length * 20; // Just for demonstration

									return (
										<li
											key={index}
											className="bg-white p-4 rounded shadow-md"
										>
											<h3 className="text-lg font-semibold text-dark-text">
												{budget.name}
											</h3>
											<p>
												Total Budget:{' '}
												{budget.amount} RWF
											</p>
											<div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
												<div
													className="bg-blue-600 h-2.5 rounded-full"
													style={{
														width: `${categoryProgress}%`,
													}}
												></div>
											</div>
											<ul className="space-y-2 mt-4">
												{budget.selectedCategories.map(
													(
														category,
														catIndex
													) => (
														<li
															key={
																catIndex
															}
															className="flex justify-between"
														>
															<span>
																{
																	category
																}
															</span>
															<span>
																50 RWF
															</span>{' '}
															{/* Placeholder for the amount spent */}
														</li>
													)
												)}
											</ul>
										</li>
									);
								})}
							</ul>
						) : (
							<p className="text-gray-500">
								No budgets added yet.
							</p>
						)}
					</div>

					{/* Overall Budget Progress */}
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
