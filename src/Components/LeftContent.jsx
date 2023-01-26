import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";
// import ProfileImage from "../Assets/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png";
import "../Styles/LeftContent.css";

export default function LeftContent(props) {
	const youth = props.youth;
	return (
		<div className='leftContent container'>
			{youth && (
				<Grid.Container className='d-flex justify-content-center align-items-center'>
					<Grid className='d-flex flex-column align-items-center'>
						<Avatar
							src={youth.imgUrl}
							css={{ size: "7rem" }}
							className='mt-4'
							bordered
						/>
						<Text className='mt-2 mb-1 fw-bold fs-3'>{youth.fullName}</Text>
						<Text className='mb-2 fw-semibold fs-4'>{youth.callDate}</Text>
						<Text className='fw-bold fs-5' color='primary' size='$md'>
							{youth.callType}
						</Text>
					</Grid>
				</Grid.Container>
			)}

			<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />

			<div className='summaryData d-flex flex-column justify-content-start align-items-start'>
				<div>
					<div className='summaryData d-flex flex-column justify-content-start align-items-start'>
						<div>
							<div className='fw-semilight fs-5'>
								<div>
									<div className='fs-2 fw-semibold'>
										{props.redOpeningQuestion1 ? (
											<div>
												<h4 className='fw-bold fs-4'>Opening Question</h4>
												<p className='fs-5 fw-normal'>
													{props.redOpeningQuestion1}
												</p>
											</div>
										) : props.redOpeningQuestion2 ? (
											<div>
												<h4 className='fw-bold fs-4'>Opening Question</h4>
												<p className='fs-5 fw-normal'>
													{props.redOpeningQuestion2}
												</p>
											</div>
										) : props.blueOpeningQuestion1 ? (
											<div>
												<h4 className='fw-bold fs-4'>Opening Question</h4>
												<p className='fs-5 fw-normal'>
													{props.blueOpeningQuestion1}
												</p>
											</div>
										) : props.blueOpeningQuestion2 ? (
											<div>
												<h4 className='fw-bold fs-4'>Opening Question</h4>
												<p className='fs-5 fw-normal'>
													{props.blueOpeningQuestion2}
												</p>
											</div>
										) : null}
									</div>
									<div className='d-flex flex-column'>
										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture1 ? (
													<p className='fs-5'>{props.keyAnswerCapture1}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture2 ? (
													<p className='fs-5'>{props.keyAnswerCapture2}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture3 ? (
													<p className='fs-5'>{props.keyAnswerCapture3}</p>
												) : null}
											</p>
										</div>

										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture4 ? (
													<p className='fs-5'>{props.keyAnswerCapture4}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture5 ? (
													<p className='fs-5'>{props.keyAnswerCapture5}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture6 ? (
													<p className='fs-5'>{props.keyAnswerCapture6}</p>
												) : null}
											</p>
										</div>

										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture7 ? (
													<p className='fs-5'>{props.keyAnswerCapture7}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture8 ? (
													<p className='fs-5'>{props.keyAnswerCapture8}</p>
												) : null}
											</p>
										</div>

										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture9 ? (
													<p className='fs-5'>{props.keyAnswerCapture9}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture10 ? (
													<p className='fs-5'>{props.keyAnswerCapture10}</p>
												) : null}
											</p>
										</div>

										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture11 ? (
													<p className='fs-5'>{props.keyAnswerCapture11}</p>
												) : null}
											</p>
											<p>
												{props.keyAnswerCapture12 ? (
													<p className='fs-5'>{props.keyAnswerCapture12}</p>
												) : null}
											</p>
										</div>

										<div className='d-flex justify-content-between'>
											<p>
												{props.keyAnswerCapture13 ? (
													<p className='fs-5'>{props.keyAnswerCapture13}</p>
												) : null}
											</p>
											{/* text input answer below */}
											<p>
												{props.inputArr.map((keyAnswer, ind) => {
													return (
														<div key={ind}>
															<p>{keyAnswer}</p>
														</div>
													);
												})}
											</p>
											{/* text input answer above */}
											<p>
												{props.keyAnswerCapture14 ? (
													<p className='fs-5'>{props.keyAnswerCapture14}</p>
												) : null}
											</p>
										</div>
									</div>
								</div>
								{/* {props.printOtherOpeningQuestion ? (
									<div>
										<h4>Opening Question</h4>
										<p>{props.otherOpeningQuestion}</p>
									</div>
								) : null} */}
							</div>
							{/* summary column divider */}
							<hr className='w-100 ng-secondary border border-1 border-secondary ' />
						</div>
						<div>
							<p className='fw-semilight fs-3 '>
								{props.emotion ? (
									<div>
										<h4 className='fw-bold fs-4'>Emotion of Call</h4>
										<p className='fs-5'>{props.emotion}</p>
										{/* summary column divider */}
										<hr className='w-100 ng-secondary border border-1 border-secondary ' />
									</div>
								) : null}
							</p>
						</div>
						<div>
							<div className='fw-semilight fs-3 mt-4'>
								{props.redPossibleResponses ? (
									<div>
										<h4 className='fw-bold fs-4'>Possible Response</h4>
										<p className='fs-5 fw-semibold'>
											{props.redPossibleResponses}
										</p>

										{/* summary column divider */}
										<hr className='w-100 ng-secondary border border-1 border-secondary ' />
									</div>
								) : props.bluePossibleResponses ? (
									<div>
										<h4 className='fw-bold fs-4'>Possible Response</h4>
										<p className='fs-5 fw-semibold'>
											{props.bluePossibleResponses}
										</p>

										{/* summary column divider */}
										<hr className='w-100 ng-secondary border border-1 border-secondary ' />
									</div>
								) : null}
							</div>
							<div className='fw-semilight fs-3 mt-4'>
								{props.redFollowUpQuestions ? (
									<div>
										<h4 className='fw-bold fs-4'>Follow-up Question</h4>
										<p className='fs-5 fw-semibold'>
											{props.redFollowUpQuestions}
										</p>

										<div className='d-flex flex-column'>
											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture1 ? (
														<p className='fs-5'>{props.keyAnswerCapture1}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture2 ? (
														<p className='fs-5'>{props.keyAnswerCapture2}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture3 ? (
														<p className='fs-5'>{props.keyAnswerCapture3}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture4 ? (
														<p className='fs-5'>{props.keyAnswerCapture4}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture5 ? (
														<p className='fs-5'>{props.keyAnswerCapture5}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture6 ? (
														<p className='fs-5'>{props.keyAnswerCapture6}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture7 ? (
														<p className='fs-5'>{props.keyAnswerCapture7}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture8 ? (
														<p className='fs-5'>{props.keyAnswerCapture8}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture9 ? (
														<p className='fs-5'>{props.keyAnswerCapture9}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture10 ? (
														<p className='fs-5'>{props.keyAnswerCapture10}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture11 ? (
														<p className='fs-5'>{props.keyAnswerCapture11}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture12 ? (
														<p className='fs-5'>{props.keyAnswerCapture12}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture13 ? (
														<p className='fs-5'>{props.keyAnswerCapture13}</p>
													) : null}
												</p>
												{/* text input answer below */}
												<p>
													{props.inputArr.map((keyAnswer, ind) => {
														return (
															<div key={ind}>
																<p>{keyAnswer}</p>
															</div>
														);
													})}
												</p>
												{/* text input answer above */}
												<p>
													{props.keyAnswerCapture14 ? (
														<div>
															<p className='fs-5'>{props.keyAnswerCapture14}</p>
														</div>
													) : null}
												</p>
											</div>
										</div>

										{/* summary column divider */}
										<hr className='w-100 ng-secondary border border-1 border-secondary ' />
									</div>
								) : props.blueFollowUpQuestions ? (
									<div>
										<h4 className='fw-bold fs-4'>Follow-up Question</h4>
										<p className='fs-5 fw-semibold'>
											{props.blueFollowUpQuestions}
										</p>
										<div className='d-flex flex-column'>
											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture1 ? (
														<p className='fs-5'>{props.keyAnswerCapture1}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture2 ? (
														<p className='fs-5'>{props.keyAnswerCapture2}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture3 ? (
														<p className='fs-5'>{props.keyAnswerCapture3}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture4 ? (
														<p className='fs-5'>{props.keyAnswerCapture4}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture5 ? (
														<p className='fs-5'>{props.keyAnswerCapture5}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture6 ? (
														<p className='fs-5'>{props.keyAnswerCapture6}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture7 ? (
														<p className='fs-5'>{props.keyAnswerCapture7}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture8 ? (
														<p className='fs-5'>{props.keyAnswerCapture8}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture9 ? (
														<p className='fs-5'>{props.keyAnswerCapture9}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture10 ? (
														<p className='fs-5'>{props.keyAnswerCapture10}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture11 ? (
														<p className='fs-5'>{props.keyAnswerCapture11}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture12 ? (
														<p className='fs-5'>{props.keyAnswerCapture12}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture13 ? (
														<p className='fs-5'>{props.keyAnswerCapture13}</p>
													) : null}
												</p>
												{/* text input answer below */}
												<p>
													{props.inputArr.map((keyAnswer, ind) => {
														return (
															<div key={ind}>
																<p>{keyAnswer}</p>
															</div>
														);
													})}
												</p>
												{/* text input answer above */}
												<p>
													{props.keyAnswerCapture14 ? (
														<p className='fs-5'>{props.keyAnswerCapture14}</p>
													) : null}
												</p>
											</div>
										</div>

										{/* summary column divider */}
										<hr className='w-100 bg-secondary border border-2 border-secondary rounded' />
									</div>
								) : null}
							</div>
							<div>
								{props.redPromptQuestions ? (
									<div>
										<h4 className='fw-bold fs-4'>Prompt Question</h4>
										<p className='fs-5'>{props.redPromptQuestions}</p>
										<div className='d-flex flex-column'>
											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture1 ? (
														<p className='fs-5'>{props.keyAnswerCapture1}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture2 ? (
														<p className='fs-5'>{props.keyAnswerCapture2}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture3 ? (
														<p className='fs-5'>{props.keyAnswerCapture3}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture4 ? (
														<p className='fs-5'>{props.keyAnswerCapture4}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture5 ? (
														<p className='fs-5'>{props.keyAnswerCapture5}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture6 ? (
														<p className='fs-5'>{props.keyAnswerCapture6}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture7 ? (
														<p className='fs-5'>{props.keyAnswerCapture7}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture8 ? (
														<p className='fs-5'>{props.keyAnswerCapture8}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture9 ? (
														<p className='fs-5'>{props.keyAnswerCapture9}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture10 ? (
														<p className='fs-5'>{props.keyAnswerCapture10}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture11 ? (
														<p className='fs-5'>{props.keyAnswerCapture11}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture12 ? (
														<p className='fs-5'>{props.keyAnswerCapture12}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture13 ? (
														<p className='fs-5'>{props.keyAnswerCapture13}</p>
													) : null}
												</p>
												{/* text input answer below */}
												<p>
													{props.inputArr.map((keyAnswer, ind) => {
														return (
															<div key={ind}>
																<p>{keyAnswer}</p>
															</div>
														);
													})}
												</p>
												{/* text input answer above */}
												<p>
													{props.keyAnswerCapture14 ? (
														<p className='fs-5'>{props.keyAnswerCapture14}</p>
													) : null}
												</p>
											</div>
										</div>

										{/* summary column divider */}
										<hr className='w-100 bg-dark border border-3 border-dark rounded' />
									</div>
								) : props.bluePromptQuestions ? (
									<div>
										<h4 className='fw-bold fs-4'>Prompt Question</h4>
										<p className='fs-5'>{props.bluePromptQuestions}</p>
										<div className='d-flex flex-column'>
											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture1 ? (
														<p className='fs-5'>{props.keyAnswerCapture1}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture2 ? (
														<p className='fs-5'>{props.keyAnswerCapture2}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture3 ? (
														<p className='fs-5'>{props.keyAnswerCapture3}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture4 ? (
														<p className='fs-5'>{props.keyAnswerCapture4}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture5 ? (
														<p className='fs-5'>{props.keyAnswerCapture5}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture6 ? (
														<p className='fs-5'>{props.keyAnswerCapture6}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture7 ? (
														<p className='fs-5'>{props.keyAnswerCapture7}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture8 ? (
														<p className='fs-5'>{props.keyAnswerCapture8}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture9 ? (
														<p className='fs-5'>{props.keyAnswerCapture9}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture10 ? (
														<p className='fs-5'>{props.keyAnswerCapture10}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture11 ? (
														<p className='fs-5'>{props.keyAnswerCapture11}</p>
													) : null}
												</p>
												<p>
													{props.keyAnswerCapture12 ? (
														<p className='fs-5'>{props.keyAnswerCapture12}</p>
													) : null}
												</p>
											</div>

											<div className='d-flex justify-content-between'>
												<p>
													{props.keyAnswerCapture13 ? (
														<p className='fs-5'>{props.keyAnswerCapture13}</p>
													) : null}
												</p>
												{/* text input answer below */}
												<p>
													{props.inputArr.map((keyAnswer, ind) => {
														return (
															<div key={ind}>
																<p>{keyAnswer}</p>
															</div>
														);
													})}
												</p>
												{/* text input answer above */}
												<p>
													{props.keyAnswerCapture14 ? (
														<p className='fs-5'>{props.keyAnswerCapture14}</p>
													) : null}
												</p>
											</div>
										</div>

										{/* summary column divider */}
										<hr className='w-100 bg-dark border border-1 border-dark ' />
									</div>
								) : null}
							</div>

							{/* <p className='agentReflection fw-semilight fs-4 mt-2'>
								{props.value ? (
									<div>
										<h4>New appointment</h4>
										<p className='fs-5'> {props.value.toDateString()} </p>
									</div>
								) : null}
							</p> */}
						</div>
					</div>

					<div className='agentReflection fw-semilight fs-4 mt-4'>
						<div>
							<p className='fs-2 fw-semibold'>
								{props.youthQuestion1 ? (
									<div>
										<h4 className='fw-bold fs-4'>Youth Reflection Question</h4>
										<p className='fs-5 fw-normal'>{props.youthQuestion1}</p>
										<p>
											{props.youthInputArr.map((youthAnswer, ind) => {
												return (
													<div key={ind}>
														<p className='fs-5'>{youthAnswer.youthOQ}</p>
													</div>
												);
											})}
										</p>
									</div>
								) : null}
							</p>
						</div>
						<div>
							<p className='fs-2 fw-semibold'>
								{props.youthQuestion2 ? (
									<div>
										<h4 className='fw-bold fs-4'>Youth Reflection Question</h4>
										<p className='fs-5 fw-normal'>{props.youthQuestion2}</p>
										<p>
											{props.youthInputArr.map((youthAnswer, ind) => {
												return (
													<div key={ind}>
														<p className='fs-5'>{youthAnswer.youthOQ}</p>
													</div>
												);
											})}
										</p>
									</div>
								) : null}
							</p>
						</div>
						<div>
							{props.youthPossibleResponses ? (
								<div>
									<h5 className='fw-semibold fs-4'>Possible Reponse</h5>
									<p className='fs-5'>{props.youthPossibleResponses}</p>

									{/* summary column divider */}
									<hr className='w-100 ng-secondary border border-1 border-secondary ' />
								</div>
							) : null}
						</div>
					</div>
					{/*  */}
					<div>
						{props.youthFollowUpQuestions ? (
							<div>
								<h5 className='fw-semibold fs-4'>Follow-up question</h5>
								<p className='fs-5'>{props.youthFollowUpQuestions}</p>
								<p>
									{props.youthInputArr.map((youthAnswer, ind) => {
										return (
											<div key={ind}>
												<p>{youthAnswer.youthFQ}</p>
											</div>
										);
									})}
								</p>

								{/* summary column divider */}
								<hr className='w-100 ng-secondary border border-1 border-secondary ' />
							</div>
						) : null}
					</div>
					{/*  */}
					<div>
						{props.youthPromptQuestions ? (
							<div>
								<h5 className='fw-semibold fs-4'>Prompt question</h5>
								<p className='fs-5'>{props.youthPromptQuestions}</p>
								<p>
									{props.youthInputArr.map((youthAnswer, ind) => {
										return (
											<div key={ind}>
												<p>{youthAnswer.youthPQ}</p>
											</div>
										);
									})}
								</p>

								{/* summary column divider */}
								<hr className='w-100 ng-secondary border border-1 border-secondary ' />
							</div>
						) : null}
					</div>
				</div>
				<div>
					<p className='agentReflection fw-semilight fs-5 mt-4'>
						{props.agentQuestions ? (
							<div>
								<h4 className='fw-semibold'>Agent Reflection Question</h4>
								<p>{props.agentQuestions}</p>
								<p>
									{props.agentDataArr.map((agentAnswer, ind) => {
										return (
											<div key={ind}>
												<p className='fs-5'>{agentAnswer.agentOQ}</p>
											</div>
										);
									})}
								</p>
							</div>
						) : null}
						<div>
							{props.printAgentData ? (
								<div>
									<div>
										<h5>Agent Reflection</h5>
										<p className='fs-5'>{props.agentData}</p>
									</div>

									{/* summary column divider */}
									<hr className='w-100 ng-secondary border border-1 border-secondary ' />
								</div>
							) : null}
						</div>
					</p>
				</div>
				<p className='agentReflection fw-semilight fs-4 mt-2'>
					{props.value ? (
						<div>
							<h4>New appointment</h4>
							<p className='fs-5'> {props.value.toDateString()} </p>
						</div>
					) : null}
				</p>
			</div>
		</div>
	);
}
