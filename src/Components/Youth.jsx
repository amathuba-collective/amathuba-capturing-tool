import React from "react";
import { Link } from "react-router-dom";

const Youth = (props) => {
	const youth = props.youth;
	return (
		<div>
			<div className='row mt-5 mb-5'>
				{youth.map((eachYouth) => {
					return (
						<div className='col-sm-3 mb-5' key={eachYouth.id}>
							<div className='cutOff-text card text-center'>
								<img
									src={eachYouth.imgUrl}
									class='card-img-top d-flex align-items-center'
									alt='...'
								/>
								<div className='card-body cutOff-text'>
									<h5 class='card-title mt-2 mb-1 fw-bold fs-3'>
										{eachYouth.fullName}
									</h5>
									<p className='card-text fw-semibold fs-4'>
										{eachYouth.callDate}
									</p>
									<p className='card-text fw-bold fs-5 callTypeColor'>
										{eachYouth.callType}
									</p>
									<div className='d-grid'>
										<Link to={`/YouthProfile/${eachYouth.id}`}>
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
