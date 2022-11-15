import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Calender from "./Calender";
// import WordCloud from "../Modules/WordCloud";
// import WordCloudData from "../Assets/Data/data.json"
import "../Styles/CenterContent.css";

export default function CenterContent(props) {
	const emotionWheel = [
		<Icon icon='emojione:grinning-face-with-smiling-eyes' />,
		<Icon icon='emojione:pouting-face' />,
		<Icon icon='emojione:sad-but-relieved-face' />,
		<Icon icon='emojione:confounded-face' />,
		<Icon icon='emojione:crying-face' />,
	];

	const [nextSession, setNextSession] = useState("newAppoinment");


	const onHappyClicked = (e) => {
		props.updateOpeningEmotion(emotionWheel[0]);
		props.setHappy((happy) => !happy);
	};

	function onAngryClicked(e) {
		props.updateOpeningEmotion(emotionWheel[1]);
		props.setAngry((angry) => !angry);
	}

	function toggleAnswers(e) {
		alert("working on")
	}

	function onConfusedClicked(e) {
		props.updateOpeningEmotion(emotionWheel[2]);
		props.setConfused((confused) => !confused);
	}

	function onBadClicked(e) {
		props.updateOpeningEmotion(emotionWheel[3]);
		props.setBad((bad) => !bad);
	}

	function onSadClicked(e) {
		props.updateOpeningEmotion(emotionWheel[4]);
		props.setSad((sad) => !sad);
	}

	function getYouthQuestions(e) {
		props.setYouthQuestions(youthQuestions => !youthQuestions)
	}
	function getAgentQuestions(e) {
		props.setAgentQuestions(agentQuestions => !agentQuestions)
	}

	function getYouthReflection(val) {
		props.setYouthData(val.target.value);
		// props.setPrintYouthData(false)
	}

	function getAgentReflection(val) {
		props.setAgentData(val.target.value);
		// props.setPrintData(false)
	}

	const entireForm = [
		{ OpeningQuestion: props.openingQuestion },
		{ OpeningEmotion: props.openingEmotion },
	];

	function onFormSubmit(e) {
		e.preventDefault();
		alert("Form Submitted");

		localStorage.setItem("wellBieng", JSON.stringify(entireForm));
	}

	return (
		<div className='container'>
			{/* header section starts */}
			{/* opening question section */}
			<div className='header'>
				<div className='openingQuestion text-center mt-5'>
					<p className='fs-2 fw-semibold'>{props.openingQuestion}</p>

					<p>{props.otherOpeningQuestion}</p>
				</div>
				{/* Clickable emojis to detec opening emotion of call */}
				<div className='emotion-emojies d-flex justify-content-around mt-5 '>
					<button
						onClick={onHappyClicked}
						className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:grinning-face-with-smiling-eyes' />
						<span className='fs-5'>Happy</span>
					</button>
					<button
						onClick={onAngryClicked}
						className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:pouting-face' />
						<span className='fs-5'>Angry</span>
					</button>
					<button
						onClick={onConfusedClicked}
						className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:sad-but-relieved-face' />
						<span className='fs-5'>Confused</span>
					</button>
					<button
						onClick={onBadClicked}
						className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:confounded-face' />
						<span className='fs-5'>Bad</span>
					</button>
					<button
						onClick={onSadClicked}
						className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:crying-face' />
						<span className='fs-5'>Sad</span>
					</button>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			{/* section for triggerd an reason keyword answers */}
			<div className='body mt-5' id='scrollable'>
				<div className='emptyDivForEmotoinKeyWords mt-5 mb-5  text-center'>
					{props.happyAnswers ? (
						<div className='section d-flex flex-column justify-content-center'>
							<div className='triggerdAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm' onClick={toggleAnswers}>happyAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm' onClick={toggleAnswers}>happyAnswers</button>
									<button className='btn-sm' onClick={toggleAnswers}>happyAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-5'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Triggers</span>
									</button>
									<button className='btn-sm'>happyAnswers</button>
								</div>
							</div>
							{/*                                         */}
							{/*
							 */}
							<div className='ReasonAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Reasons</span>
									</button>
									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='d-flex justify-content-around'>
									<button className='btn-sm'>happyAnswers</button>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex '>
								<div className='input-group mb-3 w-75'>
									<input
										type='text'
										className='otherInput form-control w-75'
										placeholder='Other'
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded '
								>
									save
								</button>
							</div>
							{/*  */}
						</div>
					) : null}

					{/*      */}
					{/* 
					// 
					
					*/}
					{props.angryAnswers ? (
						<div className='section d-flex flex-column justify-content-center'>
							<div className='triggerdAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>angryAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>angryAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-5'>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Triggers</span>
									</button>
									<button className='btn-sm'>angryAnswers</button>
								</div>
							</div>
							{/*                                         */}
							<div className='ReasonAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Reasons</span>
									</button>
									<button className='btn-sm'>angryAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>angryAnswers</button>
								</div>
								<div className='d-flex justify-content-around'>
									<button className='btn-sm'>angryAnswers</button>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex '>
								<div className='input-group mb-3 w-75'>
									<input
										type='text'
										className='otherInput form-control w-75'
										placeholder='Other'
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded '>
									save
								</button>
							</div>
							{/*  */}
						</div>
					) : null}
					{/*  */}
					{/* 
					// 
					 */}
					{props.confusedAnswers ? (
						<div className='section d-flex flex-column justify-content-center'>
							<div className='triggerdAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-5'>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Triggers</span>
									</button>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
							</div>
							{/*                                         */}
							<div className='ReasonAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Reasons</span>
									</button>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
								<div className='d-flex justify-content-around'>
									<button className='btn-sm'>confusedAnswers</button>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex '>
								<div className='input-group mb-3 w-75'>
									<input
										type='text'
										className='otherInput form-control w-75'
										placeholder='Other'
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded '>
									save
								</button>
							</div>
							{/*  */}
						</div>
					) : null}

					{/*  */}
					{/*  */}

					{/*  */}
					{props.badAnswers ? (
						<div className='section d-flex flex-column justify-content-center'>
							<div className='triggerdAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>badAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>badAnswers</button>
									<button className='btn-sm'>badAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-5'>
									<button className='btn-sm'>badAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Triggers</span>
									</button>
									<button className='btn-sm'>badAnswers</button>
								</div>
							</div>
							{/*                                         */}
							<div className='ReasonAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>badAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Reasons</span>
									</button>
									<button className='btn-sm'>badAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>badAnswers</button>
									<button className='btn-sm'>badAnswers</button>
								</div>
								<div className='d-flex justify-content-around'>
									<button className='btn-sm'>badAnswers</button>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex '>
								<div className='input-group mb-3 w-75'>
									<input
										type='text'
										className='otherInput form-control w-75'
										placeholder='Other'
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded '>
									save
								</button>
							</div>
							{/*  */}
						</div>
					) : null}

					{/*  */}
					{/*  */}
					{/*  */}
					{props.sadAnswers ? (
						<div className='section d-flex flex-column justify-content-center'>
							<div className='triggerdAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>sadAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>sadAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-5'>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Triggers</span>
									</button>
									<button className='btn-sm'>sadAnswers</button>
								</div>
							</div>
							{/*                                         */}
							<div className='ReasonAnswers'>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>
										<span className='fw-bold fs-5'>Reasons</span>
									</button>
									<button className='btn-sm'>sadAnswers</button>
								</div>
								<div className='d-flex justify-content-around mb-2'>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>sadAnswers</button>
								</div>
								<div className='d-flex justify-content-around'>
									<button className='btn-sm'>sadAnswers</button>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex '>
								<div className='input-group mb-3 w-75'>
									<input
										type='text'
										className='otherInput form-control w-75'
										placeholder='Other'
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded '>
									save
								</button>
							</div>
							{/*  */}
						</div>
					) : null}


				</div>
			</div>
			{/* body section ends */}

			{/* Footer section starst */}
			{/* Youth reflection input */}
			<div className='footer'>
				<div className='mt-5'>
					<div className='recommended question for youth reflection'>
						<h2 className='recommendedQuestion mb-3 text-center fs-4 fw-semilight'>
							{props.youthQuestions}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					<button className='sm bg-transparent border border-2 rounded mx-2' onClick={getYouthQuestions}>
						Get recommended question
					</button>
					<textarea
						className='textArea form-control'
						onChange={getYouthReflection}
						placeholder='Type Reflection'
						id='#'></textarea>
					<button
						onClick={() => props.setPrintYouthData(true)}
						className='sm bg-transparent border border-2 rounded '>
						Store
					</button>
				</div>

				{/*       Agent Reflection Inputs                                  */}
				<div className='mt-5 mb-5'>
					<div className='recommended question for agent reflection'>
						<h2 className='recommendedQuestion mb-2 text-center fs-4 fw-semilight'>
							{props.agentQuestions}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
					<button className='sm bg-transparent border border-2 rounded mx-2' onClick={getAgentQuestions}>
						Get recommended question
					</button>
					<textarea
						className='textArea form-control'
						onChange={getAgentReflection}
						placeholder='Type Reflection'
						id='#'></textarea>
					<button
						onClick={() => props.setPrintAgentData(true)}
						className='sm bg-transparent border border-2 rounded'>
						Store
					</button>
				</div>
				{/*                                            */}

				{/* calender section                       */}
				<div className='nextCall'>
					<h2 className='title'>Session Bookings</h2>
					<div>
						<nav className=''>
							<button
								className='btn-secondary'
								onClick={(e) => setNextSession("newAppoinment")}>
								New Appoinment
							</button>
							{nextSession === "newAppoinment" && (
								<div className='react-calendar mt-5 '>
									<Calender className='Calender' />
								</div>
							)}

							<button
								className='btn-secondary2'
								onClick={(e) => setNextSession("endReason")}>
								End Reason
							</button>
							{nextSession === "endReason" && (
								<section className='mt-5'>
									<label className='fw-semibold fs-3 mt-5'>End reason</label>
									<textarea
										className='textArea form-control '
										placeholder='End Reason'
										id='#'></textarea>
									<div className='d-grid'>
										<button className='btn btn-secondary'>Save</button>
									</div>
								</section>
							)}
						</nav>
					</div>
					{/*                                      */}
				</div>

				{/* 		button to submit capturing tool									 */}
				<div className='d-grid  mb-5'>
					<button
						type='submit'
						onClick={onFormSubmit}
						className='btn text-light fs-5 p-4'>
						Submit
					</button>
				</div>
			</div>
			{/* footer section ends */}
		</div>
	);
}
