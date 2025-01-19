import { Pie } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js';

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesPieChart = () => {
	// Hardcoded expenses data
	const expenses = [
		{ category: 'Food', amount: 150 },
		{ category: 'Transport', amount: 100 },
		{ category: 'Entertainment', amount: 50 },
		{ category: 'Utilities', amount: 75 },
		{ category: 'Rent', amount: 500 },
		{ category: 'Healthcare', amount: 125 },
	];

	// Grouping expenses by category
	const expensesByCategory = expenses.reduce((acc, expense) => {
		if (acc[expense.category]) {
			acc[expense.category] += expense.amount;
		} else {
			acc[expense.category] = expense.amount;
		}
		return acc;
	}, {});

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
			<Pie data={chartData} options={options} />
		</div>
	);
};

export default ExpensesPieChart;
