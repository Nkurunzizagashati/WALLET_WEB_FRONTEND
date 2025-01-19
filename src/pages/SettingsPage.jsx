import { useState } from 'react';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import CategorySettings from '../components/CategorySettings';
import AccountSettings from '../components/AccountSettings';
import SystemSettings from '../components/SystemSettings';
import NotificationSettings from '../components/NotificationSettings';
import { useSelector } from 'react-redux';

const SettingsPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const { categories } = useSelector((state) => state);

	const [accounts, setAccounts] = useState([
		{ name: 'Bank of Kigali', accountType: 'Savings' },
		{ name: 'MTN Mobile Money', accountType: 'MoMo' },
	]);

	const [newCategory, setNewCategory] = useState('');
	const [parentCategory, setParentCategory] = useState('');
	const [newAccount, setNewAccount] = useState('');
	const [accountType, setAccountType] = useState('');

	const [defaultLanguage, setDefaultLanguage] = useState('English');
	const [theme, setTheme] = useState('Light');
	const [currency, setCurrency] = useState('USD');

	const [notificationsEnabled, setNotificationsEnabled] =
		useState(true);

	const handleAddCategory = () => {
		if (newCategory.trim()) {
			const updatedCategories = [...categories];
			const parentCategoryObj = categories.find(
				(cat) => cat.name === parentCategory
			);

			if (parentCategoryObj) {
				parentCategoryObj.subcategories.push(newCategory);
			} else {
				updatedCategories.push({
					name: newCategory,
					parent: null,
					subcategories: [],
				});
			}

			// setCategories(updatedCategories);
			// setNewCategory('');
			// setParentCategory('');
		}
	};

	const handleAddAccount = () => {
		if (newAccount.trim() && accountType) {
			setAccounts([
				...accounts,
				{ name: newAccount, accountType },
			]);
			setNewAccount('');
			setAccountType('');
		}
	};

	console.log('Categories being passed:', categories);
	console.log(
		'Are categories being passed an array: ',
		Array.isArray(categories)
	);

	console.log('TYPE OF CATEGORIES BEING PASSED: ', typeof categories);

	console.log(
		'TYPE OF CATEGORIES.CATEGORIES: ',
		typeof categories.categories
	);
	console.log(categories);

	return (
		<div className="h-screen">
			<Navbar className="max-h-[10%]" />
			<div className="h-screen mt-[5.1%]">
				<Aside
					className={`${
						showNavLinkTexts ? 'w-[15%]' : 'w-[5%]'
					}`}
				/>
				<div
					className={`${
						showNavLinkTexts ? 'ml-[15.2%]' : 'ml-[5.2%]'
					} p-4 text-dark h-full bg-light-gray flex flex-col items-center min-h-screen`}
				>
					<h1 className="text-xl font-bold mb-6">Settings</h1>
					<div className="space-y-8 bg-white shadow p-6 rounded-md max-w-4xl w-full">
						<CategorySettings
							categories={categories.categories}
							newCategory={newCategory}
							parentCategory={parentCategory}
							setNewCategory={setNewCategory}
							setParentCategory={setParentCategory}
							handleAddCategory={handleAddCategory}
						/>
						<AccountSettings
							accounts={accounts}
							newAccount={newAccount}
							accountType={accountType}
							setNewAccount={setNewAccount}
							setAccountType={setAccountType}
							handleAddAccount={handleAddAccount}
						/>
						<SystemSettings
							defaultLanguage={defaultLanguage}
							theme={theme}
							currency={currency}
							setDefaultLanguage={setDefaultLanguage}
							setTheme={setTheme}
							setCurrency={setCurrency}
						/>
						<NotificationSettings
							notificationsEnabled={notificationsEnabled}
							setNotificationsEnabled={
								setNotificationsEnabled
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
