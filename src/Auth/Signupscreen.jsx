import React, { useState } from "react";
import SignInImage from "../Assets/Welcome 1.png";
import { useNavigate } from "react-router-dom";
import "../Styles/Signupscreen.css";
import { Link } from "react-router-dom";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";

export default function Signupscreen() {
	const [workEmail, setWorkEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

	// const [age, setAge] = React.useState("");

	// const handleChange = (event) => {
	// 	setAge(event.target.value);
	// };
	const signupform = [workEmail, firstName, lastName, password, password2];

	const navigate = useNavigate();

	function getSignedIn(e) {
		e.preventDefault();
		if (password !== password2) {
			alert("Passwords do not match");
		} else {
			navigate("/Loginscreen");
			console.log(signupform);
		}
	}
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
						<form className='row g-3 mt-5 text-start' onSubmit={getSignedIn}>
							<h1 className='signUpTitle'>Sign up</h1>
							<div className='col-12 mt-5'>
								<label className='form-label fw-semibold fs-5'>
									Work Email
								</label>
								<input
									type='email'
									value={workEmail}
									onChange={(e) => setWorkEmail(e.target.value)}
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
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
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
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
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
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='form-control border border-1 border-secondary p-3'
									id='inputAddress2'
									placeholder='Password'
									required
								/>
							</div>
							<div className='col-12'>
								<label
									for='inputAddress2'
									className='form-label fw-semibold fs-5'>
									Confirm Password
								</label>
								<input
									type='password'
									value={password2}
									onChange={(e) => setPassword2(e.target.value)}
									className='form-control border border-1 border-secondary p-3'
									id='inputAddress2'
									placeholder='Password'
									required
								/>
							</div>
							{/*  */}
							{/* <InputLabel id='demo-simple-select-standard-label'>
								Job role ?
							</InputLabel>
							<Select
								labelId='demo-simple-select-standard-label'
								id='demo-simple-select-standard'
								value={age}
								onChange={handleChange}
								label='Age'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Super Agent</MenuItem>
								<MenuItem value={20}>Quality assurance</MenuItem>
								<MenuItem value={30}>Agent</MenuItem>
							</Select> */}
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
