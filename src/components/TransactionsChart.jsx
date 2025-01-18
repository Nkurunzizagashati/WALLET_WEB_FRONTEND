import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';

// Register chart elements
ChartJS.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend
);

const TransactionsChart = () => {
	const { transactions } = useSelector((state) => state.transactions);

	// Filter transactions by type
	const expenses = transactions.filter(
		(transaction) => transaction.transactionType === 'Expense'
	);
	const income = transactions.filter(
		(transaction) => transaction.transactionType === 'Income'
	);

	// Group data by weeks
	const groupByWeek = (data) => {
		const weeks = {
			'1st week': 0,
			'2nd week': 0,
			'3rd week': 0,
			'4th week': 0,
		};
		data.forEach((item) => {
			const date = new Date(item.date);
			const week = Math.ceil(date.getDate() / 7);
			if (week === 1) weeks['1st week'] += item.amount;
			if (week === 2) weeks['2nd week'] += item.amount;
			if (week === 3) weeks['3rd week'] += item.amount;
			if (week >= 4) weeks['4th week'] += item.amount;
		});
		return weeks;
	};

	const weeklyExpenses = groupByWeek(expenses);
	const weeklyIncome = groupByWeek(income);

	// Chart data
	const chartData = {
		labels: ['1st week', '2nd week', '3rd week', '4th week'],
		datasets: [
			{
				label: 'Expenses (RWF)',
				data: Object.values(weeklyExpenses),
				borderColor: 'red',
				borderWidth: 1,
			},
			{
				label: 'Income (RWF)',
				data: Object.values(weeklyIncome),
				borderColor: 'green',
				borderWidth: 1,
			},
		],
	};

	// Chart options
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Monthly Expenses and Income',
			},
		},
	};

	return (
		<div
			style={{
				width: '100%',
				height: '60%',
			}}
		>
			<Line data={chartData} options={options} />
		</div>
	);
};

export default TransactionsChart;
