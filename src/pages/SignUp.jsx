import { useState } from 'react';

function SignUp() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const { firstName, lastName, email, password } = formData;

	const [firstNameFocus, setFirstNameFocus] = useState(false);
	const [lastNameFocus, setLastNameFocus] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const handleFirstNameFocus = () => setFirstNameFocus(true);
	const handleFirstNameBlur = () => setFirstNameFocus(false);
	const handleLastNameFocus = () => setLastNameFocus(true);
	const handleLastNameBlur = () => setLastNameFocus(false);
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
		<div className="sign-up">
			<div className="container">
				<h2>Create your Account</h2>
				<form className="form" autoComplete="off" onSubmit={onSubmit}>
					<div
						className={`form-section ${
							firstNameFocus || firstName !== '' ? 'active' : ''
						}`}
						value={firstName}
						onChange={onChange}
						onFocus={(e) => handleFirstNameFocus(e)}
						onBlur={(e) => handleFirstNameBlur(e)}
					>
						<input type="text" id="firstName" className="form-control" />
						<label htmlFor="firstName" className="form-label current">
							First Name
						</label>
					</div>

					<div
						value={lastName}
						onChange={onChange}
						className={`form-section ${
							lastNameFocus || lastName !== '' ? 'active' : ''
						}`}
						onFocus={(e) => handleLastNameFocus(e)}
						onBlur={(e) => handleLastNameBlur(e)}
					>
						<input type="text" id="lastName" className="form-control" />
						<label htmlFor="lastName" className="form-label">
							Last Name
						</label>
					</div>

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
					<div className="options">
						<input
							type="checkbox"
							name="terms"
							id="terms"
							className="checkbox"
						/>
						<label htmlFor="terms">
							I agree to the terms and conditions of the Victoria Miles
							programme and privacy policy.
						</label>
					</div>
					<input type="submit" className="btn-md" value="Continue"></input>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
