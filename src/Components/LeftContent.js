import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";
import ProfileImage from "../Assets/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png";
import "../Styles/LeftContent.css";

export default function LeftContent(props) {
	return (
		<div className='leftContent container'>
			<Grid.Container className='d-flex justify-content-center'>
				<Grid className='d-flex flex-column align-items-center'>
					<Avatar
						src={ProfileImage}
						css={{ size: "7rem" }}
						className='mt-4'
						bordered
						color='primary'
					/>
					<Text className='mt-2 mb-1 fw-bold fs-3'>Ronnnie Hand</Text>
					<Text className='mb-2 fw-semibold fs-4'>18/10/2022</Text>
					<Text className='fw-bold fs-5' color='primary' size='$md'>
						Well-being
					</Text>
				</Grid>
			</Grid.Container>
			<hr className='border border-2 border-secondary opacity-50 rounded mt-1' />

			<div className='summaryData d-flex flex-column justify-content-start align-items-start'>
				<div>
					<p className='fw-semilight fs-5'>
						{props.data ? (
							<div>
								<h4>Opening Question</h4>
								<p className="fs-5">{props.data}</p>
							</div>
						) : null}
					</p>
				</div>
				<div>
					<p className='fw-semilight fs-3'>
						{props.openingEmotion ? (
							<div>
								<h4>Opening emotion</h4>
								<p className="fs-5">{props.openingEmotion}</p>
							</div>
						) : null}
					</p>
				</div>
				<div>
					<p className='fw-semilight fs-3'>
						{props.openingEmotionQuestion ? (
							<div>
								<h4>Opening emotion question</h4>
								<p className="fs-5">{props.openingEmotionQuestion}</p>
							</div>
						) : null}
					</p>
				</div>

				{/* <div>
				<h4>Opening emotion question</h4>
				<p>answer</p>
				<p>answer</p>
				<p>answer</p>
				</div>

				<div>
				<h4>Opening emotion question</h4>
				<p>answer</p>
				<p>answer</p>
				<p>answer</p>
				</div>  */}
				{/* 
		</div>
	<p className="fw-semilight fs-2">{props.emotion}</p>
	{/* 
	
	this space is for emotion recommended questions an triggerd an reason key word answers

	*/}

				{/* <p className="fw-semilight fs-2">{props.answer}</p> */}
				{/* <p className="youthReflection fw-semilight fs-4">{props.printYouthData ? <p>{props.youthData}</p> : null}</p> */}
				<div>
					<p className='agentReflection fw-semilight fs-4'>
						{props.printYouthData ? (
							<div>
								<h4>Youth Reflection</h4>
								<p>{props.youthData}</p>
							</div>
						) : null}
					</p>
				</div>
				<div>
					<p className='agentReflection fw-semilight fs-4'>
						{props.printAgentData ? (
							<div>
								<h4>Agent Reflection</h4>
								<p>{props.agentData}</p>
							</div>
						) : null}
					</p>
				</div>

				<p className="agentReflection fw-semilight fs-4">
					{props.date ? <div>
						<h4>Next appoinment</h4>
						<p>{props.date}</p>
					</div> : null}

				</p>
			</div>
		</div>
	);
}
