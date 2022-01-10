import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const [emailFocus, setEmailFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const handleEmailFocus = () => setEmailFocus(true);
	const handleEmailBlur = () => setEmailFocus(false);
	const handlePasswordFocus = () => setPasswordFocus(true);
	const handlePasswordBlur = () => setPasswordFocus(false);

	const onChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="sign-in">
			<div className="container">
				<h2>Introduce your Credentials</h2>
				<form className="form" autoComplete="off" onSubmit={onSubmit}>
					<div
						value={email}
						onChange={onChange}
						className={`form-section ${
							emailFocus || email !== '' ? 'active' : ''
						}`}
						onFocus={(e) => handleEmailFocus(e)}
						onBlur={(e) => handleEmailBlur(e)}
					>
						<input type="Email" id="email" className="form-control" />
						<label htmlFor="email" className="form-label">
							Email
						</label>
					</div>

					<div
						value={password}
						onChange={onChange}
						className={`form-section ${
							passwordFocus || password !== '' ? 'active' : ''
						}`}
						onFocus={(e) => handlePasswordFocus(e)}
						onBlur={(e) => handlePasswordBlur(e)}
					>
						<input type="password" id="password" className="form-control" />
						<label htmlFor="password" className="form-label">
							Password
						</label>
					</div>

					<input type="submit" className="btn-md" value="Login"></input>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
