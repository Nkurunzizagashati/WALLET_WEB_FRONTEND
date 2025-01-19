import PropTypes from 'prop-types';

const SystemSettings = ({
	defaultLanguage,
	theme,
	currency,
	setDefaultLanguage,
	setTheme,
	setCurrency,
}) => {
	return (
		<div className="border-b border-gray-300 pb-6 mb-6">
			<h2 className="text-lg font-semibold mb-4">
				System Settings
			</h2>
			<div className="flex flex-col gap-4">
				<div>
					<label className="block text-sm">
						Default Language
					</label>
					<select
						value={defaultLanguage}
						onChange={(e) =>
							setDefaultLanguage(e.target.value)
						}
						className="border rounded-md p-2 flex-1"
					>
						<option value="English">English</option>
						<option value="French">French</option>
						<option value="Kinyarwanda">Kinyarwanda</option>
					</select>
				</div>

				<div>
					<label className="block text-sm">Theme</label>
					<select
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						className="border rounded-md p-2 flex-1"
					>
						<option value="Light">Light</option>
						<option value="Dark">Dark</option>
					</select>
				</div>

				<div>
					<label className="block text-sm">Currency</label>
					<select
						value={currency}
						onChange={(e) => setCurrency(e.target.value)}
						className="border rounded-md p-2 flex-1"
					>
						<option value="USD">USD</option>
						<option value="RWF">RWF</option>
						<option value="EUR">EUR</option>
					</select>
				</div>
			</div>
		</div>
	);
};

// Prop validation
SystemSettings.propTypes = {
	defaultLanguage: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
	setDefaultLanguage: PropTypes.func.isRequired,
	setTheme: PropTypes.func.isRequired,
	setCurrency: PropTypes.func.isRequired,
};

export default SystemSettings;
