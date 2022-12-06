import React from "react";
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";

export default function WellnessForm() {
	const [openingQuestion, setOpeningQuestion] = React.useState("");
	const [otherOpeningQuestion, setOtherOpeningQuestion] = React.useState("");
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] =
		React.useState("");
	const [emotion, setEmotion] = React.useState("");
	const [happy, setHappy] = React.useState("");
	const [angry, setAngry] = React.useState("");
	const [confused, setConfused] = React.useState("");
	const [anxious, setAnxious] = React.useState("");
	const [sad, setSad] = React.useState("");
	const [openingEmotion, updateOpeningEmotion] = React.useState("");
	const [openingEmotionQuestion, setOpeningEmotionQuestion] =
		React.useState("");

	const [youthData, setYouthData] = React.useState("");
	const [printYouthData, setPrintYouthData] = React.useState("");
	const [youthQuestions, setYouthQuestions] = React.useState("");
	const [agentData, setAgentData] = React.useState("");
	const [printAgentData, setPrintAgentData] = React.useState("");
	const [agentQuestions, setAgentQuestions] = React.useState("");
	const [happyAnswers, setHappyAnswers] = React.useState("");
	const [openingPromptQuestions, setOpeningPromptQuestions] =
		React.useState("");
	const [angryAnswers, setAngryAnswers] = React.useState("");
	const [confusedAnswers, setConfusedAnswers] = React.useState("");
	const [anxiousAnswers, setAnxiousAnswers] = React.useState("");
	const [sadAnswers, setSadAnswers] = React.useState("");
	const [happyAnswersCapture1, setHappyAnswersCapture1] = React.useState("");
	const [happyAnswersCapture2, setHappyAnswersCapture2] = React.useState("");
	const [happyAnswersCapture3, setHappyAnswersCapture3] = React.useState("");
	const [happyAnswersCapture4, setHappyAnswersCapture4] = React.useState("");
	const [angryAnswersCapture, setAngryAnswersCapture] = React.useState("");
	const [confusedAnswersCapture, setConfusedAnswersCapture] =
		React.useState("");
	const [anxiousAnswersCapture, setAnxiousAnswersCapture] = React.useState("");
	const [sadAnswersCapture, setSadAnswersCapture] = React.useState("");
	const [otherAnswer, setOtherAnswer] = React.useState("");
	const [printOtherAnswer, setPrintOtherAnswer] = React.useState("");
	const [value, onValueChange] = React.useState(false);

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
						emotion={emotion}
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
						emotion={emotion}
						setEmotion={setEmotion}
						setHappy={setHappy}
						setAngry={setAngry}
						setConfused={setConfused}
						setAnxious={setAnxious}
						setSad={setSad}
						setYouthData={setYouthData}
						setPrintYouthData={setPrintYouthData}
						setYouthQuestions={setYouthQuestions}
						setAgentQuestions={setAgentQuestions}
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
						happy={happy}
						angry={angry}
						confused={confused}
						anxious={anxious}
						sad={sad}
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
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
						setOpeningPromptQuestions={setOpeningPromptQuestions}
						openingPromptQuestions={openingPromptQuestions}
					/>
				</div>
			</div>
		</div>
	);
}
