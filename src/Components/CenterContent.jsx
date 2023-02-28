import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "../Styles/ReactCalender.css";
import "react-calendar/dist/Calendar.css";
import "../Styles/CenterContent.css";
import KeyWordAnswers from "../Data/keyWordAnswers.json";
import KeyWordAnswersAngry from "../Data/keyWordAnswersAngry.json";
import KeyWordAnswersConfused from "../Data/keyWordAnswersConfused.json";
import KeyWordAnswersAnxious from "../Data/keyWordAnswersAnxious.json";
import KeyWordAnswersSad from "../Data/keyWordAnswersSad.json";
import KeyWordAnswersFollowUp from "../Data/keyWordAnswersFollowUp.json";
import HappyEmoji from "../Assets/happyEmotion.png";
import AngryEmoji from "../Assets/angryEmotion.png";
import ConfusedEmoji from "../Assets/confusedEmotion.png";
import AnxiousEmoji from "../Assets/anxiousEmotion.png";
import SadEmoji from "../Assets/sadEmoji.png";

export default function CenterContent(props) {
	const submitContent = props.submitContent;
	const navigate = useNavigate();

	const emotions = ["Happy", "Angry", "Confused", "Anxious", "Sad"];
	// ////storing keyWord answers here for form to work for the moment
	//
	const keyAnswers = [
		"Amazing",
		"Joyful",
		"Excited",
		"Awsome",
		"Satisfied",
		"Exuberant",
		"Flattered",
		"Cheery",
		"Delighted",
		"OverJoyed",
		"Proud",
		"Motivated",
		"Exhilarated",
		"Great",
	];

	const keyAnswersAngry = [
		"Abused",
		"Angry",
		"Displeased",
		"Annoyed",
		"Infuriated",
		"Ill-Tempered",
		"Dissapointed",
		"Embitter",
		"Tantrum",
		"Disturbed",
		"Irritated",
		"Disapprobation",
		"Mad",
		"Contentment",
	];

	const keyAnswersConfused = [
		"Baffled",
		"Bewildered",
		"Dazed",
		"Disorganized",
		"Distracted",
		"Muddled",
		"Perplexed",
		"Troubled",
		"Misinformed",
		"Mislead",
		"Disarranged",
		"Cluttered",
		"Messy",
		"Disoriented",
	];

	const keyAnswersAnxious = [
		"Afraid",
		"Apprehensive",
		"Careful",
		"Concerned",
		"Distressed",
		"Fearful",
		"Fidgety",
		"Nervous",
		"Restless",
		"Scared",
		"Uneasy",
		"Uptight",
		"Uncertain",
		"Discomfort",
	];

	const keyAnswersSad = [
		"Heartbroken",
		"Miserable",
		"Unhappy",
		"Sorry",
		"Tearful",
		"Bad",
		"Worried",
		"Troubled",
		"Depressed",
		"Regretful",
		"Cheerless",
		"Heartsore",
		"Discouraged",
		"Despondent",
	];

	const keyAnswersFollowUp = [
		"Heartbroken",
		"Miserable",
		"Unhappy",
		"Sorry",
		"Tearful",
		"Bad",
		"Worried",
		"Troubled",
		"Depressed",
		"Regretful",
		"Cheerless",
		"Heartsore",
		"Discouraged",
		"Despondent",
	];
	//

	const [nextSession, setNextSession] = useState("newAppoinment");
	// function getOtherAnswer(e) {
	// 	props.setOtherAnswer(e.target.value);
	// }

	useEffect(() => {
		props.recommendedQuestions === "agentReflection"
			? props.setAgentReflectionQuestions(true)
			: props.setAgentReflectionQuestions(false);
	}, [props.recommendedQuestions, props]);

	// function handleAppStart() {
	// 	handleOnChange1();
	// }

	// handleAppStart();

	const handleOnChange1 = (e) => {
		props.setEmotion(emotions[0]);
		const x = document.getElementById("happyEmoji");
		if (x.style.backgroundColor === '') {
			x.style.backgroundColor = '#EFE5FF';
			// Happy
			document.getElementById("happWords").style.backgroundColor = "#EFE5FF"
			document.getElementById("happWords").style.display = "block"
			// Angry
			document.getElementById("angryEmoji").style.backgroundColor = ""
			document.getElementById("angryWords").style.backgroundColor = ""
			document.getElementById("angryWords").style.display = "none"
			// Confused
			document.getElementById("confusedEmoji").style.backgroundColor = ""
			document.getElementById("confusedWords").style.backgroundColor = ""
			document.getElementById("confusedWords").style.display = "none"
			// Anxious
			document.getElementById("anxiousEmoji").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.display = "none"
			// Sad
			document.getElementById("sadEmoji").style.backgroundColor = ""
			document.getElementById("sadWords").style.backgroundColor = ""
			document.getElementById("sadWords").style.display = "none"

			props.setKeyAnswers(true);
			props.setKeyAnswersAngry(false);
			props.setKeyAnswersConfused(false);
			props.setKeyAnswersAnxious(false);
			props.setKeyAnswersSad(false);
		} else {
			x.style.backgroundColor = ''
			document.getElementById("happWords").style.backgroundColor = "#F8F8FF"
			document.getElementById("happWords").style.display = "none"
			props.setKeyAnswers(false);
			props.setKeyAnswersAngry(true);
		}
	};

	const handleOnChange2 = (e) => {
		props.setEmotion(emotions[1]);
		const x = document.getElementById("angryEmoji");
		if (x.style.backgroundColor === '') {
			x.style.backgroundColor = '#EFE5FF';
			document.getElementById("angryWords").style.backgroundColor = "#EFE5FF"
			document.getElementById("angryWords").style.display = "block"

			// Happy
			document.getElementById("happyEmoji").style.backgroundColor = ""
			document.getElementById("happWords").style.backgroundColor = ""
			document.getElementById("happWords").style.display = "none"
			// Confused
			document.getElementById("confusedEmoji").style.backgroundColor = ""
			document.getElementById("confusedWords").style.backgroundColor = ""
			document.getElementById("confusedWords").style.display = "none"
			// Anxious
			document.getElementById("anxiousEmoji").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.display = "none"
			// Sad
			document.getElementById("sadEmoji").style.backgroundColor = ""
			document.getElementById("sadWords").style.backgroundColor = ""
			document.getElementById("sadWords").style.display = "none"

			props.setKeyAnswersAngry(true);
			props.setKeyAnswers(false);
			props.setKeyAnswersConfused(false);
			props.setKeyAnswersAnxious(false);
			props.setKeyAnswersSad(false);
		} else {
			x.style.backgroundColor = ''
			document.getElementById("angryWords").style.backgroundColor = "#F8F8FF"
			document.getElementById("angryWords").style.display = "none"
			props.setKeyAnswersAngry(false);
		}
	};

	const handleOnChange3 = (e) => {
		props.setEmotion(emotions[2]);
		const x = document.getElementById("confusedEmoji");
		if (x.style.backgroundColor === '') {
			x.style.backgroundColor = '#EFE5FF';
			document.getElementById("confusedWords").style.backgroundColor = "#EFE5FF"
			document.getElementById("confusedWords").style.display = "block"

			// Angry
			document.getElementById("angryEmoji").style.backgroundColor = ""
			document.getElementById("angryWords").style.backgroundColor = ""
			document.getElementById("angryWords").style.display = "none"
			// Happy
			document.getElementById("happyEmoji").style.backgroundColor = ""
			document.getElementById("happWords").style.backgroundColor = ""
			document.getElementById("happWords").style.display = "none"
			// Anxious
			document.getElementById("anxiousEmoji").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.display = "none"
			// Sad
			document.getElementById("sadEmoji").style.backgroundColor = ""
			document.getElementById("sadWords").style.backgroundColor = ""
			document.getElementById("sadWords").style.display = "none"

			props.setKeyAnswersConfused(true);
			props.setKeyAnswers(false);
			props.setKeyAnswersAngry(false);
			props.setKeyAnswersAnxious(false);
			props.setKeyAnswersSad(false);
		} else {
			x.style.backgroundColor = ''
			document.getElementById("confusedWords").style.backgroundColor = "#F8F8FF"
			document.getElementById("confusedWords").style.display = "none"
			props.setKeyAnswersConfused(false);
		}
	};

	const handleOnChange4 = (e) => {
		props.setEmotion(emotions[3]);
		const x = document.getElementById("anxiousEmoji");
		if (x.style.backgroundColor === '') {
			x.style.backgroundColor = '#EFE5FF';
			document.getElementById("anxiousWords").style.backgroundColor = "#EFE5FF"
			document.getElementById("anxiousWords").style.display = "block"

			// Angry
			document.getElementById("angryEmoji").style.backgroundColor = ""
			document.getElementById("angryWords").style.backgroundColor = ""
			document.getElementById("angryWords").style.display = "none"
			// Confused
			document.getElementById("confusedEmoji").style.backgroundColor = ""
			document.getElementById("confusedWords").style.backgroundColor = ""
			document.getElementById("confusedWords").style.display = "none"
			// Happy
			document.getElementById("happyEmoji").style.backgroundColor = ""
			document.getElementById("happWords").style.backgroundColor = ""
			document.getElementById("happWords").style.display = "none"
			// Sad
			document.getElementById("sadEmoji").style.backgroundColor = ""
			document.getElementById("sadWords").style.backgroundColor = ""
			document.getElementById("sadWords").style.display = "none"

			props.setKeyAnswersAnxious(true);
			props.setKeyAnswers(false);
			props.setKeyAnswersAngry(false);
			props.setKeyAnswersConfused(false);
			props.setKeyAnswersSad(false);
		} else {
			x.style.backgroundColor = ''
			document.getElementById("anxiousWords").style.backgroundColor = "#F8F8FF"
			document.getElementById("anxiousWords").style.display = "none"
			props.setKeyAnswersAnxious(false);
		}
	};

	const handleOnChange5 = (e) => {
		props.setEmotion(emotions[4]);
		const x = document.getElementById("sadEmoji");
		if (x.style.backgroundColor === '') {
			x.style.backgroundColor = '#EFE5FF';
			document.getElementById("sadWords").style.backgroundColor = "#EFE5FF"
			document.getElementById("sadWords").style.display = "block"

			// Angry
			document.getElementById("angryEmoji").style.backgroundColor = ""
			document.getElementById("angryWords").style.backgroundColor = ""
			document.getElementById("angryWords").style.display = "none"
			// Confused
			document.getElementById("confusedEmoji").style.backgroundColor = ""
			document.getElementById("confusedWords").style.backgroundColor = ""
			document.getElementById("confusedWords").style.display = "none"
			// Anxious
			document.getElementById("anxiousEmoji").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.backgroundColor = ""
			document.getElementById("anxiousWords").style.display = "none"
			// Happy
			document.getElementById("happyEmoji").style.backgroundColor = ""
			document.getElementById("happWords").style.backgroundColor = ""
			document.getElementById("happWords").style.display = "none"


			props.setKeyAnswersSad(true);
			props.setKeyAnswers(false);
			props.setKeyAnswersAngry(false);
			props.setKeyAnswersConfused(false);
			props.setKeyAnswersAnxious(false);
		} else {
			x.style.backgroundColor = ''
			document.getElementById("sadWords").style.backgroundColor = "#F8F8FF"
			document.getElementById("sadWords").style.display = "none"
			props.setKeyAnswersSad(false);
		}
	};

	const handleOnChange7 = (e) => {
		props.setRecommendedQuestions(e.target.value);
	};

	// These functions Reads emotions on left panel and are for the happy Emoji
	function handleEmotionAnswer1(e) {
		props.setKeyAnswerCapture1(keyAnswers[0])
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}

	function handleEmotionAnswer2(e) {
		props.setKeyAnswerCapture2(keyAnswers[1]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer3(e) {
		props.setKeyAnswerCapture3(keyAnswers[2]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer4(e) {
		props.setKeyAnswerCapture4(keyAnswers[3]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer5(e) {
		props.setKeyAnswerCapture5(keyAnswers[4]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer6(e) {
		props.setKeyAnswerCapture6(keyAnswers[5]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer7(e) {
		props.setKeyAnswerCapture7(keyAnswers[6]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer8(e) {
		props.setKeyAnswerCapture8(keyAnswers[7]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer9(e) {
		props.setKeyAnswerCapture9(keyAnswers[8]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer10(e) {
		props.setKeyAnswerCapture10(keyAnswers[9]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer11(e) {
		props.setKeyAnswerCapture11(keyAnswers[10]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer12(e) {
		props.setKeyAnswerCapture12(keyAnswers[11]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer13(e) {
		props.setKeyAnswerCapture13(keyAnswers[12]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswer14(e) {
		props.setKeyAnswerCapture14(keyAnswers[13]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	//

	// These are for the Angry Emoji
	function handleEmotionAnswerAngry1(e) {
		props.setKeyAnswerCaptureAngry1(keyAnswersAngry[0])
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry2(e) {
		props.setKeyAnswerCaptureAngry2(keyAnswersAngry[1]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry3(e) {
		props.setKeyAnswerCaptureAngry3(keyAnswersAngry[2]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry4(e) {
		props.setKeyAnswerCaptureAngry4(keyAnswersAngry[3]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry5(e) {
		props.setKeyAnswerCaptureAngry5(keyAnswersAngry[4]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry6(e) {
		props.setKeyAnswerCaptureAngry6(keyAnswersAngry[5]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry7(e) {
		props.setKeyAnswerCaptureAngry7(keyAnswersAngry[6]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry8(e) {
		props.setKeyAnswerCaptureAngry8(keyAnswersAngry[7]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry9(e) {
		props.setKeyAnswerCaptureAngry9(keyAnswersAngry[8]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry10(e) {
		props.setKeyAnswerCaptureAngry10(keyAnswersAngry[9]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry11(e) {
		props.setKeyAnswerCaptureAngry11(keyAnswersAngry[10]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry12(e) {
		props.setKeyAnswerCaptureAngry12(keyAnswersAngry[11]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry13(e) {
		props.setKeyAnswerCaptureAngry13(keyAnswersAngry[12]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAngry14(e) {
		props.setKeyAnswerCaptureAngry14(keyAnswersAngry[13]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	//

	// These are for the Confused Emoji
	function handleEmotionAnswerConfused1(e) {
		props.setKeyAnswerCaptureConfused1(keyAnswersConfused[0])
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused2(e) {
		props.setKeyAnswerCaptureConfused2(keyAnswersConfused[1]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused3(e) {
		props.setKeyAnswerCaptureConfused3(keyAnswersConfused[2]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused4(e) {
		props.setKeyAnswerCaptureConfused4(keyAnswersConfused[3]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused5(e) {
		props.setKeyAnswerCaptureConfused5(keyAnswersConfused[4]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused6(e) {
		props.setKeyAnswerCaptureConfused6(keyAnswersConfused[5]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused7(e) {
		props.setKeyAnswerCaptureConfused7(keyAnswersConfused[6]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused8(e) {
		props.setKeyAnswerCaptureConfused8(keyAnswersConfused[7]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused9(e) {
		props.setKeyAnswerCaptureConfused9(keyAnswersConfused[8]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused10(e) {
		props.setKeyAnswerCaptureConfused10(keyAnswersConfused[9]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused11(e) {
		props.setKeyAnswerCaptureConfused11(keyAnswersConfused[10]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused12(e) {
		props.setKeyAnswerCaptureConfused12(keyAnswersConfused[11]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused13(e) {
		props.setKeyAnswerCaptureConfused13(keyAnswersConfused[12]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerConfused14(e) {
		props.setKeyAnswerCaptureConfused14(keyAnswersConfused[13]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	//

	// These are for the Anxious Emoji
	function handleEmotionAnswerAnxious1(e) {
		props.setKeyAnswerCaptureAnxious1(keyAnswersAnxious[0])
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious2(e) {
		props.setKeyAnswerCaptureAnxious2(keyAnswersAnxious[1]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious3(e) {
		props.setKeyAnswerCaptureAnxious3(keyAnswersAnxious[2]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious4(e) {
		props.setKeyAnswerCaptureAnxious4(keyAnswersAnxious[3]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious5(e) {
		props.setKeyAnswerCaptureAnxious5(keyAnswersAnxious[4]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious6(e) {
		props.setKeyAnswerCaptureAnxious6(keyAnswersAnxious[5]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious7(e) {
		props.setKeyAnswerCaptureAnxious7(keyAnswersAnxious[6]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious8(e) {
		props.setKeyAnswerCaptureAnxious8(keyAnswersAnxious[7]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious9(e) {
		props.setKeyAnswerCaptureAnxious9(keyAnswersAnxious[8]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious10(e) {
		props.setKeyAnswerCaptureAnxious10(keyAnswersAnxious[9]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious11(e) {
		props.setKeyAnswerCaptureAnxious11(keyAnswersAnxious[10]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious12(e) {
		props.setKeyAnswerCaptureAnxious12(keyAnswersAnxious[11]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious13(e) {
		props.setKeyAnswerCaptureAnxious13(keyAnswersAnxious[12]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerAnxious14(e) {
		props.setKeyAnswerCaptureAnxious14(keyAnswersAnxious[13]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	//

	// These are for the sad emoji
	function handleEmotionAnswerSad1(e) {
		props.setKeyAnswerCaptureSad1(keyAnswersSad[0])
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad2(e) {
		props.setKeyAnswerCaptureSad2(keyAnswersSad[1]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad3(e) {
		props.setKeyAnswerCaptureSad3(keyAnswersSad[2]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad4(e) {
		props.setKeyAnswerCaptureSad4(keyAnswersSad[3]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad5(e) {
		props.setKeyAnswerCaptureSad5(keyAnswersSad[4]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad6(e) {
		props.setKeyAnswerCaptureSad6(keyAnswersSad[5]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad7(e) {
		props.setKeyAnswerCaptureSad7(keyAnswersSad[6]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad8(e) {
		props.setKeyAnswerCaptureSad8(keyAnswersSad[7]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad9(e) {
		props.setKeyAnswerCaptureSad9(keyAnswersSad[8]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad10(e) {
		props.setKeyAnswerCaptureSad10(keyAnswersSad[9]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad11(e) {
		props.setKeyAnswerCaptureSad11(keyAnswersSad[10]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad12(e) {
		props.setKeyAnswerCaptureSad12(keyAnswersSad[11]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad13(e) {
		props.setKeyAnswerCaptureSad13(keyAnswersSad[12]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerSad14(e) {
		props.setKeyAnswerCaptureSad14(keyAnswersSad[13]);
		document.getElementById("readEmoBtn").style.display = "block"
		document.getElementById("readEmotions").style.display = "block"
		document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	//

	// These are for the Follow Up Key Words
	function handleEmotionAnswerFollowUp1(e) {
		props.setKeyAnswerCaptureFollowUp1(keyAnswersFollowUp[0])
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp2(e) {
		props.setKeyAnswerCaptureFollowUp2(keyAnswersFollowUp[1]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp3(e) {
		props.setKeyAnswerCaptureFollowUp3(keyAnswersFollowUp[2]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp4(e) {
		props.setKeyAnswerCaptureFollowUp4(keyAnswersFollowUp[3]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp5(e) {
		props.setKeyAnswerCaptureFollowUp5(keyAnswersFollowUp[4]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp6(e) {
		props.setKeyAnswerCaptureFollowUp6(keyAnswersFollowUp[5]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp7(e) {
		props.setKeyAnswerCaptureFollowUp7(keyAnswersFollowUp[6]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp8(e) {
		props.setKeyAnswerCaptureFollowUp8(keyAnswersFollowUp[7]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp9(e) {
		props.setKeyAnswerCaptureFollowUp9(keyAnswersFollowUp[8]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp10(e) {
		props.setKeyAnswerCaptureFollowUp10(keyAnswersFollowUp[9]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp11(e) {
		props.setKeyAnswerCaptureFollowUp11(keyAnswersFollowUp[10]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp12(e) {
		props.setKeyAnswerCaptureFollowUp12(keyAnswersFollowUp[11]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp13(e) {
		props.setKeyAnswerCaptureFollowUp13(keyAnswersFollowUp[12]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	function handleEmotionAnswerFollowUp14(e) {
		props.setKeyAnswerCaptureFollowUp14(keyAnswersFollowUp[13]);
		// document.getElementById("readEmoBtn").style.display = "block"
		// document.getElementById("readEmotions").style.display = "block"
		// document.getElementById("possibleResponsesBtn").style.display = "block"
	}
	// 

	// code for text input for alternative keyword answer

	function getOtherAnswer(e) {
		props.setAnswerTextInput({
			...props.answerTextInput,
			[e.target.name]: e.target.value,
		});
	}

	let { keyAnswer } = props.answerTextInput;
	function addOtherAnswer() {
		props.setInputArr([...props.inputArr, keyAnswer]);
		console.log(props.inputArr);
		props.setAnswerTextInput({ keyAnswer: "" });
	}

	// function getYouthQuestions(e) {
	// 	props.setYouthQuestions((youthQuestions) => !youthQuestions);
	// }
	// function getAgentQuestions(e) {
	// 	props.setAgentQuestions((agentQuestions) => !agentQuestions);
	// }

	function getYouthReflection(e) {
		props.setYouthTextInput({
			...props.youthTextInput,
			[e.target.name]: e.target.value,
		});
	}

	let { youthOQ, youthFQ, youthFQQ, youthPQ } = props.youthTextInput;
	function addYouthReflection(e) {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthFQQ, youthPQ },
		]);
		// console.log(props.youthInputArr);
		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthFQQ: "", youthPQ: "" });
		document.getElementById("followUpQuestionsBtn").style.backgroundColor = "#789E46"
		document.getElementById("followUpQuestionsBtn").style.animation = false
		document.getElementById("promptQuestionsBtn").style.display = "block"
		document.getElementById("followUpQuestionInput").style.display = "none"
		document.getElementById("youthPromptInput").style.display = "block"
	}

	function addYouthReflection1(e) {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthFQQ, youthPQ },
		]);
		// console.log(props.youthInputArr);
		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthFQQ: "", youthPQ: "" });
		// document.getElementById("followUpQuestionsBtn").style.backgroundColor = "#789E46"
		// document.getElementById("promptQuestionsBtn").style.display = "block"
		document.getElementById("promptQuestionsBtn").style.backgroundColor = "#789E46"
		document.getElementById("promptQuestionsBtn").style.animation = false
		// document.getElementById("followUpQuestionInput").style.display = "none"
		document.getElementById("youthPromptInput").style.display = "none"
		document.getElementById("youthQuestionsBtn").style.display = "block"
		document.getElementById("youthQuestionInput").style.display = "block"
		document.getElementById("youthReflectionHead").style.display = "block"
	}

	function addYouthReflection2(e) {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthFQQ, youthPQ },
		]);
		// console.log(props.youthInputArr);
		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthFQQ: "", youthPQ: "" });
		document.getElementById("possibleResponsesBtn1").style.display = "block"
		// document.getElementById("promptQuestionsBtn").style.display = "block"
		// document.getElementById("promptQuestionsBtn").style.backgroundColor = "#789E46"
		// document.getElementById("promptQuestionsBtn").style.animation = false
		// document.getElementById("followUpQuestionInput").style.display = "none"
		// document.getElementById("youthPromptInput").style.display = "none"
		document.getElementById("youthQuestionsBtn").style.backgroundColor = "#789E46"
		document.getElementById("youthQuestionsBtn").style.animation = false
		// document.getElementById("youthQuestionInput").style.display = "block"
	}

	function addYouthReflection4(e) {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthFQQ, youthPQ },
		]);
		// console.log(props.youthInputArr);
		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthFQQ: "", youthPQ: "" });
		document.getElementById("followUpQuestionsBtn1").style.backgroundColor = "#789E46"
		document.getElementById("followUpQuestionsBtn1").style.animation = false
		document.getElementById("promptQuestionsBtn1").style.display = "block"
		document.getElementById("followUpQuestionInput1").style.display = "none"
		document.getElementById("youthPromptInput1").style.display = "block"
	}

	function addYouthReflection5(e) {
		props.setYouthInputArr([
			...props.youthInputArr,
			{ youthOQ, youthFQ, youthFQQ, youthPQ },
		]);
		// console.log(props.youthInputArr);
		props.setYouthTextInput({ youthOQ: "", youthFQ: "", youthFQQ: "", youthPQ: "" });
		// document.getElementById("followUpQuestionsBtn").style.backgroundColor = "#789E46"
		// document.getElementById("promptQuestionsBtn").style.display = "block"
		document.getElementById("promptQuestionsBtn1").style.backgroundColor = "#789E46"
		document.getElementById("promptQuestionsBtn1").style.animation = false
		// document.getElementById("followUpQuestionInput").style.display = "none"
		document.getElementById("youthPromptInput1").style.display = "none"
		document.getElementById("youthReflection").style.display = "none"
		document.getElementById("agentReflection").style.display = "block"
	}

	function getAgentReflection(e) {
		props.setAgentData({ ...props.agentData, [e.target.name]: e.target.value });
	}

	//
	let { agentOQ } = props.agentData;
	function addAgentReflection() {
		props.setAgentDataArr([...props.agentDataArr, { agentOQ }]);
		props.setAgentData({ agentOQ: "" });
		document.getElementById("agentReflection").style.display = "none"
		document.getElementById("bookings").style.display = "block"
		document.getElementById("finalSubmit").style.display = "block"
	}

	function submitForm() {
		submitContent();
		navigate("/Dashboard");
	}


	return (
		<div className='container' id="centerContent" >
			{/* header section starts */}
			{/* opening question section */}
			<div className='header'>
				<div className='openingQuestion text-center mt-5'>
					<p className='fs-2 fw-semibold'>
						{props.redOpeningQuestion1 ? (
							<div className='fw-normal'>{props.redOpeningQuestion1}</div>
						) : props.redOpeningQuestion2 ? (
							<p className='fw-normal'>{props.redOpeningQuestion2}</p>
						) : props.blueOpeningQuestion1 ? (
							<p className='fw-normal'>{props.blueOpeningQuestion1}</p>
						) : props.blueOpeningQuestion2 ? (
							<p className='fw-normal'>{props.blueOpeningQuestion2}</p>
						) : null}
						{props.printOtherOpeningQuestion.map((otherOQ, ind) => {
							return (
								<div key={ind}>
									<p className='fw-normal'>{otherOQ}</p>
								</div>
							);
						})}
					</p>
				</div>
				<div id="emojis" className='emojis'>
					<div
						value={props.recommendedQuestions}
						className='d-flex justify-content-evenly px-5'>
						<option value=''></option>
						<button
							id="happyEmoji"
							value='happy'
							className='happyEmoji'
							onClick={handleOnChange1}>
							<img src={HappyEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[0]}</span>
						</button>
						<button
							id="angryEmoji"
							value='angry'
							className='angryEmoji'
							onClick={handleOnChange2}>
							<img src={AngryEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[1]}</span>
						</button>
						<button
							id="confusedEmoji"
							value='confused'
							className='confusedEmoji'
							onClick={handleOnChange3}>
							<img src={ConfusedEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[2]}</span>
						</button>
						<button
							id="anxiousEmoji"
							value='anxious'
							className='anxiousEmoji'
							onClick={handleOnChange4}>
							<img src={AnxiousEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[3]}</span>
						</button>
						<button
							id="sadEmoji"
							value='sad'
							className='sadEmoji'
							onClick={handleOnChange5}>
							<img src={SadEmoji} alt='sadEmoji' className='sadEmo' />
							<span className='fs-5'>{emotions[4]}</span>
						</button>
					</div>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			{/* section for triggerd an reason keyword answers */}
			<div className='body mt-5' id='scrollable'>

				{/* These are your happy words */}
				<div id="happWords" className='emptyDivForEmotoinKeyWords'>
					{props.keyAnswers ? (
						<div className=''>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='EKW' onClick={handleEmotionAnswer1}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer1}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer2}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer2}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer3}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer3}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer4}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer4}</p>;
											})}
										</button>

										<button className='EKW' onClick={handleEmotionAnswer5}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>Satisfied</p>;
											})}
										</button>
									</div>
								</div>

								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='EKW' onClick={handleEmotionAnswer6}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>Exuberant</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswer7}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>Flattered</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswer8}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>Cheery</p>;
										})}
									</button>

									<button className='EKW' onClick={handleEmotionAnswer9}>
										{KeyWordAnswers.map((keyAnswers) => {
											return <p className='pt-2'>Delighted</p>;
										})}
									</button>
								</div>

								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='EKW' onClick={handleEmotionAnswer10}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer10}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer11}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer11}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer12}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswer12}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer13}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>Exhilarated</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswer14}>
											{KeyWordAnswers.map((keyAnswers) => {
												return <p className='pt-2'>Great</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>

				{/* These are your angry words */}
				<div id="angryWords" className='emptyDivForEmotoinKeyWords'>
					{props.keyAnswersAngry ? (
						<div className=''>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerAngry1}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry1}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry2}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry2}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry3}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry3}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry4}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry4}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry5}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry5}</p>;
											})}
										</button>
									</div>
								</div>

								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='EKW' onClick={handleEmotionAnswerAngry6}>
										{KeyWordAnswersAngry.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAngry6}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerAngry7}>
										{KeyWordAnswersAngry.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAngry7}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerAngry8}>
										{KeyWordAnswersAngry.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAngry8}</p>;
										})}
									</button>

									<button className='EKW' onClick={handleEmotionAnswerAngry9}>
										{KeyWordAnswersAngry.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAngry9}</p>;
										})}
									</button>
								</div>

								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerAngry10}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry10}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry11}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry11}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry12}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry12}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry13}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry13}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAngry14}>
											{KeyWordAnswersAngry.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAngry14}</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>

				{/* These are your confused words */}
				<div id="confusedWords" className='emptyDivForEmotoinKeyWords'>
					{props.keyAnswersConfused ? (
						<div className=''>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerConfused1}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused1}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused2}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused2}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused3}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused3}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused4}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused4}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused5}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused5}</p>;
											})}
										</button>
									</div>
								</div>

								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='EKW' onClick={handleEmotionAnswerConfused6}>
										{KeyWordAnswersConfused.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerConfused6}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerConfused7}>
										{KeyWordAnswersConfused.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerConfused7}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerConfused8}>
										{KeyWordAnswersConfused.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerConfused8}</p>;
										})}
									</button>

									<button className='EKW' onClick={handleEmotionAnswerConfused9}>
										{KeyWordAnswersConfused.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerConfused9}</p>;
										})}
									</button>
								</div>

								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerConfused10}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused10}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused11}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused11}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused12}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused12}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused13}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused13}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerConfused14}>
											{KeyWordAnswersConfused.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerConfused14}</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>

				{/* These are your anxious words */}
				<div id="anxiousWords" className='emptyDivForEmotoinKeyWords'>
					{props.keyAnswersAnxious ? (
						<div className=''>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerAnxious1}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious1}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious2}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious2}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious3}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious3}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious4}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious4}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious5}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious5}</p>;
											})}
										</button>
									</div>
								</div>

								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='EKW' onClick={handleEmotionAnswerAnxious6}>
										{KeyWordAnswersAnxious.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAnxious6}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerAnxious7}>
										{KeyWordAnswersAnxious.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAnxious7}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerAnxious8}>
										{KeyWordAnswersAnxious.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAnxious8}</p>;
										})}
									</button>

									<button className='EKW' onClick={handleEmotionAnswerAnxious9}>
										{KeyWordAnswersAnxious.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerAnxious9}</p>;
										})}
									</button>
								</div>

								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerAnxious10}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious10}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious11}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious11}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious12}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious12}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious13}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious13}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerAnxious14}>
											{KeyWordAnswersAnxious.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerAnxious14}</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>

				{/* These are your sad word */}
				<div id="sadWords" className='emptyDivForEmotoinKeyWords'>
					{props.keyAnswersSad ? (
						<div className=''>
							<div className='d-flex justify-content-between'>
								<div className='TriggersAnswers'>
									<div className='d-flex flex-column justify-content-around mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerSad1}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad1}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad2}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad2}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad3}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad3}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad4}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad4}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad5}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad5}</p>;
											})}
										</button>
									</div>
								</div>

								<div className='d-flex flex-column justify-content-around mb-2'>
									<button className='EKW' onClick={handleEmotionAnswerSad6}>
										{KeyWordAnswersSad.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerSad6}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerSad7}>
										{KeyWordAnswersSad.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerSad7}</p>;
										})}
									</button>
									<button className='EKW' onClick={handleEmotionAnswerSad8}>
										{KeyWordAnswersSad.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerSad8}</p>;
										})}
									</button>

									<button className='EKW' onClick={handleEmotionAnswerSad9}>
										{KeyWordAnswersSad.map((keyAnswers) => {
											return <p className='pt-2'>{keyAnswers.keyAnswerSad9}</p>;
										})}
									</button>
								</div>

								<div className='ReasonAnswers'>
									<div className='d-flex flex-column mb-2'>
										<button className='EKW' onClick={handleEmotionAnswerSad10}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad10}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad11}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad11}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad12}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad12}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad13}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad13}</p>;
											})}
										</button>
										<button className='EKW' onClick={handleEmotionAnswerSad14}>
											{KeyWordAnswersSad.map((keyAnswers) => {
												return <p className='pt-2'>{keyAnswers.keyAnswerSad14}</p>;
											})}
										</button>
									</div>
								</div>
							</div>
							<div className='otherAnswer mt-5 d-flex w-75'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='OtherAnswer'
										name='keyAnswer'
										value={props.answerTextInput.keyAnswer}
										onChange={getOtherAnswer}
									/>
								</div>
								<button
									className='otherAnswerBtn border-secondary border-2 text-dark rounded'
									onClick={addOtherAnswer}>
									save
								</button>
							</div>
						</div>
					) : null}
				</div>

			</div>
			{/* body section ends */}

			{/* Footer section starst */}
			{/* Youth reflection input */}
			<div className='footer'>
				<div className='mt-5' id="youthReflection">
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					{/* <p>
						{props.youthQuestion1 ? (
							<p>{props.youthQuestion1}</p>
						) : props.youthQuestion2 ? (
							<p>{props.youthQuestion2}</p>
						) : null}
					</p> */}
					<div id="youthQuestionInput">
						<textarea
							className='textArea form-control h-50'
							type='text'
							onChange={getYouthReflection}
							value={props.youthTextInput.youthOQ}
							placeholder='Youth Question'
							name='youthOQ'
							id=''></textarea>
						<div className='d-grid mt-2 mb-4'>
							<button
								onClick={addYouthReflection2}
								className='sm bg-transparent border border-2 rounded '>
								Save
							</button>
						</div>
					</div>
					{/* <p>{props.youthFollowUpQuestions}</p> */}
					<div className="followUpQuestionInput" id="followUpQuestionInput">
						{/* <div className='d-flex flex-row justify-content-around mb-2'>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp1}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp1}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp2}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp2}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp3}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp3}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp4}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp4}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp5}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp5}</p>;
								})}
							</button>
						</div> */}
						<textarea
							className='textArea form-control mt-2 h-50'
							type='text'
							onChange={getYouthReflection}
							value={props.youthTextInput.youthFQ}
							placeholder='Youth follow-up'
							name='youthFQ'
							id='#'></textarea>
						<div className='d-grid mt-2 mb-4'>
							<button
								onClick={addYouthReflection}
								className='sm bg-transparent border border-2 rounded '>
								Save
							</button>
						</div>
					</div>

					{/* <div className="followUpQuestionInput1" id="followUpQuestionInput1">
						<div className='d-flex flex-row justify-content-around mb-2'>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp1}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp1}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp2}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp2}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp3}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp3}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp4}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp4}</p>;
								})}
							</button>
							<button className='EKW' onClick={handleEmotionAnswerFollowUp5}>
								{KeyWordAnswersFollowUp.map((keyAnswers) => {
									return <p className='pt-2'>{keyAnswers.keyAnswerFollowUp5}</p>;
								})}
							</button>
						</div>
						<textarea
							className='textArea form-control mt-2 h-50'
							type='text'
							onChange={getYouthReflection}
							value={props.youthTextInput.youthFQ}
							placeholder='Youth follow-up'
							name='youthFQ'
							id='#'></textarea>
						<div className='d-grid mt-2 mb-4'>
							<button
								onClick={addYouthReflection4}
								className='sm bg-transparent border border-2 rounded '>
								Save
							</button>
						</div>
					</div> */}

					{/* <p>{props.youthPromptQuestions}</p> */}
					<div id="youthPromptInput">
						<textarea
							className='textArea form-control mt-2 h-50'
							type='text'
							onChange={getYouthReflection}
							value={props.youthTextInput.youthPQ}
							placeholder='Youth Prompt'
							name='youthPQ'
							id='#'></textarea>
						<div className='d-grid mt-2'>
							<button
								onClick={addYouthReflection1}
								className='sm bg-transparent border border-2 rounded '>
								Save
							</button>
						</div>
					</div>

					{/* <div id="youthPromptInput1">
						<textarea
							className='textArea form-control mt-2 h-50'
							type='text'
							onChange={getYouthReflection}
							value={props.youthTextInput.youthPQ}
							placeholder='Youth Prompt'
							name='youthPQ'
							id='#'></textarea>
						<div className='d-grid mt-2'>
							<button
								onClick={addYouthReflection5}
								className='sm bg-transparent border border-2 rounded '>
								Save
							</button>
						</div>
					</div> */}
				</div>

				{/*       Agent Reflection Inputs                                  */}
				<div className='mt-5 mb-5' value={props.recommendedQuestions} id="agentReflection">
					<div>
						<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
						{/* <p>{props.agentQuestions}</p> */}
						<button
							className='sm bg-transparent border border-2 rounded mx-2'
							value='agentReflection'
							onClick={handleOnChange7}>
							Get recommended question
						</button>
					</div>
					{/* <p>{props.agentQuestions}</p> */}
					<textarea
						className='textArea form-control'
						onChange={getAgentReflection}
						value={props.agentData.agentOQ}
						name='agentOQ'
						placeholder='Type Reflection'
						id='agentReflectionInput'></textarea>
					<div className='d-grid mt-2'>
						<button
							onClick={addAgentReflection}
							className='sm bg-transparent border border-2 rounded'>
							Save
						</button>
					</div>
				</div>

				{/* calender section                       */}
				<div className='nextCall' id="bookings">
					<h2 className='title'>Session Bookings</h2>
					<div>
						<nav className='mt-5'>
							<div className='d-flex justify-content-between'>
								<button
									className='navBtns btn-secondary'
									onClick={(e) => setNextSession("newAppoinment")}>
									New Appoinment
								</button>
								<button
									className='navBtns btn-secondary'
									onClick={(e) => setNextSession("endReason")}>
									End Reason
								</button>
							</div>

							{nextSession === "newAppoinment" && (
								<div>
									<Calendar
										className='react-calendar'
										minDetail='year'
										// maxDate={new Date(2022, 10, 28)}
										value={props.value}
										onChange={props.onValueChange}
									/>
								</div>
							)}
							{nextSession === "endReason" && (
								<section className='mt-5'>
									<label className='fw-semibold fs-3 mt-5'>End reason</label>
									<textarea
										className='textArea form-control '
										placeholder='End Reason'
										id='#'></textarea>
									<div className='d-grid mt-5'>
										<button className='btn btn-secondary'>Save</button>
									</div>
								</section>
							)}
						</nav>
					</div>
				</div>


				{/* button to submit capturing tool	*/}
				<div className='d-grid mt-5' >
					<button
						id="finalSubmit"
						type='submit'
						className='btn text-light fs-5 p-4 mb-5'
						onClick={submitForm}>
						Submit
					</button>
				</div>
			</div>
			{/* footer section ends */}
		</div>
	);
}
