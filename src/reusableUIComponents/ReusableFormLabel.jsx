import PropTypes from 'prop-types';

const ReusableFormLabel = ({ className, id, placeholder, ...rest }) => {
	return (
		<label
			className={`${className} block text-sm font-medium mb-1`}
			htmlFor={id}
			{...rest}
		>
			{placeholder}
		</label>
	);
};

// validate props

ReusableFormLabel.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default ReusableFormLabel;
