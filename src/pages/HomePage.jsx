import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import MainPage from './MainPage';

const HomePage = () => {
	return (
		<div className="h-screen ">
			<Navbar className="max-h-[10%]" />
			<div className="h-screen mt-[5.1%] ">
				<Aside className="top-[11%]" />
				<MainPage className="ml-[15.2%] text-red-700 h-full bg-light-gray" />
			</div>
		</div>
	);
};

export default HomePage;
