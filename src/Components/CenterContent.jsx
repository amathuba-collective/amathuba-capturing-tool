import React, { useState, useEffect } from "react";
import ReactCalender from "./ReactCalender";
import "../Styles/CenterContent.css";
// import WordCloud from "../Modules/WordCloud";
// import WordCloudData from "../Assets/Data/data.json"


export default function CenterContent(props) {
	const happyAnswers = [
		"Amazing",
		"Joyful",
		"Excited",
		"Awsome"
	];

	const [nextSession, setNextSession] = useState("newAppoinment");
function getOtherAnswer(e) {
		props.setOtherAnswer(e.target.value)
	}

	useEffect(() => {
		// props.openingQuestion === "openingQuestion" ? props.setGetOpeningQuestion(true) : props.setGetOpeningQuestion(false)
		props.emotion === "happy" ? props.setHappy(true) : props.setHappy(false);
		props.emotion === "angry" ? props.setAngry(true) : props.setAngry(false);
		props.emotion === "confused" ? props.setConfused(true) : props.setConfused(false);
		props.emotion === "anxious" ? props.setAnxious(true) : props.setAnxious(false);
		props.emotion === "sad" ? props.setSad(true) : props.setSad(false);
	}, [props.emotion, props, props.openingQuestion]);

	const handleOnEmotionChange = (e) => {
		props.setEmotion(e.target.value);//reason for this having the setEmotion function cause its the only way i could get it to appear on the same spot as emotion questions
	};

	function handleEmotionAnswer1 (e)  {
		props.setHappyAnswersCapture1(happyAnswers[0])
	}
	function handleEmotionAnswer2 (e)  {
		props.setHappyAnswersCapture2(happyAnswers[1])
	}
	function handleEmotionAnswer3 (e)  {
		props.setHappyAnswersCapture3(happyAnswers[2])
	}
	function handleEmotionAnswer4 (e)  {
		props.setHappyAnswersCapture4(happyAnswers[3])
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
					{/* <p>{props.otherOpeningQuestion}</p>  */}
					<p className='fs-2 fw-semibold'>{props.openingQuestion}</p>
				</div>
				{/* Clickable emojis to detec opening emotion of call */}
				<div
					value={props.emotion}
					className='emotion-emojies d-flex justify-content-around mt-5 '>
					<button value='happy' className='border-0 fs-1 bg-transparent' onClick={handleOnEmotionChange}>
                        😄
					</button>
					<button value='angry' className='border-0 fs-1 bg-transparent' onClick={handleOnEmotionChange}>
                        🤬
					</button>
					<button value='confused' className='border-0 fs-1 bg-transparent' onClick={handleOnEmotionChange}>
                        🤔
					</button>
					<button value='anxious' className='border-0 fs-1 bg-transparent' onClick={handleOnEmotionChange}>
                        😰
					</button>
					<button value='sad' className='border-0 fs-1 bg-transparent' onClick={handleOnEmotionChange}>
                        🙁
					</button>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			{/* section for triggerd an reason keyword answers */}
			<div className='body mt-5' id='scrollable'>
				<div className='emptyDivForEmotoinKeyWords mt-5 mb-5  text-center'>
					{/* Happy question answers */}
					{props.happyAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className="d-flex justify-content-between">
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm' onClick={handleEmotionAnswer1}>
											{happyAnswers[0]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer2}>{happyAnswers[1]}</button>
										<button className='btn-sm' onClick={handleEmotionAnswer3}>{happyAnswers[2]}</button>
										<button className='btn-sm' onClick={handleEmotionAnswer4}>{happyAnswers[3]}</button>

										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>

									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}
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
						<div className='section d-flex flex-column justify-content-around'>
							<div className="d-flex justify-content-between">
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>

										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>

									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}
								>
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
						<div className='section d-flex flex-column justify-content-around'>
							<div className="d-flex justify-content-between">
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>

										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>

									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}
								>
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
						<div className='section d-flex flex-column justify-content-around'>
							<div className="d-flex justify-content-between">
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>

										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>

									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}
								>
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
						<div className='section d-flex flex-column justify-content-around'>
							<div className="d-flex justify-content-between">
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>

										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>
									<button className='btn-sm'>happyAnswers</button>

									<button className='btn-sm'>happyAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>
											happyAnswers
										</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}
								>
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
									<ReactCalender />
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
