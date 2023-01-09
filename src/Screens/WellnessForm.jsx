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
	const [openingEmotionQuestion, setOpeningEmotionQuestion] = useState("");
	const [youthData, setYouthData] = useState("");
	const [printYouthData, setPrintYouthData] = useState("");
	const [youthQuestions, setYouthQuestions] = useState("");
	const [agentData, setAgentData] = useState("");
	const [printAgentData, setPrintAgentData] = useState("");
	const [agentQuestions, setAgentQuestions] = useState("");
	const [happyAnswers, setHappyAnswers] = useState("");
	const [openingPromptQuestions, setOpeningPromptQuestions] = useState("");
	const [angryAnswers, setAngryAnswers] = useState("");
	const [confusedAnswers, setConfusedAnswers] = useState("");
	const [anxiousAnswers, setAnxiousAnswers] = useState("");
	const [sadAnswers, setSadAnswers] = useState("");
	const [happyAnswersCapture1, setHappyAnswersCapture1] = useState("");
	const [happyAnswersCapture2, setHappyAnswersCapture2] = useState("");
	const [happyAnswersCapture3, setHappyAnswersCapture3] = useState("");
	const [happyAnswersCapture4, setHappyAnswersCapture4] = useState("");
	const [angryAnswersCapture, setAngryAnswersCapture] = useState("");
	const [confusedAnswersCapture, setConfusedAnswersCapture] = useState("");
	const [anxiousAnswersCapture, setAnxiousAnswersCapture] = useState("");
	const [sadAnswersCapture, setSadAnswersCapture] = useState("");
	const [otherAnswer, setOtherAnswer] = useState("");
	const [printOtherAnswer, setPrintOtherAnswer] = useState("");
	const [value, onValueChange] = useState(false);
	const [emotion, setEmotion] = useState("");

	const entireForm = [
		{ openingQuestion: openingQuestion },
		{ otherOpeningQuestion: otherOpeningQuestion },
		{ emotion: emotion },
		{ openingEmotionQuestion: openingEmotionQuestion },
		{ emotionAnswer1: happyAnswersCapture1 },
		{ emotionAnswer2: happyAnswersCapture2 },
		{ emotionAnswer3: happyAnswersCapture3 },
		{ emotionAnswer4: happyAnswersCapture4 },
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
						youthData={youthData}
						printYouthData={printYouthData}
						agentData={agentData}
						printAgentData={printAgentData}
						happyAnswers={happyAnswers}
						angryAnswers={angryAnswers}
						confusedAnswers={confusedAnswers}
						anxiousAnswers={anxiousAnswers}
						sadAnswers={sadAnswers}
						happyAnswersCapture1={happyAnswersCapture1}
						happyAnswersCapture2={happyAnswersCapture2}
						happyAnswersCapture3={happyAnswersCapture3}
						happyAnswersCapture4={happyAnswersCapture4}
						angryAnswersCapture={angryAnswersCapture}
						confusedAnswersCapture={confusedAnswersCapture}
						anxiousAnswersCapture={anxiousAnswersCapture}
						sadAnswersCapture={sadAnswersCapture}
						otherAnswer={otherAnswer}
						printOtherAnswer={printOtherAnswer}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
						value={value}
						openingPromptQuestions={openingPromptQuestions}
						emotion={emotion}
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						openingQuestion={openingQuestion}
						setRecommendedQuestions={setRecommendedQuestions}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						setYouthData={setYouthData}
						setPrintYouthData={setPrintYouthData}
						setAgentReflectionQuestions={setAgentReflectionQuestions}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
						setAgentData={setAgentData}
						setPrintAgentData={setPrintAgentData}
						happyAnswers={happyAnswers}
						angryAnswers={angryAnswers}
						confusedAnswers={confusedAnswers}
						anxiousAnswers={anxiousAnswers}
						sadAnswers={sadAnswers}
						emotion={emotion}
						setEmotion={setEmotion}
						setHappyAnswersCapture1={setHappyAnswersCapture1}
						setHappyAnswersCapture2={setHappyAnswersCapture2}
						setHappyAnswersCapture3={setHappyAnswersCapture3}
						setHappyAnswersCapture4={setHappyAnswersCapture4}
						setAngryAnswersCapture={setAngryAnswersCapture}
						setConfusedAnswersCapture={setConfusedAnswersCapture}
						setAnxiousAnswersCapture={setAnxiousAnswersCapture}
						setSadAnswersCapture={setSadAnswersCapture}
						setOtherAnswer={setOtherAnswer}
						setPrintOtherAnswer={setPrintOtherAnswer}
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
						setHappyAnswers={setHappyAnswers}
						setAngryAnswers={setAngryAnswers}
						setConfusedAnswers={setConfusedAnswers}
						setanxiousAnswers={setAnxiousAnswers}
						setSadAnswers={setSadAnswers}
						happyAnswers={happyAnswers}
						angryAnswers={angryAnswers}
						confusedAnswers={confusedAnswers}
						anxiousAnswers={anxiousAnswers}
						sadAnswers={sadAnswers}
						setYouthQuestions={setYouthQuestions}
						setAgentQuestions={setAgentQuestions}
						agentQuestions={agentReflectionQuestions}
						setOpeningPromptQuestions={setOpeningPromptQuestions}
						openingPromptQuestions={openingPromptQuestions}
					/>
				</div>
			</div>
		</div>
	);
}
