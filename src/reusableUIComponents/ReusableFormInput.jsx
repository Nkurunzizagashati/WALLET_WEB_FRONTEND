import PropTypes from 'prop-types';

const ReusableFormInput = ({
	className = '',
	onChange,
	type = 'text',
	name,
	value,
	...rest
}) => {
	return (
		<input
			id={name}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			className={`${className} w-full px-3 py-2 border rounded border-gray-300`}
			{...rest}
		/>
	);
};

// Validate props
ReusableFormInput.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default ReusableFormInput;
