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

	const keyWordAnswers = [
		"Amazing",
		"Joyful",
		"Excited",
		"Awsome",
		"Lost",
		"Depressed",
		"Dissapointed",
		"Regret",
		"OverWhelmed",
		"OverJoyed",
		"Proud",
		"Motivated",
		"Weak",
		"great",
	];

	const emotions = ["😄", "😡", "🤔", "😰", "🙁"];

	const [nextSession, setNextSession] = useState("newAppoinment");
	// function getOtherAnswer(e) {
	// 	props.setOtherAnswer(e.target.value);
	// }

	useEffect(() => {
		props.recommendedQuestions === "agentReflection"
			? props.setAgentReflectionQuestions(true)
			: props.setAgentReflectionQuestions(false);
	}, [props.recommendedQuestions, props]);

	const handleOnChange1 = (e) => {
		props.setEmotion(emotions[0]);
	};
	const handleOnChange2 = (e) => {
		props.setEmotion(emotions[1]);
	};
	const handleOnChange3 = (e) => {
		props.setEmotion(emotions[2]);
	};
	const handleOnChange4 = (e) => {
		props.setEmotion(emotions[3]);
	};
	const handleOnChange5 = (e) => {
		props.setEmotion(emotions[4]);
	};

	const handleOnChange7 = (e) => {
		props.setRecommendedQuestions(e.target.value);
	};

	function handleEmotionAnswer1(e) {
		props.setHappyAnswersCapture1(keyWordAnswers[0]);
	}
	function handleEmotionAnswer2(e) {
		props.setHappyAnswersCapture2(keyWordAnswers[1]);
	}
	function handleEmotionAnswer3(e) {
		props.setHappyAnswersCapture3(keyWordAnswers[2]);
	}
	function handleEmotionAnswer4(e) {
		props.setHappyAnswersCapture4(keyWordAnswers[3]);
	}

	// function getOtherAnswer(e) {
	// 	props.setOtherAnswer(e.target.value);
	// }

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
					<p className='fs-2 fw-semibold'>
						{props.redOpeningQuestion1 ? (
							<p className='fs-2'>how are you doing today ?</p>
						) : props.redOpeningQuestion2 ? (
							<p className='fs-2'>how are you feeling today ?</p>
						) : props.blueOpeningQuestion1 ? (
							<p className='fs-2'>How are things going at work/home ?</p>
						) : props.blueOpeningQuestion2 ? (
							<p className='fs-2'>
								How is your relationship with your family ?
							</p>
						) : null}
					</p>
				</div>
				<div className=''>
					<div
						value={props.recommendedQuestions}
						className='d-flex justify-content-evenly mt-5'>
						<option value=''></option>
						<button
							value='happy'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange1}>
							😄
						</button>
						<button
							value='angry'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange2}>
							😡
						</button>
						<button
							value='confused'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange3}>
							🤔
						</button>
						<button
							value='anxious'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange4}>
							😰
						</button>
						<button
							value='sad'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange5}>
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
											{keyWordAnswers[0]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer2}>
											{keyWordAnswers[1]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer3}>
											{keyWordAnswers[2]}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer4}>
											{keyWordAnswers[3]}
										</button>

										<button className='btn-sm'>{keyWordAnswers[4]}</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm'>{keyWordAnswers[5]}</button>
									<button className='btn-sm'>{keyWordAnswers[6]}</button>
									<button className='btn-sm'>{keyWordAnswers[7]}</button>

									<button className='btn-sm'>{keyWordAnswers[8]}</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm'>{keyWordAnswers[9]}</button>
										<button className='btn-sm'>{keyWordAnswers[10]}</button>
										<button className='btn-sm'>{keyWordAnswers[11]}</button>
										<button className='btn-sm'>{keyWordAnswers[12]}</button>
										<button className='btn-sm'>{keyWordAnswers[13]}</button>
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
									onClick={() => props.setPrintOtherAnswer(true)}>
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
							{props.youthQuestion1 ? <p>Earlier you said you..?</p> : null}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					{/* <button
						className='sm bg-transparent border border-2 rounded mx-2'
						value='youthReflection'
						onClick={handleOnChange6}>
						Get recommended question
					</button> */}
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
						onClick={handleOnChange7}>
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
