import { useState } from 'react';
import { useSelector } from 'react-redux';

const CreateTransactionForm = () => {
	const { categories } = useSelector((state) => state.categories);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		amount: '',
		account: '',
		type: '',
		category: '',
		date: '',
		notes: '',
	});

	const accounts = ['Savings', 'Checking', 'Credit Card'];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic to handle form submission (e.g., API call)
		console.log('Form Submitted:', formData);
		setIsModalOpen(false); // Close modal after submission
		setFormData({
			amount: '',
			account: '',
			type: '',
			category: '',
			date: '',
			notes: '',
		});
	};

	return (
		<div className="flex flex-col">
			<button
				onClick={() => setIsModalOpen(true)}
				className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 self-end fixed top-[14%]"
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
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute text-3xl font-bold text-red-600 top-4 right-4 hover:text-gray-700"
						>
							&times;
						</button>
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
									name="account"
									value={formData.account}
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
											value={account}
										>
											{account}
										</option>
									))}
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Type
								</label>
								<select
									name="type"
									value={formData.type}
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
									name="category"
									value={formData.category}
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
												value={category._id}
											>
												{category?.name}
												{category.parentCategoryId &&
													category.parentCategoryId !==
														null && (
														<span className="text-gray-500">
															{' '}
															(
															{
																category
																	.parentCategoryId
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
							<div className="flex justify-end gap-2">
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
								>
									Add Transaction
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
