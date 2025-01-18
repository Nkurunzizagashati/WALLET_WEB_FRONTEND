import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LatestTransactions = ({ className }) => {
	const { transactions } = useSelector((state) => state.transactions);

	return (
		<div className={`${className} bg-light-gray rounded-xl p-2`}>
			<h2 className="text-2xl text-dark-text">
				Latest transactions
			</h2>

			{transactions.length === 0 ? (
				<div className="flex items-center justify-center mt-4">
					<p className="text-gray-500 text-lg">
						No transactions available
					</p>
				</div>
			) : (
				<div className="flex gap-4 justify-between mt-4">
					<div className="flex flex-col gap-1">
						<h3 className="font-bold text-lg text-dark-text text-left">
							type
						</h3>
						<div className="text-gray-500 text-left flex flex-col gap-1">
							{transactions
								.slice(0, 2)
								.map((transaction, index) => (
									<span key={index}>
										{transaction.transactionType}
									</span>
								))}
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="font-bold text-lg text-dark-text text-right">
							date
						</h3>
						<div className="text-gray-500 text-right flex flex-col gap-1">
							{transactions
								.slice(0, 2)
								.map((transaction, index) => (
									<span key={index}>
										{new Date(
											transaction.date
										).toLocaleDateString('en-US', {
											weekday: 'short',
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</span>
								))}
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="font-bold text-lg text-dark-text text-right">
							amount(rwf)
						</h3>
						<div className="text-gray-500 text-right flex flex-col gap-1">
							{transactions
								.slice(0, 2)
								.map((transaction, index) => (
									<span key={index}>
										{transaction.amount.toLocaleString()}
									</span>
								))}
						</div>
					</div>
				</div>
			)}
			<NavLink
				to="/transactions"
				className="mt-2 py-1 text-center w-[100%] block rounded-lg bg-primary text-light-gray"
			>
				manage transactions
			</NavLink>
		</div>
	);
};

// validate props
LatestTransactions.propTypes = {
	className: PropTypes.string,
};

export default LatestTransactions;
