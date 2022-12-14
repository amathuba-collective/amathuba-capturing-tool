import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "../Styles/ReactCalender.css";
import "react-calendar/dist/Calendar.css";
import "../Styles/CenterContent.css";
// import WordCloud from "../Modules/WordCloud";
// import WordCloudData from "../Assets/Data/data.json"

export default function CenterContent(props) {
	const navigate = useNavigate();

	const happyAnswers = ["Amazing", "Joyful", "Excited", "Awsome"];

	const [nextSession, setNextSession] = useState("newAppoinment");
	function getOtherAnswer(e) {
		props.setOtherAnswer(e.target.value);
	}

	useEffect(() => {
		props.recommendedQuestions === "happy"
			? props.setHappyQuestions(true)
			: props.setHappyQuestions(false);
		props.recommendedQuestions === "angry"
			? props.setAngryQuestions(true)
			: props.setAngryQuestions(false);
		props.recommendedQuestions === "confused"
			? props.setConfusedQuestions(true)
			: props.setConfusedQuestions(false);
		props.recommendedQuestions === "anxious"
			? props.setAnxiousQuestions(true)
			: props.setAnxiousQuestions(false);
		props.recommendedQuestions === "sad"
			? props.setSadQuestions(true)
			: props.setSadQuestions(false);
		props.recommendedQuestions === "youthReflection"
			? props.setYouthReflectionQuestions(true)
			: props.setYouthReflectionQuestions(false);
		props.recommendedQuestions === "agentReflection"
			? props.setAgentReflectionQuestions(true)
			: props.setAgentReflectionQuestions(false);
	}, [props.recommendedQuestions, props]);

	const handleOnChange = (e) => {
		props.setRecommendedQuestions(e.target.value);
	};

	function handleEmotionAnswer1(e) {
		props.setHappyAnswersCapture1(happyAnswers[0]);
	}
	function handleEmotionAnswer2(e) {
		props.setHappyAnswersCapture2(happyAnswers[1]);
	}
	function handleEmotionAnswer3(e) {
		props.setHappyAnswersCapture3(happyAnswers[2]);
	}
	function handleEmotionAnswer4(e) {
		props.setHappyAnswersCapture4(happyAnswers[3]);
	}

	// function getYouthQuestions(e) {
	// 	props.setYouthQuestions((youthQuestions) => !youthQuestions);
	// }
	// function getAgentQuestions(e) {
	// 	props.setAgentQuestions((agentQuestions) => !agentQuestions);
	// }

	function getYouthReflection(val) {
		props.setYouthData(val.target.value);
		// props.setYouthData("");
		// props.setPrintYouthData(false)
	}

	function getAgentReflection(val) {
		props.setAgentData(val.target.value);
		// props.setPrintData(false)
	}

	function submitForm() {
		props.submitContent();
		navigate("/Dashboard");
	}

	return (
		<div className='container'>
			{/* header section starts */}
			{/* opening question section */}
			<div className='header'>
				<div className='openingQuestion text-center mt-5'>
					<p className='fs-2 fw-semibold'>{props.openingQuestion}</p>
				</div>
				<div className=''>
					<div
						value={props.recommendedQuestions}
						className='d-flex justify-content-evenly mt-5'>
						<option value=''></option>
						<button
							value='happy'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange}>
							😄
						</button>
						<button
							value='angry'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange}>
							😡
						</button>
						<button
							value='confused'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange}>
							🤔
						</button>
						<button
							value='anxious'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange}>
							😰
						</button>
						<button
							value='sad'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange}>
							🙁
						</button>
					</div>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			{/* section for triggerd an reason keyword answers */}
			<div className='body mt-5' id='scrollable'>
				<div className='emptyDivForEmotoinKeyWords  mb-5  text-center'>
					{props.happyAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm' onClick={handleEmotionAnswer1}>
											{happyAnswers[0]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer2}>
											{happyAnswers[1]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer3}>
											{happyAnswers[2]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer4}>
											{happyAnswers[3]}
										</button>

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
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
										<button className='btn-sm'>happyAnswers</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}>
									save
								</button>
							</div>
						</div>
					) : null}

					{props.angryAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>

										<button className='btn-sm'>angryAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>angryAnswers</button>
									<button className='btn-sm'>angryAnswers</button>

									<button className='btn-sm'>angryAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
										<button className='btn-sm'>angryAnswers</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}>
									save
								</button>
							</div>
						</div>
					) : null}

					{props.confusedAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>

										<button className='btn-sm'>confusedAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>confusedAnswers</button>
									<button className='btn-sm'>confusedAnswers</button>

									<button className='btn-sm'>confusedAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
										<button className='btn-sm'>confusedAnswers</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}>
									save
								</button>
							</div>
						</div>
					) : null}

					{props.anxiousAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>

										<button className='btn-sm'>anxiousAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>anxiousAnswers</button>
									<button className='btn-sm'>anxiousAnswers</button>
									<button className='btn-sm'>anxiousAnswers</button>

									<button className='btn-sm'>anxiousAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
										<button className='btn-sm'>anxiousAnswers</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}>
									save
								</button>
							</div>
						</div>
					) : null}

					{props.sadAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>

										<button className='btn-sm'>sadAnswers</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>sadAnswers</button>
									<button className='btn-sm'>sadAnswers</button>

									<button className='btn-sm'>sadAnswers</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
										<button className='btn-sm'>sadAnswers</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={(e) => props.setPrintOtherAnswer(true)}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>
			</div>
			{/* body section ends */}

			{/* Footer section starst */}
			{/* Youth reflection input */}
			<div className='footer'>
				<div className='mt-5' value={props.recommendedQuestions}>
					<div className='recommended question for youth reflection'>
						<h2 className='recommendedQuestion mb-3 text-center fs-4 fw-semilight'>
							{props.youthQuestions}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					<button
						className='sm bg-transparent border border-2 rounded mx-2'
						value='youthReflection'
						onClick={handleOnChange}>
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
				<div className='mt-5 mb-5' value={props.recommendedQuestions}>
					<div className='recommended question for agent reflection'>
						<h2 className='recommendedQuestion mb-2 text-center fs-4 fw-semilight'>
							{props.agentQuestions}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
					<button
						className='sm bg-transparent border border-2 rounded mx-2'
						value='agentReflection'
						onClick={handleOnChange}>
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
						<nav className='mt-5'>
							<div className='d-flex justify-content-between'>
								<button
									className='navBtns btn-secondary'
									onClick={(e) => setNextSession("newAppoinment")}>
									New Appoinment
								</button>
								<button
									className='navBtns btn-secondary'
									onClick={(e) => setNextSession("endReason")}>
									End Reason
								</button>
							</div>

							{nextSession === "newAppoinment" && (
								<div>
									<Calendar
										className='react-calendar'
										minDetail='year'
										// maxDate={new Date(2022, 10, 28)}
										value={props.value}
										onChange={props.onValueChange}
									/>
								</div>
							)}
							{nextSession === "endReason" && (
								<section className='mt-5'>
									<label className='fw-semibold fs-3 mt-5'>End reason</label>
									<textarea
										className='textArea form-control '
										placeholder='End Reason'
										id='#'></textarea>
									<div className='d-grid mt-5'>
										<button className='btn btn-secondary'>Save</button>
									</div>
								</section>
							)}
						</nav>
					</div>
					{/*                                      */}
				</div>

				{/* 		button to submit capturing tool									 */}
				<div className='d-grid mt-5'>
					<button
						type='submit'
						className='btn text-light fs-5 p-4 mb-5'
						onClick={submitForm}>
						Submit
					</button>
				</div>
			</div>
			{/* footer section ends */}
		</div>
	);
}
