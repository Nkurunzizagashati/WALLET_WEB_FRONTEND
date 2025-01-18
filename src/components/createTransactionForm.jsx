import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createTransaction,
	triggerFetchNewDataFromDB,
} from '../redux/actions';
import {
	addTransactionFailure,
	addTransactionStart,
	addTransactionSuccess,
} from '../redux/transactionSlice';
import toast from 'react-hot-toast';

const CreateTransactionForm = () => {
	const { accounts } = useSelector((state) => state.accounts);

	const { categories } = useSelector((state) => state.categories);
	const { loading } = useSelector((state) => state.transactions);

	const dispatch = useDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		amount: '',
		accountId: '',
		transactionType: '',
		categoryId: '',
		date: '',
		notes: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			console.log('Form Submitted:', formData);

			dispatch(addTransactionStart());

			const response = await createTransaction(formData);
			dispatch(addTransactionSuccess(response));
			toast.success(response.message, {
				duration: 2000,
				position: 'top-right',
			});

			// trigger data fetch
			triggerFetchNewDataFromDB(dispatch);

			setIsModalOpen(false);
			setFormData({
				amount: '',
				accountId: '',
				transactionType: '',
				categoryId: '',
				date: '',
				notes: '',
			});
		} catch (error) {
			dispatch(addTransactionFailure(error.message));
		}
	};

	return (
		<div className="flex flex-col">
			<button
				onClick={() => setIsModalOpen(true)}
				className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-500 self-end fixed top-[14%]"
			>
				Add a New Transaction
			</button>

			{isModalOpen && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="bg-white rounded-lg shadow-lg w-[600px] p-6 relative"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-lg font-semibold mb-4">
							New Transaction
						</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Amount
								</label>
								<input
									type="number"
									name="amount"
									value={formData.amount}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Account
								</label>
								<select
									name="accountId"
									value={formData.accountId}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									required
								>
									<option value="" disabled>
										Select an account
									</option>
									{accounts.map((account, index) => (
										<option
											key={index}
											value={account?._id}
										>
											{account?.bankName} - (
											{account?.accountType})
										</option>
									))}
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Transaction Type
								</label>
								<select
									name="transactionType"
									value={formData.transactionType}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									required
								>
									<option value="" disabled>
										Select type
									</option>
									<option value="Income">
										Income
									</option>
									<option value="Expense">
										Expense
									</option>
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Category/Subcategory
								</label>
								<select
									name="categoryId"
									value={formData.categoryId}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									required
								>
									<option value="" disabled>
										Select a category
									</option>
									{categories.map(
										(category, index) => (
											<option
												key={index}
												value={category?._id}
											>
												{category?.name}
												{category?.parentCategoryId &&
													category?.parentCategoryId !==
														null && (
														<span className="text-gray-500">
															{' '}
															(
															{
																category
																	?.parentCategoryId
																	?.name
															}
															)
														</span>
													)}
											</option>
										)
									)}
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Date
								</label>
								<input
									type="date"
									name="date"
									value={formData.date}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Notes (optional)
								</label>
								<textarea
									name="notes"
									value={formData.notes}
									onChange={handleInputChange}
									className="w-full border rounded-md p-2"
									rows="3"
								/>
							</div>
							<div className="flex justify-between">
								<button
									type="button"
									onClick={() =>
										setIsModalOpen(false)
									}
									className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-500"
									disabled={loading}
								>
									{loading
										? 'adding transaction ...'
										: 'Add Transaction'}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateTransactionForm;
