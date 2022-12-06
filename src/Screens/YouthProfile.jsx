import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Avatar, Text } from "@nextui-org/react";
import YouthProfileImage from "../Assets/demoYouthImage.jpg";
import "../Styles/YouthProfile.css";

export default function YouthProfile() {
	const navigate = useNavigate();
	const openWellBiengForm = (e) => {
		e.preventDefault();
		navigate("/WellnessForm");
	};

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='left col-3'>
					<div className='leftContent d-flex flex-column justify-content-start'>
						<div>
							<p className='m-1'>
								<span>
									<i className='fa-regular fa-user m-2'></i>
								</span>
								Profile
							</p>
						</div>
						<div>
							<p className='m-1'>
								<span>
									<i className='fa-regular fa-folder m-2'></i>
								</span>
								Sessions
							</p>
						</div>
					</div>
				</div>
				<div className='right col-9'>
					<div className='container-fluid'>
						<p className='fs-5 fw-semibold mt-5'>Ronnie Hand</p>
						<Grid.Container className='d-flex'>
							<Grid className='d-flex align-items-center'>
								{/* <Text className='mt-2 mb-1 fw-bold fs-5'>Ronnie Hand</Text> */}
								<Avatar
									src={YouthProfileImage}
									css={{ size: "8rem" }}
									className='mt-4'
									bordered
								/>
								<div className='mt-4 mx-5'>
									<button
										className='wellBeingBtn fs-5'
										onClick={openWellBiengForm}>
										<span>
											<i className='fa-solid fa-phone fs-5'></i>
										</span>{" "}
										Call Friend
									</button>
								</div>
							</Grid>
						</Grid.Container>
						<p className='mt-3 fs-5'>
							Current Status : <span className='text-primary'>Well Bieng</span>
						</p>
						<div className='informationContent'>
							<h3>Basic Information</h3>
							<div className='row'>
								<div className='col-9 bg-secondary'>First & LastName</div>
								<div className='col-9 bg-danger'>Gender</div>
								<div className='col-9 bg-warning'>Code Number</div>
								<div className='col-9 bg-primary'>Phone Number</div>
								<div className='col-9 bg-light'>City</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
