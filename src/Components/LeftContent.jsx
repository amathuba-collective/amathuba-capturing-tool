import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";
import ProfileImage from "../Assets/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png";
import "../Styles/LeftContent.css";

export default function LeftContent(props) {
	const renderOpeningQuestion = () => {
		let question;
		props.openingQuestion === "redOpeningQuestions"
			? (question = <div>red questions</div>)
			: (question = "");
		return question;
	};
	return (
		<div className='leftContent container'>
			<Grid.Container className='d-flex justify-content-center align-items-center'>
				<Grid className='d-flex flex-column align-items-center'>
					<Avatar
						src={ProfileImage}
						css={{ size: "7rem" }}
						className='mt-4'
						bordered
					/>
					<Text className='mt-2 mb-1 fw-bold fs-3'>Ronnnie Hand</Text>
					<Text className='mb-2 fw-semibold fs-4'>18/10/2022</Text>
					<Text className='fw-bold fs-5' color='primary' size='$md'>
						Well-being
					</Text>
				</Grid>
			</Grid.Container>
			<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />

			<div className='summaryData d-flex flex-column justify-content-start align-items-start'>
				<div>
					<p className='fw-semilight fs-5'>
						{/* {props.openingQuestion === "redOpeningQuestions" ? (
							<div>
								<h4>Opening Question</h4>
								<p className='fs-5'>{props.openingQuestion}</p>
								<div>
									<div className='d-flex justify-content-between'>
										<p>
											{props.happyAnswersCapture1 ? (
												<div>
													<p className='fs-5'>{props.happyAnswersCapture1}</p>
													<p>Red Questions</p>
												</div>
											) : null}
										</p>
										<p>
											{props.happyAnswersCapture2 ? (
												<div>
													<p className='fs-5'>{props.happyAnswersCapture2}</p>
												</div>
											) : null}
										</p>
									</div>
									<div className='d-flex justify-content-between'>
										<p>
											{props.happyAnswersCapture3 ? (
												<div>
													<p className='fs-5'>{props.happyAnswersCapture3}</p>
												</div>
											) : null}
										</p>
										<p>
											{props.happyAnswersCapture4 ? (
												<div>
													<p className='fs-5'>{props.happyAnswersCapture4}</p>
												</div>
											) : null}
										</p>
									</div>
								</div>
							</div>
						) : null}
						{props.printOtherOpeningQuestion ? (
							<div>
								<h4>Opening Question</h4>
								<p>{props.otherOpeningQuestion}</p>
							</div>
						) : null} */}
						{renderOpeningQuestion()}
					</p>
				</div>
				<div>
					<p className='fw-semilight fs-3 mt-2'>
						{props.emotion ? (
							<div>
								<h4>Emotion of Call</h4>
								<p className='fs-5'>{props.emotion}</p>
							</div>
						) : null}
					</p>
				</div>
				<div>
					<p className='fw-semilight fs-3 mt-2'>
						{props.openingEmotionQuestion ? <div>hello</div> : null}{" "}
					</p>

					<div className='agentReflection fw-semilight fs-4 mt-4'>
						{props.youthQuestions ? (
							<div>
								<h4>{props.youthQuestions}</h4>

								{props.printYouthData ? (
									<div className='mt-2'>
										<h5>Youth Reflection</h5>
										<p className='fs-5'>{props.youthData}</p>
									</div>
								) : null}
							</div>
						) : null}
					</div>
					<div>
						<p className='agentReflection fw-semilight fs-4 mt-3'>
							{props.agentQuestions ? (
								<div>
									<h4>{props.agentQuestions}</h4>
									{props.printAgentData ? (
										<div>
											<h5>Agent Reflection</h5>
											<p className='fs-5'>{props.agentData}</p>
										</div>
									) : null}
								</div>
							) : null}
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
		</div>
	);
}
