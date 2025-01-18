import PropTypes from 'prop-types';

const ReusableFormInput = ({ formData, className, onChange }) => {
	return (
		<div className="mb-4">
			<label className="block text-sm font-medium mb-1">
				First Name
			</label>
			<input
				type="text"
				name="firstName"
				value={formData.firstName}
				onChange={onChange}
				className={`${className} w-full px-3 py-2 border rounded border-gray-300`}
			/>
		</div>
	);
};

// validate props

ReusableFormInput.propTypes = {
	formData: PropTypes.object.isRequired,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default ReusableFormInput;
