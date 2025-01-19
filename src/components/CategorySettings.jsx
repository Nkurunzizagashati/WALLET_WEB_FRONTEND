import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory } from '../redux/actions';
import {
	createCategoryFailure,
	createCategoryStart,
	createCategorySuccess,
	deleteCategoryFailure,
	deleteCategoryStart,
	deleteCategorySuccess,
} from '../redux/categorySlice';

const CategorySettings = () => {
	const dispatch = useDispatch();

	const { categories, loading } = useSelector(
		(state) => state.categories
	);
	const [newCategory, setNewCategory] = useState('');
	const [parentCategory, setParentCategory] = useState('');
	const handleDeleteCategory = async (categoryId) => {
		try {
			dispatch(deleteCategoryStart());
			const data = await deleteCategory(categoryId);
			console.log(data);
			dispatch(deleteCategorySuccess(data));
		} catch (error) {
			const errorMessage =
				error.message || 'create category failed';
			dispatch(deleteCategoryFailure(errorMessage));
			console.error(errorMessage);
		}
	};

	const handleUpdateCategory = async (categoryId) => {
		console.log(categoryId);
	};

	const handleAddCategory = async () => {
		try {
			dispatch(createCategoryStart());

			if (parentCategory) {
				const data = await createCategory({
					name: newCategory,
					parentCategoryId: parentCategory,
				});
				console.log(data);
				dispatch(createCategorySuccess(data));
				setNewCategory('');
				setParentCategory('');
			} else {
				const data = await createCategory({
					name: newCategory,
				});
				console.log(data);
				dispatch(createCategorySuccess(data));
				setNewCategory('');
				setParentCategory('');
			}
		} catch (error) {
			const errorMessage =
				error.message || 'create category failed';
			dispatch(createCategoryFailure(errorMessage));
			console.error(errorMessage);
		}
	};

	if (loading) {
		return <div>Loading.......</div>;
	}
	return (
		<div className="border-b border-gray-300 pb-6 mb-6">
			<h2 className="text-lg font-semibold mb-4">
				Manage Categories
			</h2>
			<ul className="list-disc pl-5 mb-4">
				{categories.map((category, index) => (
					<li
						key={index}
						className="text-gray-700 mb-2 p-1 border border-gray-300 rounded-md bg-gray-50"
					>
						<div className="flex justify-between items-center">
							<span className="text-lg font-semibold">
								{category?.name}
								{category.parentCategoryId && (
									<span className="text-gray-500">
										{' '}
										(
										{
											category.parentCategoryId
												?.name
										}
										)
									</span>
								)}
							</span>
							<div className="inline-flex ml-2 space-x-4">
								<button
									className="text-blue-500 hover:text-blue-700 border border-blue-500 px-3 py-1 rounded-md hover:bg-blue-100"
									onClick={() =>
										handleUpdateCategory(
											category._id
										)
									}
								>
									Update
								</button>
								<button
									className="text-red-500 hover:text-red-700 border border-red-500 px-3 py-1 rounded-md hover:bg-red-100"
									onClick={() =>
										handleDeleteCategory(
											category._id
										)
									}
								>
									{loading ? 'Deleting' : 'Delete'}
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="New category name"
					value={newCategory}
					onChange={(e) => setNewCategory(e.target.value)}
					className="border rounded-md p-2 flex-1"
				/>
				<select
					value={parentCategory}
					onChange={(e) => setParentCategory(e.target.value)}
					className="border rounded-md p-2 flex-1"
				>
					<option value="">
						Select Parent Category (Optional)
					</option>
					{categories.map((category) => (
						<option key={category._id} value={category._id}>
							{category?.name}
							{category.parentCategoryId &&
								category.parentCategoryId !== null && (
									<span className="text-gray-500">
										{' '}
										(
										{
											category.parentCategoryId
												?.name
										}
										)
									</span>
								)}
						</option>
					))}
				</select>
				<button
					onClick={handleAddCategory}
					className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-500"
				>
					Add Category
				</button>
			</div>
		</div>
	);
};

export default CategorySettings;
