import PropTypes from 'prop-types';

const LatestTransactions = ({ className }) => {
	return (
		<div className={`${className} bg-light-gray rounded-xl p-2`}>
			<h2 className="text-2xl text-dark-text">
				Latest transactions
			</h2>

			<div className="flex gap-4 justify-between mt-4">
				<div className="flex flex-col gap-1">
					<h3 className="bold text-lg text-dark-text">
						type
					</h3>
					<span className="text-gray-500 text-right">
						income
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="bold text-lg text-dark-text">
						date
					</h3>
					<span className="text-gray-500 text-right">
						income
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="bold text-lg text-dark-text">
						amount(rwf)
					</h3>
					<span className="text-gray-500 text-right">
						income
					</span>
				</div>
			</div>
			<p className="text-lg text-gray-500">
				Total Income: $1,234.56
			</p>
		</div>
	);
};

// validate props

LatestTransactions.propTypes = {
	className: PropTypes.string,
};

export default LatestTransactions;
