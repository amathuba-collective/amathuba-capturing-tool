import React, { useState } from "react";
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";

export default function WellnessForm() {
	const [openingQuestion, setOpeningQuestion] = useState("");
	const [otherOpeningQuestion, setOtherOpeningQuestion] = useState("");
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] =
		useState("");
	const [recommendedQuestions, setRecommendedQuestions] = useState("");

	const [happyQuestions, setHappyQuestions] = useState(false);
	const [angryQuestions, setAngryQuestions] = useState(false);
	const [confusedQuestions, setConfusedQuestions] = useState(false);
	const [anxiousQuestions, setAnxiousQuestions] = useState(false);
	const [sadQuestions, setSadQuestions] = useState(false);
	const [youthReflectionQuestions, setYouthReflectionQuestions] =
		useState(false);
	const [agentReflectionQuestions, setAgentReflectionQuestions] =
		useState(false);
	const [openingEmotion, updateOpeningEmotion] = useState("");
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

	const entireForm = [
		{ openingQuestion: openingQuestion },
		{ otherOpeningQuestion: otherOpeningQuestion },
		// { emotion: emotion },
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
						openingEmotion={openingEmotion}
						recommendedQuestions={recommendedQuestions}
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
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						openingQuestion={openingQuestion}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						openingEmotion={openingEmotion}
						updateOpeningEmotion={updateOpeningEmotion}
						recommendedQuestions={recommendedQuestions}
						setRecommendedQuestions={setRecommendedQuestions}
						setHappyQuestions={setHappyQuestions}
						setAngryQuestions={setAngryQuestions}
						setConfusedQuestions={setConfusedQuestions}
						setAnxiousQuestions={setAnxiousQuestions}
						setSadQuestions={setSadQuestions}
						setYouthData={setYouthData}
						setPrintYouthData={setPrintYouthData}
						setYouthReflectionQuestions={setYouthReflectionQuestions}
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
						setOpeningQuestion={setOpeningQuestion}
						setOtherOpeningQuestion={setOtherOpeningQuestion}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						setOpeningEmotionQuestion={setOpeningEmotionQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						recommendedQuestions={recommendedQuestions}
						happyQuestions={happyQuestions}
						angryQuestions={angryQuestions}
						confusedQuestions={confusedQuestions}
						anxiousQuestions={anxiousQuestions}
						sadQuestions={sadQuestions}
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
						youthQuestions={youthReflectionQuestions}
						agentQuestions={agentReflectionQuestions}
						setOpeningPromptQuestions={setOpeningPromptQuestions}
						openingPromptQuestions={openingPromptQuestions}
					/>
				</div>
			</div>
		</div>
	);
}
