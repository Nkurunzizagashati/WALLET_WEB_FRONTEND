import PropTypes from 'prop-types';
import TransactionsChart from '../components/TransactionsChart';
import ExpensesPieChart from '../components/ExpensesPieChart';
import LatestTransactions from '../components/LatestTransactions';
import { useSelector } from 'react-redux';

const MainPage = ({ className }) => {
	const { transactions } = useSelector((state) => state.transactions);
	const { accounts } = useSelector((state) => state.accounts);
	const { categories } = useSelector((state) => state.categories);

	// Calculate total account balance
	const totalBalance = accounts.reduce(
		(sum, account) => sum + account.balance,
		0
	);

	// Calculate total income and expenses for the current month
	const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-indexed
	const totalIncome = transactions
		.filter(
			(tx) =>
				tx.transactionType === 'Income' &&
				new Date(tx.date).getMonth() + 1 === currentMonth
		)
		.reduce((sum, tx) => sum + tx.amount, 0);

	const totalExpenses = transactions
		.filter(
			(tx) =>
				tx.transactionType === 'Expense' &&
				new Date(tx.date).getMonth() + 1 === currentMonth
		)
		.reduce((sum, tx) => sum + tx.amount, 0);

	return (
		<main
			className={`${className} min-h-[88vh] flex flex-wrap p-6 gap-4 bg-gray-50`}
		>
			{/* Left Sidebar: Overview */}
			<div className="p-6 w-[25%] rounded-xl bg-white shadow-md flex flex-col gap-6">
				{/* Total Balance */}
				<div className="text-center">
					<h2 className="text-xl font-bold">Total Balance</h2>
					<p className="text-3xl text-green-500 font-semibold">
						${totalBalance.toLocaleString()}
					</p>
				</div>

				{/* Accounts Section */}
				<div className="bg-light-gray p-4 rounded-md">
					<h3 className="text-lg font-medium">Accounts</h3>
					<ul>
						{accounts.map((account) => (
							<li
								key={account.id}
								className="flex justify-between py-2"
							>
								<span>
									{account.bankName} - (
									{account.accountType})
								</span>
								<span className="font-medium">
									${account.balance.toLocaleString()}
								</span>
							</li>
						))}
					</ul>
					{/* Progress Bar Placeholder */}
					<div className="mt-4">
						<h4 className="text-sm text-gray-600 mb-1">
							Spending Goal Progress
						</h4>
						<div className="w-full bg-gray-300 rounded-full h-2">
							<div
								className="bg-blue-500 h-2 rounded-full"
								style={{ width: '60%' }} // Placeholder progress
							></div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex flex-col w-[72%] gap-4">
				<div className="flex gap-4">
					{/* Transactions Chart */}
					<div className="p-6 w-[60%] rounded-xl bg-white shadow-md">
						<TransactionsChart
							transactions={transactions}
						/>
						{/* Total Income and Expenses */}
						<div className="mt-4 flex justify-between">
							<div>
								<h4 className="text-sm font-medium text-gray-500">
									Total Monthly Income
								</h4>
								<p className="text-lg font-semibold text-green-500">
									${totalIncome.toLocaleString()}
								</p>
							</div>
							<div>
								<h4 className="text-sm font-medium text-gray-500">
									Total Monthly Expenses
								</h4>
								<p className="text-lg font-semibold text-red-500">
									${totalExpenses.toLocaleString()}
								</p>
							</div>
						</div>
					</div>

					{/* Expenses Pie Chart */}
					<div className="p-6 w-[40%] rounded-xl bg-white shadow-md">
						<ExpensesPieChart
							transactions={transactions}
							categories={categories}
						/>
					</div>
				</div>

				{/* Latest Transactions */}
				<div className="p-6 bg-white shadow-md rounded-xl">
					<LatestTransactions transactions={transactions} />
				</div>
			</div>
		</main>
	);
};

// VALIDATE PROPES
MainPage.propTypes = {
	className: PropTypes.string,
};

export default MainPage;
