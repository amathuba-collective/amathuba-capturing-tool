import React from "react";
import "../Styles/RightContent.css";
import OpeniningStateQuestions from "../Data/OpeningQuestion.json";
import HappyStateQuestions from "../Data/HappyQuestions.json";
import AngryStateQuestions from "../Data/AngryQuestions.json";
import ConfusedStateQuestions from "../Data/ConfusedQuestions.json";
import AnxiousStateQuestions from "../Data/AnxiousQuestions.json";
import SadStateQuestions from "../Data/SadQuestions.json";
import YouthReflectionStateQuestions from "../Data/YouthReflectionQuestions.json";
import AgentReflectionStateQuestions from "../Data/AgentReflectionQuestions.json";

export default function RightContent(props) {
	// const getOtherOpeningQuestion = (e) => {
	// 	props.setOtherOpeningQuestion(e.target.value);
	// };

	const onHappyQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(
			HappyStateQuestions.map((happyQuestion) => {
				return <p>{happyQuestion.happyQuestion1}</p>;
			}),
		);
		props.setHappyAnswers((happyAnswers) => !happyAnswers);
	};
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

	const onYouthReflectionQ1Clicked = () => {
		props.setYouthQuestions(
			YouthReflectionStateQuestions.map((youthReflectionQuestion) => {
				return <p>{youthReflectionQuestion.youthReflectionQuestion1}</p>;
			}),
		);
	};
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

	function HandleOpeningQuestion1() {
		props.setOpeningQuestion(
			OpeniningStateQuestions.map((openingQuestion) => {
				return <p>{openingQuestion.openingQuestion1}</p>;
			}),
		);
	}
	function HandleOpeningQuestion2() {
		props.setOpeningQuestion(
			OpeniningStateQuestions.map((openingQuestion) => {
				return <p>{openingQuestion.openingQuestion2}</p>;
			}),
		);
	}
	function HandleOpeningQuestion3() {
		props.setOpeningQuestion(
			OpeniningStateQuestions.map((openingQuestion) => {
				return <p>{openingQuestion.openingQuestion3}</p>;
			}),
		);
	}
	function HandleOpeningQuestion4() {
		props.setOpeningQuestion(
			OpeniningStateQuestions.map((openingQuestion) => {
				return <p>{openingQuestion.openingQuestion4}</p>;
			}),
		);
	}

	const renderResult = () => {
		let result;
		props.recommendedQuestions === ""
			? (result = (
					<div>
						<div>
							<p className='text-center fs-3 fw-semibold mt-4 mb-3'>
								Opening Questions
							</p>
						</div>
						<div>
							{" "}
							{OpeniningStateQuestions.map((openingQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={HandleOpeningQuestion1}>
												{openingQuestion.openingQuestion1}
											</button>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={HandleOpeningQuestion2}>
												{openingQuestion.openingQuestion2}
											</button>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={HandleOpeningQuestion3}>
												{openingQuestion.openingQuestion3}
											</button>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={HandleOpeningQuestion4}>
												{openingQuestion.openingQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "happy"
			? (result = (
					<div>
						<div className='text-center'>Follow-up Questions</div>
						<div>
							{" "}
							{HappyStateQuestions.map((happyQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={onHappyQuestion1Clicked}>
												{happyQuestion.happyQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "angry"
			? (result = (
					<div>
						<div className='text-center'>Angry Questions</div>
						<div>
							{" "}
							{AngryStateQuestions.map((angryQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "confused"
			? (result = (
					<div>
						<div className='text-center'>Confused Questions</div>
						<div>
							{" "}
							{ConfusedStateQuestions.map((confusedQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "anxious"
			? (result = (
					<div>
						<div className='text-center'>Anxious Questions</div>
						<div>
							{" "}
							{AnxiousStateQuestions.map((anxiousQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "sad"
			? (result = (
					<div>
						<div className='text-center'>Sad Questions</div>
						<div>
							{" "}
							{SadStateQuestions.map((sadQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "youthReflection"
			? (result = (
					<div>
						<div className='text-center'>youthReflection Questions</div>
						<div>
							{" "}
							{YouthReflectionStateQuestions.map((youthReflectionQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button
												className=' border-1 border-secondary rounded mb-2 p-1 fs-5'
												onClick={onYouthReflectionQ1Clicked}>
												{youthReflectionQuestion.youthReflectionQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "agentReflection"
			? (result = (
					<div>
						<div className='text-center'>AgentReflection Questions</div>
						<div>
							{" "}
							{AgentReflectionStateQuestions.map((agentReflectionQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: (result = "");
		return result;
	};

	return (
		<div className='container-fluid'>
			<div>
				<h2 className='RecommendedQuestions text-center mt-4 fs-2 fw-bold'>
					Recommended Questions
				</h2>
				<hr className='border border-2 border-secondary opacity-50 rounded' />
			</div>
			<h1> {renderResult()}</h1>
		</div>
	);
}
