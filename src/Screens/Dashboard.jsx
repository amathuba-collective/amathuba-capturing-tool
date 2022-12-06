import React from "react";
import { Grid, Avatar, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";
import differentYouth from "../Data/dashBoard.json";
import AgentData from "../Data/agentProfile.json";

export default function Dashboard() {
	const navigate = useNavigate();
	function openWellBiengForm(e, youth) {
		e.preventDefault();
		navigate("/WellnessForm");
	}

	function onLogOut() {
		navigate("/Loginscreen");
	}
	return (
		<div className='container-fluid'>
			<div className='row'>
				{AgentData.map((agent) => {
					return (
						<div className='leftDashboard col-3' key={agent.id}>
							<button
								className='border border-1 border-secondary rounded mt-1 bg-secondary text-light'
								onClick={onLogOut}>
								Log out
							</button>
							<Grid.Container className='d-flex justify-content-center align-items-center'>
								<Grid className='d-flex flex-column align-items-center'>
									<Avatar
										src={agent.imgUrl}
										css={{ size: "8rem" }}
										className='mt-4'
										bordered
										color='primary'
									/>
									<Text className='mt-2 mb-1 fw-bold fs-3'>
										{agent.agentName}
									</Text>
									<Text className='mb-2 fw-semibold fs-4'>
										{agent.jobDescription}
									</Text>
									<Text className='fw-bold fs-5' color='primary' size='$md'>
										{agent.Company}
									</Text>
								</Grid>
							</Grid.Container>
							<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
						</div>
					);
				})}

				<div className='rightDashboard col-9 d-flex justify-content-evenly'>
					<div className='row mt-5'>
						{differentYouth.map((youth) => {
							return (
								<div className='col-sm-3 mb-5' key={youth.id}>
									<div class='cutOff-text card text-center'>
										<img
											src={youth.imgUrl}
											class='card-img-top d-flex align-items-center'
											alt='...'
										/>
										<div class='card-body cutOff-text'>
											<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
												{youth.youthName}
											</h5>
											<p class='card-text fw-semibold fs-4'>{youth.callDate}</p>
											<p class='card-text fw-bold fs-5 text-primary'>
												{youth.callType}
											</p>
											<div className='d-grid'>
												<button
													class='callBtn fs-5 rounded border border-1 border-transparent p-1'
													onClick={openWellBiengForm}>
													Call
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
