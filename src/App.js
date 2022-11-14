import React, { useState } from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LeftContent from "./Components/LeftContent";
import CenterContent from "./Components/CenterContent";
import RightContent from "./Components/RightContent";


export default function App() {
	const [question, setQuestion] = useState("")
	const [data, updateData] = useState("");
	const [printData, setPrintData] = useState("")
	const [happy, setHappy] = useState("")
	const [angry, setAngry] = useState("");
	const [confused, setConfused] = useState("");
	const [bad, setBad] = useState("");
	const [sad, setSad] = useState("");
	// 
	const [openingEmotion, updateOpeningEmotion] = useState("");
	const [openingEmotionQuestion, setOpeningEmotionQuestion] = useState("");
	const [youthData, setYouthData] = useState("");
	const [agentData, setAgentData] = useState("");
	const [printYouthData, setPrintYouthData] = useState("");
	const [printAgentData, setPrintAgentData] = useState("");
	// const [date, setDate] = React.useState(dayjs());
	const [answer, setAnswer] = useState('');
	// const toggleHappy = (e) =>{
	// 	setHappy(happy => !happy)


	return (
		<div className='container-fluid bg-light'>
			<div className='row'>
				<div className='bg-1 col '>
					<LeftContent
						data={data}
						printData={printData}
						openingEmotion={openingEmotion}
						openingEmotionQuestion={openingEmotionQuestion}
						youthData={youthData}
						agentData={agentData}
						printYouthData={printYouthData}
						printAgentData={printAgentData}
						answer={answer}
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						question={question}
						data={data}
						setPrintData={setPrintData}
						openingEmotion={openingEmotion}
						updateOpeningEmotion={updateOpeningEmotion}
						setHappy={setHappy}
						setAngry={setAngry}
						setConfused={setConfused}
						setBad={setBad}
						setSad={setSad}
						setYouthData={setYouthData}
						setAgentData={setAgentData}
						setPrintYouthData={setPrintYouthData}
						setPrintAgentData={setPrintAgentData}
						// setAnswer={setAnswer}
						answer={answer}
					/>
				</div>
				<div className='bg-3 col'>
					<RightContent
						updateData={updateData}
						setPrintData={setPrintData}
						setQuestion={setQuestion}
						setOpeningEmotionQuestion={setOpeningEmotionQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						happy={happy}
						angry={angry}
						confused={confused}
						bad={bad}
						sad={sad}
						setAnswer={setAnswer}
						answer={answer}
					// date={date}
					/>
				</div>
			</div>

		</div>


	);
}


