import PropTypes from 'prop-types';

const NotificationSettings = ({
	notificationsEnabled,
	setNotificationsEnabled,
}) => {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">
				Notifications Settings
			</h2>
			<div className="flex flex-col gap-4">
				<label className="flex items-center gap-2 text-sm">
					<input
						type="checkbox"
						checked={notificationsEnabled}
						onChange={(e) =>
							setNotificationsEnabled(e.target.checked)
						}
						className="form-checkbox"
					/>
					Enable Notifications
				</label>
			</div>
		</div>
	);
};

// Prop validation
NotificationSettings.propTypes = {
	notificationsEnabled: PropTypes.bool.isRequired,
	setNotificationsEnabled: PropTypes.func.isRequired,
};

export default NotificationSettings;
