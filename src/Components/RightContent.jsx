import React from "react";
import "../Styles/RightContent.css";
export default function RightContent(props) {
	// const [question, setQuestion] = useState()

	const openingQuestions = [
		"How was your weekend ?",
		"How are you feeling today ?",
		"How have you been since our last call ?",
		"So how are you on this fine morning ?",
	];
	const happyQuestions = [
		" So tell me about your happiness ?",
		" Why are you this happy ?",
		" what makes you this happy ?",
		"what caused you to be this happy ?",
	];
	const angryQuestions = [
		" So tell me about your Angry ?",
		" Why are you this Angry ?",
		" what makes you this Angry ?",
		"what caused you to be this Angry ?",
	];
	const confusedQuestions = [
		" So tell me about your Confused ?",
		" Why are you this Confused ?",
		" what makes you this Confused ?",
		"what caused you to be this Confused ?",
	];
	const anxiosQuestions = [
		" So tell me about your anxios ?",
		" Why are you this anxios ?",
		" what makes you this anxios ?",
		"what caused you to be this anxios ?",
	];
	const sadQuestions = [
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
	};

	const onHappyQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		props.setHappyAnswers((happyAnswers) => !happyAnswers);
		// alert("answer created")
	};
	const onHappyQuestion2Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[1]);
		props.setHappyAnswers((happyAnswers) => !happyAnswers);
	};
	const onHappyQuestion3Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[2]);
		props.setHappyAnswers((happyAnswers) => !happyAnswers);
	};
	const onHappyQuestion4Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[3]);
		props.setHappyAnswers((happyAnswers) => !happyAnswers);
	};

	const onAngryQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(angryQuestions[0]);
		props.setAngryAnswers((angryAnswers) => !angryAnswers);
	};
	const onAngryQuestion2Clicked = (e) => {
		props.setOpeningEmotionQuestion(angryQuestions[1]);
	};
	const onAngryQuestion3Clicked = (e) => {
		props.setOpeningEmotionQuestion(angryQuestions[2]);
	};
	const onAngryQuestion4Clicked = (e) => {
		props.setOpeningEmotionQuestion(angryQuestions[3]);
	};

	const onConfusedQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		props.setConfusedAnswers((confusedAnswers) => !confusedAnswers);
	};
	const onConfusedQuestion2Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onConfusedQuestion3Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onConfusedQuestion4Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		// alert("answer created")
	};

	const onAnxiousQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		props.setBadAnswers((badAnswers) => !badAnswers);
	};
	const onAnxiousQuestion2Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onAnxiousQuestion3Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onAnxiousQuestion4Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		// alert("answer created")
	};

	const onSadQuestion1Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
		props.setSadAnswers((sadAnswers) => !sadAnswers);
	};
	const onSadQuestion2Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onSadQuestion3Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};
	const onSadQuestion4Clicked = (e) => {
		props.setOpeningEmotionQuestion(happyQuestions[0]);
	};

	const onYouthReflectionQ1Clicked = (e) => {
		props.setYouthQuestions(youthReflectionQuestions[0]);
	};
	const onYouthReflectionQ2Clicked = (e) => {
		props.setYouthQuestions(youthReflectionQuestions[1]);
	};
	const onYouthReflectionQ3Clicked = (e) => {
		props.setYouthQuestions(youthReflectionQuestions[2]);
	};
	const onYouthReflectionQ4Clicked = (e) => {
		props.setYouthQuestions(youthReflectionQuestions[3]);
	};

	const onAgentReflectionQ1Clicked = (e) => {
		props.setAgentQuestions(agentReflectionQuestions[0]);
	};
	const onAgentReflectionQ2Clicked = (e) => {
		props.setAgentQuestions(agentReflectionQuestions[1]);
	};
	const onAgentReflectionQ3Clicked = (e) => {
		props.setAgentQuestions(agentReflectionQuestions[2]);
	};
	const onAgentReflectionQ4Clicked = (e) => {
		props.setAgentQuestions(agentReflectionQuestions[3]);
	};

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
					<div className='d-flex flex-column mt-4'>
						<button
							className=' border-1 border-secondary rounded mb-2 p-1'
							onClick={(e) => props.setOpeningQuestion(openingQuestions[0])}>
							{" "}
							{openingQuestions[0]}
						</button>
						<button
							className='border-1 border-secondary rounded mb-2 p-1 '
							onClick={(e) => props.setOpeningQuestion(openingQuestions[1])}>
							{openingQuestions[1]}
						</button>
						<button
							className='border-1 border-secondary rounded mb-2 p-1'
							onClick={(e) => props.setOpeningQuestion(openingQuestions[2])}>
							{openingQuestions[2]}
						</button>
						<button
							className='border-1 border-secondary rounded mb-2 p-1'
							onClick={(e) => props.setOpeningQuestion(openingQuestions[3])}>
							{openingQuestions[3]}
						</button>
						{/* other field input */}
						<div className='text-center mt-3 d-flex align-items-center'>
							<div className='input-group mb-3'>
								<input
									type='text'
									className='otherInput form-control'
									placeholder='Other'
									onChange={getOtherOpeningQuestion}
								/>
							</div>
							<button
								className='otherBtn border-secondary border-2 text-dark rounded'
								onClick={() => props.setPrintOtherOpeningQuestion(true)}>
								save
							</button>
						</div>
						{/*  */}
					</div>

					{props.happy && (
						<div className='d-flex flex-column mt-4'>
							{" "}
							<h2 className='text-center'>Emotion questions</h2>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{happyQuestions[0]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion2Clicked}>
								{happyQuestions[1]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion3Clicked}>
								{happyQuestions[2]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion4Clicked}>
								{happyQuestions[3]}
							</button>
							<div className='text-center mt-3 d-flex align-items-center'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherBtn border-secondary border-2 text-dark rounded'
									onClick={() => props.setPrintOtherOpeningQuestion(true)}>
									save
								</button>
							</div>
						</div>
					)}
					{props.angry && (
						<div className='d-flex flex-column mt-4'>
							{" "}
							<h2 className='text-center'>Emotion questions</h2>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{angryQuestions[0]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{angryQuestions[1]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{angryQuestions[2]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{angryQuestions[3]}
							</button>
							<div className='text-center mt-3 d-flex align-items-center'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherBtn border-secondary border-2 text-dark rounded'
									onClick={() => props.setPrintOtherOpeningQuestion(true)}>
									save
								</button>
							</div>
						</div>
					)}
					{props.confused && (
						<div className='d-flex flex-column mt-4'>
							{" "}
							<h2 className='text-center'>Emotion questions</h2>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{confusedQuestions[0]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{confusedQuestions[1]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{confusedQuestions[2]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{confusedQuestions[2]}
							</button>
							<div
								className='text-center mt-3 d-flex align-items-center'
								onClick={onHappyQuestion1Clicked}>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherBtn border-secondary border-2 text-dark rounded'
									onClick={() => props.setPrintOtherOpeningQuestion(true)}>
									save
								</button>
							</div>
						</div>
					)}
					{props.anxious && (
						<div className='d-flex flex-column mt-4'>
							{" "}
							<h2 className='text-center'>Emotion questions</h2>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{anxiosQuestions[0]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{anxiosQuestions[1]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{anxiosQuestions[2]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{anxiosQuestions[3]}
							</button>
							<div className='text-center mt-3 d-flex align-items-center'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherBtn border-secondary border-2 text-dark rounded'
									onClick={() => props.setPrintOtherOpeningQuestion(true)}>
									save
								</button>
							</div>
						</div>
					)}
					{props.sad && (
						<div className='d-flex flex-column mt-4'>
							{" "}
							<h2 className='text-center'>Emotion questions</h2>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{sadQuestions[0]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{sadQuestions[1]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{sadQuestions[2]}
							</button>
							<button
								className='border-1 border-secondary rounded mb-2 p-1'
								onClick={onHappyQuestion1Clicked}>
								{sadQuestions[3]}s
							</button>
							<div className='text-center mt-3 d-flex align-items-center'>
								<div className='input-group mb-3'>
									<input
										type='text'
										className='otherInput form-control'
										placeholder='Other'
										onChange={getOtherOpeningQuestion}
									/>
								</div>
								<button
									className='otherBtn border-secondary border-2 text-dark rounded'
									onClick={() => props.setPrintOtherOpeningQuestion(true)}>
									save
								</button>
							</div>
						</div>
					)}
					<div className='d-flex flex-column mt-4'>
						{props.youthQuestions ? (
							<div className='mb-4 d-flex flex-column mt-4'>
								<h2 className='text-center'>Youth questions</h2>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onYouthReflectionQ1Clicked}>
									{youthReflectionQuestions[0]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onYouthReflectionQ2Clicked}>
									{youthReflectionQuestions[1]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onYouthReflectionQ3Clicked}>
									{youthReflectionQuestions[2]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onYouthReflectionQ4Clicked}>
									{youthReflectionQuestions[3]}
								</button>
								{/* other field input */}
								<div className='text-center mt-3 d-flex align-items-center'>
									<div className='input-group mb-3'>
										<input
											type='text'
											className='otherInput form-control'
											placeholder='Other'
											onChange={getOtherOpeningQuestion}
										/>
									</div>
									<button
										className='otherBtn border-secondary border-2 text-dark rounded'
										onClick={() => props.setPrintOtherOpeningQuestion(true)}>
										save
									</button>
								</div>
								{/*  */}
							</div>
						) : null}

						{props.agentQuestions ? (
							<div className='mb-5 d-flex flex-column mt-4'>
								<h2 className='text-center'>Agent questions</h2>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onAgentReflectionQ1Clicked}>
									{agentReflectionQuestions[0]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onAgentReflectionQ2Clicked}>
									{agentReflectionQuestions[1]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onAgentReflectionQ3Clicked}>
									{agentReflectionQuestions[2]}
								</button>
								<button
									className='border-1 border-secondary rounded mb-2 p-1'
									onClick={onAgentReflectionQ4Clicked}>
									{agentReflectionQuestions[3]}
								</button>
								{/* other field input */}
								<div className='text-center mt-3 d-flex align-items-center'>
									<div className='input-group mb-3'>
										<input
											type='text'
											className='otherInput form-control'
											placeholder='Other'
											onChange={getOtherOpeningQuestion}
										/>
									</div>
									<button
										className='otherBtn border-secondary border-2 text-dark rounded'
										onClick={() => props.setPrintOtherOpeningQuestion(true)}>
										save
									</button>
								</div>
								{/*  */}
							</div>
						) : null}
					</div>
				</section>

				<div>
					<h2 className='RecommendedQuestions text-center mt-4 fs-2 fw-bold'>
						Prompted Questions
					</h2>
					<hr className='border border-2 border-secondary opacity-50 rounded' />
				</div>
			</div>
		</div>
	);
}
