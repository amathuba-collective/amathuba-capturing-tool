import React, { useState } from "react";
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";

export default function WellnessForm() {
	const [otherOpeningQuestion, setOtherOpeningQuestion] = useState("");
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] =
		useState("");
	const [recommendedQuestions, setRecommendedQuestions] = useState("");
	const [openingQuestion, setOpeningQuestion] = useState("");
	const [redOpeningQuestion1, setRedOpeningQuestion1] = useState(false);
	const [redOpeningQuestion2, setRedOpeningQuestion2] = useState(false);
	const [blueOpeningQuestion1, setBlueOpeningQuestion1] = useState(false);
	const [blueOpeningQuestion2, setBlueOpeningQuestion2] = useState(false);
	const [youthQuestion1, setYouthQuestion1] = useState(false);
	const [youthQuestion2, setYouthQuestion2] = useState(false);
	useState(false);
	const [agentReflectionQuestions, setAgentReflectionQuestions] =
		useState(false);

	//
	const [redPossibleResponses, setRedPossibleResponses] = useState("");
	const [redFollowUpQuestions, setRedFollowUpQuestions] = useState("");
	const [redPromptQuestions, setRedPromptQuestions] = useState("");
	//

	//
	const [bluePossibleResponses, setBluePossibleResponses] = useState("");
	const [blueFollowUpQuestions, setBlueFollowUpQuestions] = useState("");
	const [bluePromptQuestions, setBluePromptQuestions] = useState("");

	// //
	const [youthPossibleResponses, setYouthPossibleResponses] = useState("");
	const [youthFollowUpQuestions, setYouthFollowUpQuestions] = useState("");
	const [youthPromptQuestions, setYouthPromptQuestions] = useState("");
	//

	const [openingEmotionQuestion, setOpeningEmotionQuestion] = useState("");
	const [youthData, setYouthData] = useState("");
	const [printYouthData, setPrintYouthData] = useState("");
	const [youthQuestions, setYouthQuestions] = useState("");
	const [agentData, setAgentData] = useState("");
	const [printAgentData, setPrintAgentData] = useState("");
	const [agentQuestions, setAgentQuestions] = useState("");

	const [openingPromptQuestions, setOpeningPromptQuestions] = useState("");

	// const [angryAnswers, setAngryAnswers] = useState("");
	// const [confusedAnswers, setConfusedAnswers] = useState("");
	// const [anxiousAnswers, setAnxiousAnswers] = useState("");
	// const [sadAnswers, setSadAnswers] = useState("");
	const [keyAnswers, setKeyAnswers] = useState("");
	const [keyAnswerCapture1, setKeyAnswerCapture1] = useState("");
	const [keyAnswerCapture2, setKeyAnswerCapture2] = useState("");
	const [keyAnswerCapture3, setKeyAnswerCapture3] = useState("");
	const [keyAnswerCapture4, setKeyAnswerCapture4] = useState("");
	const [keyAnswerCapture5, setKeyAnswerCapture5] = useState("");
	const [keyAnswerCapture6, setKeyAnswerCapture6] = useState("");
	const [keyAnswerCapture7, setKeyAnswerCapture7] = useState("");
	const [keyAnswerCapture8, setKeyAnswerCapture8] = useState("");
	const [keyAnswerCapture9, setKeyAnswerCapture9] = useState("");
	const [keyAnswerCapture10, setKeyAnswerCapture10] = useState("");
	const [keyAnswerCapture11, setKeyAnswerCapture11] = useState("");
	const [keyAnswerCapture12, setKeyAnswerCapture12] = useState("");
	const [keyAnswerCapture13, setKeyAnswerCapture13] = useState("");
	const [keyAnswerCapture14, setKeyAnswerCapture14] = useState("");
	// const [angryAnswersCapture, setAngryAnswersCapture] = useState("");
	// const [confusedAnswersCapture, setConfusedAnswersCapture] = useState("");
	// const [anxiousAnswersCapture, setAnxiousAnswersCapture] = useState("");
	// const [sadAnswersCapture, setSadAnswersCapture] = useState("");
	const [answerTextInput, setAnswerTextInput] = useState({
		keyAnswer: "",
	});
	const [inputArr, setInputArr] = useState([]);
	const [youthTextInput, setYouthTextInput] = useState({
		youthOQ: "",
		youthFQ: "",
		youthPQ: "",
	});

	const [youthInputArr, setYouthInputArr] = useState([]);
	const [value, onValueChange] = useState(false);
	const [emotion, setEmotion] = useState("");

	const entireForm = [
		{ openingQuestion: openingQuestion },
		{ otherOpeningQuestion: otherOpeningQuestion },
		{ emotion: emotion },
		{ openingEmotionQuestion: openingEmotionQuestion },
		{ emotionAnswer1: keyAnswerCapture1 },
		{ emotionAnswer2: keyAnswerCapture2 },
		{ emotionAnswer3: keyAnswerCapture3 },
		{ emotionAnswer4: keyAnswerCapture4 },
		{ youthQuestions: youthQuestions },
		{ youthData: youthData },
		{ agentQuestions: agentQuestions },
		{ agentData: agentData },
		{ newAppointment: value },
	];
	//
	const submitContent = () => {
		// document.write(JSON.stringify(entireForm));
		localStorage.setItem("WellnessForm", JSON.stringify(entireForm));
		alert(JSON.stringify(entireForm));
	};

	return (
		<div className='container-fluid bg-light'>
			<div className='row'>
				<div className='bg-1 col '>
					<LeftContent
						openingQuestion={openingQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						printOtherOpeningQuestion={printOtherOpeningQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						redOpeningQuestion1={redOpeningQuestion1}
						redOpeningQuestion2={redOpeningQuestion2}
						blueOpeningQuestion1={blueOpeningQuestion1}
						blueOpeningQuestion2={blueOpeningQuestion2}
						youthQuestion1={youthQuestion1}
						youthQuestion2={youthQuestion2}
						youthData={youthData}
						printYouthData={printYouthData}
						agentData={agentData}
						printAgentData={printAgentData}
						keyAnswers={keyAnswers}
						// angryAnswers={angryAnswers}
						// confusedAnswers={confusedAnswers}
						// anxiousAnswers={anxiousAnswers}
						// sadAnswers={sadAnswers}
						keyAnswerCapture1={keyAnswerCapture1}
						keyAnswerCapture2={keyAnswerCapture2}
						keyAnswerCapture3={keyAnswerCapture3}
						keyAnswerCapture4={keyAnswerCapture4}
						keyAnswerCapture5={keyAnswerCapture5}
						keyAnswerCapture6={keyAnswerCapture6}
						keyAnswerCapture7={keyAnswerCapture7}
						keyAnswerCapture8={keyAnswerCapture8}
						keyAnswerCapture9={keyAnswerCapture9}
						keyAnswerCapture10={keyAnswerCapture10}
						keyAnswerCapture11={keyAnswerCapture11}
						keyAnswerCapture12={keyAnswerCapture12}
						keyAnswerCapture13={keyAnswerCapture13}
						keyAnswerCapture14={keyAnswerCapture14}
						// angryAnswersCapture={angryAnswersCapture}
						// confusedAnswersCapture={confusedAnswersCapture}
						// anxiousAnswersCapture={anxiousAnswersCapture}
						// sadAnswersCapture={sadAnswersCapture}
						// otherAnswerInput={otherAnswerInput}
						// otherAnswer={otherAnswer}
						youthInputArr={youthInputArr}
						inputArr={inputArr}
						youthQuestions={youthQuestions}
						agentReflectionQuestions={agentReflectionQuestions}
						agentQuestions={agentQuestions}
						value={value}
						openingPromptQuestions={openingPromptQuestions}
						emotion={emotion}
						redPossibleResponses={redPossibleResponses}
						bluePossibleResponses={bluePossibleResponses}
						redFollowUpQuestions={redFollowUpQuestions}
						blueFollowUpQuestions={blueFollowUpQuestions}
						bluePromptQuestions={bluePromptQuestions}
						redPromptQuestions={redPromptQuestions}
						youthPossibleResponses={youthPossibleResponses}
						youthFollowUpQuestions={youthFollowUpQuestions}
						youthPromptQuestions={youthPromptQuestions}
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						openingQuestion={openingQuestion}
						setRecommendedQuestions={setRecommendedQuestions}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						redOpeningQuestion1={redOpeningQuestion1}
						redOpeningQuestion2={redOpeningQuestion2}
						blueOpeningQuestion1={blueOpeningQuestion1}
						blueOpeningQuestion2={blueOpeningQuestion2}
						youthQuestion1={youthQuestion1}
						youthQuestion2={youthQuestion2}
						setYouthData={setYouthData}
						setPrintYouthData={setPrintYouthData}
						setAgentReflectionQuestions={setAgentReflectionQuestions}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
						setAgentData={setAgentData}
						setPrintAgentData={setPrintAgentData}
						keyAnswers={keyAnswers}
						// otherAnswer={otherAnswer}
						// angryAnswers={angryAnswers}
						// confusedAnswers={confusedAnswers}
						// anxiousAnswers={anxiousAnswers}
						// sadAnswers={sadAnswers}
						emotion={emotion}
						setEmotion={setEmotion}
						setKeyAnswerCapture1={setKeyAnswerCapture1}
						setKeyAnswerCapture2={setKeyAnswerCapture2}
						setKeyAnswerCapture3={setKeyAnswerCapture3}
						setKeyAnswerCapture4={setKeyAnswerCapture4}
						setKeyAnswerCapture5={setKeyAnswerCapture5}
						setKeyAnswerCapture6={setKeyAnswerCapture6}
						setKeyAnswerCapture7={setKeyAnswerCapture7}
						setKeyAnswerCapture8={setKeyAnswerCapture8}
						setKeyAnswerCapture9={setKeyAnswerCapture9}
						setKeyAnswerCapture10={setKeyAnswerCapture10}
						setKeyAnswerCapture11={setKeyAnswerCapture11}
						setKeyAnswerCapture12={setKeyAnswerCapture12}
						setKeyAnswerCapture13={setKeyAnswerCapture13}
						setKeyAnswerCapture14={setKeyAnswerCapture14}
						// setAngryAnswersCapture={setAngryAnswersCapture}
						// setConfusedAnswersCapture={setConfusedAnswersCapture}
						// setAnxiousAnswersCapture={setAnxiousAnswersCapture}
						// setSadAnswersCapture={setSadAnswersCapture}
						answerTextInput={answerTextInput}
						setAnswerTextInput={setAnswerTextInput}
						inputArr={inputArr}
						setInputArr={setInputArr}
						// setOtherAnswer={setOtherAnswer}
						youthTextInput={youthTextInput}
						setYouthTextInput={setYouthTextInput}
						youthInputArr={youthInputArr}
						setYouthInputArr={setYouthInputArr}
						value={value}
						onValueChange={onValueChange}
						submitContent={submitContent}
					/>
				</div>
				<div className='bg-3 col'>
					<RightContent
						recommendedQuestions={recommendedQuestions}
						setOpeningQuestion={setOpeningQuestion}
						setRedOpeningQuestion1={setRedOpeningQuestion1}
						setRedOpeningQuestion2={setRedOpeningQuestion2}
						setBlueOpeningQuestion1={setBlueOpeningQuestion1}
						setBlueOpeningQuestion2={setBlueOpeningQuestion2}
						setYouthQuestion1={setYouthQuestion1}
						setYouthQuestion2={setYouthQuestion2}
						openingQuestion={openingQuestion}
						redOpeningQuestion1={redOpeningQuestion1}
						redOpeningQuestion2={redOpeningQuestion2}
						blueOpeningQuestion1={blueOpeningQuestion1}
						blueOpeningQuestion2={blueOpeningQuestion2}
						youthQuestion1={youthQuestion1}
						youthQuestion2={youthQuestion2}
						setOtherOpeningQuestion={setOtherOpeningQuestion}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						setOpeningEmotionQuestion={setOpeningEmotionQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						setKeyAnswers={setKeyAnswers}
						// setAngryAnswers={setAngryAnswers}
						// setConfusedAnswers={setConfusedAnswers}
						// setanxiousAnswers={setAnxiousAnswers}
						// setSadAnswers={setSadAnswers}
						// keyAnswers={keyAnswers}
						// angryAnswers={angryAnswers}
						// confusedAnswers={confusedAnswers}
						// anxiousAnswers={anxiousAnswers}
						// sadAnswers={sadAnswers}
						setYouthQuestions={setYouthQuestions}
						setAgentQuestions={setAgentQuestions}
						agentReflectionQuestions={agentReflectionQuestions}
						setOpeningPromptQuestions={setOpeningPromptQuestions}
						openingPromptQuestions={openingPromptQuestions}
						setRedPossibleResponses={setRedPossibleResponses}
						setBluePossibleResponses={setBluePossibleResponses}
						setYouthPossibleResponses={setYouthPossibleResponses}
						setRedFollowUpQuestions={setRedFollowUpQuestions}
						setBlueFollowUpQuestions={setBlueFollowUpQuestions}
						setRedPromptQuestions={setRedPromptQuestions}
						setBluePromptQuestions={setBluePromptQuestions}
						setYouthFollowUpQuestions={setYouthFollowUpQuestions}
						setYouthPromptQuestions={setYouthPromptQuestions}
					/>
				</div>
			</div>
		</div>
	);
}
