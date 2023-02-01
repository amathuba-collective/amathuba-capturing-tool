import React, { useState } from "react";
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";

export default function WellnessForm() {
	const { id } = useParams();

	const { data: youth, loading } = useFetch(
		"http://localhost:2001/Youth/" + id,
	);

	const [otherOpeningQuestion, setOtherOpeningQuestion] = useState({
		newOpeningQuestion: "",
	});
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] = useState(
		[],
	);
	const [youthOpeningQuestions, setYouthOpeningQuestions] = useState("");
	const [recommendedQuestions, setRecommendedQuestions] = useState("");
	const [openingQuestion, setOpeningQuestion] = useState("");
	const [redOpeningQuestion1, setRedOpeningQuestion1] = useState("");
	const [redOpeningQuestion2, setRedOpeningQuestion2] = useState("");
	const [blueOpeningQuestion1, setBlueOpeningQuestion1] = useState("");
	const [blueOpeningQuestion2, setBlueOpeningQuestion2] = useState("");
	const [youthQuestion1, setYouthQuestion1] = useState(false);
	const [youthQuestion2, setYouthQuestion2] = useState(false);
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

	const [agentQuestions, setAgentQuestions] = useState("");

	const [openingPromptQuestions, setOpeningPromptQuestions] = useState("");
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

	//
	const [answerTextInput, setAnswerTextInput] = useState({
		keyAnswer: "",
	});
	const [inputArr, setInputArr] = useState([]);
	//
	const [youthTextInput, setYouthTextInput] = useState({
		youthOQ: "",
		youthFQ: "",
		youthPQ: "",
	});

	const [youthInputArr, setYouthInputArr] = useState([]);
	//
	const [agentData, setAgentData] = useState({
		agentOQ: "",
	});
	const [agentDataArr, setAgentDataArr] = useState([]);
	//
	const [value, onValueChange] = useState(false);
	const [emotion, setEmotion] = useState("");
	const [redFlag, setRedFlag] = useState(false);

	////!WHAT NEEDS TO BE SAVED
	// 1 opening emotion emoji
	///
	// 2 red opening questions
	//-> key word answers
	///--> Possible responses
	///--->follow-up questions
	//---->key word answers
	///--->prompt questions
	//---->key word answers
	///

	////
	// 2 blue opening questions
	//-> key word answers
	///--> possible responses
	///---> follow-up questions
	//---->key word answers
	///--->Prompt questions
	//---->keyword answers
	////

	/////
	// 2 youth questions
	//-> youth textinput question answer
	///--> youth possible responeses
	///---> youth follow-up questions
	//---->youth follow-up textinput answer
	///---> youth prompt questions
	//---->youthh prompt question text input answer

	// 4 agent questions
	//-> agent question textinput answer
	// new call appoinment
	//-> the chosen date

	const entireForm = [
		{
			//red and blue opening questions
			openingQuestion1Red: redOpeningQuestion1,
			openingQuestion2Red: redOpeningQuestion2,
			openingQuestion1Blue: blueOpeningQuestion1,
			openingQuestion2Blue: blueOpeningQuestion2,
			////answers to opening questions are below
			keyAnswer1: keyAnswerCapture1,
			keyAnswer2: keyAnswerCapture2,
			keyAnswer3: keyAnswerCapture3,
			keyAnswer4: keyAnswerCapture4,
			keyAnswer5: keyAnswerCapture5,
			keyAnswer6: keyAnswerCapture6,
			keyAnswer7: keyAnswerCapture7,
			keyAnswer8: keyAnswerCapture8,
			keyAnswer9: keyAnswerCapture9,
			keyAnswer10: keyAnswerCapture10,
			keyAnswer11: keyAnswerCapture11,
			keyAnswer12: keyAnswerCapture12,
			keyAnswer13: keyAnswerCapture13,
			keyAnswer14: keyAnswerCapture14,
			newKeyAnswer1: inputArr[0],
			newKeyAnswer2: inputArr[1],
			newKeyAnswer3: inputArr[2],
			//
		}, ///// opening questions and key word an keyword input answers are being stored

		// call emotion
		{ emotionOfCall: emotion }, /// emotion of call is stored
		//
		// possible responses to opening questions
		{
			ROQpossibleResponse: redPossibleResponses,
			BOQpossibleResponse: bluePossibleResponses,
			///opening question possible responses are being stored
		},

		{
			roqFollowUpQuestion: redFollowUpQuestions,
			boqFollowUpQuestion: blueFollowUpQuestions,
			keyAnswer1: keyAnswerCapture1,
			keyAnswer2: keyAnswerCapture2,
			keyAnswer3: keyAnswerCapture3,
			keyAnswer4: keyAnswerCapture4,
			keyAnswer5: keyAnswerCapture5,
			keyAnswer6: keyAnswerCapture6,
			keyAnswer7: keyAnswerCapture7,
			keyAnswer8: keyAnswerCapture8,
			keyAnswer9: keyAnswerCapture9,
			keyAnswer10: keyAnswerCapture10,
			keyAnswer11: keyAnswerCapture11,
			keyAnswer12: keyAnswerCapture12,
			keyAnswer13: keyAnswerCapture13,
			keyAnswer14: keyAnswerCapture14,
			newKeyAnswer1: inputArr[0],
			newKeyAnswer2: inputArr[1],
			newKeyAnswer3: inputArr[2],
		}, // 	/// opening question follow-up question an key word answers are being saved
		{
			roqPromptQuestion: redPromptQuestions,
			boqPromptQuestion: bluePromptQuestions,
			// answers to prompt opening questions are below
			keyAnswer1: keyAnswerCapture1,
			keyAnswer2: keyAnswerCapture2,
			keyAnswer3: keyAnswerCapture3,
			keyAnswer4: keyAnswerCapture4,
			keyAnswer5: keyAnswerCapture5,
			keyAnswer6: keyAnswerCapture6,
			keyAnswer7: keyAnswerCapture7,
			keyAnswer8: keyAnswerCapture8,
			keyAnswer9: keyAnswerCapture9,
			keyAnswer10: keyAnswerCapture10,
			keyAnswer11: keyAnswerCapture11,
			keyAnswer12: keyAnswerCapture12,
			keyAnswer13: keyAnswerCapture13,
			keyAnswer14: keyAnswerCapture14,
			newKeyAnswer1: inputArr[0],
			newKeyAnswer2: inputArr[1],
			newKeyAnswer3: inputArr[2],
		}, /// opening question prompt question an key word answers are being saved

		{
			youthOQ1: youthQuestion1,
			youthOqReflectionData: youthInputArr[0],
			//
			youthOQ2: youthQuestion2,
			youthOqReflectionData2: youthInputArr[0],
		},
		//
		{ youthResponses: youthPossibleResponses },
		//
		{
			youthFollow_UpQuestions: youthFollowUpQuestions,
			youthFqReflectionData: youthInputArr[1],
		},
		//
		{
			youthPrompt_Questions: youthPromptQuestions,
			youthPqReflectionData: youthInputArr[2],
		},

		// need to sort out youth correctly
		//

		{ agentQuestions: agentQuestions, agentData: agentDataArr[0] }, ///// youth question an data is being captured
		{ newAppointment: value }, // date is being captured
		{ redFlag: redFlag },
	];
	//

	let allFormData = [];
	const submitContent = (e) => {
		// localStorage.setItem("WellnessForm", JSON.stringify(entireForm));
		// document.write(JSON.stringify(entireForm));

		// fetch("http://localhost:2001/Youth?_embed=formData" + id, {
		// 	method: "POST",
		// 	headers: { "Content-Type": "Application/json" },
		// 	body: JSON.stringify(allFormData.push(entireForm)),
		// }).then(() => {
		// 	console.log("form data has been stored");
		// });
		allFormData.push(entireForm);

		console.log(allFormData);
	};

	return (
		<div className='container-fluid bg-light'>
			{loading && <div>...content is loading</div>}
			<div className='row'>
				<div className='bg-1 col '>
					<LeftContent
						youth={youth}
						youthOpeningQuestions={youthOpeningQuestions}
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
						agentDataArr={agentDataArr}
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
						setRedFlag={setRedFlag}
						redFlag={redFlag}
					/>
				</div>
				<div className='bg-2 col-6 text-dark'>
					<CenterContent
						youthOpeningQuestions={youthOpeningQuestions}
						openingQuestion={openingQuestion}
						setRecommendedQuestions={setRecommendedQuestions}
						printOtherOpeningQuestion={printOtherOpeningQuestion}
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
						agentData={agentData}
						setAgentDataArr={setAgentDataArr}
						agentDataArr={agentDataArr}
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
						youthFollowUpQuestions={youthFollowUpQuestions}
						youthPromptQuestions={youthPromptQuestions}
					/>
				</div>
				<div className='bg-3 col'>
					<RightContent
						recommendedQuestions={recommendedQuestions}
						setOpeningQuestion={setOpeningQuestion}
						setYouthOpeningQuestions={setYouthOpeningQuestions}
						setRedOpeningQuestion1={setRedOpeningQuestion1}
						setRedOpeningQuestion2={setRedOpeningQuestion2}
						setBlueOpeningQuestion1={setBlueOpeningQuestion1}
						setBlueOpeningQuestion2={setBlueOpeningQuestion2}
						setYouthQuestion1={setYouthQuestion1}
						setYouthQuestion2={setYouthQuestion2}
						openingQuestion={openingQuestion}
						youthOpeningQuestions={youthOpeningQuestions}
						redOpeningQuestion1={redOpeningQuestion1}
						redOpeningQuestion2={redOpeningQuestion2}
						blueOpeningQuestion1={blueOpeningQuestion1}
						blueOpeningQuestion2={blueOpeningQuestion2}
						youthQuestion1={youthQuestion1}
						youthQuestion2={youthQuestion2}
						setOtherOpeningQuestion={setOtherOpeningQuestion}
						otherOpeningQuestion={otherOpeningQuestion}
						setPrintOtherOpeningQuestion={setPrintOtherOpeningQuestion}
						setOpeningEmotionQuestion={setOpeningEmotionQuestion}
						openingEmotionQuestion={openingEmotionQuestion}
						printOtherOpeningQuestion={printOtherOpeningQuestion}
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
