import PropTypes from 'prop-types';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdHomeFilled } from 'react-icons/md';

const Aside = ({ className }) => {
	const navItems = [
		{
			icon: <MdHomeFilled className="text-3xl cursor-pointer" />,
			label: 'Home',
		},
		{
			icon: (
				<LuLayoutDashboard className="text-3xl cursor-pointer" />
			),
			label: 'Dashboard',
		},
	];

	return (
		<aside
			className={`${className} text-dark-text text-lg h-full fixed left-0 py-3 px-2 bg-light-gray`}
		>
			<ul className="flex flex-col gap-4">
				{navItems.map((navItem, index) => (
					<li
						key={index}
						className="flex gap-4 cursor-pointer items-center w-full py-2 border hover:border-silver-color rounded-md"
					>
						{navItem.icon}
						<p className="">{navItem.label}</p>
					</li>
				))}
			</ul>
		</aside>
	);
};

// VALIDATE PROPS
Aside.propTypes = {
	className: PropTypes.string,
};

export default Aside;
