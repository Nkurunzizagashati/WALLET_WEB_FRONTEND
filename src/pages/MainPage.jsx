import PropTypes from 'prop-types';

const MainPage = ({ className }) => {
	return <main className={`${className}`}>main contents</main>;
};

// VALIDATE PROPES

MainPage.propTypes = {
	className: PropTypes.string,
};

export default MainPage;
