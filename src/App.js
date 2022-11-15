import React, { useState } from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LeftContent from "./Components/LeftContent";
import CenterContent from "./Components/CenterContent";
import RightContent from "./Components/RightContent";


export default function App() {
	const [openingQuestion, setOpeningQuestion] = useState("");
	const [otherOpeningQuestion, setOtherOpeningQuestion] = useState("")
	// const [printData, setPrintData] = useState("")
	const [happy, setHappy] = useState("")
	const [angry, setAngry] = useState("");
	const [confused, setConfused] = useState("");
	const [bad, setBad] = useState("");
	const [sad, setSad] = useState("");
	const [openingEmotion, updateOpeningEmotion] = useState("");
	const [openingEmotionQuestion, setOpeningEmotionQuestion] = useState
	("");
	const [youthData, setYouthData] = useState("");
	const [youthQuestions, setYouthQuestions] = useState("")
	const [agentData, setAgentData] = useState("");
	const [agentQuestions, setAgentQuestions] = useState("")
	const [happyAnswers, setHappyAnswers] = useState('');
	const [angryAnswers, setAngryAnswers] = useState('');
	const [confusedAnswers, setConfusedAnswers] = useState('');
	const [badAnswers, setBadAnswers] = useState('');
	const [sadAnswers, setSadAnswers] = useState('');
	const [happyAnswersQuestions, setHappyAnswersQuestions] = useState('');
	const [angryAnswersQuestions, setAngryAnswersQuestions] = useState('');
	const [confusedAnswersQuestions, setConfusedAnswersQuestions] = useState('');
	const [badAnswersQuestions, setBadAnswersQuestions] = useState('');
	const [sadAnswersQuestions, setSadAnswersQuestions] = useState('');
	// const [date, setDate] = React.useState(dayjs());
	


	return (
		<div className='container-fluid bg-light'>
			<div className='row'>
				<div className='bg-1 col '>
					<LeftContent
						openingQuestion={openingQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						openingEmotion={openingEmotion}
						openingEmotionQuestion={openingEmotionQuestion}
						youthData={youthData}
						agentData={agentData}
						happyAnswers={happyAnswers}
						angryAnswers={happyAnswers}
						confusedAnswers={happyAnswers}
						badAnswers={happyAnswers}
						sadAnswers={happyAnswers}
						happyAnswersQuestions={happyAnswersQuestions}
						angryAnswersQuestions={angryAnswersQuestions}
						confusedAnswersQuestions={confusedAnswersQuestions}
						badAnswersQuestions={badAnswersQuestions}
						sadAnswersQuestions={sadAnswersQuestions}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						openingQuestion={openingQuestion}
						otherOpeningQuestion={setOtherOpeningQuestion}
						openingEmotion={openingEmotion}
						updateOpeningEmotion={updateOpeningEmotion}
						setHappy={setHappy}
						setAngry={setAngry}
						setConfused={setConfused}
						setBad={setBad}
						setSad={setSad}
						setYouthData={setYouthData}
						setYouthQuestions={setYouthQuestions}
						setAgentQuestions={setAgentQuestions}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
						setAgentData={setAgentData}
						happyAnswers={happyAnswers}
						angryAnswers={angryAnswers}
						confusedAnswers={confusedAnswers}
						badAnswers={badAnswers}
						sadAnswers={sadAnswers}
						setHappyAnswersQuestions={setHappyAnswersQuestions}
						setAngryAnswersQuestions={setAngryAnswersQuestions}
						setConfusedAnswersQuestions={setConfusedAnswersQuestions}
						setBadAnswersQuestions={setBadAnswersQuestions}
						setSadAnswersQuestions={setSadAnswersQuestions}
					/>
				</div>
				<div className='bg-3 col'>
					<RightContent
						setOpeningQuestion={setOpeningQuestion}
						otherOpeningQuestion={setOtherOpeningQuestion}
						setOpeningEmotionQuestion={setOpeningEmotionQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						happy={happy}
						angry={angry}
						confused={confused}
						bad={bad}
						sad={sad}
						setHappyAnswers={setHappyAnswers}
						setAngryAnswers={setAngryAnswers}
						setConfusedAnswers={setConfusedAnswers}
						setBadAnswers={setBadAnswers}
						setSadAnswers={setSadAnswers}
						happyAnswers={happyAnswers}
						angryAnswers={angryAnswers}
						confusedAnswers={confusedAnswers}
						badAnswers={badAnswers}
						sadAnswers={sadAnswers}
						youthQuestions={youthQuestions}
						agentQuestions={agentQuestions}
					/>
				</div>
			</div>

		</div>


	);
}


