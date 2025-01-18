import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

const ReportsPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);
	const { transactions } = useSelector((state) => state.transactions);
	const { expenses } = useSelector((state) => state.expenses);
	const { accounts } = useSelector((state) => state.accounts);

	// Filter transactions based on type
	const incomeTransactions = transactions.filter(
		(transaction) => transaction.transactionType === 'Income'
	);
	const expenseTransactions = transactions.filter(
		(transaction) => transaction.transactionType === 'Expense'
	);

	// Calculate total accounts balance

	const totalBalance = accounts
		.reduce((sum, account) => sum + account?.balance, 0)
		.toLocaleString();

	// Calculate total Income and Expense
	const totalIncome = incomeTransactions?.reduce(
		(acc, curr) => acc + curr?.amount,
		0
	);
	const totalExpenses = expenseTransactions?.reduce(
		(acc, curr) => acc + curr?.amount,
		0
	);

	// Group transactions by category
	const categoryTotals = expenseTransactions.reduce((acc, curr) => {
		const categoryName = curr?.categoryId?.name;
		acc[categoryName] = (acc[categoryName] || 0) + curr.amount;
		return acc;
	}, {});

	// Group expenses by category (goal/budget)
	const categoryBudgets = expenses.reduce((acc, expense) => {
		const categoryName = expense?.categoryId?.name;
		acc[categoryName] = expense.amount;
		return acc;
	}, {});

	// Function to calculate progress
	const calculateProgress = (category) => {
		const spent = categoryTotals[category] || 0;
		const budget = categoryBudgets[category] || 0;
		return budget > 0 ? (spent / budget) * 100 : 0;
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
					<h1 className="text-2xl font-bold mb-4 text-dark-text">
						Reports
					</h1>
					<div className="space-y-6">
						{/* Transaction Summary */}
						<div className="bg-white p-4 rounded shadow-md">
							<h3 className="text-lg font-semibold text-dark-text">
								Transaction Summary
							</h3>
							<ul className="space-y-3 mt-4 text-gray-600">
								<li className="flex justify-between">
									<strong>Total Income:</strong>
									<span>
										{totalIncome.toLocaleString()}{' '}
										RWF
									</span>
								</li>
								<li className="flex justify-between">
									<strong>Total Expenses:</strong>
									<span>
										{totalExpenses.toLocaleString()}{' '}
										RWF
									</span>
								</li>
								<li className="flex justify-between">
									<strong>
										Accounts Total Balance:
									</strong>
									<span>{totalBalance} RWF</span>
								</li>
							</ul>
						</div>

						{/* Transaction Categories */}
						<div className="bg-white p-4 rounded shadow-md">
							<h3 className="text-lg font-semibold text-dark-text">
								Transaction Categories
							</h3>
							<ul className="space-y-3 mt-4 text-gray-600">
								{/* Loop through categories */}

								{Object.entries(categoryTotals).length >
								0 ? (
									Object.entries(categoryTotals).map(
										([category, total]) => (
											<li
												key={category}
												className="flex justify-between"
											>
												<strong>
													{category}:
												</strong>
												<span>
													{total.toLocaleString()}{' '}
													RWF
												</span>
												{/* Progress Bar */}
												<div className="flex flex-col items-end">
													{/* Progress percentage */}
													<span className="text-sm">
														{calculateProgress(
															category
														).toFixed(2)}
														%
													</span>
													<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
														<div
															className="bg-blue-500 h-2 rounded-full"
															style={{
																width: `${calculateProgress(
																	category
																)}%`,
															}}
														></div>
													</div>
												</div>
											</li>
										)
									)
								) : (
									<div>
										You haven&apos;t created yet
										categories, consider creating
										one
									</div>
								)}
							</ul>
						</div>

						{/* Overall Progress */}
						<div className="bg-white p-4 rounded shadow-md">
							<h3 className="text-lg font-semibold text-dark-text">
								Overall Expense Progress
							</h3>
							<div className="flex flex-col items-end">
								<span className="text-sm">
									{totalIncome > 0
										? (
												(totalExpenses /
													totalIncome) *
												100
										  ).toFixed(2)
										: 'N/A'}
									%
								</span>

								<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{
											width: `${
												(totalExpenses /
													totalIncome) *
												100
											}%`,
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportsPage;
