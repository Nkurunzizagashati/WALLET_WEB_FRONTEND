import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNavLinkTexts } from '../redux/navLinkTextsSlice';

const Navbar = ({ className }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		console.log('CLICKED');
		dispatch(toggleNavLinkTexts());
	};
	return (
		<nav
			className={`${className} h=[10%] bg-light-gray p-6 fixed top-0 left-0 right-0 px-2 font-poppins shadow-custom-light `}
		>
			<div className="flex gap-8 items-center justify-between">
				<GiHamburgerMenu
					className="text-3xl text-dark-text cursor-pointer"
					onClick={handleClick}
				/>
				<NavLink to="/" className="flex items-center">
					<Logo />
					<h3 className="text-2xl font-bold">
						<span className="text-primary">WEB</span>WALLET
					</h3>
				</NavLink>
			</div>
		</nav>
	);
};

// VALIDATE PROPS

Navbar.propTypes = {
	className: PropTypes.string,
};

export default Navbar;
