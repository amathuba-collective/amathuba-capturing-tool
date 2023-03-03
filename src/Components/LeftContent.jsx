import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";
// import ProfileImage from "../Assets/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png";
import "../Styles/LeftContent.css";
// import callRedFlag from "../Assets/callRedFlag.gif";
import { Icon } from "@iconify/react";

export default function LeftContent(props) {
    // const toggleRedFlag = () => {
    //     props.setRedFlag(true);
    // };

    function ReadEmo() {
        const x = document.getElementById("readEmotions");
        if (x.style.height === "0px") {
            x.style.height = "200px"
        } else {
            x.style.height = "0px"
        }
    }

    const youth = props.youth;

    return (
        <div className='leftContent container'>

            {youth && (
                <Grid.Container className='d-flex justify-content-center align-items-center'>
                    <Grid className='d-flex flex-column align-items-center'>
                        <Avatar
                            src={youth.imgUrl || require('./../Assets/AgentProfile.png')}
                            css={{ size: "7rem" }}
                            className='mt-4'
                            bordered
                        />
                        <Text className='mt-2 mb-1 fw-bold fs-3'>{youth.firstName}</Text>
                        <Text className='mb-2 fw-semibold fs-4'>{youth.hostedAt}</Text>
                        <Text className='fw-bold fs-5' color='primary' size='$md'>
                            {youth.email}
                        </Text>
                    </Grid>
                </Grid.Container>
            )}

            <hr className='border border-2 border-secondary opacity-50 rounded mt-1' />

            <div className='summaryData d-flex flex-column justify-content-start align-items-start'>
                <h1 className="callSummary" >Summary</h1>
                <div>
                    <div className='summaryData d-flex flex-column justify-content-start align-items-start'>
                        <div>
                            <div className='fw-semilight fs-5'>
                                <div>
                                    <div className='fs-2 fw-semibold'>
                                        {props.redOpeningQuestion1 ? (
                                            <div>
                                                <h4 className='fw-bold fs-5'>Opening Question</h4>
                                                <p className='fs-5 fw-normal'>
                                                    {props.redOpeningQuestion1}
                                                </p>
                                            </div>
                                        ) : props.redOpeningQuestion2 ? (
                                            <div>
                                                <h4 className='fw-bold fs-4'>Opening Question</h4>
                                                <p className='fs-5 fw-normal'>
                                                    {props.redOpeningQuestion2}
                                                </p>
                                            </div>
                                        ) : props.blueOpeningQuestion1 ? (
                                            <div>
                                                <h4 className='fw-bold fs-4'>Opening Question</h4>
                                                <p className='fs-5 fw-normal'>
                                                    {props.blueOpeningQuestion1}
                                                </p>
                                            </div>
                                        ) : props.blueOpeningQuestion2 ? (
                                            <div>
                                                <h4 className='fw-bold fs-4'>Opening Question</h4>
                                                <p className='fs-5 fw-normal'>
                                                    {props.blueOpeningQuestion2}
                                                </p>
                                            </div>
                                        ) : null}

                                        <div>
                                            {props.otherOpeningQuestion && (
                                                <div>
                                                    {props.printOtherOpeningQuestion.map(
                                                        (otherOQ, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    <h4 className='fw-bold fs-4'>
                                                                        Opening Question
                                                                    </h4>
                                                                    <p className='fs-5 fw-normal'>{otherOQ}</p>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            )}
                                            <div>
                                                <p className='fw-semilight fs-3 '>
                                                    {props.emotion ? (
                                                        <div>
                                                            <h4 className='fw-bold fs-5'>Emotion of Call</h4>
                                                            <p className='fs-5 fw-normal'>{props.emotion}</p>
                                                            {/* summary column divider */}
                                                            {/* <hr className='w-100 ng-secondary border border-1 border-secondary ' /> */}
                                                        </div>
                                                    ) : null}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div>
                                        <button onClick={ReadEmo} className="readEmoBtn" id="readEmoBtn">
                                            Read Emotions
                                            <Icon
                                                icon='icon-park-outline:drop-down-list'
                                                className='dropDownIcon'
                                            />
                                        </button>
                                    </div> */}
                                    <div id="readEmotions" className='readEmotions'>
                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture1 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture1}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry1 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry1}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused1 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused1}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious1 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious1}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad1 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad1}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture2 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture2}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry2 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry2}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused2 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused2}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious2 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious2}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad2 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad2}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture3 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture3}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry3 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry3}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused3 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused3}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious3 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious3}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad3 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad3}</p>
                                                ) : null}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture4 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture4}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry4 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry4}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused4 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused4}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious4 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious4}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad4 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad4}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture5 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture5}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry5 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry5}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused5 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused5}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious5 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious5}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad5 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad5}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture6 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture6}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry6 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry6}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused6 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused6}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious6 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious6}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad6 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad6}</p>
                                                ) : null}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture7 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture7}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry7 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry7}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused7 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused7}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious7 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious7}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad7 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad7}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture8 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture8}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry8 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry8}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused8 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused8}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious8 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious8}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad8 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad8}</p>
                                                ) : null}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture9 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture9}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry9 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry9}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused9 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused9}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious9 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious9}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad9 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad9}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture10 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture10}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry10 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry10}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused10 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused10}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious10 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious10}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad10 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad10}</p>
                                                ) : null}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture11 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture11}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry11 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry11}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused11 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused11}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious11 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious11}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad11 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad11}</p>
                                                ) : null}
                                            </p>

                                            {/*  */}

                                            <p>
                                                {props.keyAnswerCapture12 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture12}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry12 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry12}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused12 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused12}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious12 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious12}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad12 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad12}</p>
                                                ) : null}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <p>
                                                {props.keyAnswerCapture13 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture13}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry13 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry13}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused13 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused13}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious13 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious13}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad13 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad13}</p>
                                                ) : null}
                                            </p>
                                            {/* text input answer below */}
                                            <p>
                                                {props.inputArr.map((keyAnswer, ind) => {
                                                    return (
                                                        <div key={ind}>
                                                            <p>{keyAnswer}</p>
                                                        </div>
                                                    );
                                                })}
                                            </p>
                                            {/* text input answer above */}
                                            <p>
                                                {props.keyAnswerCapture14 ? (
                                                    <p className='fs-5'>{props.keyAnswerCapture14}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAngry14 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAngry14}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureConfused14 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureConfused14}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureAnxious14 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureAnxious14}</p>
                                                ) : null}
                                            </p>
                                            <p>
                                                {props.keyAnswerCaptureSad14 ? (
                                                    <p className='fs-5'>{props.keyAnswerCaptureSad14}</p>
                                                ) : null}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* {props.printOtherOpeningQuestion ? (
									<div>
										<h4>Opening Question</h4>
										<p>{props.otherOpeningQuestion}</p>
									</div>
								) : null} */}
                            </div>
                            {/* summary column divider */}
                            <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                        </div>

                        <div>
                            <div className='readPossibleResponse'>
                                {props.redPossibleResponses ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Possible Response</h4>
                                        <p className='fs-5 fw-normal'>
                                            {props.redPossibleResponses}
                                        </p>

                                        {/* summary column divider */}
                                        <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                    </div>
                                ) : props.bluePossibleResponses ? (
                                    <div>
                                        <h4 className='fw-bold fs-4'>Possible Response</h4>
                                        <p className='fs-5 fw-semibold'>
                                            {props.bluePossibleResponses}
                                        </p>

                                        {/* summary column divider */}
                                        <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                    </div>
                                ) : null}
                            </div>
                            
                            <div className='fw-semilight fs-3 mt-4'>
                                {props.redFollowUpQuestions ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Follow-up Question</h4>
                                        <p className='fs-5 fw-normal'>
                                            {props.redFollowUpQuestions}
                                        </p>

                                        {/* text input answer below */}
                                        <p>
                                            {props.inputArr.map((keyAnswer, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <p className="fw-normal fs-5" >{keyAnswer}</p>
                                                    </div>
                                                );
                                            })}
                                        </p>
                                        {/* text input answer above */}

                                        <div>
                                            {props.youthTextInput && (
                                                <div>
                                                    {props.youthInputArr.map(
                                                        (otherOQ, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    {/* <h4 className='fw-bold fs-4'>
                                                                        Opening Question
                                                                    </h4> */}
                                                                    <p className='fs-5 fw-normal'>{otherOQ.youthFQ}</p>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className='d-flex flex-column'>
                                            <div className='d-flex justify-content-between'>
                                                <p>
                                                    {props.keyAnswerCaptureFollowUp1 ? (
                                                        <p className='fs-5'>{props.keyAnswerCaptureFollowUp1}</p>
                                                    ) : null}
                                                </p>
                                                {/* <p>
                                                    {props.keyAnswerCapture2 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture3 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture4 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture5 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture6 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture7 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture8 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture9 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture10 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture11 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* <p>
                                                    {props.keyAnswerCapture12 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture13 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* text input answer below */}
                                                {/* <p>
                                                    {props.inputArr.map((keyAnswer, ind) => {
                                                        return (
                                                            <div key={ind}>
                                                                <p>{keyAnswer}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </p> */}
                                                {/* text input answer above */}
                                                {/* <p>
                                                    {props.keyAnswerCapture14 ? (
                                                        <div>
                                                            <p className='fs-5'></p>
                                                        </div>
                                                    ) : null}
                                                </p> */}
                                            </div>
                                        </div>

                                        {/* summary column divider */}
                                        <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                    </div>

                                ) : props.blueFollowUpQuestions ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Follow-up Question</h4>
                                        <p className='fs-5 fw-semibold'>
                                            {props.blueFollowUpQuestions}
                                        </p>
                                        <div className='d-flex flex-column'>
                                            <div className='d-flex justify-content-between'>
                                                <p>
                                                    {props.keyAnswerCapture1 ? (
                                                        <p className='fs-5'>Hello</p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture2 ? (
                                                        <p className='fs-5'>Hello</p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture3 ? (
                                                        <p className='fs-5'>Hello</p>
                                                    ) : null}
                                                </p>
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <p>
                                                    {props.keyAnswerCapture4 ? (
                                                        <p className='fs-5'>Hello</p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture5 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture6 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture7 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture8 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture9 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture10 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture11 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture12 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture13 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* text input answer below */}
                                                <p>
                                                    {props.inputArr.map((keyAnswer, ind) => {
                                                        return (
                                                            <div key={ind}>
                                                                <p>{keyAnswer}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </p>
                                                {/* text input answer above */}
                                                {/* <p>
                                                    {props.keyAnswerCapture14 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>
                                        </div>

                                        {/* summary column divider */}
                                        <hr className='w-100 bg-secondary border border-2 border-secondary rounded' />
                                    </div>

                                ) : null}

                            </div>
                            <div>
                                {props.redPromptQuestions ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Prompt Question</h4>
                                        <p className='fs-5'>{props.redPromptQuestions}</p>
                                        {/* text input answer below */}
                                        <p>
                                            {props.inputArr.map((keyAnswer, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <p>{keyAnswer}</p>
                                                    </div>
                                                );
                                            })}
                                        </p>
                                        {/* text input answer above */}
                                        <div>
                                            {props.youthTextInput && (
                                                <div>
                                                    {props.youthInputArr.map(
                                                        (otherOQ, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    {/* <h4 className='fw-bold fs-4'>
                                                                        Opening Question
                                                                    </h4> */}
                                                                    <p className='fs-5 fw-normal'>{otherOQ.youthPQ}</p>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className='d-flex flex-column'>
                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture1 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture2 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture3 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture4 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture5 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture6 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture7 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture8 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture9 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture10 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture11 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture12 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture13 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* text input answer below */}
                                                {/* <p>
                                                    {props.inputArr.map((keyAnswer, ind) => {
                                                        return (
                                                            <div key={ind}>
                                                                <p>{keyAnswer}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </p> */}
                                                {/* text input answer above */}
                                                {/* <p>
                                                    {props.keyAnswerCapture14 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>
                                        </div>

                                        {/* summary column divider */}
                                        {/* <hr className='w-100 bg-dark border border-3 border-dark rounded' /> */}
                                        <hr />
                                    </div>
                                ) : props.bluePromptQuestions ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Prompt Question</h4>
                                        <p className='fs-5'>{props.bluePromptQuestions}</p>
                                        <div className='d-flex flex-column'>
                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture1 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture2 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture3 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture4 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture5 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture6 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture7 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture8 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture9 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture10 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture11 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p>
                                                <p>
                                                    {props.keyAnswerCapture12 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                {/* <p>
                                                    {props.keyAnswerCapture13 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                                {/* text input answer below */}
                                                <p>
                                                    {props.inputArr.map((keyAnswer, ind) => {
                                                        return (
                                                            <div key={ind}>
                                                                <p>{keyAnswer}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </p>
                                                {/* text input answer above */}
                                                {/* <p>
                                                    {props.keyAnswerCapture14 ? (
                                                        <p className='fs-5'></p>
                                                    ) : null}
                                                </p> */}
                                            </div>
                                        </div>

                                        {/* summary column divider */}
                                        <hr className='w-100 bg-dark border border-1 border-dark ' />
                                    </div>
                                ) : null}
                            </div>

                            {/* <p className='agentReflection fw-semilight fs-4 mt-2'>
								{props.value ? (
									<div>
										<h4>New appointment</h4>
										<p className='fs-5'> {props.value.toDateString()} </p>
									</div>
								) : null}
							</p> */}
                        </div>
                    </div>

                    <div className='agentReflection fw-semilight fs-4 mt-4'>
                        <div>
                            <p className='fs-2 fw-semibold'>
                                {props.youthQuestion1 ? (
                                    <div>
                                        <h4 className='fw-bold fs-5'>Youth Reflection Question</h4>
                                        <p className='fs-5 fw-normal'>{props.youthQuestion1}</p>
                                        <p>
                                            {props.youthInputArr.map((youthAnswer, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <p className='fs-5 fw-normal'>{youthAnswer.youthOQ}</p>
                                                    </div>
                                                );
                                            })}
                                        </p>
                                        <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                    </div>
                                ) : null}
                            </p>
                        </div>
                        <div>
                            <p className='fs-2 fw-semibold'>
                                {props.youthQuestion2 ? (
                                    <div>
                                        <h4 className='fw-normal fs-5'>Youth Reflection Question</h4>
                                        <p className='fs-5 fw-normal'>{props.youthQuestion2}</p>
                                        <p>
                                            {props.youthInputArr.map((youthAnswer, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <p className='fs-5'>{youthAnswer.youthOQ}</p>
                                                    </div>
                                                );
                                            })}
                                        </p>
                                    </div>
                                ) : null}
                            </p>
                        </div>
                        <div>
                            {props.youthPossibleResponses ? (
                                <div>
                                    <h5 className='fw-bold fs-5'>Possible Reponses</h5>
                                    <p className='fs-5'>{props.youthPossibleResponses}</p>

                                    {/* summary column divider */}
                                    <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        {props.youthFollowUpQuestions ? (
                            <div>
                                <h5 className='fw-semibold fs-4'>Follow-up question</h5>
                                <p className='fs-5'>{props.youthFollowUpQuestions}</p>
                                <p>
                                    {props.youthInputArr.map((youthAnswer, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p>{youthAnswer.youthFQ}</p>
                                            </div>
                                        );
                                    })}
                                </p>

                                {/* summary column divider */}
                                <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                            </div>
                        ) : null}
                    </div>
                    {/*  */}
                    <div>
                        {props.youthPromptQuestions ? (
                            <div>
                                <h5 className='fw-semibold fs-4'>Prompt question</h5>
                                <p className='fs-5'>{props.youthPromptQuestions}</p>
                                <p>
                                    {props.youthInputArr.map((youthAnswer, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p>{youthAnswer.youthPQ}</p>
                                            </div>
                                        );
                                    })}
                                </p>

                                {/* summary column divider */}
                                <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div>
                    <p className='agentReflection fw-semilight fs-5 mt-4'>
                        {props.agentQuestions ? (
                            <div>
                                <h4 className='fw-semibold'>Agent Reflection Question</h4>
                                <p>{props.agentQuestions}</p>
                                <p>
                                    {props.agentDataArr.map((agentAnswer, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p className='fs-5'>{agentAnswer.agentOQ}</p>
                                            </div>
                                        );
                                    })}
                                </p>
                            </div>
                        ) : null}
                        <div>
                            {props.printAgentData ? (
                                <div>
                                    <div>
                                        <h5>Agent Reflection</h5>
                                        <p className='fs-5'>{props.agentData}</p>
                                    </div>

                                    {/* summary column divider */}
                                    <hr className='w-100 ng-secondary border border-1 border-secondary ' />
                                </div>
                            ) : null}
                        </div>
                    </p>
                </div>
                <div className='mt-2 '>
                    {props.value && (
                        <div>
                            <h4>New appointment</h4>
                            <div className='alert alert-success w-100'>
                                <p className='fs-5 text-center fw-normal'>
                                    {" "}
                                    {props.value.toDateString()}
                                    {/* {props.value.getUTCDate()} */}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <div>
                <button
                    className='rounded w-25  bg-transparent border-0'
                    onClick={toggleRedFlag}>
                    <img src={callRedFlag} alt='callredFlag' className='w-100 redFlag' />
                </button>
                <div>
                    {props.redFlag && (
                        <div className='alert alert-danger mt-3 w-100 p-2 text-dark fs-5 fw-normal'>
                            Call has been red flagged!
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
}
