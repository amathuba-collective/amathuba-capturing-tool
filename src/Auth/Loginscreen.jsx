import React, { useState } from "react";
import LoginImage from "../Assets/Chat 1.png";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Loginscreen.css";

export default function Loginscreen() {
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = loginFormData;

	const onInputChange = (e) => {
		setLoginFormData({
			...loginFormData,
			[e.target.name]: e.target.value,
		});
	};

	const navigate = useNavigate();

	function onLogin(e) {
		e.preventDefault();
		navigate("/WelcomeScreen");
		alert(JSON.stringify(loginFormData));
	}
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='leftSide col-6'>
					<div className='formContainer2 w-75 '>
						<form className='row g-3 mt-5 text-start' onSubmit={onLogin}>
							<h1 className='loginTitle'>Login</h1>
							<div className='col-12 mt-5'>
								<label className='form-label fw-semibold fs-5'>
									Work Email
								</label>
								<input
									type='email'
									name='email'
									value={email}
									onChange={onInputChange}
									className='form-control border border-1 border-secondary p-3'
									placeholder='Email'
									required
								/>
							</div>

							<div className='col-12'>
								<label
									for='inputAddress2'
									className='form-label fw-semibold fs-5'>
									Password
								</label>
								<input
									type='password'
									name='password'
									value={password}
									onChange={onInputChange}
									className='form-control border border-1 border-secondary p-3'
									placeholder='Password'
									required
								/>
							</div>
							{/*  */}

							<div className='col-12 d-grid mt-4'>
								<button type='submit' className='loginBtn  fs-4 p-3'>
									Login
								</button>
							</div>
							<div className='col-12'>
								<p className='fs-5 text'>
									Dont have an account ?
									<Link to='/' className='links'>
										Sign up
									</Link>
								</p>
							</div>
							<div className='col-12'>
								<p className='fs-5 text'>
									forgot
									<Link to='#/' className='links'>
										password ?
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
				<div className='rightSide col-6'>
					<div className='d-flex justify-content-center mt-5'>
						<img src={LoginImage} alt='loginImage' className='mt-5 loginImg' />
					</div>
				</div>
			</div>
		</div>
	);
}
