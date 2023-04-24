/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";
import { useParams } from "react-router-dom";
import { saveYouthDialogue } from "../Services/YouthDialogue";
import { getYouthById } from "../Services/Youth";
import { Grid, Avatar, Text, Loading } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function WellnessForm() {
	const [youth, setYouth] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		getYouthData(id);
	});

	// Add new opening questions
	const [otherOpeningQuestion, setOtherOpeningQuestion] = useState({
		newOpeningQuestion: "",
	});
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] = useState(
		[],
	);

	// DropDown-followUpBtn-rightContent
	// Follow-Up Questions
	const [dropDownActive4, setDropDownActive4] = useState(false);
	//

	const [youthOpeningQuestions, setYouthOpeningQuestions] = useState("");
	const [recommendedQuestions, setRecommendedQuestions] = useState("");
	const [openingQuestion, setOpeningQuestion] = useState("");

	// Red opening questions in right panel
	const [redOpeningQuestion1, setRedOpeningQuestion1] = useState("");
	const [redOpeningQuestion2, setRedOpeningQuestion2] = useState("");

	// Blue openeing questions in right panel
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

	useEffect(() => {
		setKeyAnswers(true);
	}, []);

	const [keyAnswersHappy, setKeyAnswersHappy] = useState("");
	const [keyAnswersAngry, setKeyAnswersAngry] = useState("");
	const [keyAnswersConfused, setKeyAnswersConfused] = useState("");
	const [keyAnswersAnxious, setKeyAnswersAnxious] = useState("");
	const [keyAnswersSad, setKeyAnswersSad] = useState("");
	const [keyAnswersFollowUp, setKeyAnswersFollowUp] = useState("");
	// These captures are for the  Emotion Decider
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
	// These captures are for the happy emoji
	const [keyAnswerCaptureHappy1, setKeyAnswerCaptureHappy1] = useState("");
	const [keyAnswerCaptureHappy2, setKeyAnswerCaptureHappy2] = useState("");
	const [keyAnswerCaptureHappy3, setKeyAnswerCaptureHappy3] = useState("");
	const [keyAnswerCaptureHappy4, setKeyAnswerCaptureHappy4] = useState("");
	const [keyAnswerCaptureHappy5, setKeyAnswerCaptureHappy5] = useState("");
	const [keyAnswerCaptureHappy6, setKeyAnswerCaptureHappy6] = useState("");
	const [keyAnswerCaptureHappy7, setKeyAnswerCaptureHappy7] = useState("");
	const [keyAnswerCaptureHappy8, setKeyAnswerCaptureHappy8] = useState("");
	const [keyAnswerCaptureHappy9, setKeyAnswerCaptureHappy9] = useState("");
	const [keyAnswerCaptureHappy10, setKeyAnswerCaptureHappy10] = useState("");
	const [keyAnswerCaptureHappy11, setKeyAnswerCaptureHappy11] = useState("");
	const [keyAnswerCaptureHappy12, setKeyAnswerCaptureHappy12] = useState("");
	const [keyAnswerCaptureHappy13, setKeyAnswerCaptureHappy13] = useState("");
	const [keyAnswerCaptureHappy14, setKeyAnswerCaptureHappy14] = useState("");
	//

	// These captures are for the angry emoji
	const [keyAnswerCaptureAngry1, setKeyAnswerCaptureAngry1] = useState("");
	const [keyAnswerCaptureAngry2, setKeyAnswerCaptureAngry2] = useState("");
	const [keyAnswerCaptureAngry3, setKeyAnswerCaptureAngry3] = useState("");
	const [keyAnswerCaptureAngry4, setKeyAnswerCaptureAngry4] = useState("");
	const [keyAnswerCaptureAngry5, setKeyAnswerCaptureAngry5] = useState("");
	const [keyAnswerCaptureAngry6, setKeyAnswerCaptureAngry6] = useState("");
	const [keyAnswerCaptureAngry7, setKeyAnswerCaptureAngry7] = useState("");
	const [keyAnswerCaptureAngry8, setKeyAnswerCaptureAngry8] = useState("");
	const [keyAnswerCaptureAngry9, setKeyAnswerCaptureAngry9] = useState("");
	const [keyAnswerCaptureAngry10, setKeyAnswerCaptureAngry10] = useState("");
	const [keyAnswerCaptureAngry11, setKeyAnswerCaptureAngry11] = useState("");
	const [keyAnswerCaptureAngry12, setKeyAnswerCaptureAngry12] = useState("");
	const [keyAnswerCaptureAngry13, setKeyAnswerCaptureAngry13] = useState("");
	const [keyAnswerCaptureAngry14, setKeyAnswerCaptureAngry14] = useState("");
	//

	// These captures are for the confused emoji
	const [keyAnswerCaptureConfused1, setKeyAnswerCaptureConfused1] =
		useState("");
	const [keyAnswerCaptureConfused2, setKeyAnswerCaptureConfused2] =
		useState("");
	const [keyAnswerCaptureConfused3, setKeyAnswerCaptureConfused3] =
		useState("");
	const [keyAnswerCaptureConfused4, setKeyAnswerCaptureConfused4] =
		useState("");
	const [keyAnswerCaptureConfused5, setKeyAnswerCaptureConfused5] =
		useState("");
	const [keyAnswerCaptureConfused6, setKeyAnswerCaptureConfused6] =
		useState("");
	const [keyAnswerCaptureConfused7, setKeyAnswerCaptureConfused7] =
		useState("");
	const [keyAnswerCaptureConfused8, setKeyAnswerCaptureConfused8] =
		useState("");
	const [keyAnswerCaptureConfused9, setKeyAnswerCaptureConfused9] =
		useState("");
	const [keyAnswerCaptureConfused10, setKeyAnswerCaptureConfused10] =
		useState("");
	const [keyAnswerCaptureConfused11, setKeyAnswerCaptureConfused11] =
		useState("");
	const [keyAnswerCaptureConfused12, setKeyAnswerCaptureConfused12] =
		useState("");
	const [keyAnswerCaptureConfused13, setKeyAnswerCaptureConfused13] =
		useState("");
	const [keyAnswerCaptureConfused14, setKeyAnswerCaptureConfused14] =
		useState("");
	//

	// These captures are for the anxious emoji
	const [keyAnswerCaptureAnxious1, setKeyAnswerCaptureAnxious1] = useState("");
	const [keyAnswerCaptureAnxious2, setKeyAnswerCaptureAnxious2] = useState("");
	const [keyAnswerCaptureAnxious3, setKeyAnswerCaptureAnxious3] = useState("");
	const [keyAnswerCaptureAnxious4, setKeyAnswerCaptureAnxious4] = useState("");
	const [keyAnswerCaptureAnxious5, setKeyAnswerCaptureAnxious5] = useState("");
	const [keyAnswerCaptureAnxious6, setKeyAnswerCaptureAnxious6] = useState("");
	const [keyAnswerCaptureAnxious7, setKeyAnswerCaptureAnxious7] = useState("");
	const [keyAnswerCaptureAnxious8, setKeyAnswerCaptureAnxious8] = useState("");
	const [keyAnswerCaptureAnxious9, setKeyAnswerCaptureAnxious9] = useState("");
	const [keyAnswerCaptureAnxious10, setKeyAnswerCaptureAnxious10] =
		useState("");
	const [keyAnswerCaptureAnxious11, setKeyAnswerCaptureAnxious11] =
		useState("");
	const [keyAnswerCaptureAnxious12, setKeyAnswerCaptureAnxious12] =
		useState("");
	const [keyAnswerCaptureAnxious13, setKeyAnswerCaptureAnxious13] =
		useState("");
	const [keyAnswerCaptureAnxious14, setKeyAnswerCaptureAnxious14] =
		useState("");
	//

	// These captures are for the sad emojie
	const [keyAnswerCaptureSad1, setKeyAnswerCaptureSad1] = useState("");
	const [keyAnswerCaptureSad2, setKeyAnswerCaptureSad2] = useState("");
	const [keyAnswerCaptureSad3, setKeyAnswerCaptureSad3] = useState("");
	const [keyAnswerCaptureSad4, setKeyAnswerCaptureSad4] = useState("");
	const [keyAnswerCaptureSad5, setKeyAnswerCaptureSad5] = useState("");
	const [keyAnswerCaptureSad6, setKeyAnswerCaptureSad6] = useState("");
	const [keyAnswerCaptureSad7, setKeyAnswerCaptureSad7] = useState("");
	const [keyAnswerCaptureSad8, setKeyAnswerCaptureSad8] = useState("");
	const [keyAnswerCaptureSad9, setKeyAnswerCaptureSad9] = useState("");
	const [keyAnswerCaptureSad10, setKeyAnswerCaptureSad10] = useState("");
	const [keyAnswerCaptureSad11, setKeyAnswerCaptureSad11] = useState("");
	const [keyAnswerCaptureSad12, setKeyAnswerCaptureSad12] = useState("");
	const [keyAnswerCaptureSad13, setKeyAnswerCaptureSad13] = useState("");
	const [keyAnswerCaptureSad14, setKeyAnswerCaptureSad14] = useState("");
	//

	// These captures are for Follow Up Key Words
	const [keyAnswerCaptureFollowUp1, setKeyAnswerCaptureFollowUp1] =
		useState("");
	const [keyAnswerCaptureFollowUp2, setKeyAnswerCaptureFollowUp2] =
		useState("");
	const [keyAnswerCaptureFollowUp3, setKeyAnswerCaptureFollowUp3] =
		useState("");
	const [keyAnswerCaptureFollowUp4, setKeyAnswerCaptureFollowUp4] =
		useState("");
	const [keyAnswerCaptureFollowUp5, setKeyAnswerCaptureFollowUp5] =
		useState("");
	const [keyAnswerCaptureFollowUp6, setKeyAnswerCaptureFollowUp6] =
		useState("");
	const [keyAnswerCaptureFollowUp7, setKeyAnswerCaptureFollowUp7] =
		useState("");
	const [keyAnswerCaptureFollowUp8, setKeyAnswerCaptureFollowUp8] =
		useState("");
	const [keyAnswerCaptureFollowUp9, setKeyAnswerCaptureFollowUp9] =
		useState("");
	const [keyAnswerCaptureFollowUp10, setKeyAnswerCaptureFollowUp10] =
		useState("");
	const [keyAnswerCaptureFollowUp11, setKeyAnswerCaptureFollowUp11] =
		useState("");
	const [keyAnswerCaptureFollowUp12, setKeyAnswerCaptureFollowUp12] =
		useState("");
	const [keyAnswerCaptureFollowUp13, setKeyAnswerCaptureFollowUp13] =
		useState("");
	const [keyAnswerCaptureFollowUp14, setKeyAnswerCaptureFollowUp14] =
		useState("");
	//

	const [answerTextInput, setAnswerTextInput] = useState({
		keyAnswer: "",
	});
	const [inputArr, setInputArr] = useState([]);
	//
	const [youthTextInput, setYouthTextInput] = useState({
		youthOQ: "",
		youthFQ: "",
		youthFQQ: "",
		youthPQ: "",
	});

	const [youthInputArr, setYouthInputArr] = useState([]);
	//
	const [agentData, setAgentData] = useState({
		agentOQ: "",
	});
	const [agentDataArr, setAgentDataArr] = useState([]);
	//
	const [value, onValueChange] = useState("");
	// const [dateOfCurrentcall, setDateOfCurrentCall] = useState(new Date())
	const [dateOfNextcall, setDateOfNextCall] = useState("");

	const [emotion, setEmotion] = useState("");

	const [redFlag, setRedFlag] = useState(false);

	const getYouthData = async (id) => {
		const youthData = await getYouthById(id);
		setLoading(false);

		if (youthData.error) return setError(youthData.error);
		setYouth(youthData.data.data.youth);
	};

	const data = {
		dialogue: {
			nameOfAgent: "AGENTX",
			nameOfYouth: youth.firstName,
		},
		convo_data: {
			openingQuestion1Red: redOpeningQuestion1,
			openingQuestion2Red: redOpeningQuestion2,
			openingQuestion1Blue: blueOpeningQuestion1,
			openingQuestion2Blue: blueOpeningQuestion2,
			// For Emotion Decider
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
			//
			// For Happy Emoji
			keyAnswerHappy1: keyAnswerCaptureHappy1,
			keyAnswerHappy2: keyAnswerCaptureHappy2,
			keyAnswerHappy3: keyAnswerCaptureHappy3,
			keyAnswerHappy4: keyAnswerCaptureHappy4,
			keyAnswerHappy5: keyAnswerCaptureHappy5,
			keyAnswerHappy6: keyAnswerCaptureHappy6,
			keyAnswerHappy7: keyAnswerCaptureHappy7,
			keyAnswerHappy8: keyAnswerCaptureHappy8,
			keyAnswerHappy9: keyAnswerCaptureHappy9,
			keyAnswerHappy10: keyAnswerCaptureHappy10,
			keyAnswerHappy11: keyAnswerCaptureHappy11,
			keyAnswerHappy12: keyAnswerCaptureHappy12,
			keyAnswerHappy13: keyAnswerCaptureHappy13,
			keyAnswerHappy14: keyAnswerCaptureHappy14,
			//

			// For Angry Emoji
			keyAnswerAngry1: keyAnswerCaptureAngry1,
			keyAnswerAngry2: keyAnswerCaptureAngry2,
			keyAnswerAngry3: keyAnswerCaptureAngry3,
			keyAnswerAngry4: keyAnswerCaptureAngry4,
			keyAnswerAngry5: keyAnswerCaptureAngry5,
			keyAnswerAngry6: keyAnswerCaptureAngry6,
			keyAnswerAngry7: keyAnswerCaptureAngry7,
			keyAnswerAngry8: keyAnswerCaptureAngry8,
			keyAnswerAngry9: keyAnswerCaptureAngry9,
			keyAnswerAngry10: keyAnswerCaptureAngry10,
			keyAnswerAngry11: keyAnswerCaptureAngry11,
			keyAnswerAngry12: keyAnswerCaptureAngry12,
			keyAnswerAngry13: keyAnswerCaptureAngry13,
			keyAnswerAngry14: keyAnswerCaptureAngry14,
			//

			// For Confused Emoji
			keyAnswerConfused1: keyAnswerCaptureConfused1,
			keyAnswerConfused2: keyAnswerCaptureConfused2,
			keyAnswerConfused3: keyAnswerCaptureConfused3,
			keyAnswerConfused4: keyAnswerCaptureConfused4,
			keyAnswerConfused5: keyAnswerCaptureConfused5,
			keyAnswerConfused6: keyAnswerCaptureConfused6,
			keyAnswerConfused7: keyAnswerCaptureConfused7,
			keyAnswerConfused8: keyAnswerCaptureConfused8,
			keyAnswerConfused9: keyAnswerCaptureConfused9,
			keyAnswerConfused10: keyAnswerCaptureConfused10,
			keyAnswerConfused11: keyAnswerCaptureConfused11,
			keyAnswerConfused12: keyAnswerCaptureConfused12,
			keyAnswerConfused13: keyAnswerCaptureConfused13,
			keyAnswerConfused14: keyAnswerCaptureConfused14,
			//

			// For Anxious Emoji
			keyAnswerAnxious1: keyAnswerCaptureAnxious1,
			keyAnswerAnxious2: keyAnswerCaptureAnxious2,
			keyAnswerAnxious3: keyAnswerCaptureAnxious3,
			keyAnswerAnxious4: keyAnswerCaptureAnxious4,
			keyAnswerAnxious5: keyAnswerCaptureAnxious5,
			keyAnswerAnxious6: keyAnswerCaptureAnxious6,
			keyAnswerAnxious7: keyAnswerCaptureAnxious7,
			keyAnswerAnxious8: keyAnswerCaptureAnxious8,
			keyAnswerAnxious9: keyAnswerCaptureAnxious9,
			keyAnswerAnxious10: keyAnswerCaptureAnxious10,
			keyAnswerAnxious11: keyAnswerCaptureAnxious11,
			keyAnswerAnxious12: keyAnswerCaptureAnxious12,
			keyAnswerAnxious13: keyAnswerCaptureAnxious13,
			keyAnswerAnxious14: keyAnswerCaptureAnxious14,
			//

			// For Sad Emoji
			keyAnswerSad1: keyAnswerCaptureSad1,
			keyAnswerSad2: keyAnswerCaptureSad2,
			keyAnswerSad3: keyAnswerCaptureSad3,
			keyAnswerSad4: keyAnswerCaptureSad4,
			keyAnswerSad5: keyAnswerCaptureSad5,
			keyAnswerSad6: keyAnswerCaptureSad6,
			keyAnswerSad7: keyAnswerCaptureSad7,
			keyAnswerSad8: keyAnswerCaptureSad8,
			keyAnswerSad9: keyAnswerCaptureSad9,
			keyAnswerSad10: keyAnswerCaptureSad10,
			keyAnswerSad11: keyAnswerCaptureSad11,
			keyAnswerSad12: keyAnswerCaptureSad12,
			keyAnswerSad13: keyAnswerCaptureSad13,
			keyAnswerSad14: keyAnswerCaptureSad14,
			//

			newKeyAnswer1: inputArr[0],
			newKeyAnswer2: inputArr[1],
			newKeyAnswer3: inputArr[2],
		},

		emotionOfCall: emotion,
		ROQpossibleResponse: redPossibleResponses,
		BOQpossibleResponse: bluePossibleResponses,
		followUpQuestions: {
			roqPromptQuestion: redFollowUpQuestions,
			boqPromptQuestion: blueFollowUpQuestions,

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
		},
		promptQuestions: redPromptQuestions,
		youthOQ1: youthQuestion1,
		youthOqReflectionData: youthInputArr[0],
		youthOQ2: youthQuestion2,
		youthOqReflectionData2: youthInputArr[0],
		youthResponses: youthPossibleResponses,
		youthFollow_UpQuestions: redPromptQuestions,
		youthFqReflectionData: youthInputArr[1],
		youthPrompt_Questions: youthPromptQuestions,
		youthPqReflectionData: youthInputArr[2],
		agentQuestions: agentQuestions,
		agentData: agentDataArr,
		newAppointment: value,
		
		redFlag: redFlag,
	};

	const submitContent = (e) => {
		saveYouthDialogue(data)
			.then((res) => res && alert("saved"))
			.catch(() => {
				alert("Failed to save dialogue");
			});
	};

	return (
		<div className='container-fluid bg-light'>
			{loading && (
				<Grid.Container>
					<Grid>
						<Loading type='default' size='xl' color='secondary' />
					</Grid>
				</Grid.Container>
			)}
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
						keyAnswersHappy={keyAnswersHappy}
						keyAnswersAngry={keyAnswersAngry}
						keyAnswersConfused={keyAnswersConfused}
						keyAnswersAnxious={keyAnswersAnxious}
						keyAnswersSad={keyAnswersSad}
						keyAnswersFollowUp={keyAnswersFollowUp}
						// Emoji Decider
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
						//
						// Happy Emoji
						keyAnswerCaptureHappy1={keyAnswerCaptureHappy1}
						keyAnswerCaptureHappy2={keyAnswerCaptureHappy2}
						keyAnswerCaptureHappy3={keyAnswerCaptureHappy3}
						keyAnswerCaptureHappy4={keyAnswerCaptureHappy4}
						keyAnswerCaptureHappy5={keyAnswerCaptureHappy5}
						keyAnswerCaptureHappy6={keyAnswerCaptureHappy6}
						keyAnswerCaptureHappy7={keyAnswerCaptureHappy7}
						keyAnswerCaptureHappy8={keyAnswerCaptureHappy8}
						keyAnswerCaptureHappy9={keyAnswerCaptureHappy9}
						keyAnswerCaptureHappy10={keyAnswerCaptureHappy10}
						keyAnswerCaptureHappy11={keyAnswerCaptureHappy11}
						keyAnswerCaptureHappy12={keyAnswerCaptureHappy12}
						keyAnswerCaptureHappy13={keyAnswerCaptureHappy13}
						keyAnswerCaptureHappy14={keyAnswerCaptureHappy14}
						//

						// Angry Emoji
						keyAnswerCaptureAngry1={keyAnswerCaptureAngry1}
						keyAnswerCaptureAngry2={keyAnswerCaptureAngry2}
						keyAnswerCaptureAngry3={keyAnswerCaptureAngry3}
						keyAnswerCaptureAngry4={keyAnswerCaptureAngry4}
						keyAnswerCaptureAngry5={keyAnswerCaptureAngry5}
						keyAnswerCaptureAngry6={keyAnswerCaptureAngry6}
						keyAnswerCaptureAngry7={keyAnswerCaptureAngry7}
						keyAnswerCaptureAngry8={keyAnswerCaptureAngry8}
						keyAnswerCaptureAngry9={keyAnswerCaptureAngry9}
						keyAnswerCaptureAngry10={keyAnswerCaptureAngry10}
						keyAnswerCaptureAngry11={keyAnswerCaptureAngry11}
						keyAnswerCaptureAngry12={keyAnswerCaptureAngry12}
						keyAnswerCaptureAngry13={keyAnswerCaptureAngry13}
						keyAnswerCaptureAngry14={keyAnswerCaptureAngry14}
						//

						// Confused Emoji
						keyAnswerCaptureConfused1={keyAnswerCaptureConfused1}
						keyAnswerCaptureConfused2={keyAnswerCaptureConfused2}
						keyAnswerCaptureConfused3={keyAnswerCaptureConfused3}
						keyAnswerCaptureConfused4={keyAnswerCaptureConfused4}
						keyAnswerCaptureConfused5={keyAnswerCaptureConfused5}
						keyAnswerCaptureConfused6={keyAnswerCaptureConfused6}
						keyAnswerCaptureConfused7={keyAnswerCaptureConfused7}
						keyAnswerCaptureConfused8={keyAnswerCaptureConfused8}
						keyAnswerCaptureConfused9={keyAnswerCaptureConfused9}
						keyAnswerCaptureConfused10={keyAnswerCaptureConfused10}
						keyAnswerCaptureConfused11={keyAnswerCaptureConfused11}
						keyAnswerCaptureConfused12={keyAnswerCaptureConfused12}
						keyAnswerCaptureConfused13={keyAnswerCaptureConfused13}
						keyAnswerCaptureConfused14={keyAnswerCaptureConfused14}
						//

						// Anxious Emoji
						keyAnswerCaptureAnxious1={keyAnswerCaptureAnxious1}
						keyAnswerCaptureAnxious2={keyAnswerCaptureAnxious2}
						keyAnswerCaptureAnxious3={keyAnswerCaptureAnxious3}
						keyAnswerCaptureAnxious4={keyAnswerCaptureAnxious4}
						keyAnswerCaptureAnxious5={keyAnswerCaptureAnxious5}
						keyAnswerCaptureAnxious6={keyAnswerCaptureAnxious6}
						keyAnswerCaptureAnxious7={keyAnswerCaptureAnxious7}
						keyAnswerCaptureAnxious8={keyAnswerCaptureAnxious8}
						keyAnswerCaptureAnxious9={keyAnswerCaptureAnxious9}
						keyAnswerCaptureAnxious10={keyAnswerCaptureAnxious10}
						keyAnswerCaptureAnxious11={keyAnswerCaptureAnxious11}
						keyAnswerCaptureAnxious12={keyAnswerCaptureAnxious12}
						keyAnswerCaptureAnxious13={keyAnswerCaptureAnxious13}
						keyAnswerCaptureAnxious14={keyAnswerCaptureAnxious14}
						//

						// Sad Emoji
						keyAnswerCaptureSad1={keyAnswerCaptureSad1}
						keyAnswerCaptureSad2={keyAnswerCaptureSad2}
						keyAnswerCaptureSad3={keyAnswerCaptureSad3}
						keyAnswerCaptureSad4={keyAnswerCaptureSad4}
						keyAnswerCaptureSad5={keyAnswerCaptureSad5}
						keyAnswerCaptureSad6={keyAnswerCaptureSad6}
						keyAnswerCaptureSad7={keyAnswerCaptureSad7}
						keyAnswerCaptureSad8={keyAnswerCaptureSad8}
						keyAnswerCaptureSad9={keyAnswerCaptureSad9}
						keyAnswerCaptureSad10={keyAnswerCaptureSad10}
						keyAnswerCaptureSad11={keyAnswerCaptureSad11}
						keyAnswerCaptureSad12={keyAnswerCaptureSad12}
						keyAnswerCaptureSad13={keyAnswerCaptureSad13}
						keyAnswerCaptureSad14={keyAnswerCaptureSad14}
						//

						// Sad Emoji
						keyAnswerCaptureFollowUp1={keyAnswerCaptureFollowUp1}
						keyAnswerCaptureFollowUp2={keyAnswerCaptureFollowUp2}
						keyAnswerCaptureFollowUp3={keyAnswerCaptureFollowUp3}
						keyAnswerCaptureFollowUp4={keyAnswerCaptureFollowUp4}
						keyAnswerCaptureFollowUp5={keyAnswerCaptureFollowUp5}
						keyAnswerCaptureFollowUp6={keyAnswerCaptureFollowUp6}
						keyAnswerCaptureFollowUp7={keyAnswerCaptureFollowUp7}
						keyAnswerCaptureFollowUp8={keyAnswerCaptureFollowUp8}
						keyAnswerCaptureFollowUp9={keyAnswerCaptureFollowUp9}
						keyAnswerCaptureFollowUp10={keyAnswerCaptureFollowUp10}
						keyAnswerCaptureFollowUp11={keyAnswerCaptureFollowUp11}
						keyAnswerCaptureFollowUp12={keyAnswerCaptureFollowUp12}
						keyAnswerCaptureFollowUp13={keyAnswerCaptureFollowUp13}
						keyAnswerCaptureFollowUp14={keyAnswerCaptureFollowUp14}
						//

						youthTextInput={youthTextInput}
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
						dropDownActive4={dropDownActive4}
						setDropDownActive4={setDropDownActive4}
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
						keyAnswersHappy={keyAnswersHappy}
						keyAnswersAngry={keyAnswersAngry}
						keyAnswersConfused={keyAnswersConfused}
						keyAnswersAnxious={keyAnswersAnxious}
						keyAnswersSad={keyAnswersSad}
						keyAnswersFollowUp={keyAnswersFollowUp}
						setKeyAnswers={setKeyAnswers}
						setKeyAnswersHappy={setKeyAnswersHappy}
						setKeyAnswersAngry={setKeyAnswersAngry}
						setKeyAnswersConfused={setKeyAnswersConfused}
						setKeyAnswersAnxious={setKeyAnswersAnxious}
						setKeyAnswersSad={setKeyAnswersSad}
						setKeyAnswersFollowUp={setKeyAnswersFollowUp}
						emotion={emotion}
						setEmotion={setEmotion}
						// Emoji Decider
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
						//
						// Happy Emoji
						setKeyAnswerCaptureHappy1={setKeyAnswerCaptureHappy1}
						setKeyAnswerCaptureHappy2={setKeyAnswerCaptureHappy2}
						setKeyAnswerCaptureHappy3={setKeyAnswerCaptureHappy3}
						setKeyAnswerCaptureHappy4={setKeyAnswerCaptureHappy4}
						setKeyAnswerCaptureHappy5={setKeyAnswerCaptureHappy5}
						setKeyAnswerCaptureHappy6={setKeyAnswerCaptureHappy6}
						setKeyAnswerCaptureHappy7={setKeyAnswerCaptureHappy7}
						setKeyAnswerCaptureHappy8={setKeyAnswerCaptureHappy8}
						setKeyAnswerCaptureHappy9={setKeyAnswerCaptureHappy9}
						setKeyAnswerCaptureHappy10={setKeyAnswerCaptureHappy10}
						setKeyAnswerCaptureHappy11={setKeyAnswerCaptureHappy11}
						setKeyAnswerCaptureHappy12={setKeyAnswerCaptureHappy12}
						setKeyAnswerCaptureHappy13={setKeyAnswerCaptureHappy13}
						setKeyAnswerCaptureHappy14={setKeyAnswerCaptureHappy14}
						//
						// Angry Emoji
						setKeyAnswerCaptureAngry1={setKeyAnswerCaptureAngry1}
						setKeyAnswerCaptureAngry2={setKeyAnswerCaptureAngry2}
						setKeyAnswerCaptureAngry3={setKeyAnswerCaptureAngry3}
						setKeyAnswerCaptureAngry4={setKeyAnswerCaptureAngry4}
						setKeyAnswerCaptureAngry5={setKeyAnswerCaptureAngry5}
						setKeyAnswerCaptureAngry6={setKeyAnswerCaptureAngry6}
						setKeyAnswerCaptureAngry7={setKeyAnswerCaptureAngry7}
						setKeyAnswerCaptureAngry8={setKeyAnswerCaptureAngry8}
						setKeyAnswerCaptureAngry9={setKeyAnswerCaptureAngry9}
						setKeyAnswerCaptureAngry10={setKeyAnswerCaptureAngry10}
						setKeyAnswerCaptureAngry11={setKeyAnswerCaptureAngry11}
						setKeyAnswerCaptureAngry12={setKeyAnswerCaptureAngry12}
						setKeyAnswerCaptureAngry13={setKeyAnswerCaptureAngry13}
						setKeyAnswerCaptureAngry14={setKeyAnswerCaptureAngry14}
						//
						// Confused Emoji
						setKeyAnswerCaptureConfused1={setKeyAnswerCaptureConfused1}
						setKeyAnswerCaptureConfused2={setKeyAnswerCaptureConfused2}
						setKeyAnswerCaptureConfused3={setKeyAnswerCaptureConfused3}
						setKeyAnswerCaptureConfused4={setKeyAnswerCaptureConfused4}
						setKeyAnswerCaptureConfused5={setKeyAnswerCaptureConfused5}
						setKeyAnswerCaptureConfused6={setKeyAnswerCaptureConfused6}
						setKeyAnswerCaptureConfused7={setKeyAnswerCaptureConfused7}
						setKeyAnswerCaptureConfused8={setKeyAnswerCaptureConfused8}
						setKeyAnswerCaptureConfused9={setKeyAnswerCaptureConfused9}
						setKeyAnswerCaptureConfused10={setKeyAnswerCaptureConfused10}
						setKeyAnswerCaptureConfused11={setKeyAnswerCaptureConfused11}
						setKeyAnswerCaptureConfused12={setKeyAnswerCaptureConfused12}
						setKeyAnswerCaptureConfused13={setKeyAnswerCaptureConfused13}
						setKeyAnswerCaptureConfused14={setKeyAnswerCaptureConfused14}
						//
						// Anxious Emoji
						setKeyAnswerCaptureAnxious1={setKeyAnswerCaptureAnxious1}
						setKeyAnswerCaptureAnxious2={setKeyAnswerCaptureAnxious2}
						setKeyAnswerCaptureAnxious3={setKeyAnswerCaptureAnxious3}
						setKeyAnswerCaptureAnxious4={setKeyAnswerCaptureAnxious4}
						setKeyAnswerCaptureAnxious5={setKeyAnswerCaptureAnxious5}
						setKeyAnswerCaptureAnxious6={setKeyAnswerCaptureAnxious6}
						setKeyAnswerCaptureAnxious7={setKeyAnswerCaptureAnxious7}
						setKeyAnswerCaptureAnxious8={setKeyAnswerCaptureAnxious8}
						setKeyAnswerCaptureAnxious9={setKeyAnswerCaptureAnxious9}
						setKeyAnswerCaptureAnxious10={setKeyAnswerCaptureAnxious10}
						setKeyAnswerCaptureAnxious11={setKeyAnswerCaptureAnxious11}
						setKeyAnswerCaptureAnxious12={setKeyAnswerCaptureAnxious12}
						setKeyAnswerCaptureAnxious13={setKeyAnswerCaptureAnxious13}
						setKeyAnswerCaptureAnxious14={setKeyAnswerCaptureAnxious14}
						//
						// Sad Emojie
						setKeyAnswerCaptureSad1={setKeyAnswerCaptureSad1}
						setKeyAnswerCaptureSad2={setKeyAnswerCaptureSad2}
						setKeyAnswerCaptureSad3={setKeyAnswerCaptureSad3}
						setKeyAnswerCaptureSad4={setKeyAnswerCaptureSad4}
						setKeyAnswerCaptureSad5={setKeyAnswerCaptureSad5}
						setKeyAnswerCaptureSad6={setKeyAnswerCaptureSad6}
						setKeyAnswerCaptureSad7={setKeyAnswerCaptureSad7}
						setKeyAnswerCaptureSad8={setKeyAnswerCaptureSad8}
						setKeyAnswerCaptureSad9={setKeyAnswerCaptureSad9}
						setKeyAnswerCaptureSad10={setKeyAnswerCaptureSad10}
						setKeyAnswerCaptureSad11={setKeyAnswerCaptureSad11}
						setKeyAnswerCaptureSad12={setKeyAnswerCaptureSad12}
						setKeyAnswerCaptureSad13={setKeyAnswerCaptureSad13}
						setKeyAnswerCaptureSad14={setKeyAnswerCaptureSad14}
						//

						// Follow Up Key Words
						setKeyAnswerCaptureFollowUp1={setKeyAnswerCaptureFollowUp1}
						setKeyAnswerCaptureFollowUp2={setKeyAnswerCaptureFollowUp2}
						setKeyAnswerCaptureFollowUp3={setKeyAnswerCaptureFollowUp3}
						setKeyAnswerCaptureFollowUp4={setKeyAnswerCaptureFollowUp4}
						setKeyAnswerCaptureFollowUp5={setKeyAnswerCaptureFollowUp5}
						setKeyAnswerCaptureFollowUp6={setKeyAnswerCaptureFollowUp6}
						setKeyAnswerCaptureFollowUp7={setKeyAnswerCaptureFollowUp7}
						setKeyAnswerCaptureFollowUp8={setKeyAnswerCaptureFollowUp8}
						setKeyAnswerCaptureFollowUp9={setKeyAnswerCaptureFollowUp9}
						setKeyAnswerCaptureFollowUp10={setKeyAnswerCaptureFollowUp10}
						setKeyAnswerCaptureFollowUp11={setKeyAnswerCaptureFollowUp11}
						setKeyAnswerCaptureFollowUp12={setKeyAnswerCaptureFollowUp12}
						setKeyAnswerCaptureFollowUp13={setKeyAnswerCaptureFollowUp13}
						setKeyAnswerCaptureFollowUp14={setKeyAnswerCaptureFollowUp14}
						//
						answerTextInput={answerTextInput}
						setAnswerTextInput={setAnswerTextInput}
						inputArr={inputArr}
						setInputArr={setInputArr}
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
						dropDownActive4={dropDownActive4}
						setDropDownActive4={setDropDownActive4}
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
						setKeyAnswersAngry={setKeyAnswersAngry}
						setKeyAnswersConfused={setKeyAnswersConfused}
						setKeyAnswersAnxious={setKeyAnswersAnxious}
						setKeyAnswerSad={setKeyAnswersSad}
						setKeyAnswersFollowUp={setKeyAnswersFollowUp}
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
