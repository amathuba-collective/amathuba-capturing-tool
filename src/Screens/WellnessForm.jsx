import React from "react"
import LeftContent from "../Components/LeftContent";
import CenterContent from "../Components/CenterContent";
import RightContent from "../Components/RightContent";

export default function WellnessForm(){
    const [openingQuestion, setOpeningQuestion] = React.useState("");
	const [otherOpeningQuestion, setOtherOpeningQuestion] = React.useState("");
	const [printOtherOpeningQuestion, setPrintOtherOpeningQuestion] = React.useState("");
    const [emotion, setEmotion] = React.useState("")
	const [happy, setHappy] = React.useState("");
	const [angry, setAngry] = React.useState("");
	const [confused, setConfused] = React.useState("");
	const [anxious, setAnxious] = React.useState("");
	const [sad, setSad] = React.useState("");
	const [openingEmotion, updateOpeningEmotion] = React.useState("");
	const [openingEmotionQuestion, setOpeningEmotionQuestion] = React.useState("");

        // const [content,setContent] = useState({
        //     openingQuestion:"",
        //     otherOpeningQuestion:"",
        //     awe: {
        //         dont: "",
        //     }
        // })
        // setAngry({
        //     key: value,
        //     ...content
        // })
	const [youthData, setYouthData] = React.useState("");
	const [printYouthData, setPrintYouthData] = React.useState("");
	const [youthQuestions, setYouthQuestions] = React.useState("");
	const [agentData, setAgentData] = React.useState("");
	const [printAgentData, setPrintAgentData] = React.useState("");
	const [agentQuestions, setAgentQuestions] = React.useState("");
	const [happyAnswers, setHappyAnswers] = React.useState('');
	const [angryAnswers, setAngryAnswers] = React.useState('');
	const [confusedAnswers, setConfusedAnswers] = React.useState('');
	const [badAnswers, setBadAnswers] = React.useState('');
	const [sadAnswers, setSadAnswers] = React.useState('');
	const [happyAnswersQuestions, setHappyAnswersQuestions] = React.useState('');
	const [angryAnswersQuestions, setAngryAnswersQuestions] = React.useState('');
	const [confusedAnswersQuestions, setConfusedAnswersQuestions] = React.useState('');
	const [badAnswersQuestions, setBadAnswersQuestions] = React.useState('');
	const [sadAnswersQuestions, setSadAnswersQuestions] = React.useState('');
	const [otherAnswer, setOtherAnswer] = React.useState("")
	const [printOtherAnswer, setPrintOtherAnswer] = React.useState("");
    return(
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
                    angryAnswers={happyAnswers}
                    confusedAnswers={happyAnswers}
                    badAnswers={happyAnswers}
                    sadAnswers={happyAnswers}
                    happyAnswersQuestions={happyAnswersQuestions}
                    angryAnswersQuestions={angryAnswersQuestions}
                    confusedAnswersQuestions={confusedAnswersQuestions}
                    badAnswersQuestions={badAnswersQuestions}
                    sadAnswersQuestions={sadAnswersQuestions}
                    otherAnswer={otherAnswer}
                    printOtherAnswer={printOtherAnswer}
                    youthQuestions={youthQuestions}
                    agentQuestions={agentQuestions}
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
                    badAnswers={badAnswers}
                    sadAnswers={sadAnswers}
                    setHappyAnswersQuestions={setHappyAnswersQuestions}
                    setAngryAnswersQuestions={setAngryAnswersQuestions}
                    setConfusedAnswersQuestions={setConfusedAnswersQuestions}
                    setBadAnswersQuestions={setBadAnswersQuestions}
                    setSadAnswersQuestions={setSadAnswersQuestions}
                    setOtherAnswer={setOtherAnswer}
                    setPrintOtherAnswer={setPrintOtherAnswer}
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
                    setBadAnswers={setBadAnswers}
                    setSadAnswers={setSadAnswers}
                    happyAnswers={happyAnswers}
                    angryAnswers={angryAnswers}
                    confusedAnswers={confusedAnswers}
                    badAnswers={badAnswers}
                    sadAnswers={sadAnswers}
                    setYouthQuestions={setYouthQuestions}
                    setAgentQuestions={setAgentQuestions}
                    youthQuestions={youthQuestions}
                    agentQuestions={agentQuestions}
                />
            </div>
        </div>

    </div>

    )
}