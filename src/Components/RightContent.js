import React from "react";
import { Input } from "@nextui-org/react";
import SendButton from "../Modules/SendButton";
import { SendIcon } from "../Modules/SendIcon"
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


  const onQuestionOneClicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[0])
    props.setAnswer(answer => !answer)
    // alert("answer created")
  }
  const onQuestionTwoClicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[1])
  }
  const onQuestionThreeClicked = (e) => {
    props.setOpeningEmotionQuestion(openingHappyEmotionQuestions[2])
  }
  const onQuestionFourClicked = (e) => {
    props.setOpeningEmotionQuestion(openingQuestions[3])
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
              onClick={(e) => props.updateData(openingQuestions[0])}> {openingQuestions[0]}
              {" "}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={(e) => props.updateData(openingQuestions[1])}>
              {openingQuestions[1]}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={(e) => props.updateData(openingQuestions[2])}>
              {openingQuestions[2]}
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={(e) => props.updateData(openingQuestions[3])}>
              {openingQuestions[3]}
            </button>
            <div className="text-center mt-3 ">
              <Input
                clearable
                underlined
                initialValue="Other"
                css={{ width: "100%" }}
                contentRight={
                  <SendButton>
                    <SendIcon />
                  </SendButton>
                }
              />
            </div>

          </div>
        </section>

        {props.happy ? <section className="mb-5">
          <p className='text-center fs-3 fw-semibold mt-4 mb-3'>
            Opening Emotion Questions
          </p>
          <div className='questions mt-4'>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 fw-semibold fs-5 w-100'
              onClick={onQuestionOneClicked}>
              So tell me about your happiness ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onQuestionTwoClicked}>
              Why are you this happy ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionThreeClicked}>
              what makes you this happy ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionFourClicked}>
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
              onClick={onQuestionOneClicked}>
              So tell me why your angry ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onQuestionTwoClicked}>
              Why are you this angry?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionThreeClicked}>
              what made you this angry ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionFourClicked}>
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
              onClick={onQuestionOneClicked}>
              So tell me why your confused ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onQuestionTwoClicked}>
              Why are you this confused?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionThreeClicked}>
              what made you this confused ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionFourClicked}>
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
              onClick={onQuestionOneClicked}>
              So tell me why you feeling bad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onQuestionTwoClicked}>
              What makes you so bad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionThreeClicked}>
              what made you this bad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionFourClicked}>
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
              onClick={onQuestionOneClicked}>
              So tell me why your sad ?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5 w-100 '
              onClick={onQuestionTwoClicked}>
              Why are you this sad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionThreeClicked}>
              what made you this sad?
            </button>
            <button
              className=' bg-transparent border-3 border-secondary rounded p-2 mt-3 fw-semibold fs-5  w-100'
              onClick={onQuestionFourClicked}>
              what caused you to be this sad ?
            </button></div>
        </section> : null}
      </div>
    </div>

  );
}
