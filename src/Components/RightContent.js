import React from "react";
import "../Styles/RightContent.css"
export default function RightContent(props) {
  // const [question, setQuestion] = useState()

  const openingQuestions = [
    "How was your weekend ?",
    "How are you feeling today ?",
    "How have you been since our last call ?",
    "So how are you on this fine morning ?",
  ];
  const openingHappyEmotionQuestions = [
    " So tell me about your happiness ?",
    " Why are you this happy ?",
    " what makes you this happy ?",
    "what caused you to be this happy ?",
  ];
  const openingAngryEmotionQuestions = [
    " So tell me about your Angry ?",
    " Why are you this Angry ?",
    " what makes you this Angry ?",
    "what caused you to be this Angry ?",
  ];
  const openingConfusedEmotionQuestions = [
    " So tell me about your Confused ?",
    " Why are you this Confused ?",
    " what makes you this Confused ?",
    "what caused you to be this Confused ?",
  ];
  const openingBadEmotionQuestions = [
    " So tell me about your Bad ?",
    " Why are you this Bad ?",
    " what makes you this Bad ?",
    "what caused you to be this Bad ?",
  ];
  const openingSadEmotionQuestions = [
    " So tell me about your Sad ?",
    " Why are you this Sad ?",
    " what makes you this Sad ?",
    "what caused you to be this Sad ?",
  ];
  const youthReflectionQuestions = [
    " So tell me how will u go forward?",
    " What do you choose to do next ?",
    " what is your next choice ?",
    "what caused you to be this youth ?",
  ];
  const agentReflectionQuestions = [
    " So tell me about your youth ?",
    " Why is your youth Sad ?",
    " what makes you this youth ?",
    "what caused you to be this youth?",
  ];

  const getOtherOpeningQuestion = (e) => {
    props.setOtherOpeningQuestion(e.target.value);
  }

  const onHappyQuestion1Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[0])
    props.setHappyAnswers(happyAnswers => !happyAnswers)
    // alert("answer created")
  }
  const onHappyQuestion2Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[1])
    props.setHappyAnswers(happyAnswers => !happyAnswers)
  }
  const onHappyQuestion3Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[2])
    props.setHappyAnswers(happyAnswers => !happyAnswers)
  }
  const onHappyQuestion4Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[3])
    props.setHappyAnswers(happyAnswers => !happyAnswers)
  }


  const onAngryQuestion1Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingAngryEmotionQuestions[0])
    props.setAngryAnswers(angryAnswers => !angryAnswers)
  }
  const onAngryQuestion2Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingAngryEmotionQuestions[1])
  }
  const onAngryQuestion3Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingAngryEmotionQuestions[2])
  }
  const onAngryQuestion4Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingAngryEmotionQuestions[3])
    // props.setAnswer(answer => !answer)
    // alert("answer created")
  }

  const onConfusedQuestion1Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingConfusedEmotionQuestions[0])
    props.setConfusedAnswers(confusedAnswers => !confusedAnswers)
  }
  const onConfusedQuestion2Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingConfusedEmotionQuestions[1])
  }
  const onConfusedQuestion3Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingConfusedEmotionQuestions[2])
  }
  const onConfusedQuestion4Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingConfusedEmotionQuestions[3])
    // alert("answer created")
  }

  const onBadQuestion1Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingBadEmotionQuestions[0])
    props.setBadAnswers(badAnswers => !badAnswers)
  }
  const onBadQuestion2Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingBadEmotionQuestions[1])
  }
  const onBadQuestion3Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingBadEmotionQuestions[2])
  }
  const onBadQuestion4Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingBadEmotionQuestions[3])
    // alert("answer created")
  }

  const onSadQuestion1Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingSadEmotionQuestions[0])
    props.setSadAnswers(sadAnswers => !sadAnswers)
  }
  const onSadQuestion2Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingSadEmotionQuestions[1])
  }
  const onSadQuestion3Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingSadEmotionQuestions[2])
  }
  const onSadQuestion4Clicked = (e) => {
    props.setOpeningEmotionQuestion(openingSadEmotionQuestions[3])
  }

  const onYouthReflectionQ1Clicked = (e) => {
    props.setYouthQuestions(youthReflectionQuestions[0])
  }
  const onYouthReflectionQ2Clicked = (e) => {
    props.setYouthQuestions(youthReflectionQuestions[1])
  }
  const onYouthReflectionQ3Clicked = (e) => {
    props.setYouthQuestions(youthReflectionQuestions[2])
  }
  const onYouthReflectionQ4Clicked = (e) => {
    props.setYouthQuestions(youthReflectionQuestions[3])
  }

  const onAgentReflectionQ1Clicked = (e) => {
    props.setAgentQuestions(agentReflectionQuestions[0])
  }
  const onAgentReflectionQ2Clicked = (e) => {
    props.setAgentQuestions(agentReflectionQuestions[1])
  }
  const onAgentReflectionQ3Clicked = (e) => {
    props.setAgentQuestions(agentReflectionQuestions[2])
  }
  const onAgentReflectionQ4Clicked = (e) => {
    props.setAgentQuestions(agentReflectionQuestions[3])
  }

  return (
    <div className='container-fluid'>
      <div>
        <h2 className='RecommendedQuestions text-center mt-4 fs-2 fw-bold'>
          Recommended Questions
        </h2>
        <hr className='border border-2 border-secondary opacity-50 rounded' />
      </div>
      <div>
        <section>
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Questions
          </p>
          {/* static opening questions  */}
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={(e) => props.setOpeningQuestion(openingQuestions[0])}> {openingQuestions[0]}
              {" "}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={(e) => props.setOpeningQuestion(openingQuestions[1])}>
              {openingQuestions[1]}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={(e) => props.setOpeningQuestion(openingQuestions[2])}>
              {openingQuestions[2]}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={(e) => props.setOpeningQuestion(openingQuestions[3])}
            >
              {openingQuestions[3]}
            </button>
            {/* other field input */}
            <div className="text-center mt-3 d-flex align-items-center">
              <div className="input-group mb-3">
                <input type="text" className="otherInput form-control" placeholder="Other"
                  onChange={getOtherOpeningQuestion} />
              </div>
              <button className="otherBtn border-secondary border-2 text-dark rounded" onClick={() => props.setPrintOtherOpeningQuestion(true)}>save</button>
            </div>
            {/*  */}
          </div>
        </section>

        {props.happy ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onHappyQuestion1Clicked}>
              So tell me about your happiness ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onHappyQuestion2Clicked}>
              Why are you this happy ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onHappyQuestion3Clicked}>
              what makes you this happy ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onHappyQuestion4Clicked}>
              what caused you to be this happy ?
            </button></div>
        </section> : null}

        {props.angry ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onAngryQuestion1Clicked}>
              So tell me why your angry ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onAngryQuestion2Clicked}>
              Why are you this angry?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onAngryQuestion3Clicked}>
              what made you this angry ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onAngryQuestion4Clicked}>
              what caused you to be this angry ?
            </button></div>
        </section> : null}

        {props.confused ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onConfusedQuestion1Clicked}>
              So tell me why your confused ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onConfusedQuestion2Clicked}>
              Why are you this confused?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onConfusedQuestion3Clicked}>
              what made you this confused ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onConfusedQuestion4Clicked}>
              what caused you to be this confused ?
            </button></div>
        </section> : null}


        {props.bad ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onBadQuestion1Clicked}>
              So tell me why you feeling bad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onBadQuestion2Clicked}>
              What makes you so bad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onBadQuestion3Clicked}>
              what made you this bad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onBadQuestion4Clicked}>
              what caused you to be this bad?
            </button></div>
        </section> : null}




        {props.sad ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onSadQuestion1Clicked}>
              So tell me why your sad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onSadQuestion2Clicked}>
              Why are you this sad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onSadQuestion3Clicked}>
              what made you this sad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onSadQuestion4Clicked}>
              what caused you to be this sad ?
            </button></div>
        </section> : null}

        <div className="agent&YouthQuestions mb-4 mt-4">
          {
            props.youthQuestions ?
              <div className="mb-4">
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onYouthReflectionQ1Clicked}
                >
                  {youthReflectionQuestions[0]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onYouthReflectionQ2Clicked}
                >
                  {youthReflectionQuestions[1]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onYouthReflectionQ3Clicked}
                >
                  {youthReflectionQuestions[2]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onYouthReflectionQ4Clicked}
                >
                  {youthReflectionQuestions[3]}
                </button>
              </div>
              : null
          }

          {
            props.agentQuestions ?
              <div className="mb-5">
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onAgentReflectionQ1Clicked}
                >
                  {agentReflectionQuestions[0]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onAgentReflectionQ2Clicked}
                >
                  {agentReflectionQuestions[1]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onAgentReflectionQ3Clicked}
                >
                  {agentReflectionQuestions[2]}
                </button>
                <button
                  className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
                  onClick={onAgentReflectionQ4Clicked}
                >
                  {agentReflectionQuestions[3]}
                </button>
              </div>
              : null
          }
        </div>
      </div>
    </div>

  );
}
