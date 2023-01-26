import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import youthBasicInformation from "../Data/youthBasicInformation.json";
import recentRecords from "../Data/recentRecords.json";
import TopNavbar from "../Components/TopNavbar";
import "../Styles/YouthProfile.css";
import useFetch from "../Hooks/useFetch";

export default function YouthProfile() {
	const [section, setSection] = useState("profile");

	const { id } = useParams();
	const { data: youth, loading } = useFetch(
		"http://localhost:2001/Youth/" + id,
	);

	// const navigate = useNavigate();
	// // const openWellBiengForm = (e) => {
	// // 	e.preventDefault();
	// // 	navigate("/WellnessForm");
	// // };

	const openYouthMenu = (e) => {
		e.preventDefault();
		alert("opens youths further menu");
	};
	return (
		<div className='container-fluid'>
			<>
				<TopNavbar />
			</>
			<div className='row'>
				<div className='left col-3'>
					<div className='leftcontent d-flex flex-column justify-content-start'>
						<div>
							<button
								className='m-1 border-0 bg-transparent fw-semibold'
								onClick={(e) => setSection("profile")}>
								<span>
									<i className='fa-regular fa-user mx-3'></i>
								</span>
								Profile
							</button>
						</div>
						<div>
							<button
								className='m-1 border-0 bg-transparent fw-semibold                                                                                                                                        '
								onClick={(e) => setSection("sessions")}>
								<span>
									<i className='fa-regular fa-folder mx-3'></i>
								</span>
								Sessions
							</button>
						</div>
					</div>
				</div>
				<div className='right col-9'>
					{loading && <div>Content is loading....</div>}
					{section === "profile" && (
						<div className='container-fluid'>
							{youth && (
								<>
									<p className='fs-3 fw-bold mt-5'>{youth.fullName}</p>

									<div className='mt-4'>
										<Link to={`/WellnessForm/${youth.id}`}>
											<button className='wellBeingBtn fs-5'>
												<span>
													<i className='fa-solid fa-phone fs-5'></i>
												</span>{" "}
												Call Friend
											</button>
										</Link>
									</div>

									<div className=' mt-4 fs-5 d-flex align-items-center'>
										<p className='statusTitle opacity-75'>Current Status :</p>
										<span className='alert alert-success mx-3'>
											<span>
												<img
													src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII='
													alt='___'
												/>
											</span>
											Well Being
										</span>
									</div>

									<div className='informationContent mt-4'>
										<h3 className='fs-4'>Basic Information</h3>
										<div className='row'>
											<div className='col-12 w-75'>
												{/*  */}
												<div className='col-12 d-flex align-items-center mb-4 mt-4'>
													<div className='col-5'>
														<div>
															<p className='mt-3 fw-bold'>First & Last Name</p>
														</div>
													</div>
													<div className='col-7 mx-1'>
														<div class='row'>
															<div class='col'>
																<input
																	type='text'
																	class='form-control p-2 bg-light'
																	placeholder={youth.name}
																	disabled
																	readonly
																/>
															</div>
															<div class='col'>
																<input
																	type='text'
																	class='form-control p-2 bg-light'
																	placeholder={youth.surname}
																	disabled
																	readonly
																/>
															</div>
														</div>
													</div>
												</div>

												<div className='col-12 d-flex align-items-center mb-4'>
													<div className='col-5'>
														<p className='mt-3 fw-bold'>Gender</p>
													</div>
													<div className='col-7 mx-1'>
														<div class='col-12'>
															<input
																type='text'
																class='form-control p-2 bg-light'
																placeholder={youth.gender}
																disabled
																readonly
															/>
														</div>
													</div>
												</div>

												<div className='col-12 d-flex align-items-center mb-4'>
													<div className='col-5'>
														<p className='mt-3 fw-bold'>Phone Number</p>
													</div>
													<div className='col-7 mx-1'>
														<div class='col-12'>
															<input
																type='text'
																class='form-control p-2 bg-light'
																placeholder={youth.Cnumber}
																disabled
																readonly
															/>
														</div>
													</div>
												</div>
												{/*  */}
												{/*  */}
												<div className='col-12 d-flex align-items-center mb-4'>
													<div className='col-5'>
														<p className='mt-3 fw-bold'>City</p>
													</div>
													<div className='col-7 mx-1'>
														<div class='col-12'>
															<input
																type='text'
																class='form-control p-2 bg-light'
																id='inputAddress'
																placeholder={youth.city}
																disabled
																readonly
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
					)}

					{section === "sessions" && (
						<div className='container-fluid'>
							<p className='fs-3 fw-bold mt-5'>Ronnie Hand</p>
							<div className='mt-4'>
								<Link to={`/WellnessForm/${youth.id}`}>
									<button className='wellBeingBtn fs-5'>
										<span>
											<i className='fa-solid fa-phone fs-5'></i>
										</span>{" "}
										Call Friend
									</button>
								</Link>
							</div>

							<div className=' mt-4 fs-5 d-flex align-items-center'>
								<p className='statusTitle opacity-75'>Current Status :</p>
								<span className='alert alert-success mx-3'>
									<span>
										<img
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII='
											alt='---'
										/>
									</span>
									Well Being
								</span>
							</div>
							{/* current status section end */}
							<div className='informationContent'>
								<h3 className='fs-4 mt-4'>Recent Records</h3>
								<div className='d-flex justify-content-around'>
									{recentRecords.map((pastRecords) => {
										return (
											<div className='mt-5'>
												{/* row starts */}
												{/* col */}
												<div className='card recordCard'>
													<div className='card-body'>
														<div className='d-flex justify-content-between'>
															<div>
																<h5 className='card-title'>
																	{pastRecords.time}
																</h5>
																<h6 className='card-subtitle mb-2 text-muted'>
																	{pastRecords.date}
																</h6>
															</div>
															<div>
																<button
																	className='border-0 bg-transparent'
																	onClick={openYouthMenu}>
																	<img
																		src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAf0lEQVRIie2Qyw3CMBAFZ+2IZlxToAvgFKRQSmpyM0jmcYklYnFyyG3ntm9H2g84jnM4lnM+SfEJjICAxaxMKaVXlfY4gxRn4Po19CZFgHsN9jgBOP+47NLU3U5Yz9lgRmmibicAS9uQ1GbdzmBWpvWfYxXN3o/tJv9xHMc5iA94q1TJhrSZEwAAAABJRU5ErkJggg=='
																		alt='---'
																	/>
																</button>
															</div>
														</div>
														<div>
															<div className='d-flex justify-content-between mt-4'>
																<p className='card-text'>Opening emotion :</p>
																<p className='card-text fw-bold'>
																	{pastRecords.openingEmotion}
																</p>
															</div>
															<div className='d-flex justify-content-between'>
																<p className='card-text'>Closing emotion :</p>
																<p className='card-text fw-bold'>
																	{pastRecords.closingEmotion}
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
