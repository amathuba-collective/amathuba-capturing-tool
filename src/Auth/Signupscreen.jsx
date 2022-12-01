import React from "react";
import SignInImage from "../Assets/Welcome 1.png";
import "../Styles/Signupscreen.css";
import { Link } from "react-router-dom";

export default function Signupscreen() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='leftSide2 col-6'>
					<div className='d-flex justify-content-center mt-5'>
						<img
							src={SignInImage}
							alt='loginImage'
							className='signInImg mt-5'
						/>
					</div>
				</div>
				<div className='rightSide2 col-6 d-flex justify-content-center'>
					<div className='form-container w-75 '>
						<form className='row g-3 mt-5 text-start'>
							<h1 className='signUpTitle'>Sign up</h1>
							<div className='col-12 mt-5'>
								<label className='form-label fw-semibold fs-5'>
									Work Email
								</label>
								<input
									type='email'
									className='form-control border border-1 border-secondary p-3'
									id='inputAddress'
									placeholder='Email'
									required
								/>
							</div>

							<div className='col-md-6'>
								<label
									for='inputEmail4'
									className='form-label fw-semibold fs-5'>
									First Name
								</label>
								<input
									type='text'
									className='form-control border border-1 border-secondary p-3'
									id='inputEmail4'
									placeholder='Name'
									required
								/>
							</div>
							<div className='col-md-6'>
								<label
									for='inputPassword4'
									className='form-label fw-semibold fs-5'>
									Last Name
								</label>
								<input
									type='text'
									className='form-control border border-1 border-secondary p-3'
									id='inputPassword4'
									placeholder='Surname'
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
									className='form-control border border-1 border-secondary p-3'
									id='inputAddress2'
									placeholder='Password'
									required
								/>
							</div>
							{/*  */}
							<div className='col-12'>
								<div className='form-check'>
									<input
										className='form-check-input border border-1 border-secondary'
										type='checkbox'
										id='gridCheck'
									/>
									<label className='form-check-label' for='gridCheck'>
										Remember me
									</label>
								</div>
							</div>
							<div className='col-12'>
								<p className='fs-5 text'>
									By singning in, you agree to the{" "}
									<span className='links'>terms an conditions</span>
								</p>
							</div>
							<div className='col-12 d-grid'>
								<button type='submit' className='signupBtn btn fs-4 p-3'>
									Sign up
								</button>
							</div>
							<div className='col-12'>
								<p className='fs-5 text'>
									Already have an account ?
									<Link to='Loginscreen' className='links'>
										Log in
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
