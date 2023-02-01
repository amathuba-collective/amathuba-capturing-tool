import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "../Styles/ReactCalender.css";
import "react-calendar/dist/Calendar.css";
import "../Styles/CenterContent.css";
import KeyWordAnswers from "../Data/keyWordAnswers.json";
import HappyEmoji from "../Assets/happyEmotion.png";
import AngryEmoji from "../Assets/angryEmotion.png";
import ConfusedEmoji from "../Assets/confusedEmotion.png";
import AnxiousEmoji from "../Assets/anxiousEmotion.png";
import SadEmoji from "../Assets/sadEmoji.png";

export default function CenterContent(props) {
	const submitContent = props.submitContent;
	const navigate = useNavigate();

	const emotions = ["Happy", "Angry", "Confused", "Anxious", "Sad"];
	// ////storinh keyWord answers here for form to work for the moment
	//
	const keyAnswers = [
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
	//

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

	function handleEmotionAnswer1() {
		props.setKeyAnswerCapture1(keyAnswers[0]);
	}
	function handleEmotionAnswer2(e) {
		props.setKeyAnswerCapture2(keyAnswers[1]);
	}
	function handleEmotionAnswer3(e) {
		props.setKeyAnswerCapture3(keyAnswers[2]);
	}
	function handleEmotionAnswer4(e) {
		props.setKeyAnswerCapture4(keyAnswers[3]);
	}
	function handleEmotionAnswer5(e) {
		props.setKeyAnswerCapture5(keyAnswers[4]);
	}
	function handleEmotionAnswer6(e) {
		props.setKeyAnswerCapture6(keyAnswers[5]);
	}
	function handleEmotionAnswer7(e) {
		props.setKeyAnswerCapture7(keyAnswers[6]);
	}
	function handleEmotionAnswer8(e) {
		props.setKeyAnswerCapture8(keyAnswers[7]);
	}
	function handleEmotionAnswer9(e) {
		props.setKeyAnswerCapture9(keyAnswers[8]);
	}
	function handleEmotionAnswer10(e) {
		props.setKeyAnswerCapture10(keyAnswers[9]);
	}
	function handleEmotionAnswer11(e) {
		props.setKeyAnswerCapture11(keyAnswers[10]);
	}
	function handleEmotionAnswer12(e) {
		props.setKeyAnswerCapture12(keyAnswers[11]);
	}
	function handleEmotionAnswer13(e) {
		props.setKeyAnswerCapture13(keyAnswers[12]);
	}
	function handleEmotionAnswer14(e) {
		props.setKeyAnswerCapture14(keyAnswers[13]);
	}

	// code for text input for alternative keyword answer

	function getOtherAnswer(e) {
		props.setAnswerTextInput({
			...props.answerTextInput,
			[e.target.name]: e.target.value,
		});
	}

	let { keyAnswer } = props.answerTextInput;
	function addOtherAnswer() {
		props.setInputArr([...props.inputArr, keyAnswer]);
		console.log(props.inputArr);
		props.setAnswerTextInput({ keyAnswer: "" });
	}

	// function getYouthQuestions(e) {
	// 	props.setYouthQuestions((youthQuestions) => !youthQuestions);
	// }
	// function getAgentQuestions(e) {
	// 	props.setAgentQuestions((agentQuestions) => !agentQuestions);
	// }

	function getYouthReflection(e) {
		props.setYouthTextInput({
			...props.youthTextInput,
			[e.target.name]: e.target.value,
		});
	}

	let { youthOQ, youthFQ, youthPQ } = props.youthTextInput;
	function addYouthReflection() {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthPQ },
		]);
		// console.log(props.youthInputArr);

		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthPQ: "" });
	}

	function getAgentReflection(e) {
		props.setAgentData({ ...props.agentData, [e.target.name]: e.target.value });
	}
	//
	let { agentOQ } = props.agentData;
	function addAgentReflection() {
		props.setAgentDataArr([...props.agentDataArr, { agentOQ }]);

		props.setAgentData({ agentOQ: "" });
	}

	function submitForm() {
		submitContent();
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
							<p className='fw-normal'>{props.redOpeningQuestion1}</p>
						) : props.redOpeningQuestion2 ? (
							<p className='fw-normal'> {props.redOpeningQuestion2}</p>
						) : props.blueOpeningQuestion1 ? (
							<p className='fw-normal'>{props.blueOpeningQuestion1}</p>
						) : props.blueOpeningQuestion2 ? (
							<p className='fw-normal'>{props.blueOpeningQuestion2}</p>
						) : null}
						{props.printOtherOpeningQuestion.map((otherOQ, ind) => {
							return (
								<div key={ind}>
									<p className='fw-normal'>{otherOQ}</p>
								</div>
							);
						})}
					</p>
				</div>
				<div className='emojis'>
					<div
						value={props.recommendedQuestions}
						className='d-flex justify-content-evenly mt-5 px-5'>
						<option value=''></option>
						<button
							value='happy'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange1}>
							<img src={HappyEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[0]}</span>
						</button>
						<button
							value='angry'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange2}>
							<img src={AngryEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[1]}</span>
						</button>
						<button
							value='confused'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange3}>
							<img src={ConfusedEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[2]}</span>
						</button>
						<button
							value='anxious'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange4}>
							<img src={AnxiousEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[3]}</span>
						</button>
						<button
							value='sad'
							className='border-0 bg-transparent fs-1'
							onClick={handleOnChange5}>
							<img src={SadEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[4]}</span>
						</button>
					</div>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			{/* section for triggerd an reason keyword answers */}
			<div className='body mt-5' id='scrollable'>
				<div className='emptyDivForEmotoinKeyWords  mb-5  text-center'>
					{props.keyAnswers ? (
						<div className='section d-flex flex-column justify-content-around'>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='btn-sm' onClick={handleEmotionAnswer1}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer1}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer2}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer2}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer3}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer3}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer4}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer4}</p>;
											})}
										</button>

										<button className='btn-sm' onClick={handleEmotionAnswer5}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer5}</p>;
											})}
										</button>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='btn-sm' onClick={handleEmotionAnswer6}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswer6}</p>;
										})}
									</button>
									<button className='btn-sm' onClick={handleEmotionAnswer7}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswer7}</p>;
										})}
									</button>
									<button className='btn-sm' onClick={handleEmotionAnswer8}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswer8}</p>;
										})}
									</button>

									<button className='btn-sm' onClick={handleEmotionAnswer9}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswer9}</p>;
										})}
									</button>
								</div>
								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='btn-sm' onClick={handleEmotionAnswer10}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer10}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer11}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer11}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer12}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer12}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer13}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer13}</p>;
											})}
										</button>
										<button className='btn-sm' onClick={handleEmotionAnswer14}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer14}</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
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
				<div className='mt-5'>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					<p>
						{props.youthQuestion1 ? (
							<p>{props.youthQuestion1}</p>
						) : props.youthQuestion2 ? (
							<p>{props.youthQuestion2}</p>
						) : null}
					</p>
					<textarea
						className='textArea form-control h-50'
						type='text'
						onChange={getYouthReflection}
						value={props.youthTextInput.youthOQ}
						placeholder='Youth Question'
						name='youthOQ'
						id='#'></textarea>
					<div className='d-grid mt-2 mb-4'>
						<button
							onClick={addYouthReflection}
							className='sm bg-transparent border border-2 rounded '>
							Save
						</button>
					</div>
					<p>{props.youthFollowUpQuestions}</p>
					<textarea
						className='textArea form-control mt-2 h-50'
						type='text'
						onChange={getYouthReflection}
						value={props.youthTextInput.youthFQ}
						placeholder='Youth follow-up'
						name='youthFQ'
						id='#'></textarea>
					<div className='d-grid mt-2 mb-4'>
						<button
							onClick={addYouthReflection}
							className='sm bg-transparent border border-2 rounded '>
							Save
						</button>
					</div>

					<p>{props.youthPromptQuestions}</p>
					<textarea
						className='textArea form-control mt-2 h-50'
						type='text'
						onChange={getYouthReflection}
						value={props.youthTextInput.youthPQ}
						placeholder='Youth Prompt'
						name='youthPQ'
						id='#'></textarea>
					<div className='d-grid mt-2'>
						<button
							onClick={addYouthReflection}
							className='sm bg-transparent border border-2 rounded '>
							Save
						</button>
					</div>
				</div>

				{/*       Agent Reflection Inputs                                  */}
				<div className='mt-5 mb-5' value={props.recommendedQuestions}>
					<div>
						<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
						{/* <p>{props.agentQuestions}</p> */}
						<button
							className='sm bg-transparent border border-2 rounded mx-2'
							value='agentReflection'
							onClick={handleOnChange7}>
							Get recommended question
						</button>
					</div>
					<p>{props.agentQuestions}</p>
					<textarea
						className='textArea form-control'
						onChange={getAgentReflection}
						value={props.agentData.agentOQ}
						name='agentOQ'
						placeholder='Type Reflection'
						id='#'></textarea>
					<div className='d-grid mt-2'>
						<button
							onClick={addAgentReflection}
							className='sm bg-transparent border border-2 rounded'>
							Save
						</button>
					</div>
				</div>

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
