import { useSelector } from 'react-redux';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import MainPage from './MainPage';

const HomePage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);
	return (
		<div className="">
			<Navbar className="max-h-[10%]" />
			<div className=" mt-[5.1%] ">
				<Aside
					className={`${
						showNavLinkTexts ? 'w-[15%]' : 'w-[5%]'
					}`}
				/>
				<MainPage
					className={`${
						showNavLinkTexts ? 'ml-[15.2%]' : 'ml-[5.2%]'
					}`}
				/>
			</div>
		</div>
	);
};

export default HomePage;
