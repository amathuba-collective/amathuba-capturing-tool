import React from "react";
import "../Styles/WelcomeScreen.css";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
	const navigate = useNavigate();
	function getStarted() {
		navigate("/Dashboard");
	}
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='leftWelcomeScreen col-9 d-flex align-items-center'>
					<div className='LeftText'>
						<p className='fs-1 fw-semibold'>
							Welcome Tristan 👋
							<br />
							Go and change the world !<br />
							And Dont forget to have fun
						</p>
						<div className='d-grid w-50 mt-4'>
							<button className='welcomeBtn btn fs-5 p-2' onClick={getStarted}>
								Lets go
							</button>
						</div>
					</div>
				</div>
				<div className='rightWelcomeScreen col-3'>asdas</div>
			</div>
		</div>
	);
}
