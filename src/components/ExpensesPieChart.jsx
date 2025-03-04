import { Pie } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesPieChart = () => {
	const { transactions } = useSelector((state) => state.transactions);
	console.log('IN THE PIECHART TRANSACTIONS:', transactions);

	// Filter expenses from transactions
	const expenses = transactions?.filter(
		(transaction) => transaction?.transactionType === 'Expense'
	);
	console.log('EXPENSES: ', expenses);

	// Grouping expenses by category
	const expensesByCategory = expenses?.reduce((acc, expense) => {
		if (acc[expense?.categoryId?.name]) {
			acc[expense?.categoryId?.name] += expense?.amount;
		} else {
			acc[expense?.categoryId?.name] = expense?.amount;
		}
		return acc;
	}, {});

	console.log(expensesByCategory);

	// Getting labels and values for the chart
	const labels = Object.keys(expensesByCategory);
	const values = Object.values(expensesByCategory);

	// Chart data
	const chartData = {
		labels,
		datasets: [
			{
				label: 'Expenses',
				data: values,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	// Chart options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<div className="w-[100%] h-[100%]">
			{expenses.length === 0 ? (
				<div className="flex items-center justify-center h-full">
					<p className="text-gray-500 text-lg">
						No data available, in case you have expenses, a
						chart of expenses by category will appear here
					</p>
				</div>
			) : (
				<Pie data={chartData} options={options} />
			)}
		</div>
	);
};

export default ExpensesPieChart;
