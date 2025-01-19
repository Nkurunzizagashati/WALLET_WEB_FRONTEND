import PropTypes from 'prop-types';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbTransactionDollar } from 'react-icons/tb';
import { TbReportMoney } from 'react-icons/tb';
import { SiActualbudget } from 'react-icons/si';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogin } from 'react-icons/md';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Aside = ({ className }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const authToken = localStorage.getItem('authToken');

	useEffect(() => {
		if (
			!authToken &&
			location.pathname !== '/login' &&
			location.pathname !== '/register'
		) {
			navigate('/login');
		}
	}, [authToken, navigate, location.pathname]);

	const navItems = [
		{
			icon: (
				<LuLayoutDashboard className="text-3xl cursor-pointer" />
			),
			label: 'Dashboard',
			linkPath: '/',
		},
		{
			icon: <TbReportMoney className="text-3xl cursor-pointer" />,
			label: 'Reports',
			linkPath: '/reports',
		},
		{
			icon: (
				<TbTransactionDollar className="text-3xl cursor-pointer" />
			),
			label: 'Transactions',
			linkPath: '/transactions',
		},
		{
			icon: (
				<SiActualbudget className="text-3xl cursor-pointer" />
			),
			label: 'Budget',
			linkPath: '/budget',
		},
		{
			icon: <MdLogin className="text-3xl cursor-pointer" />,
			label: authToken ? 'Logout' : 'Login',
			linkPath: '/login',
		},
	];

	return (
		<aside
			className={`${className} text-dark-text text-lg h-full fixed left-0 py-3 px-2 pb-10 bg-light-gray`}
		>
			<div className="flex flex-col gap-4 h-[80%]">
				{navItems.map((navItem, index) => (
					<NavLink
						to={navItem.linkPath}
						key={index}
						className={({ isActive }) =>
							`${
								isActive
									? 'bg-primary text-light-gray'
									: ''
							} flex gap-4 cursor-pointer items-center w-full py-2 hover:bg-primary hover:text-light-gray rounded-xl ${
								authToken ? '' : 'pointer-events-none'
							} ${
								navItem.linkPath === '/login'
									? 'mt-6 pointer-events-auto'
									: ''
							} `
						}
					>
						{navItem.icon}
						<p
							className={`${
								showNavLinkTexts ? '' : 'hidden'
							}`}
						>
							{navItem.label}
						</p>
					</NavLink>
				))}
			</div>

			<NavLink
				to="/settings"
				className={({ isActive }) =>
					`${
						isActive ? 'bg-primary text-light-gray' : ''
					} flex gap-4 cursor-pointer items-center w-full py-2 hover:bg-primary hover:text-light-gray rounded-xl ${
						authToken ? '' : 'pointer-events-none'
					}`
				}
			>
				<IoSettingsOutline className="text-3xl" />
				<p className={`${showNavLinkTexts ? '' : 'hidden'}`}>
					Settings
				</p>
			</NavLink>
		</aside>
	);
};

// VALIDATE PROPS
Aside.propTypes = {
	className: PropTypes.string,
};

export default Aside;
