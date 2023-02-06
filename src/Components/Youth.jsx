import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Youth.css";

const Youth = (props) => {
	const youth = props.youth;
	return (
		<div>
			<div className='row mt-5 mb-5 d-flex'>
				{youth.map((eachYouth) => {
					return (
						<div className='col-3 mb-5 ' key={eachYouth._id.toString()}>
							<div className='cutOff-text card mb-5'>
								<img src={eachYouth.imgUrl || require('./../Assets/AgentProfile.png')} class='card-img-top' alt='...' />
								<div className='card-body youthCard cutOff-text'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-4 text-wrap'>
										{eachYouth.fullName}
									</h5>
									<p className='card-text fw-normal fs-4'>
										{eachYouth.firstName}
									</p>
									<p className='card-text fw-bold fs-5 callTypeColor'>
										{eachYouth.lastName}
									</p>
									<div className='d-grid'>
										<Link to={`/YouthProfile/${eachYouth._id.toString()}`}>
											<button class='callBtn fs-5 rounded border border-1 border-transparent p-1'>
												View Profile
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Youth;
