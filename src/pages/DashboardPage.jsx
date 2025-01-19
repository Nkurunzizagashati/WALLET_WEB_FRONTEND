import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

const DashboardPage = () => {
	return (
		<div className="h-screen ">
			<Navbar className="max-h-[10%]" />
			<div className="h-screen mt-[5.1%] ">
				<Aside className="top-[11%] w-[20%]" />
				<div className="ml-[20.2%] text-dark h-full bg-light-gray">
					Dashboard Page
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
