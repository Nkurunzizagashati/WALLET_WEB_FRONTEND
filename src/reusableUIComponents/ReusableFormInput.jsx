import PropTypes from 'prop-types';

const ReusableFormInput = ({
	formData,
	className = '',
	onChange,
	type = 'text',
	name,
}) => {
	return (
		<div className="mb-4">
			<label
				className="block text-sm font-medium mb-1"
				htmlFor={name}
			>
				{name}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				value={formData[name] || ''}
				onChange={onChange}
				className={`${className} w-full px-3 py-2 border rounded border-gray-300`}
			/>
		</div>
	);
};

// Validate props
ReusableFormInput.propTypes = {
	formData: PropTypes.object.isRequired,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default ReusableFormInput;
