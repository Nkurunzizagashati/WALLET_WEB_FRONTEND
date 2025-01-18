import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

const TransactionsForm = () => {
	const { transactions } = useSelector((state) => state.transactions);

	const [filter, setFilter] = useState('');
	const [transactionType, setTransactionType] = useState('');
	const [minAmount, setMinAmount] = useState('');
	const [maxAmount, setMaxAmount] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const data = useMemo(() => {
		return transactions
			.filter((transaction) => {
				const matchesFilter =
					transaction?.userId?.fname
						.toLowerCase()
						.includes(filter.toLowerCase()) ||
					transaction?.transactionType
						?.toLowerCase()
						.includes(filter.toLowerCase()) ||
					new Date(transaction?.date)
						.toLocaleDateString()
						.includes(filter.toLowerCase());

				const matchesType = transactionType
					? transaction?.transactionType.toLowerCase() ===
					  transactionType.toLowerCase()
					: true;

				const matchesAmount =
					(minAmount
						? transaction?.amount >= minAmount
						: true) &&
					(maxAmount
						? transaction.amount <= maxAmount
						: true);

				const matchesDate =
					(startDate
						? new Date(transaction.date) >=
						  new Date(startDate)
						: true) &&
					(endDate
						? new Date(transaction.date) <=
						  new Date(endDate)
						: true);

				return (
					matchesFilter &&
					matchesType &&
					matchesAmount &&
					matchesDate
				);
			})
			.map((transaction) => ({
				id: transaction?._id,
				date: new Date(transaction?.date).toLocaleDateString(),
				account: `${transaction?.accountId?.bankName} (${transaction?.accountId?.accountType})`,
				amount: transaction?.amount,
				transactionType: transaction?.transactionType,
			}));
	}, [
		transactions,
		filter,
		transactionType,
		minAmount,
		maxAmount,
		startDate,
		endDate,
	]);

	const columns = useMemo(
		() => [
			{
				Header: 'Date',
				accessor: 'date',
			},
			{
				Header: 'Account',
				accessor: 'account',
			},
			{
				Header: 'Amount',
				accessor: 'amount',
			},
			{
				Header: 'Transaction Type',
				accessor: 'transactionType',
			},
			{
				Header: 'Actions',
				Cell: ({ row }) => (
					<div className="flex gap-2">
						<button
							className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
							onClick={() =>
								handleUpdate(row.original.id)
							}
						>
							Update
						</button>
						<button
							className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
							onClick={() =>
								handleDelete(row.original.id)
							}
						>
							Delete
						</button>
					</div>
				),
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	const handleDelete = (id) => {
		alert(`Deleted transaction with ID: ${id}`);
	};

	const handleUpdate = (id) => {
		alert(`Update transaction with ID: ${id}`);
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				Transactions
			</h2>

			<div className="mb-6">
				<input
					type="text"
					className="p-2 border border-gray-300 rounded mr-2"
					placeholder="Search transactions..."
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>

				<select
					className="p-2 border border-gray-300 rounded mr-2"
					value={transactionType}
					onChange={(e) => setTransactionType(e.target.value)}
				>
					<option value="">All Types</option>
					<option value="Income">Income</option>
					<option value="Expense">Expense</option>
				</select>

				<input
					type="number"
					className="p-2 border border-gray-300 rounded mr-2"
					placeholder="Min Amount"
					value={minAmount}
					onChange={(e) => setMinAmount(e.target.value)}
				/>
				<input
					type="number"
					className="p-2 border border-gray-300 rounded"
					placeholder="Max Amount"
					value={maxAmount}
					onChange={(e) => setMaxAmount(e.target.value)}
				/>

				<input
					type="date"
					className="p-2 border border-gray-300 rounded mr-2"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
				/>
				<input
					type="date"
					className="p-2 border border-gray-300 rounded"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
				/>
			</div>

			{data.length === 0 ? (
				<p className="text-gray-600 text-center">
					No transactions available at the moment.
				</p>
			) : (
				<table
					{...getTableProps()}
					className="table-auto border-collapse w-full text-left text-sm p-6"
				>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr
								key={headerGroup.id}
								{...headerGroup.getHeaderGroupProps()}
								className="bg-gray-100"
							>
								{headerGroup.headers.map((column) => (
									<th
										key={column.id}
										{...column.getHeaderProps()}
										className="border p-2"
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr
									key={row.id}
									{...row.getRowProps()}
									className="hover:bg-gray-200"
								>
									{row.cells.map((cell) => (
										<td
											key={cell.column.id}
											{...cell.getCellProps()}
											className="border p-2"
										>
											{cell.render('Cell')}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

TransactionsForm.propTypes = {
	row: PropTypes.object,
	original: PropTypes.object,
};

export default TransactionsForm;
