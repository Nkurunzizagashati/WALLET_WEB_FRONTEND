import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

const CategoriesPage = () => {
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
					} text-dark h-full bg-light-gray`}
				>
					Categories Page
				</div>
			</div>
		</div>
	);
};

export default CategoriesPage;
