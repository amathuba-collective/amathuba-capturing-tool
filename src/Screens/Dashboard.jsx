import React from "react";
import { Grid, Avatar, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../Assets/AgentProfile.png";
import YouthImage from "../Assets/21-211191_demo-founder-anonymous-png-transparent-png.png";
import "../Styles/Dashboard.css";

export default function Dashboard() {
	const navigate = useNavigate();
	function openWellBiengForm(e) {
		e.preventDefault();
		navigate("/WellnessForm");
	}

	function onLogOut() {
		navigate("/Loginscreen");
	}
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='leftDashboard col-3'>
					<button
						className='border border-1 border-secondary rounded mt-1 bg-secondary text-light'
						onClick={onLogOut}>
						Log out
					</button>
					<Grid.Container className='d-flex justify-content-center align-items-center'>
						<Grid className='d-flex flex-column align-items-center'>
							<Avatar
								src={ProfileImage}
								css={{ size: "8rem" }}
								className='mt-4'
								bordered
								color='primary'
							/>
							<Text className='mt-2 mb-1 fw-bold fs-3'>Inathi Surname</Text>
							<Text className='mb-2 fw-semibold fs-4'>Call Center Agent</Text>
							<Text className='fw-bold fs-5' color='primary' size='$md'>
								Amathuba Collective
							</Text>
						</Grid>
					</Grid.Container>
					<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
				</div>
				<div className='rightDashboard col-9 d-flex justify-content-evenly'>
					<div className='row mt-5'>
						{/*  */}
						<div className='col-sm-3 mb-5'>
							<div class='card text-center'>
								<img
									src={YouthImage}
									class='card-img-top d-flex align-items-center'
									alt='...'
								/>
								<div class='card-body'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
										Ronnnie Hand
									</h5>
									<p class='card-text fw-semibold fs-4'>18/10/2022</p>
									<p class='card-text fw-bold fs-5 text-primary'>Well-being</p>
									<div className='d-grid'>
										<button
											href='/#'
											class='callBtn fs-5 rounded border border-1 border-transparent p-1'
											onClick={openWellBiengForm}>
											Call
										</button>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
						{/*  */}
						<div className='col-sm-3 mb-5'>
							<div class='card text-center'>
								<img
									src={YouthImage}
									class='card-img-top d-flex align-items-center'
									alt='...'
								/>
								<div class='card-body'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
										Ronnnie Hand
									</h5>
									<p class='card-text fw-semibold fs-4'>18/10/2022</p>
									<p class='card-text fw-bold fs-5 text-primary'>Well-being</p>
									<div className='d-grid'>
										<button
											href='/#'
											class='callBtn fs-5 rounded border border-1 border-transparent p-1'
											onClick={openWellBiengForm}>
											Call
										</button>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
						{/*  */}
						<div className='col-sm-3 mb-5'>
							<div class='card text-center'>
								<img
									src={YouthImage}
									class='card-img-top d-flex align-items-center'
									alt='...'
								/>
								<div class='card-body'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
										Ronnnie Hand
									</h5>
									<p class='card-text fw-semibold fs-4'>18/10/2022</p>
									<p class='card-text fw-bold fs-5 text-primary'>Well-being</p>
									<div className='d-grid'>
										<button
											href='/#'
											class='callBtn fs-5 rounded border border-1 border-transparent p-1'
											onClick={openWellBiengForm}>
											Call
										</button>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
						{/*  */}
						<div className='col-sm-3 mb-5'>
							<div class='card text-center'>
								<img
									src={YouthImage}
									class='card-img-top d-flex align-items-center'
									alt='...'
								/>
								<div class='card-body'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
										Ronnnie Hand
									</h5>
									<p class='card-text fw-semibold fs-4'>18/10/2022</p>
									<p class='card-text fw-bold fs-5 text-primary'>Well-being</p>
									<div className='d-grid'>
										<button
											href='/#'
											class='callBtn fs-5 rounded border border-1 border-transparent p-1'
											onClick={openWellBiengForm}>
											Call
										</button>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
					</div>
				</div>
			</div>
		</div>
	);
}
