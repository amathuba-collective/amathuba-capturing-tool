import React, { useEffect } from "react";
import "../Styles/RightContent.css";
import OpeniningStateQuestions from "../Data/OpeningQuestion";
import RedOpeningQuestions from "../Data/RedQuestions.json";
import BlueOpeningQuestions from "../Data/BlueQuestions.json";
import YouthQuestions from "../Data/YouthQuestions.json";
import AgentReflectionStateQuestions from "../Data/AgentReflectionQuestions.json";

export default function RightContent(props) {
	// const getOtherOpeningQuestion = (e) => {
	// 	props.setOtherOpeningQuestion(e.target.value);
	// };

	// const onHappyQuestion1Clicked = (e) => {
	// 	props.setOpeningEmotionQuestion(
	// 		HappyStateQuestions.map((happyQuestion) => {
	// 			return <p>{happyQuestion.happyQuestion1}</p>;
	// 		}),
	// 	);
	// 	// props.setHappyAnswers((happyAnswers) => !happyAnswers);
	// };
	// function HandleOpeningQuestion1() {
	// 	props.setOpeningQuestion(
	// 		OpeniningStateQuestions.map((openingQuestion) => {
	// 			return <p>{openingQuestion.openingQuestion1}</p>;
	// 		}),
	// 		props.setHappyAnswers((happyAnswers) => !happyAnswers),
	// 	);
	// }
	// const onHappyQuestion2Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(happyQuestions[1]);
	// 	props.setHappyAnswers((happyAnswers) => !happyAnswers);
	// };
	// const onHappyQuestion3Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(happyQuestions[2]);
	// 	props.setHappyAnswers((happyAnswers) => !happyAnswers);
	// };
	// const onHappyQuestion4Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(happyQuestions[3]);
	// 	props.setHappyAnswers((happyAnswers) => !happyAnswers);
	// };

	// const onAngryQuestion1Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(angryQuestions[0]);
	// 	props.setAngryAnswers((angryAnswers) => !angryAnswers);
	// };
	// const onAngryQuestion2Clicked = (e) => {
	// 	props.setAngryAnswers((angryAnswers) => !angryAnswers);
	// 	// props.setOpeningEmotionQuestion(angryQuestions[1]);
	// };
	// const onAngryQuestion3Clicked = (e) => {
	// 	props.setAngryAnswers((angryAnswers) => !angryAnswers);
	// 	// props.setOpeningEmotionQuestion(angryQuestions[2]);
	// };
	// const onAngryQuestion4Clicked = (e) => {
	// 	props.setAngryAnswers((angryAnswers) => !angryAnswers);
	// 	// props.setOpeningEmotionQuestion(angryQuestions[3]);
	// };

	// const onConfusedQuestion1Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(confusedQuestions[0]);
	// 	props.setConfusedAnswers((confusedAnswers) => !confusedAnswers);
	// };
	// const onConfusedQuestion2Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(confusedQuestions[1]);
	// 	props.setConfusedAnswers((confusedAnswers) => !confusedAnswers);
	// };
	// const onConfusedQuestion3Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(confusedQuestions[2]);
	// 	props.setConfusedAnswers((confusedAnswers) => !confusedAnswers);
	// };
	// const onConfusedQuestion4Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(confusedQuestions[3]);
	// 	props.setConfusedAnswers((confusedAnswers) => !confusedAnswers);
	// 	// alert("answer created")
	// };

	// const onAnxiousQuestion1Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(anxiousQuestions[0]);
	// 	props.setAnxiousAnswers((anxiousAnswers) => !anxiousAnswers);
	// };
	// const onAnxiousQuestion2Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(anxiousQuestions[1]);
	// 	props.setAnxiousAnswers((anxiousAnswers) => !anxiousAnswers);
	// };
	// const onAnxiousQuestion3Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(anxiousQuestions[2]);
	// 	props.setAnxiousAnswers((anxiousAnswers) => !anxiousAnswers);
	// };
	// const onAnxiousQuestion4Clicked = (e) => {
	// 	// props.setOpeningEmotionQuestion(anxiousQuestions[3]);
	// 	props.setAnxiousAnswers((anxiousAnswers) => !anxiousAnswers);
	// 	// alert("answer created")
	// };

	// const onSadQuestion1Clicked = (e) => {
	// 	props.setOpeningEmotionQuestion(sadQuestions[0]);
	// 	props.setSadAnswers((sadAnswers) => !sadAnswers);
	// };
	// const onSadQuestion2Clicked = (e) => {
	// 	props.setOpeningEmotionQuestion(sadQuestions[1]);
	// 	props.setSadAnswers((sadAnswers) => !sadAnswers);
	// };
	// const onSadQuestion3Clicked = (e) => {
	// 	props.setOpeningEmotionQuestion(sadQuestions[2]);
	// 	props.setSadAnswers((sadAnswers) => !sadAnswers);
	// };
	// const onSadQuestion4Clicked = (e) => {
	// 	props.setOpeningEmotionQuestion(sadQuestions[3]);
	// 	props.setSadAnswers((sadAnswers) => !sadAnswers);
	// };

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

	// const onAgentReflectionQ1Clicked = (e) => {
	// 	props.setAgentQuestions(agentReflectionQuestions[0]);
	// };
	// const onAgentReflectionQ2Clicked = (e) => {
	// 	props.setAgentQuestions(agentReflectionQuestions[1]);
	// };
	// const onAgentReflectionQ3Clicked = (e) => {
	// 	props.setAgentQuestions(agentReflectionQuestions[2]);
	// };
	// const onAgentReflectionQ4Clicked = (e) => {
	// 	props.setAgentQuestions(agentReflectionQuestions[3]);
	// };

	// function HandleOpeningQuestion2() {
	// 	props.setOpeningQuestion(
	// 		OpeniningStateQuestions.map((openingQuestion) => {
	// 			return <p>{openingQuestion.openingQuestion2}</p>;
	// 		}),
	// 	);
	// }
	// function HandleOpeningQuestion3() {
	// 	props.setOpeningQuestion(
	// 		OpeniningStateQuestions.map((openingQuestion) => {
	// 			return <p>{openingQuestion.openingQuestion3}</p>;
	// 		}),
	// 	);
	// }
	// function HandleOpeningQuestion4() {
	// 	props.setOpeningQuestion(
	// 		OpeniningStateQuestions.map((openingQuestion) => {
	// 			return <p>{openingQuestion.openingQuestion4}</p>;
	// 		}),
	// 	);
	// }

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

	const handleOnChange = (e) => {
		props.setOpeningQuestion(e.target.value);
	};
	// ////////////////////////
	const renderResult = () => {
		let result;
		props.openingQuestion === ""
			? (result = (
					<div>
						{/* <p>
							Start your Call <br />
							with selected opening Question
						</p> */}
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion2}
										</button>
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
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
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
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

	return (
		// <div className='container-fluid'>
		// 	<div>
		// 		<h2 className='RecommendedQuestions text-center mt-4 fs-2 fw-bold'>
		// 			Recommended Questions
		// 		</h2>
		// 		<hr className='border border-2 border-secondary opacity-50 rounded' />
		// 	</div>
		// 	<h1> {renderResult()}</h1>
		// </div>
		<div className='container-fluid rightContent'>
			<div className='mt-4 d-flex flex-column'>
				<select
					className='form-select dropDown'
					value={props.openingQuestion}
					onChange={handleOnChange}>
					<option value=''>Select Opening Question</option>
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
				</select>
			</div>
			<div>{renderResult()}</div>
		</div>
	);
}
