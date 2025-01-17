import { useCallback, useMemo, useState } from 'react';
import { useTable } from 'react-table';

const TransactionsForm = () => {
	// Fake data for the table
	const [data, setData] = useState([
		{
			id: 1,
			name: 'John Doe',
			date: '2025-01-01',
			accountNumber: '12345678',
			amount: 500,
		},
		{
			id: 2,
			name: 'Jane Smith',
			date: '2025-01-02',
			accountNumber: '87654321',
			amount: 700,
		},
		{
			id: 3,
			name: 'Alice Brown',
			date: '2025-01-03',
			accountNumber: '45671234',
			amount: 250,
		},
		{
			id: 4,
			name: 'Bob White',
			date: '2025-01-04',
			accountNumber: '78912345',
			amount: 300,
		},
	]);

	const handleDelete = useCallback(
		(id) => {
			setData((prevData) =>
				prevData.filter((item) => item.id !== id)
			);
		},
		[setData]
	);

	const handleUpdate = useCallback((id) => {
		alert(`Update action for ID: ${id}`);
	}, []);

	// Columns definition
	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Date',
				accessor: 'date',
			},
			{
				Header: 'Account Number',
				accessor: 'accountNumber',
			},
			{
				Header: 'Amount ($)',
				accessor: 'amount',
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
		[handleDelete, handleUpdate]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});

	return (
		<div className="overflow-x-auto bg-white shadow-md rounded-lg">
			<table
				{...getTableProps()}
				className="table-auto border-collapse w-full text-left text-sm"
			>
				<thead>
					{headerGroups.map((headerGroup, index) => (
						<tr
							key={index}
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
					{rows.map((row, index) => {
						prepareRow(row);
						return (
							<tr
								key={index}
								{...row.getRowProps()}
								className="hover:bg-gray-200"
							>
								{row.cells.map((cell, idx) => (
									<td
										key={idx}
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
		</div>
	);
};

export default TransactionsForm;
