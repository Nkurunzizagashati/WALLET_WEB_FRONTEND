import LogoImage from '../assets/web_wallet_logo.jpeg';

const Logo = () => {
	return (
		<img
			src={LogoImage}
			alt="Logo"
			className="w-6 h-6 rounded-[50%]"
		/>
	);
};

export default Logo;
