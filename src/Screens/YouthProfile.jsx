import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";
import "../Styles/YouthProfile.css";
import {Icon} from "@iconify/react";
import {getYouthById} from "../Services/Youth";
import {getRecentYouthDialogueData} from "../Services/YouthDialogue";

export default function YouthProfile() {
    const [recentRecords, setRecentRecords] = useState(null);
    const [selectedYouth,setselectedYouth] = useState(null);
    const [youth, setYouth] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [section, setSection] = useState("profile");
    const [youthCallHistorySections, setYouthCallHistorySections] =
        useState("Overview");

    const getYouthData = async (id) => {
        const youthData = await getYouthById(id);
        setLoading(false);

        if (youthData.error) return setError(youthData.error);
        setYouth(youthData.data.data.youth);
    }

    const getRecentYouthDialogueDataForView = async () => {
        const recentData = await getRecentYouthDialogueData();

        if (recentData.error) return setError(recentData.error);
        setRecentRecords(recentData.data.data.all);
    }

    const {id} = useParams();

    useEffect(() => {
        getYouthData(id);
        getRecentYouthDialogueDataForView();
    }, [])

    const openYouthMenu = (e,id) => {
        e.preventDefault();
        const filtered = recentRecords.filter(record => {
            return record._id === id;
        });
        setselectedYouth(filtered[0]);
        setSection("YouthCallHistory");
    };

    return (
        <div className='container-fluid'>
            <>
                <TopNavbar/>
            </>
            <div className='row'>
                <div className='left col-3'>
                    <div className='leftcontent d-flex flex-column justify-content-start'>
                        <div>
                            <button
                                className='m-1 border-0 bg-transparent fw-semibold'
                                onClick={(e) => setSection("profile")}>
								<span>
									<i className='fa-regular fa-user mx-3'></i>
								</span>
                                Profile
                            </button>
                        </div>
                        <div>
                            <button
                                className='m-1 border-0 bg-transparent fw-semibold                                                                                                                                        '
                                onClick={(e) => setSection("sessions")}>
								<span>
									<i className='fa-regular fa-folder mx-3'></i>
								</span>
                                Sessions
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right col-9'>
                    {loading && <div>Content is loading....</div>}
                    {section === "profile" && (
                        <div className='container-fluid'>
                            {youth && (
                                <>
                                    <p className='fs-3 fw-bold mt-5'>{youth.firstName}</p>

                                    <div className='mt-4'>
                                        <Link to={`/WellnessForm/${youth._id}`}>
                                            <button className='wellBeingBtn fs-5'>
												<span>
													<i className='fa-solid fa-phone fs-5'></i>
												</span>{" "}
                                                Call Friend
                                            </button>
                                        </Link>
                                    </div>

                                    <div className=' mt-4 fs-5 d-flex align-items-center'>
                                        <p className='statusTitle opacity-75'>Current Status :</p>
                                        <span className='alert alert-success mx-3'>
											<span>
												<img
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII='
                                                    alt='___'
                                                />
											</span>
											Well Being
										</span>
                                    </div>

                                    <div className='informationContent mt-4'>
                                        <h3 className='fs-4'>Basic Information</h3>
                                        <div className='row'>
                                            <div className='col-12 w-75'>
                                                {/*  */}
                                                <div className='col-12 d-flex align-items-center mb-4 mt-4'>
                                                    <div className='col-5'>
                                                        <div>
                                                            <p className='mt-3 fw-bold'>First & Last Name</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-7 mx-1'>
                                                        <div class='row'>
                                                            <div class='col'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control p-2 bg-light'
                                                                    placeholder={youth.firstName}
                                                                    disabled
                                                                    readonly
                                                                />
                                                            </div>
                                                            <div class='col'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control p-2 bg-light'
                                                                    placeholder={youth.lastName}
                                                                    disabled
                                                                    readonly
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-12 d-flex align-items-center mb-4'>
                                                    <div className='col-5'>
                                                        <p className='mt-3 fw-bold'>Gender</p>
                                                    </div>
                                                    <div className='col-7 mx-1'>
                                                        <div class='col-12'>
                                                            <input
                                                                type='text'
                                                                class='form-control p-2 bg-light'
                                                                placeholder={youth.gender}
                                                                disabled
                                                                readonly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-12 d-flex align-items-center mb-4'>
                                                    <div className='col-5'>
                                                        <p className='mt-3 fw-bold'>Phone Number</p>
                                                    </div>
                                                    <div className='col-7 mx-1'>
                                                        <div class='col-12'>
                                                            <input
                                                                type='text'
                                                                class='form-control p-2 bg-light'
                                                                placeholder={youth.cellNumber}
                                                                disabled
                                                                readonly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                {/*  */}
                                                <div className='col-12 d-flex align-items-center mb-4'>
                                                    <div className='col-5'>
                                                        <p className='mt-3 fw-bold'>City</p>
                                                    </div>
                                                    <div className='col-7 mx-1'>
                                                        <div class='col-12'>
                                                            <input
                                                                type='text'
                                                                class='form-control p-2 bg-light'
                                                                id='inputAddress'
                                                                placeholder={youth.city}
                                                                disabled
                                                                readonly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                    {/*               space between different sections                                   */}

                    {section === "sessions" && (
                        <div className='container-fluid'>
                            {youth && <p className='fs-3 fw-bold mt-5'>{youth.firstName}</p>}

                            <div className='mt-4'>
                                <Link to={`/WellnessForm/${youth._id}`}>
                                    <button className='wellBeingBtn fs-5'>
										<span>
											<i className='fa-solid fa-phone fs-5'></i>
										</span>{" "}
                                        Call Friend
                                    </button>
                                </Link>
                            </div>

                            <div className=' mt-4 fs-5 d-flex align-items-center'>
                                <p className='statusTitle opacity-75'>Current Status :</p>
                                <span className='alert alert-success mx-3'>
									<span>
										<img
                                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII='
                                            alt='---'
                                        />
									</span>
									Well Being
								</span>
                            </div>
                            {/* current status section end */}
                            <div className='informationContent'>
                                <h3 className='fs-4 mt-4'>Recent Records</h3>
                                <div className='d-flex justify-content-around'>
                                    {recentRecords.map((pastRecords) => {
                                        return (
                                            <div className='mt-5'>
                                                {/* row starts */}
                                                {/* col */}
                                                <div className='card recordCard'>
                                                    <div className='card-body'>
                                                        <div className='d-flex justify-content-between'>
                                                            <div>
                                                                <h5 className='card-title'>
                                                                    {pastRecords.dialogue.date}
                                                                </h5>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className='border-0 bg-transparent'
                                                                    onClick={(e)=>openYouthMenu(e,pastRecords._id)}>
                                                                    <img
                                                                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAf0lEQVRIie2Qyw3CMBAFZ+2IZlxToAvgFKRQSmpyM0jmcYklYnFyyG3ntm9H2g84jnM4lnM+SfEJjICAxaxMKaVXlfY4gxRn4Po19CZFgHsN9jgBOP+47NLU3U5Yz9lgRmmibicAS9uQ1GbdzmBWpvWfYxXN3o/tJv9xHMc5iA94q1TJhrSZEwAAAABJRU5ErkJggg=='
                                                                        alt='---'
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='d-flex justify-content-between mt-4'>
                                                                <p className='card-text'>Opening emotion :</p>
                                                                <p className='card-text fw-bold'>
                                                                    {pastRecords.emotionOfCall}
                                                                </p>
                                                            </div>
                                                            <div className='d-flex justify-content-between'>
                                                                <p className='card-text'>Closing emotion :</p>
                                                                <p className='card-text fw-bold'>
                                                                    {pastRecords.emotionOfCall}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    {/*               space between different sections                                   */}

                    {section === "YouthCallHistory" && (
                        <div className='container-fluid'>
                            <div className=' mt-5 fs-5 row'>
                                <div className='d-flex flex-column col-3'>
                                    {/* this could be for dialog */}
                                    {youth && (
                                        <div>
                                            <p className='fs-5 fw-bold '>{youth.firstName}</p>
                                            <p>{youth.email}</p>
                                            <div className='d-flex '>
												<span>
													<Icon icon='mdi:telephone'/>
												</span>
                                                <p className='mx-2'>{youth.firstName}</p>
                                            </div>
                                            <p>{youth.callDate}</p>{" "}
                                        </div>
                                    )}
                                    {/*  */}
                                </div>
                                <div className='col-6'>
									<span className='alert alert-success p-1 mt-5'>
										<span>
											<img
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII='
                                                alt='---'
                                            />
										</span>
										Well Being
									</span>
                                </div>
                                {/* <audio controls className='w-75'>
									<source src='horse.ogg' type='audio/ogg' />
									<source src={callAudio} type='audio/mpeg' />
								</audio> */}
                            </div>

                            {/* overview & QA section start */}
                            <div className=' d-flex justify-content-start mt-5'>
                                <div>
                                    <button
                                        className='m-1 border-0 bg-transparent fw-semibold'
                                        onClick={(e) => setYouthCallHistorySections("Overview")}>
                                        Overview
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className='m-1 border-0 bg-transparent fw-semibold                                                                                                                                        '
                                        onClick={(e) =>
                                            setYouthCallHistorySections("QA_Assessment")
                                        }>
                                        QA Assessment
                                    </button>
                                </div>
                            </div>
                            <div>
                                {youthCallHistorySections === "Overview" && (
                                    <div className='p-2 d-flex justify-content-around mb-5'>
                                        {/* card 1 starts */}
                                        <div className='card overviewRecordCard'>
                                            <div className='card-body'>
                                                <div className='d-flex justify-content-between'>
                                                    {/*  */}
                                                    <div>
                                                        <h5 className='card-title'>Origination</h5>
                                                    </div>
                                                </div>
                                                <hr className='border border-1 border-secondary rounded'/>
                                                <div>
                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <p className='card-text'>Opening Question :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.convo_data.openingQuestion1Red}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>response :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.ROQpossibleResponse}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>follow-up question :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.followUpQuestions.roqPromptQuestion}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>prompt question :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.youthFollow_UpQuestions}
                                                        </p>
                                                    </div>
                                                    <hr/>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>Name Of Agent :</p>
                                                        <p className='card-text fw-bold'>{selectedYouth.dialogue.nameOfAgent}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card 1 ends */}
                                        {/* card 1 starts */}
                                        <div className='card overviewRecordCard'>
                                            <div className='card-body'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h5 className='card-title'>Outcome</h5>
                                                    </div>
                                                </div>
                                                <hr className='border border-1 border-secondary rounded'/>
                                                <div>
                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <p className='card-text'>Youth Question :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.youthOQ2}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between '>
                                                        <p className='card-text'>Youth reflection :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.youthResponses}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between '>
                                                        <p className='card-text'>Youth Response :</p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.youthResponses}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between '>
                                                        <p className='card-text'>
                                                            Youth follow-up question :
                                                        </p>
                                                        <p className='card-text fw-bold'>
                                                            {selectedYouth.youthFollow_UpQuestions}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>next call :</p>
                                                        <p className='card-text fw-bold'>{selectedYouth.newAppointment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card 1 ends */}
                                    </div>
                                )}
                                {youthCallHistorySections === "QA_Assessment" && (
                                    <div>QA Assessment content</div>
                                )}
                            </div>
                            {/* overview & QA section end */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
