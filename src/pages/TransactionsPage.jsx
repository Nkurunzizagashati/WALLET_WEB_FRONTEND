import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import CreateTransactionForm from '../components/createTransactionForm';
import Navbar from '../components/Navbar';
import TransactionsForm from '../components/TransactionsForm';

const TransactionsPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	return (
		<div className="h-screen ">
			<Navbar className="max-h-[10%]" />
			<div className="h-screen mt-[5.1%] ">
				<Aside
					className={`${
						showNavLinkTexts ? 'w-[15%]' : 'w-[5%]'
					}`}
				/>
				<div
					className={`${
						showNavLinkTexts ? 'ml-[15.2%]' : 'ml-[5.2%]'
					} text-dark h-full bg-light-gray flex flex-col gap-4 p-2`}
				>
					<CreateTransactionForm />
					<TransactionsForm />
				</div>
			</div>
		</div>
	);
};

export default TransactionsPage;
