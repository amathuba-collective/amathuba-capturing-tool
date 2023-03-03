import React, { useState } from "react";
import "../Styles/RightContent.css";
// import OpeniningStateQuestions from "../Data/OpeningQuestion";
import RedOpeningQuestions from "../Data/RedQuestions.json";
import BlueOpeningQuestions from "../Data/BlueQuestions.json";
import YouthQuestions from "../Data/YouthQuestions.json";
// import StartCallGif from "../Assets/Start Your Call (2).gif";
import AgentReflectionStateQuestions from "../Data/AgentReflectionQuestions.json";
// import OpenerQuestion from "../Data/OpeningQuestion.json";
import { Icon } from "@iconify/react";

export default function RightContent(props) {
	// ///////////////
	//reason for me storing the data is because if i tried to pass the data through map function from the jason files i needed to extract the children element from the data to get the data an was not sure how to do that just yet
	// //////////////

	const openingQuestions = [
		"How are you doing today ?",
		"How are you feeling today ?",
		"How are things going at work/home ?",
		"How is you relationship with your family ?",
		"Earlier you said you..?",
		"What im hearing is...?",
	];
	///
	const redFurtherQuestions = [
		"I am glad to hear that.",
		"I am sorry to hear that.",
		"That is great.",
		"That is unfortunate.", //possible responses
		"Would you like to say more ?",
		"What exactly do you mean when you say ...?", //follow-up questions
		"What makes you feel that way ?",
		"Is there something that happend that makes you feel ...? ", //prompt questions
	];

	//
	const blueFurtherQuestions = [
		"That sounds like Your doing well",
		"That sounds like Your struggling",
		"That sounds like Your going throught a lot", //possible responses
		"Can you tell me abit more ?",
		"What happend ?",
		"How are you coping ?", // follow up questions
		"I am interested in what happened... ?",
		"Im really curious to find out more... ?",
		"I can relate, because... ?",
		"I have felt like that when... ?", //prompt questions
	];
	//
	const youthFurtherQuestions = [
		"I think you are very brave / smart / kind",
		"That is wonderful dont you think ?", // possible responses
		"Would you say you have gained/learnt something ?",
		"How do you feel about the ?", // follow up questions
		"How are you feeling now ?",
		"What are you planning to do next ?",
		"How did you find this conversation ?",
		"Would you say you have gained / learnt something ?", // prompt questions
	];
	//
	const agentReflectionQuestions = [
		"So tell me about Your youth ? ",
		"What made them feel the way they feel ?",
		"How was the call today ?",
		"Do you feel he/she is improving ?",
	];
	// ///////////////////////////////

	// Drop down functions
	const [dropDownActive, setDropDownActive] = useState(false);
	const [dropDownActive2, setDropDownActive2] = useState(false);

	// Possible Responses
	const [dropDownActive3, setDropDownActive3] = useState(false);
	// Follow-Up Questions
	const [dropDownActive4, setDropDownActive4] = useState(false);
	// Prompt Questions
	const [dropDownActive5, setDropDownActive5] = useState(false);

	// Possible Responses
	const [dropDownActive6, setDropDownActive6] = useState(false);
	// Follow-Up Questions
	const [dropDownActive7, setDropDownActive7] = useState(false);
	// Prompt Questions
	const [dropDownActive8, setDropDownActive8] = useState(false);



	function myFunction() {
		setDropDownActive((dropDownActive) => !dropDownActive);
	}

	function dropDown2() {
		setDropDownActive2((dropDownActive2) => !dropDownActive2);
	}

	// Possible Responses
	function dropDown3() {
		setDropDownActive3((dropDownActive3) => !dropDownActive3);
	}

	// Follow-Up Questions
	function dropDown4() {
		setDropDownActive4((dropDownActive4) => !dropDownActive4);
	}

	// Prompt Questions
	function dropDown5() {
		setDropDownActive5((dropDownActive5) => !dropDownActive5);
	}

	// These are for the youth opening question
	// Possible Responses
	function dropDown6() {
		setDropDownActive6((dropDownActive6) => !dropDownActive6);
	}

	// Follow-Up Questions
	function dropDown7() {
		setDropDownActive7((dropDownActive7) => !dropDownActive7);
	}

	// Prompt Questions
	function dropDown8() {
		setDropDownActive8((dropDownActive8) => !dropDownActive8);
	}


	const onAgentReflectionQ1Clicked = () => {
		props.setAgentQuestions(agentReflectionQuestions[0]);
	};
	const onAgentReflectionQ2Clicked = () => {
		props.setAgentQuestions(agentReflectionQuestions[1]);
	};
	const onAgentReflectionQ3Clicked = () => {
		props.setAgentQuestions(agentReflectionQuestions[2]);
	};
	const onAgentReflectionQ4Clicked = () => {
		props.setAgentQuestions(agentReflectionQuestions[3]);
	};

	const getOtherOpeningQuestion = (e) => {
		props.setOtherOpeningQuestion({
			...props.otherOpeningQuestion,
			[e.target.name]: e.target.value,
		});
	};

	//
	const { newOpeningQuestion } = props.otherOpeningQuestion;
	const saveOtherOpeningQuestion = () => {
		props.setPrintOtherOpeningQuestion([
			...props.printOtherOpeningQuestion,
			newOpeningQuestion,
		]);
		props.setOtherOpeningQuestion({ newOpeningQuestion: "" });
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		setDropDownActive(false);
		// props.setKeyAnswers(true);
		// props.setOtherOpeningQuestion({ newOpeningQuestion: true });
	};
	//

	/// dropdown toggle for opening questions
	function toggleRedOpeningQuestion1(e) {
		e.preventDefault();
		props.setRedOpeningQuestion1(openingQuestions[0]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers(true);
		setDropDownActive(false);
	}
	//

	function toggleRedOpeningQuestion2(e) {
		e.preventDefault();
		props.setRedOpeningQuestion1(false);
		props.setRedOpeningQuestion2(openingQuestions[1]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers(false);
		// props.setKeyAnswers(true);
		setDropDownActive(false);
	}
	//

	function toggleDropDown3(e) {
		e.preventDefault();
		props.setRedOpeningQuestion2(false);
		props.setBlueOpeningQuestion1(openingQuestions[2]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers(false);
		// props.setKeyAnswers(true);
		setDropDownActive(false);
	}
	//

	function toggleDropDown4(e) {
		e.preventDefault();
		props.setBlueOpeningQuestion1(false);
		props.setBlueOpeningQuestion2(openingQuestions[3]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setOpeningQuestion(e.target.value);
		// props.setKeyAnswers(false);
		// props.setKeyAnswers(true);
		setDropDownActive(false);
	}
	//

	// toggle youthOpening Questions
	const toggleDropDown5 = (e) => {
		// props.setYouthQuestion1(true);
		props.setYouthQuestion1(openingQuestions[4]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setYouthOpeningQuestions(e.target.value);
		setDropDownActive2(false);
	};

	function toggleDropDown6(e) {
		e.preventDefault();
		props.setYouthQuestion1(false);
		props.setYouthQuestion2(openingQuestions[5]);
		document.getElementById("centerContent").style.opacity = "100%"
		document.getElementById("centerContent").style.display = "block"
		// props.setYouthOpeningQuestions(e.target.value);
		setDropDownActive2(false);
	}

	///toggle red dropdown content
	function toggleRedPossibleResponse() {
		props.setRedPossibleResponses(redFurtherQuestions[0]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
		// document.getElementById("emojis").style.display = "none"
		document.getElementById("youthReflection").style.display = "block"
		document.getElementById("openingQuestionsBtn").style.animation = false
		document.getElementById("openingQuestionsBtn").style.backgroundColor = "#789E46"
		document.getElementById("possibleResponsesBtn").style.backgroundColor = "#789E46"
		document.getElementById("possibleResponsesBtn").style.animation = false
		dropDown3(false)
	}

	function toggleRedPossibleResponse2() {
		props.setRedPossibleResponses(redFurtherQuestions[1]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
		document.getElementById("emojis").style.display = "none"
		document.getElementById("youthReflection").style.display = "block"
	}
	function toggleRedPossibleResponse3() {
		props.setRedPossibleResponses(redFurtherQuestions[2]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
		document.getElementById("emojis").style.display = "none"
		document.getElementById("youthReflection").style.display = "block"
	}
	function toggleRedPossibleResponse4() {
		props.setRedPossibleResponses(redFurtherQuestions[3]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
		document.getElementById("emojis").style.display = "none"
		document.getElementById("youthReflection").style.display = "block"
	}

	//red followup questions
	function toggleRedFollowUpQuestion1() {
		props.setRedFollowUpQuestions(redFurtherQuestions[4]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
	}
	function toggleRedFollowUpQuestion2() {
		props.setRedFollowUpQuestions(redFurtherQuestions[5]);
		document.getElementById("followUpQuestionsBtn").style.display = "block"
	}

	//red prompt questions
	function toggleRedPromptQuestion1() { 
		props.setRedPromptQuestions(redFurtherQuestions[6]);
		// document.getElementById("youthPromptInput").style.display = "block"
	}
	function toggleRedPromptQuestion2() {
		props.setRedPromptQuestions(redFurtherQuestions[7]);
	}

	// toggle blue dropdown content
	function toggleBluePossibleResponse() {
		props.setBluePossibleResponses(blueFurtherQuestions[0]);
	}

	function toggleBluePossibleResponse2() {
		props.setBluePossibleResponses(blueFurtherQuestions[1]);
	}

	function toggleBluePossibleResponse3() {
		props.setBluePossibleResponses(blueFurtherQuestions[2]);
	}

	// blue followup questions
	function toggleBluefollowUpQuestion() {
		props.setBlueFollowUpQuestions(blueFurtherQuestions[3]);
	}

	function toggleBluefollowUpQuestion2() {
		props.setBlueFollowUpQuestions(blueFurtherQuestions[4]);
	}

	function toggleBluefollowUpQuestion3() {
		props.setBlueFollowUpQuestions(blueFurtherQuestions[5]);
	}

	//blue prompt questions
	function toggleBluePromptQuestion() {
		props.setBluePromptQuestions(blueFurtherQuestions[6]);
	}

	function toggleBluePromptQuestion2() {
		props.setBluePromptQuestios(blueFurtherQuestions[7]);
	}

	function toggleBluePromptQuestion3() {
		props.setBluePromptQuestions(blueFurtherQuestions[8]);
	}

	function toggleBluePromptQuestion4() {
		props.setBluePromptQuestions(blueFurtherQuestions[9]);
	}

	//Toggle Youth Question Contents
	function toggleYouthPossibleResponse() {
		props.setYouthPossibleResponses(youthFurtherQuestions[0]);
		document.getElementById("possibleResponsesBtn1").style.backgroundColor = "#789E46"
		document.getElementById("possibleResponsesBtn1").style.animation = false
		document.getElementById("followUpQuestionsBtn1").style.display = "block"
		document.getElementById("youthQuestionInput").style.display = "none"
		document.getElementById("followUpQuestionInput1").style.display = "block"
	}

	function toggleYouthPossibleResponse2() {
		props.setYouthPossibleResponses(youthFurtherQuestions[1]);
	}

	// 2 Possible responses above
	function toggleYouthFollowUpQuestion() {
		props.setYouthFollowUpQuestions(youthFurtherQuestions[2]);
	}

	function toggleYouthFollowUpQuestion2() {
		props.setYouthFollowUpQuestions(youthFurtherQuestions[3]);
	}

	// 2 follow up questions above
	function toggleYouthPromptQuestion() {
		props.setYouthPromptQuestions(youthFurtherQuestions[4]);
	}
	function toggleYouthPromptQuestion2() {
		props.setYouthPromptQuestions(youthFurtherQuestions[5]);
	}
	function toggleYouthPromptQuestion3() {
		props.setYouthPromptQuestions(youthFurtherQuestions[6]);
	}
	function toggleYouthPromptQuestion4() {
		props.setYouthPromptQuestions(youthFurtherQuestions[7]);
	}
	// 4 follow up questions above

	const renderResult = () => {
		let result;
		props.redOpeningQuestion1
			? (result = (
				<div className='mt-4'>
					{RedOpeningQuestions.map((redQuestions) => {
						return (
							<div key={redQuestions.id}>
								<p
									id="possibleResponsesBtn"
									onClick={dropDown3}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
									Possible Responses
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>
								{dropDownActive3 ? (
									<div className='d-flex flex-column justify-content-center mt-3' id="possibleResponseContent">
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
										<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
									</div>
								) : null}

								<p
									id="followUpQuestionsBtn"
									onClick={dropDown4}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
									Follow-Up Questions
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>
								{dropDownActive4 ? (
									<div className='d-flex flex-column justify-content-center mt-3' id="followUpQuestionContent">
										{/* <div>
										<h2 className='text-center text-dark fs-3 fw-bold'>
											Follow-up Questions
										</h2>
									</div> */}
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
										<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
									</div>
								) : null}

								<p
									id="promptQuestionsBtn"
									onClick={dropDown5}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded' >
									Prompt Questions
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>
								{dropDownActive5 ? (
									<div className='d-flex flex-column justify-content-center mt-3 mb-4' id="promptQuestionsContent">
										{/* <div>
										<h2 className='text-center text-dark fs-3 fw-bold'>
											Prompt Questions
										</h2>
									</div> */}
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
										<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
									</div>
								) : null}
							</div>
						);
					})}
					{/* <hr />
					<h5 className='text-center fs-3'>Opening Questions above</h5>
					<hr /> */}
				</div>
			))
			: props.redOpeningQuestion2
				? (result = (
					<div className='mt-4'>
						{RedOpeningQuestions.map((redQuestions) => {
							return (
								<div key={redQuestions.id}>
									<p
										id="possibleResponsesBtn"
										onClick={dropDown3}
										className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
										Possible Responses
										<Icon
											icon='icon-park-outline:drop-down-list'
											className='dropDownIcon'
										/>
									</p>
									{dropDownActive3 ? (
										<div className='d-flex flex-column justify-content-center mt-3' id="possibleResponseContent">
											{/* <div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
											</div> */}
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
											<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
										</div>
									) : null}
									<p
										id="followUpQuestionsBtn"
										onClick={dropDown4}
										className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
										Follow-Up Questions
										<Icon
											icon='icon-park-outline:drop-down-list'
											className='dropDownIcon'
										/>
									</p>

									{dropDownActive4 ? (
										<div className='d-flex flex-column justify-content-center mt-3' id="followUpQuestionContent">
											{/* <div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div> */}
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
											<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
										</div>
									) : null}

									<p
										id="promptQuestionsBtn"
										onClick={dropDown5}
										className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
										Prompt Questions
										<Icon
											icon='icon-park-outline:drop-down-list'
											className='dropDownIcon'
										/>
									</p>
									{dropDownActive5 ? (
										<div className='d-flex flex-column justify-content-center mt-3 mb-4' id="promptQuestionsContent" >
											{/* <div>
												<h2 className='text-center text-dark fs-3 fw-bold'>
													Prompt Questions
												</h2>
											</div> */}
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
											<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
										</div>
									) : null}
								</div>
							);
						})}
						{/* <hr />
						<h5 className='text-center fs-3'>Opening Questions above</h5>
						<hr /> */}
					</div>
				))
				: props.blueOpeningQuestion1
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
							<hr />
							<h5 className='text-center fs-3'>Opening Questions above</h5>
							<hr />
						</div>
					))
					: props.blueOpeningQuestion2
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
								<hr />
								<h5 className='text-center fs-3'>Opening Questions above</h5>
								<hr />
							</div>
						))
						: props.otherOpeningQuestion.newOpeningQuestion
							? (result = (
								<div>
									{RedOpeningQuestions.map((redQuestions) => {
										return (
											<div key={redQuestions.id}>
												<div className='d-flex flex-column justify-content-center mt-3'>
													{/* <div>
														<h2 className='text-center text-dark fs-3 fw-bold'>
															Possible Responses
														</h2>
													</div> */}
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
									<hr />
									<h5 className='text-center fs-3'>Opening Questions above</h5>
									<hr />
								</div>
							))
							: (result = "");
		return result;
	};

	// youth opening question
	const renderResult2 = () => {
		let youthResult;
		props.youthQuestion1
			? (youthResult = (
				<div className='mt-4'>
					{YouthQuestions.map((youthQuestions) => {
						return (
							<div key={youthQuestions.id}>
								<p
									id="possibleResponsesBtn1"
									onClick={dropDown6}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
									Possible Responses
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>
								{dropDownActive6 ? (
									<div className='d-flex flex-column justify-content-center mt-3' id="possibleResponsesContent1" >
										<div>
											{/* <h2 className='text-center text-dark fs-3 fw-bold'>
											Possible Responses
										</h2> */}
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
								) : null}


								<p
									id="followUpQuestionsBtn1"
									onClick={dropDown7}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
									Follow Up Questions
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>
								{dropDownActive7 ? (
									<div className='d-flex flex-column justify-content-center mt-3' id="followUpQuestionsContent1" >
										{/* <div>
										<h2 className='text-center text-dark fs-3 fw-bold'>
											Follow-up Questions
										</h2>
									</div> */}
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
								) : null}

								<p
									id="promptQuestionsBtn1"
									onClick={dropDown8}
									className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>
									Prompt Questions
									<Icon
										icon='icon-park-outline:drop-down-list'
										className='dropDownIcon'
									/>
								</p>

								{dropDownActive8 ? (
									<div className='d-flex flex-column justify-content-center mt-3 mb-4' id="promptQuestionsContent1" >
										{/* <div>
										<h2 className='text-center text-dark fs-3 fw-bold'>
											Prompt Questions
										</h2>
									</div> */}
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
								) : null}
							</div>
						);
					})}
					{/* <hr />
					<h5 className='text-center fs-3'>Youth reflection above</h5>
					<hr /> */}
				</div>
			))
			: props.youthQuestion2
				? (youthResult = (
					<div className='mt-4'>
						{YouthQuestions.map((youthQuestions) => {
							return (
								<div key={youthQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										{/* <div>
											<h2 className='text-center text-dark fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div> */}
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
						<hr />
						<h5 className='text-center fs-3'>Youth reflection above</h5>
						<hr />
					</div>
				))
				: (youthResult = "");
		return youthResult;
	};

	const renderAgentQuestions = () => {
		let agentResult;
		props.recommendedQuestions === "agentReflection"
			? (agentResult = (
				<div>
					{AgentReflectionStateQuestions.map((agentRSQ) => {
						return (
							<div className='d-flex flex-column mb-5' id="agentRecommendedQuestions">
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
					{/* <hr />
					<h5 className='text-center fs-3'>Agent reflection above</h5>
					<hr /> */}
				</div>
			))
			: (agentResult = "");
		return agentResult;
	};

	return (
		<div className=''>
			<div className=''>
				<h5 className='text-center fs-5'>Opening Questions</h5>
				<hr />
				<div className='openingQuestions' value={props.openingQuestion}>
					<p
						id="openingQuestionsBtn"
						onClick={myFunction}
						className='Selector mt-5 text-center border border-2 p-1 border-dark rounded'>

						Select Opening Question
						<Icon
							icon='icon-park-outline:drop-down-list'
							className='dropDownIcon'
						/>
					</p>
					{dropDownActive ? (
						<div id='myDropdown' className='d-flex flex-column'>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-danger'
								value='redOpeningQuestion1'
								onClick={toggleRedOpeningQuestion1}>
								How are you doing today ?
							</button>
							<button
								href='#about'
								className='m-2 rounded bg-transparent border border-2 border-danger'
								value='redOpeningQuestion2'
								onClick={toggleRedOpeningQuestion2}>
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
							<div className='otherAnswer mt-1 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='enter...'
										name='newOpeningQuestion'
										value={props.otherOpeningQuestion.newOpeningQuestion}
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={saveOtherOpeningQuestion}>
									save
								</button>
							</div>
							<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
						</div>
					) : null}
				</div>
				{/*  */}
				{/*  */}
				<div>{renderResult()}</div>
				<div id="youthReflectionHead" >
					<h5 className='text-center fs-5'>Youth Reflection Questions</h5>
					<hr />
				</div>
				{/*  */}
				<div className='w-100 border-0' value={props.youthOpeningQuestions} >
					<p
						id="youthQuestionsBtn"
						onClick={dropDown2}
						className='Selector  text-center border border-2 p-1 border-dark rounded'>
						Select Youth Opening Question
						<Icon
							icon='icon-park-outline:drop-down-list'
							className='dropDownIcon'
						/>
					</p>
					{dropDownActive2 ? (
						<div id="youthOpenQuestions" className='d-flex flex-column'>
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
				{/*  */}
				<div>{renderResult2()}</div>
				<div>{renderAgentQuestions()}</div>
				{/* <div><CenterContent dropDown4={dropDown4} /></div> */}
			</div>
		</div>
	)
}
