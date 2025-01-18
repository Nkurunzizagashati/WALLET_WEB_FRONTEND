import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, deleteAccount } from '../redux/actions';
import {
	createAccountFailure,
	createAccountStart,
	createAccountSuccess,
	deleteAccountFailure,
	deleteAccountStart,
	deleteAccountSuccess,
} from '../redux/accountSlice';
import toast from 'react-hot-toast';

const AccountSettings = () => {
	const dispatch = useDispatch();

	const { accounts, loading } = useSelector(
		(state) => state.accounts
	);

	const [bankName, setBankName] = useState('');
	const [accountType, setAccountType] = useState('');
	const [initialBalance, setInitialBalance] = useState('');

	const handleCreateAccount = async () => {
		if (!bankName || !accountType) {
			toast.error('Bank Name and Account Type are required.');
			return;
		}
		const accountData = {
			bankName,
			accountType,
			balance: initialBalance || 0,
		};
		try {
			dispatch(createAccountStart());
			const data = await createAccount(accountData);
			dispatch(createAccountSuccess(data));
			setBankName('');
			setAccountType('');
			setInitialBalance('');
			toast.success('Account created successfully!');
		} catch (error) {
			dispatch(createAccountFailure(error.message));
			console.error('Error creating account:', error);
			toast.error(error.message || 'Failed to create account.');
		}
	};

	const handleDeleteAccount = async (accountId) => {
		if (
			!window.confirm(
				'Are you sure you want to delete this account?'
			)
		) {
			return;
		}

		try {
			dispatch(deleteAccountStart());
			await deleteAccount(accountId);
			dispatch(deleteAccountSuccess(accountId));
			toast.success('Account deleted successfully!');
		} catch (error) {
			dispatch(deleteAccountFailure(error.message));
			toast.error(error.message || 'Failed to delete account');
		}
	};

	if (loading) {
		return <div>Loading.......</div>;
	}

	return (
		<div className="border-b border-gray-300 pb-6 mb-6">
			<h2 className="text-lg font-semibold mb-4">
				Manage Accounts
			</h2>

			<ul className="list-disc pl-5 mb-4">
				{accounts.map((account, index) => (
					<li
						key={index}
						className="text-gray-700 mb-2 p-1 border border-gray-300 rounded-md bg-gray-50"
					>
						<div className="flex justify-between items-center">
							<span className="text-lg font-semibold">
								{account.bankName} -{' '}
								{account.accountType}
							</span>
							<div className="inline-flex items-center space-x-4">
								<span className="text-gray-500">
									Balance: $
									{account?.balance?.toFixed(2)}
								</span>
								<button
									className="text-red-500 hover:text-red-700 border border-red-500 px-3 py-1 rounded-md hover:bg-red-100"
									onClick={() =>
										handleDeleteAccount(account._id)
									}
								>
									remove
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Bank Name"
					value={bankName}
					onChange={(e) => setBankName(e.target.value)}
					className="border rounded-md p-2 flex-1"
					required
				/>
				<select
					value={accountType}
					onChange={(e) => setAccountType(e.target.value)}
					className="border rounded-md p-2 flex-1"
					required
				>
					<option value="">Select Account Type</option>
					<option value="Checking">Checking</option>
					<option value="Saving">Saving</option>
					<option value="Credit">Credit Card</option>
					<option value="MoMo">MoMo</option>
					<option value="Cash">Cash</option>
				</select>
				<input
					type="number"
					placeholder="Initial Balance (Optional)"
					value={initialBalance}
					onChange={(e) => setInitialBalance(e.target.value)}
					className="border rounded-md p-2 flex-1"
				/>
				<button
					onClick={handleCreateAccount}
					className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-500"
				>
					Add Account
				</button>
			</div>
		</div>
	);
};

export default AccountSettings;
