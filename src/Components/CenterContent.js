import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Calender from "./Calender";
import "../Styles/CenterContent.css";

export default function CenterContent(props) {
	const emotionWheel = [<Icon icon='emojione:grinning-face-with-smiling-eyes' />, <Icon icon='emojione:pouting-face' />, 	<Icon icon='emojione:sad-but-relieved-face' />, <Icon icon='emojione:confounded-face' />, <Icon icon='emojione:crying-face' />];

	const [nextSession, setNextSession] = useState("newAppoinment");

	const onHappyClicked = (e) => {
		props.updateEmotion(emotionWheel[0]);
		props.setHappy(happy => !happy);
	};

	function onAngryClicked(e) {
		props.updateEmotion(emotionWheel[1]);
		props.setAngry((angry) => !angry);
	}

	function onConfusedClicked(e) {
		props.updateEmotion(emotionWheel[2]);
		props.setConfused((confused) => !confused);
	}

	function onBadClicked(e) {
		props.updateEmotion(emotionWheel[3]);
		props.setBad((bad) => !bad);
	}

	function onSadClicked(e) {
		props.updateEmotion(emotionWheel[4]);
		props.setSad((sad) => !sad);
	}

	function getYouthReflection(val) {
		props.setYouthData(val.target.value);
		// props.setPrintYouthData(false)
	}

	function getAgentReflection(val) {
		props.setAgentData(val.target.value);
		// props.setPrintData(false)
	}

	const entireForm = [{ OpeningQuestion: props.data },{OpeningEmotion : props.emotion}];
	function onFormSubmit(e) {
		e.preventDefault();
		alert("Form Submitted");

		localStorage.setItem("wellBieng", JSON.stringify(entireForm));
	}

	return (
		<div className='container'>
			{/* header section starts */}
			<div className='header'>
				<div className='openingQuestion text-center mt-5'>
					<p className='fs-2 fw-semibold'>{props.data}</p>
				</div>
				{/*  */}
				<div className='emotion-emojies d-flex justify-content-around mt-5 '>
						<button
							onClick={onHappyClicked}
							className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
							<Icon icon='emojione:grinning-face-with-smiling-eyes' />
							<span className='fs-5'>Happy</span>
						</button>
					<button 
					onClick={onAngryClicked}
					className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:pouting-face' />
						<span className='fs-5'>Angry</span>
					</button>
					<button
					onClick={onConfusedClicked}
					 className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:sad-but-relieved-face' />
						<span className='fs-5'>Confused</span>
					</button>
					<button
					onClick={onBadClicked}
					 className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:confounded-face' />
						<span className='fs-5'>Bad</span>
					</button>
					<button
					onClick={onSadClicked}
					 className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
						<Icon icon='emojione:crying-face' />
						<span className='fs-5'>Sad</span>
					</button>
				</div>
			</div>
			{/* Header section ends */}

			{/* Body section starts */}
			<div className='body mt-5' id='scrollable'>
				<div className='emptyDivForEmotoinKeyWords mt-5 mb-5  text-center'>
					<p>
						{/* {happy ?
							<div className='row'>
								<div className='p-5 col-4 bg-secondary border-1 border-secondary'>
									<button className="bg-transparent border-0">Happy</button>
								</div>
								<div className="col-4">

								</div>
								<div className=' p-5 col-4 bg-secondary border-2 border-secondary '>
									<button className="bg-transparent border-0">Happy</button>
								</div>
							</div>
						: null}

						{angry ?
							<div className='row'>
							<div className='p-5 col-4 bg-secondary border-1 border-secondary'>
								<button className="bg-transparent border-0">angry</button>
							</div>
							<div className="col-4">

							</div>
							<div className=' p-5 col-4 bg-secondary border-2 border-secondary '>
								<button className="bg-transparent border-0">angry</button>
							</div>
						</div>
						:
						null }


						{confused ? 
							<div className='row'>
							<div className='p-5 col-4 bg-secondary border-1 border-secondary'>
								<button className="bg-transparent border-0">confused</button>
							</div>
							<div className="col-4">

							</div>
							<div className=' p-5 col-4 bg-secondary border-2 border-secondary '>
								<button className="bg-transparent border-0">confused</button>
							</div>
						</div>
						:
						null }

						{bad ? 
							<div className='row'>
							<div className='p-5 col-4 bg-secondary border-1 border-secondary'>
								<button className="bg-transparent border-0">bad</button>
							</div>
							<div className="col-4">

							</div>
							<div className=' p-5 col-4 bg-secondary border-2 border-secondary '>
								<button className="bg-transparent border-0">bad</button>
							</div>
						</div>
						: 
						null }
						{sad ?
							<div className='row'>
							<div className='p-5 col-4 bg-secondary border-1 border-secondary'>
								<button className="bg-transparent border-0">sad</button>
							</div>
							<div className="col-4">

							</div>
							<div className=' p-5 col-4 bg-secondary border-2 border-secondary '>
								<button className="bg-transparent border-0 text-light">sad</button>
							</div>
						</div>
						:
						null } */}
					</p>
				</div>
			</div>
			{/* body section ends */}

			{/* Footer section starst */}
			<div className='footer'>
				<div className='mt-5'>
					<div className='recommended question for youth reflection'>
						<h2 className='recommendedQuestion mb-3 text-center fs-4 fw-semilight'>
							{props.data}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					<textarea
						className='textArea form-control'
						onChange={getYouthReflection}
						placeholder='Type Reflection'
						id='#'></textarea>
					<button
						onClick={() => props.setPrintYouthData(true)}
						className='sm bg-transparent border border-2'>
						Store
					</button>
				</div>
				{/*                                        */}
				<div className='mt-5 mb-5'>
					<div className='recommended question for agent reflection'>
						<h2 className='recommendedQuestion mb-2 text-center fs-4 fw-semilight'>
							{props.data}
						</h2>
					</div>
					<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
					<textarea
						className='textArea form-control'
						onChange={getAgentReflection}
						placeholder='Type Reflection'
						id='#'></textarea>
					<button
						onClick={() => props.setPrintAgentData(true)}
						className='sm bg-transparent border border-2'>
						Store
					</button>
				</div>
				{/*                                            */}

				{/* need to sort out design build */}
				<div className='nextCall'>
					<h2 className='title'>Session Bookings</h2>
					<div>
					<nav className="">                               
					<button className="btn-secondary" onClick={(e) => setNextSession("newAppoinment")}>New Appoinment</button>
					{nextSession === "newAppoinment" && <div className='react-calendar mt-5 '>
						<Calender className="Calender"/>
					</div>}
					

					<button className="btn-secondary2" onClick={(e) => setNextSession("endReason")}>End Reason</button>
					{nextSession === "endReason" && <section className="mt-5"><label className='fw-semibold fs-3 mt-5'>End reason</label>
					<textarea
						className='textArea form-control '
						placeholder='End Reason'
						id='#'></textarea></section>}
					</nav>
					</div>
					{/*                                      */}
				</div>

				{/* 											 */}
				<div className='d-grid  mb-5'>
					<button
						type='submit'
						onClick={onFormSubmit}
						className='btn text-light fs-5 p-4'>
						Submit
					</button>
				</div>
			</div>
			{/* footer section ends */}
		</div>
	);
}
