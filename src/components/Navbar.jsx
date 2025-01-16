import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ className }) => {
	return (
		<nav
			className={`${className} h=[10%] bg-light-gray p-6 fixed top-0 left-0 right-0 px-2 font-poppins shadow-custom-light`}
		>
			<GiHamburgerMenu className="text-3xl cursor-pointer" />
		</nav>
	);
};

// VALIDATE PROPS

Navbar.propTypes = {
	className: PropTypes.string,
};

export default Navbar;
