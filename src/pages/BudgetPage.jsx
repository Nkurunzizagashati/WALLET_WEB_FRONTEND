import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const BudgetPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const [budgets, setBudgets] = useState([]); // Budget list
	const [newBudget, setNewBudget] = useState({
		name: '',
		amount: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewBudget({ ...newBudget, [name]: value });
	};

	const addBudget = () => {
		if (newBudget.name && newBudget.amount) {
			setBudgets([...budgets, newBudget]);
			setNewBudget({ name: '', amount: '' }); // Clear form
		} else {
			alert('Please fill in all fields');
		}
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
					</div>

					{/* Budget List */}
					<div className="bg-white shadow rounded p-4">
						<h2 className="text-xl font-semibold mb-4">
							Budgets
						</h2>
						{budgets.length > 0 ? (
							<ul className="space-y-2">
								{budgets.map((budget, index) => (
									<li
										key={index}
										className="flex justify-between items-center p-2 border rounded"
									>
										<span>{budget.name}</span>
										<span className="font-semibold">
											${budget.amount}
										</span>
									</li>
								))}
							</ul>
						) : (
							<p className="text-gray-500">
								No budgets added yet.
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BudgetPage;
