// import { useSelector } from 'react-redux';
// import Aside from '../components/Aside';
// import Navbar from '../components/Navbar';
// import { useState } from 'react';

// const ReportsPage = () => {
// 	const { transactions } = useSelector((state) => state.transactions);
// 	const { showNavLinkTexts } = useSelector(
// 		(state) => state.navLinkTexts
// 	);

// 	const [reportType, setReportType] = useState('summary'); // Selected report type
// 	const [reportData, setReportData] = useState(null); // Placeholder for fetched report data

// 	const handleReportChange = (type) => {
// 		setReportType(type);

// 		// Simulate fetching report data (Replace this with actual API call)
// 		setReportData(
// 			type === 'summary'
// 				? {
// 						title: 'Summary Report',
// 						content: (
// 							<div>
// 								<h3 className="font-semibold">
// 									Transaction Summary
// 								</h3>
// 								<ul className="list-none">
// 									<li>
// 										<strong>Total Income:</strong>{' '}
// 										500,000 RWF
// 									</li>
// 									<li>
// 										<strong>Total Expenses:</strong>{' '}
// 										300,000 RWF
// 									</li>
// 									<li>
// 										<strong>Balance:</strong>{' '}
// 										200,000 RWF
// 									</li>
// 								</ul>

// 								<h3 className="font-semibold mt-4">
// 									Transaction Categories
// 								</h3>
// 								<ul className="list-none">
// 									<li>Groceries: 100,000 RWF</li>
// 									<li>Bills: 50,000 RWF</li>
// 									<li>Entertainment: 30,000 RWF</li>
// 								</ul>
// 							</div>
// 						),
// 				  }
// 				: {
// 						title: 'Detailed Report',
// 						content: (
// 							<div>
// 								<h3 className="font-semibold">
// 									Detailed Transactions
// 								</h3>
// 								<ul className="list-none">
// 									{transactions
// 										.slice(0, 5)
// 										.map((transaction, index) => (
// 											<li key={index}>
// 												<span>
// 													{transaction.date}
// 												</span>{' '}
// 												-
// 												<span>
// 													{transaction.type}
// 												</span>
// 												:
// 												<span>
// 													{transaction.amount.toLocaleString()}{' '}
// 													RWF
// 												</span>
// 											</li>
// 										))}
// 								</ul>
// 							</div>
// 						),
// 				  }
// 		);
// 	};

// 	return (
// 		<div className="h-screen">
// 			<Navbar className="max-h-[10%]" />
// 			<div className="h-screen mt-[5.1%] flex">
// 				<Aside
// 					className={`${
// 						showNavLinkTexts ? 'w-[15%]' : 'w-[5%]'
// 					}`}
// 				/>
// 				<div
// 					className={`${
// 						showNavLinkTexts ? 'ml-[15.2%]' : 'ml-[5.2%]'
// 					} p-6 bg-light-gray w-full`}
// 				>
// 					<h1 className="text-2xl font-bold mb-4">Reports</h1>
// 					<div className="flex space-x-4 mb-6">
// 						<button
// 							className={`px-4 py-2 rounded ${
// 								reportType === 'summary'
// 									? 'bg-blue-600 text-white'
// 									: 'bg-gray-200'
// 							}`}
// 							onClick={() =>
// 								handleReportChange('summary')
// 							}
// 						>
// 							Summary Report
// 						</button>
// 						<button
// 							className={`px-4 py-2 rounded ${
// 								reportType === 'detailed'
// 									? 'bg-blue-600 text-white'
// 									: 'bg-gray-200'
// 							}`}
// 							onClick={() =>
// 								handleReportChange('detailed')
// 							}
// 						>
// 							Detailed Report
// 						</button>
// 					</div>

// 					{/* Display the report data */}
// 					{reportData ? (
// 						<div className="bg-white shadow rounded p-4">
// 							<h2 className="text-xl font-semibold mb-2">
// 								{reportData.title}
// 							</h2>
// 							<div>{reportData.content}</div>
// 						</div>
// 					) : (
// 						<p className="text-gray-500">
// 							Select a report type to view.
// 						</p>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ReportsPage;

// ========================================================================

import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const ReportsPage = () => {
	const { transactions } = useSelector((state) => state.transactions);
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const [reportType, setReportType] = useState('summary'); // Selected report type
	const [reportData, setReportData] = useState(null); // Placeholder for fetched report data

	const handleReportChange = (type) => {
		setReportType(type);

		// Simulate fetching report data (Replace this with actual API call)
		setReportData(
			type === 'summary'
				? {
						title: 'Summary Report',
						content: (
							<div className="space-y-6">
								{/* Transaction Summary */}
								<div className="bg-white p-4 rounded shadow-md">
									<h3 className="text-lg font-semibold text-dark-text">
										Transaction Summary
									</h3>
									<ul className="space-y-3 mt-4 text-gray-600">
										<li className="flex justify-between">
											<strong>
												Total Income:
											</strong>{' '}
											<span>500,000 RWF</span>
										</li>
										<li className="flex justify-between">
											<strong>
												Total Expenses:
											</strong>{' '}
											<span>300,000 RWF</span>
										</li>
										<li className="flex justify-between">
											<strong>Balance:</strong>{' '}
											<span>200,000 RWF</span>
										</li>
									</ul>
								</div>

								{/* Transaction Categories */}
								<div className="bg-white p-4 rounded shadow-md">
									<h3 className="text-lg font-semibold text-dark-text">
										Transaction Categories
									</h3>
									<ul className="space-y-3 mt-4 text-gray-600">
										<li className="flex justify-between">
											<strong>Groceries:</strong>{' '}
											<span>100,000 RWF</span>
										</li>
										<li className="flex justify-between">
											<strong>Bills:</strong>{' '}
											<span>50,000 RWF</span>
										</li>
										<li className="flex justify-between">
											<strong>
												Entertainment:
											</strong>{' '}
											<span>30,000 RWF</span>
										</li>
									</ul>
								</div>

								{/* Budget Overview */}
								<div className="bg-white p-4 rounded shadow-md">
									<h3 className="text-lg font-semibold text-dark-text">
										Budget Overview
									</h3>
									<div className="mt-4">
										<div className="flex justify-between mb-3">
											<span>Groceries</span>
											<span>80% of Budget</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
											<div
												className="bg-green-500 h-2.5 rounded-full"
												style={{ width: '80%' }}
											></div>
										</div>

										<div className="flex justify-between mb-3">
											<span>Bills</span>
											<span>60% of Budget</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2.5">
											<div
												className="bg-yellow-500 h-2.5 rounded-full"
												style={{ width: '60%' }}
											></div>
										</div>
									</div>
								</div>
							</div>
						),
				  }
				: {
						title: 'Detailed Report',
						content: (
							<div className="space-y-6">
								{/* Detailed Transactions */}
								<div className="bg-white p-4 rounded shadow-md">
									<h3 className="text-lg font-semibold text-dark-text">
										Detailed Transactions
									</h3>
									<ul className="space-y-3 mt-4 text-gray-600">
										{transactions
											.slice(0, 5)
											.map(
												(
													transaction,
													index
												) => (
													<li
														key={index}
														className="flex justify-between"
													>
														<span>
															{
																transaction.date
															}
														</span>
														<span
															className={`${
																transaction.type ===
																'income'
																	? 'text-green-600'
																	: 'text-red-600'
															}`}
														>
															{
																transaction.type
															}
															:{' '}
															{transaction.amount.toLocaleString()}{' '}
															RWF
														</span>
													</li>
												)
											)}
									</ul>
								</div>
							</div>
						),
				  }
		);
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
					<div className="flex space-x-4 mb-6">
						<button
							className={`px-6 py-3 rounded-md text-white text-lg ${
								reportType === 'summary'
									? 'bg-blue-600'
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
							onClick={() =>
								handleReportChange('summary')
							}
						>
							Summary Report
						</button>
						<button
							className={`px-6 py-3 rounded-md text-white text-lg ${
								reportType === 'detailed'
									? 'bg-blue-600'
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
							onClick={() =>
								handleReportChange('detailed')
							}
						>
							Detailed Report
						</button>
					</div>

					{/* Display the report data */}
					{reportData ? (
						<div className="space-y-8">
							{reportData.content}
						</div>
					) : (
						<p className="text-gray-500">
							Select a report type to view.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ReportsPage;
