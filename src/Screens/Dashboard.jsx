import React from "react";
import { Grid, Avatar, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";
// import differentYouth from "../Data/dashBoard.json";
import AgentData from "../Data/agentProfile.json";
import TopNavbar from "../Components/TopNavbar";
import Youth from "../Components/Youth";
import useFetch from "../Hooks/useFetch";

export default function Dashboard() {
	// navigation
	const navigate = useNavigate();
	// function openYouthProfile(e) {
	// 	e.preventDefault();
	// 	navigate("/YouthProfile");
	// }

	const {
		data: youth,
		loading,
		error,
	} = useFetch("http://localhost:8001/Youth");

	function onLogOut() {
		navigate("/Loginscreen");
	}

	//
	return (
		<div className='dashB container-fluid'>
			{/* navbar component inside dashboard */}
			<>
				<TopNavbar onLogOut={onLogOut} />
			</>
			{/* navbar component ends here */}
			<div className='row'>
				{/* left Content of dashboard is agents info */}
				{AgentData.map((agent) => {
					return (
						<div className='leftDashboard col-3' key={agent.id}>
							<Grid.Container className='d-flex justify-content-center align-items-center'>
								<Grid className='d-flex flex-column align-items-center'>
									<Avatar
										src={agent.imgUrl}
										css={{ size: "8rem" }}
										className='mt-4'
										bordered
									/>
									<Text className='mt-2 mb-1 fw-bold fs-3'>
										{agent.agentName}
									</Text>
									<Text className='mb-2 fw-semibold fs-4'>
										{agent.jobDescription}
									</Text>
									<Text className='agentCompany fw-bold fs-5' size='$md'>
										{agent.Company}
									</Text>
								</Grid>
							</Grid.Container>
							<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
						</div>
					);
				})}
				{/* agents left content of dashboard ends here */}

				{/* Youths profiles on dashboard starts here */}
				<div className='rightDashboard col-9 d-flex justify-content-evenly mb-5'>
					<div className='row mb-5'>
						{loading && <div>content is loading....</div>}
						{error}
						{youth && <Youth youth={youth} />}
					</div>
				</div>
				{/* Youths profiles of dashboard ends here */}
			</div>
		</div>
	);
}
