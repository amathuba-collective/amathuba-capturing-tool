import React, { useState, useEffect } from "react";
import "../Styles/RightContent.css";
// import OpeniningStateQuestions from "../Data/OpeningQuestion";
import RedOpeningQuestions from "../Data/RedQuestions.json";
import BlueOpeningQuestions from "../Data/BlueQuestions.json";
import YouthQuestions from "../Data/YouthQuestions.json";
import StartCallGif from "../Assets/Start Your Call (2).gif";
import AgentReflectionStateQuestions from "../Data/AgentReflectionQuestions.json";

export default function RightContent(props) {
	// const getOtherOpeningQuestion = (e) => {
	// 	props.setOtherOpeningQuestion(e.target.value);
	// };

	const [dropDownActive, setDropDownActive] = useState("");

	function myFunction() {
		setDropDownActive(true);
	}

	// const onYouthReflectionQ1Clicked = () => {
	// 	props.setYouthQuestions(
	// 		YouthReflectionStateQuestions.map((youthReflectionQuestion) => {
	// 			return <p>{youthReflectionQuestion.youthReflectionQuestion1}</p>;
	// 		}),
	// 	);
	// };
	// const onYouthReflectionQ2Clicked = (e) => {
	// 	props.setYouthQuestions(youthReflectionQuestions[1]);
	// };
	// const onYouthReflectionQ3Clicked = (e) => {
	// 	props.setYouthQuestions(youthReflectionQuestions[2]);
	// };
	// const onYouthReflectionQ4Clicked = (e) => {
	// 	props.setYouthQuestions(youthReflectionQuestions[3]);
	// };

	const onAgentReflectionQ1Clicked = (e) => {
		props.setAgentQuestions(
			AgentReflectionStateQuestions.map((agentRSQ) => {
				return <p>{agentRSQ.agentReflectionQuestion1}</p>;
			}),
		);
	};
	const onAgentReflectionQ2Clicked = (e) => {
		props.setAgentQuestions(
			AgentReflectionStateQuestions.map((agentRSQ) => {
				return <p>{agentRSQ.agentReflectionQuestion2}</p>;
			}),
		);
	};
	const onAgentReflectionQ3Clicked = (e) => {
		props.setAgentQuestions(
			AgentReflectionStateQuestions.map((agentRSQ) => {
				return <p>{agentRSQ.agentReflectionQuestion3}</p>;
			}),
		);
	};
	const onAgentReflectionQ4Clicked = (e) => {
		props.setAgentQuestions(
			AgentReflectionStateQuestions.map((agentRSQ) => {
				return <p>{agentRSQ.agentReflectionQuestion4}</p>;
			}),
		);
	};

	// /////////////////////////

	useEffect(() => {
		props.openingQuestion === "redOpeningQuestion1"
			? props.setRedOpeningQuestion1(true)
			: props.setRedOpeningQuestion1(false);
		props.openingQuestion === "redOpeningQuestion2"
			? props.setRedOpeningQuestion2(true)
			: props.setRedOpeningQuestion2(false);
		props.openingQuestion === "blueOpeningQuestion1"
			? props.setBlueOpeningQuestion1(true)
			: props.setBlueOpeningQuestion1(false);
		props.openingQuestion === "blueOpeningQuestion2"
			? props.setBlueOpeningQuestion2(true)
			: props.setBlueOpeningQuestion2(false);
		props.openingQuestion === "youthQuestion1"
			? props.setYouthQuestion1(true)
			: props.setYouthQuestion1(false);
		props.openingQuestion === "youthQuestion2"
			? props.setYouthQuestion2(true)
			: props.setYouthQuestion2(false);
	}, [props.openingQuestion, props]);

	/// dropdown toggle for opening questions

	function toggleDropDown(e) {
		e.preventDefault();
		props.setOpeningQuestion(e.target.value);
		setDropDownActive(false);
		props.setKeyAnswers((keyAnswers) => !keyAnswers);
	}
	function toggleDropDown2(e) {
		e.preventDefault();
		props.setRedOpeningQuestion2(true);
		props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers((keyAnswers) => !keyAnswers);
		setDropDownActive(false);
	}
	function toggleDropDown3(e) {
		e.preventDefault();
		props.setBlueOpeningQuestion1(true);
		props.setOpeningQuestion(e.target.value);
		props.setKeyAnswers((keyAnswers) => !keyAnswers);
		setDropDownActive(false);
	}
	function toggleDropDown4(e) {
		e.preventDefault();
		props.setBlueOpeningQuestion2(true);
		props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers((keyAnswers) => !keyAnswers);
		setDropDownActive(false);
	}
	function toggleDropDown5(e) {
		e.preventDefault();
		props.setYouthQuestion1(true);
		props.setOpeningQuestion(e.target.value);
		setDropDownActive(false);
	}
	function toggleDropDown6(e) {
		e.preventDefault();
		props.setYouthQuestion2(true);
		props.setOpeningQuestion(e.target.value);
		setDropDownActive(false);
	}

	///toggle red dropdown content

	function toggleRedPossibleResponse() {
		props.setRedPossibleResponses(
			RedOpeningQuestions.map((redResponses) => {
				return <p>{redResponses.possibleResponse1}</p>;
			}),
		);
	}
	function toggleRedPossibleResponse2() {
		props.setRedPossibleResponses(
			RedOpeningQuestions.map((redResponses) => {
				return <p>{redResponses.possibleResponse2}</p>;
			}),
		);
	}
	function toggleRedPossibleResponse3() {
		props.setRedPossibleResponses(
			RedOpeningQuestions.map((redResponses) => {
				return <p>{redResponses.possibleResponse3}</p>;
			}),
		);
	}
	function toggleRedPossibleResponse4() {
		props.setRedPossibleResponses(
			RedOpeningQuestions.map((redResponses) => {
				return <p>{redResponses.posibbleResponse4}</p>;
			}),
		);
	}

	function toggleRedFollowUpQuestion1() {
		props.setRedFollowUpQuestions(
			RedOpeningQuestions.map((redFQ) => {
				return <p>{redFQ.followUpQuestion1}</p>;
			}),
		);
	}
	function toggleRedFollowUpQuestion2() {
		props.setRedFollowUpQuestions(
			RedOpeningQuestions.map((redFQ) => {
				return <p>{redFQ.followUpQuestion2}</p>;
			}),
		);
	}

	function toggleRedPromptQuestion1() {
		props.setRedPromptQuestions(
			RedOpeningQuestions.map((redPQ) => {
				return <p>{redPQ.promptQuestion1}</p>;
			}),
		);
	}
	function toggleRedPromptQuestion2() {
		props.setRedPromptQuestions(
			RedOpeningQuestions.map((redPQ) => {
				return <p>{redPQ.promptQuestion2}</p>;
			}),
		);
	}

	///////////// toggle blue dropdown content
	function toggleBluePossibleResponse() {
		props.setBluePossibleResponses(
			BlueOpeningQuestions.map((blueResponses) => {
				return <p>{blueResponses.possibleResponse1}</p>;
			}),
		);
	}
	function toggleBluePossibleResponse2() {
		props.setBluePossibleResponses(
			BlueOpeningQuestions.map((blueResponses) => {
				return <p>{blueResponses.possibleResponse2}</p>;
			}),
		);
	}
	function toggleBluePossibleResponse3() {
		props.setBluePossibleResponses(
			BlueOpeningQuestions.map((blueResponses) => {
				return <p>{blueResponses.possibleResponse3}</p>;
			}),
		);
	}
	/////
	function toggleBluefollowUpQuestion() {
		props.setBlueFollowUpQuestions(
			BlueOpeningQuestions.map((blueFQ) => {
				return <p>{blueFQ.followUpQuestion1}</p>;
			}),
		);
	}
	function toggleBluefollowUpQuestion2() {
		props.setBlueFollowUpQuestions(
			BlueOpeningQuestions.map((blueFQ) => {
				return <p>{blueFQ.followUpQuestion2}</p>;
			}),
		);
	}
	function toggleBluefollowUpQuestion3() {
		props.setBlueFollowUpQuestions(
			BlueOpeningQuestions.map((blueFQ) => {
				return <p>{blueFQ.followUpQuestion3}</p>;
			}),
		);
	}
	/////

	function toggleBluePromptQuestion() {
		props.setBluePromptQuestions(
			BlueOpeningQuestions.map((bluePQ) => {
				return <p>{bluePQ.promptQuestion1}</p>;
			}),
		);
	}
	function toggleBluePromptQuestion2() {
		props.setBluePromptQuestions(
			BlueOpeningQuestions.map((bluePQ) => {
				return <p>{bluePQ.promptQuestion2}</p>;
			}),
		);
	}
	function toggleBluePromptQuestion3() {
		props.setBluePromptQuestions(
			BlueOpeningQuestions.map((bluePQ) => {
				return <p>{bluePQ.promptQuestion3}</p>;
			}),
		);
	}
	function toggleBluePromptQuestion4() {
		props.setBluePromptQuestions(
			BlueOpeningQuestions.map((bluePQ) => {
				return <p>{bluePQ.promptQuestion4}</p>;
			}),
		);
	}
	//////
	/////Toggle Youth Question Contents
	function toggleYouthPossibleResponse() {
		props.setYouthPossibleResponses(
			YouthQuestions.map((youthPR) => {
				return <p>{youthPR.possibleResponses1}</p>;
			}),
		);
	}
	function toggleYouthPossibleResponse2() {
		props.setYouthPossibleResponses(
			YouthQuestions.map((youthPR) => {
				return <p>{youthPR.possibleResponses2}</p>;
			}),
		);
	}
	//////
	function toggleYouthFollowUpQuestion() {
		props.setYouthFollowUpQuestions(
			YouthQuestions.map((youthFQ) => {
				return <p>{youthFQ.followUpQuestion1}</p>;
			}),
		);
	}
	function toggleYouthFollowUpQuestion2() {
		props.setYouthFollowUpQuestions(
			YouthQuestions.map((youthFQ) => {
				return <p>{youthFQ.followUpQuestion2}</p>;
			}),
		);
	}
	//////
	function toggleYouthPromptQuestion() {
		props.setYouthPromptQuestions(
			YouthQuestions.map((youthPQ) => {
				return <p>{youthPQ.promptQuestion1}</p>;
			}),
		);
	}
	function toggleYouthPromptQuestion2() {
		props.setYouthPromptQuestions(
			YouthQuestions.map((youthPQ) => {
				return <p>{youthPQ.promptQuestion2}</p>;
			}),
		);
	}
	function toggleYouthPromptQuestion3() {
		props.setYouthPromptQuestions(
			YouthQuestions.map((youthPQ) => {
				return <p>{youthPQ.promptQuestion3}</p>;
			}),
		);
	}
	function toggleYouthPromptQuestion4() {
		props.setYouthPromptQuestions(
			YouthQuestions.map((youthPQ) => {
				return <p>{youthPQ.promptQuestion4}</p>;
			}),
		);
	}

	const renderResult = () => {
		let result;
		props.openingQuestion === ""
			? (result = (
					<div>
						<p>
							<img src={StartCallGif} alt='callGif' className='w-100' />
						</p>
					</div>
			  ))
			: props.openingQuestion === "redOpeningQuestion1"
			? (result = (
					<div className='mt-4'>
						{RedOpeningQuestions.map((redQuestions) => {
							return (
								<div key={redQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>

										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse}>
											{redQuestions.possibleResponse1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse2}>
											{redQuestions.possibleResponse2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse3}>
											{redQuestions.possibleResponse3}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse4}>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<div>
											<button
												className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
												onClick={toggleRedFollowUpQuestion1}>
												{redQuestions.followUpQuestion1}
											</button>
											<button
												className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
												onClick={toggleRedFollowUpQuestion2}>
												{redQuestions.followUpQuestion2}
											</button>
										</div>
										<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
											<div>
												<h2 className='text-center text-dark fs-3 fw-bold'>
													Prompt Questions
												</h2>
											</div>
											<button
												className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
												onClick={toggleRedPromptQuestion1}>
												{redQuestions.promptQuestion1}
											</button>

											<button
												className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
												onClick={toggleRedPromptQuestion2}>
												{redQuestions.promptQuestion2}
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "redOpeningQuestion2"
			? (result = (
					<div className='mt-4'>
						{RedOpeningQuestions.map((redQuestions) => {
							return (
								<div key={redQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse}>
											{redQuestions.possibleResponse1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse2}>
											{redQuestions.possibleResponse2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse3}>
											{redQuestions.possibleResponse3}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPossibleResponse4}>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedFollowUpQuestion1}>
											{redQuestions.followUpQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedFollowUpQuestion2}>
											{redQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPromptQuestion1}>
											{redQuestions.promptQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleRedPromptQuestion2}>
											{redQuestions.promptQuestion2}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "blueOpeningQuestion1"
			? (result = (
					<div className='mt-4'>
						{BlueOpeningQuestions.map((blueQuestions) => {
							return (
								<div key={blueQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePossibleResponse}>
											{blueQuestions.possibleResponse1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePossibleResponse2}>
											{blueQuestions.possibleResponse2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePossibleResponse3}>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluefollowUpQuestion}>
											{blueQuestions.followUpQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluefollowUpQuestion2}>
											{blueQuestions.followUpQuestion2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluefollowUpQuestion3}>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePromptQuestion}>
											{blueQuestions.promptQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePromptQuestion2}>
											{blueQuestions.promptQuestion2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePromptQuestion3}>
											{blueQuestions.promptQuestion3}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleBluePromptQuestion4}>
											{blueQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "blueOpeningQuestion2"
			? (result = (
					<div className='mt-4'>
						{BlueOpeningQuestions.map((blueQuestions) => {
							return (
								<div key={blueQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.followUpQuestion2}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{blueQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "youthQuestion1"
			? (result = (
					<div className='mt-4'>
						{YouthQuestions.map((youthQuestions) => {
							return (
								<div key={youthQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPossibleResponse}>
											{youthQuestions.possibleResponses1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPossibleResponse2}>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthFollowUpQuestion}>
											{youthQuestions.followUpQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthFollowUpQuestion2}>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPromptQuestion}>
											{youthQuestions.promptQuestion1}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPromptQuestion2}>
											{youthQuestions.promptQuestion2}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPromptQuestion3}>
											{youthQuestions.promptQuestion3}
										</button>
										<button
											className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
											onClick={toggleYouthPromptQuestion4}>
											{youthQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "youthQuestion2"
			? (result = (
					<div className='mt-4'>
						{YouthQuestions.map((youthQuestions) => {
							return (
								<div key={youthQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.possibleResponses1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'>
											{youthQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: (result = "");
		return result;
	};

	const renderAgentQuestions = () => {
		let agentResult;
		props.recommendedQuestions === "agentReflection"
			? (agentResult = (
					<div>
						{AgentReflectionStateQuestions.map((agentRSQ) => {
							return (
								<div className='d-flex flex-column mb-5'>
									<div>
										<h4 className='fs-4 fw-bold mb-3'>
											Agent Reflection Questions
										</h4>
									</div>
									<button
										className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
										onClick={onAgentReflectionQ1Clicked}>
										{agentRSQ.agentReflectionQuestion1}
									</button>
									<button
										className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
										onClick={onAgentReflectionQ2Clicked}>
										{agentRSQ.agentReflectionQuestion2}
									</button>
									<button
										className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
										onClick={onAgentReflectionQ3Clicked}>
										{agentRSQ.agentReflectionQuestion3}
									</button>
									<button
										className='border border-2 border-dark rounded bg-transparent text-dark m-2 fs-5'
										onClick={onAgentReflectionQ4Clicked}>
										{agentRSQ.agentReflectionQuestion4}
									</button>
								</div>
							);
						})}
					</div>
			  ))
			: (agentResult = "");
		return agentResult;
	};

	return (
		<div className='container-fluid rightContent'>
			<div className='mt-4 d-flex flex-column'>
				{/* <select className='form-select dropDown' value={props.openingQuestion}>
					<option value='' onClick={handleOnChange}>
						Select Opening Question
					</option>
					<option value='redOpeningQuestion1'>How are you doing today ?</option>
					<option value='redOpeningQuestion2'>How are you feeling Today</option>
					<option value='blueOpeningQuestion1'>
						How are things going at work/home
					</option>
					<option value='blueOpeningQuestion2'>
						How is your relation ship with your family
					</option>
					<option value='youthQuestion1'>Earlier you said you...?</option>
					<option value='youthQuestion2'>What im hearing is...?</option>
				</select> */}
				<div className='w-100 border-0' value={props.openingQuestion}>
					<p
						onClick={myFunction}
						className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
						Select Opening Question
					</p>
					{dropDownActive ? (
						<div id='myDropdown' className='d-flex flex-column'>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-danger'
								value='redOpeningQuestion1'
								onClick={toggleDropDown}>
								How are you doing today ?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-danger'
								value='redOpeningQuestion2'
								onClick={toggleDropDown2}>
								How are you feeling Today ?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-success'
								value='blueOpeningQuestion1'
								onClick={toggleDropDown3}>
								How are things going at work/home ?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-success'
								value='blueOpeningQuestion2'
								onClick={toggleDropDown4}>
								How is your relationship with your family ?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-primary'
								value='youthQuestion1'
								onClick={toggleDropDown5}>
								Earlier you said you...?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-primary'
								value='youthQuestion2'
								onClick={toggleDropDown6}>
								What im hearing is...?
							</button>
						</div>
					) : null}
				</div>
				<div>{renderResult()}</div>
				<div>{renderAgentQuestions()}</div>
			</div>
		</div>
	);
}
