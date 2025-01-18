import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import ReusableFormLabel from '../reusableUIComponents/ReusableFormLabel';
import ReusableFormInput from '../reusableUIComponents/ReusableFormInput';
import { useState } from 'react';
import { loginUser } from '../redux/actions';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const data = await loginUser(formData);

			localStorage.setItem('authToken', data.accessToken);

			toast.success(data.message, {
				duration: 3000,
				position: 'top-right',
			});

			setIsLoading(false);

			navigate('/');
		} catch (error) {
			const errorMessage = error.message || 'Login failed';
			setIsLoading(false);
			toast.error(errorMessage, {
				duration: 3000,
				position: 'top-right',
			});
		}
	};

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
					<div className="min-h-screen flex items-center justify-center bg-light-gray">
						<div className="bg-white p-8 rounded shadow-md w-96">
							<h1 className="text-2xl font-bold mb-6 text-center">
								Login
							</h1>

							<form onSubmit={handleLogin}>
								<div className="mb-4">
									<ReusableFormLabel
										placeholder="Email"
										id="email"
									/>
									<ReusableFormInput
										name="email"
										type="email"
										onChange={handleChange}
										value={formData.email}
									/>
								</div>
								<div className="mb-4">
									<ReusableFormLabel
										placeholder="Password"
										id="password"
									/>
									<ReusableFormInput
										name="password"
										type="password"
										onChange={handleChange}
										value={formData.password}
									/>
								</div>

								<button
									disabled={isLoading}
									type="submit"
									className={`w-full py-2 bg-primary text-white rounded-md hover:bg-blue-600 `}
								>
									{isLoading
										? 'Loading ...'
										: 'Login'}
								</button>
							</form>
							<div className="mt-6 text-center">
								<p className="text-sm">
									Dont have an account?{' '}
									<Link
										to="/register"
										className="text-primary hover:underline"
									>
										Register Now
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
