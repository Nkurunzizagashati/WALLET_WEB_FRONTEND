import { useState } from 'react';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import { Link } from 'react-router-dom';
import ReusableFormLabel from '../reusableUIComponents/ReusableFormLabel';
import ReusableFormInput from '../reusableUIComponents/ReusableFormInput';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions';
import {
	registerFailure,
	registerSuccess,
	registerStart,
} from '../redux/authSlice';
import toast from 'react-hot-toast';
const RegistrationPage = () => {
	const { showNavLinkTexts } = useSelector(
		(state) => state.navLinkTexts
	);

	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.auth);

	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			dispatch(registerStart());
			const data = await registerUser(formData);

			localStorage.setItem('authToken', data.accessToken);
			dispatch(registerSuccess(data));
			toast.success(data.message, {
				duration: 5000,
				position: 'top-right',
			});
		} catch (error) {
			const errorMessage = error.message || 'Registration failed';
			dispatch(registerFailure(errorMessage));
			toast.error(errorMessage, {
				duration: 5000,
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
								Register
							</h1>
							<form onSubmit={handleRegister}>
								<div className="mb-4">
									<ReusableFormLabel
										placeholder="First Name"
										id="fname"
									/>
									<ReusableFormInput
										name="fname"
										type="text"
										onChange={handleChange}
										value={formData.fname}
									/>
								</div>
								<div className="mb-4">
									<ReusableFormLabel
										placeholder="Last Name"
										id="lname"
									/>
									<ReusableFormInput
										name="lname"
										type="text"
										onChange={handleChange}
										value={formData.lname}
									/>
								</div>
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
								<div className="mb-4">
									<ReusableFormLabel
										placeholder="confirmPassword"
										id="confirmPassword"
									/>
									<ReusableFormInput
										name="confirmPassword"
										type="password"
										onChange={handleChange}
										value={formData.confirmPassword}
									/>
								</div>

								<button
									type="submit"
									className="w-full py-2 bg-primary text-white rounded-md hover:bg-blue-600"
								>
									{loading
										? 'Registering'
										: 'Register'}
								</button>
							</form>

							<div className="mt-6 text-center">
								<p className="text-sm">
									Already have an account?{' '}
									<Link
										to="/login"
										className="text-primary hover:underline"
									>
										Login now
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

export default RegistrationPage;
