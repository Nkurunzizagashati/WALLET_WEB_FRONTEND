import PropTypes from 'prop-types';

const Aside = ({ className }) => {
	return (
		<aside
			className={`${className} w-[15%] text-red-400 text-lg h-full fixed left-0 px-2 bg-light-gray`}
		>
			aside contents
		</aside>
	);
};

// VALIDATE PROPS

Aside.propTypes = {
	className: PropTypes.string,
};

export default Aside;
