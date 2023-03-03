import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";
import "../Styles/YouthProfile.css";
import { Icon } from "@iconify/react";
import { getYouthById } from "../Services/Youth";
import { getRecentYouthDialogueData } from "../Services/YouthDialogue";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import formatRelative from "date-fns/formatRelative";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { TiHome } from "react-icons/ti"
// import { el } from "date-fns/locale";
// import { SearchBar } from "../Components/Youth";
// import { AiOutlineSearch } from 'react-icons/ai';
import {
    getLocalStorageForObjects,
    // setLocalStorageAsString,
    // setLocalStorageForObjects
} from "../Utils/localStorageUtils";
import { Grid, Avatar, Text } from "@nextui-org/react";

export default function YouthProfile(props) {
    const [recentRecords, setRecentRecords] = useState(null);
    const [selectedYouth, setselectedYouth] = useState(null);
    const [youth, setYouth] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [section, setSection] = useState("profile");
    const [selectedButton, setSelectedButton] = useState("profile");
    const [youthCallHistorySections, setYouthCallHistorySections] = useState("Overview");
    const agent = getLocalStorageForObjects("user");

    const getYouthData = async (id) => {
        const youthData = await getYouthById(id);
        setLoading(false);

        if (youthData.error) return setError(youthData.error);
        setYouth(youthData.data.data.youth);
        getRecentYouthDialogueDataForView(youthData.data.data.youth.firstName);
    }

    const getRecentYouthDialogueDataForView = async (youthName) => {
        const recentData = await getRecentYouthDialogueData();

        if (recentData.error) return setError(recentData.error);

        const data = recentData?.data?.data?.all;

        const filterByYouthName = data.filter(record => record.dialogue.nameOfYouth === youthName);

        setRecentRecords(filterByYouthName);
    }

    const { id } = useParams();

    useEffect(() => {
        getYouthData(id);
    }, [])

    const openYouthMenu = (e, id) => {
        e.preventDefault();
        const filtered = recentRecords.filter(record => {
            return record._id === id;
        });
        setselectedYouth(filtered[0]);
        setSection("YouthCallHistory");
    };
    // if (setSection === "profile") {
    //     document.getElementById("profileBtn").style.color = "blue"
    // } else {
    //     document.getElementById("profileBtn").style.color = ""
    // }
    return (
        <div className='container-fluid'>
            <>
                <TopNavbar />
            </>
            <div className='row'>
                <div className='left col-3'>
                    <div className='leftcontent d-flex flex-column justify-content-start'>
                        <div id="dashBtn">
                            <Link to={"/Dashboard"}
                                className={`m-1 border-0 bg-transparent fw-semibold ${selectedButton === "dashboard" ? "selected" : ""}`}
                                id="dashBtn"
                                onClick={() => setSelectedButton("dashboard")}
                            >
                                <span>
                                    {/* <i className='fa-regular fa-folder mx-3'></i> */}
                                    <TiHome className="mx-3" />
                                </span>
                                Dashboard
                            </Link>
                        </div>

                        <div id="profileBtn">
                            <button
                                className={`m-1 border-0 bg-transparent fw-semibold ${selectedButton === "profile" ? "selected" : ""} `}
                                onClick={() => {
                                    setSelectedButton("profile");
                                    setSection("profile")
                                }}>
                                <span>
                                    <i className='fa-regular fa-user mx-3'></i>
                                </span>
                                Profile
                            </button>
                        </div>

                        <div id="sessionsBtn">
                            <button
                                className={`m-1 border-0 bg-transparent fw-semibold ${selectedButton === "sessions" ? "selected" : ""} `}
                                onClick={() => {
                                    setSelectedButton("sessions");
                                    setSection("sessions");
                                }}>
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
                                    <div className="d-flex align-items-center" >
                                        <div id="profilePhoto"></div>
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

                            <div className="d-flex align-items-center" >
                                <div id="profilePhoto"></div>
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
                                <div className="d-flex justify-content-between">
                                    <h3 className='fs-4 mt-4'>Recent Records</h3>
                                    {/* <div><AiOutlineSearch className="searchIcon" /><SearchBar  onChange={(e) => setSearch(e.target.value)}/></div> */}
                                </div>
                                <div className='' id="gridContainer"  >
                                    {recentRecords.map((pastRecords) => {
                                        return (
                                            <div key={pastRecords._id} id="gridItem">
                                                {/* row starts */}
                                                {/* col */}
                                                <div className='card recordCard'  >
                                                    <div className='card-body'>

                                                        <div className='d-flex justify-content-between' >
                                                            <div>
                                                                <h5 className='card-title'>
                                                                    {/* {pastRecords.dialogue.date} */}
                                                                    {/* {formatRelative(new Date(pastRecords.dialogue.date), { addSuffix: true })} */}
                                                                    {formatRelative(subDays(new Date(), 3), new Date(pastRecords.dialogue.date), { addSuffix: true })}
                                                                </h5>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className='border-0 bg-transparent d-flex'
                                                                    onClick={(e) => openYouthMenu(e, pastRecords._id)}>
                                                                    <img
                                                                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAf0lEQVRIie2Qyw3CMBAFZ+2IZlxToAvgFKRQSmpyM0jmcYklYnFyyG3ntm9H2g84jnM4lnM+SfEJjICAxaxMKaVXlfY4gxRn4Po19CZFgHsN9jgBOP+47NLU3U5Yz9lgRmmibicAS9uQ1GbdzmBWpvWfYxXN3o/tJv9xHMc5iA94q1TJhrSZEwAAAABJRU5ErkJggg=='
                                                                        alt='---'
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {/* <div className='d-flex justify-content-between mt-4' id="sessionContent1">
                                                                <p className='card-text'>Opening emotion :</p>
                                                                <p className='card-text fw-bold'>
                                                                    {pastRecords.emotionOfCall}
                                                                </p>
                                                            </div> */}
                                                            {agent && <div className='' key={agent.id}>
                                                                <Grid.Container className=''>
                                                                    <Grid className='d-flex justify-content-between mt-3'>
                                                                        {/* <Avatar
                                                                            src={agent.imgUrl}
                                                                            css={{ size: "8rem" }}
                                                                            className='mt-4'
                                                                            bordered
                                                                        /> */}
                                                                        <Text className='fs-6'>
                                                                            {agent.role}:
                                                                        </Text>
                                                                        <Text className='fs-6 justify-content-between' id="sessionAgentName">
                                                                            {agent.firstName}
                                                                            {agent.lastName}
                                                                        </Text>
                                                                        {/* <Text className='' size='$md'>
                                                                            {agent.email}
                                                                        </Text> */}
                                                                    </Grid>
                                                                </Grid.Container>
                                                                {/* <hr className='border border-2 border-secondary opacity-50 rounded mt-1' /> */}
                                                                {/* <button onClick={AddNewYouth} >ADD YOUTH</button> */}
                                                            </div>}
                                                            <div className='d-flex justify-content-between' id="sessionContent2">
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
                                            <div className="d-flex align-items-center" id="sessionHistoryTop">
                                                <div id="profilePhoto"></div>
                                                <Link to={`/WellnessForm/${youth._id}`}>
                                                    <button className='wellBeingBtn fs-5'>
                                                        <span>
                                                            <i className='fa-solid fa-phone fs-5'></i>
                                                        </span>{" "}
                                                        Call Friend
                                                    </button>
                                                </Link>
                                            </div>

                                            <p>{youth.email}</p>
                                            <div className='d-flex '>
                                                <span>
                                                    <Icon icon='mdi:telephone' />
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
                                <button>Download Conversation</button>
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
                                                <hr className='border border-1 border-secondary rounded' />
                                                <div>
                                                    <div id="sessionHistoryOpeningQuestion">
                                                        <div className='d-flex justify-content-between mt-4'>
                                                            <p className='card-text'>Opening Question :</p>
                                                            <p className='card-text fw-light'>
                                                                {selectedYouth.convo_data.openingQuestion1Red}
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <div className="d-flex justify-content-between">
                                                                <p className=''>
                                                                    Answer:
                                                                </p>
                                                                <p className='fw-bold'>
                                                                    {selectedYouth.emotionOfCall}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>Response :</p>
                                                        <p className='card-text fw-normal'>
                                                            {selectedYouth.ROQpossibleResponse}
                                                        </p>
                                                    </div>

                                                    <div id="sessionHistoryFollowUpQuestion">
                                                        <div className='d-flex justify-content-between'>
                                                            <p className='card-text'>Follow-Up Question :</p>
                                                            <p className='card-text fw-light'>
                                                                {selectedYouth.followUpQuestions.roqPromptQuestion}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className='card-text fw-normal'>
                                                                    Answer:
                                                                </p>
                                                                <p className='card-text fw-bold'>
                                                                    {selectedYouth.convo_data.newKeyAnswer1}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="sessionHistoryPromptQuestion">
                                                        <div className='d-flex justify-content-between'>
                                                            <p className='card-text'>Prompt Question :</p>
                                                            <p className='card-text fw-light'>
                                                                {selectedYouth.youthFollow_UpQuestions}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className='card-text fw-normal'>
                                                                    Answer:
                                                                </p>
                                                                <p className='card-text fw-bold'>
                                                                    {selectedYouth.convo_data.newKeyAnswer2}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='border border-1 border-secondary rounded' />
                                                <div className='d-flex justify-content-between'>
                                                    {/*  */}
                                                    <div>
                                                        <h5 className='card-title'>Youth Reflection</h5>
                                                    </div>
                                                </div>
                                                <hr className='border border-1 border-secondary rounded' />
                                                <div>
                                                    <div>
                                                        <div className='d-flex justify-content-between mt-4'>
                                                            <p className='card-text'>Youth Question :</p>
                                                            <p className='card-text fw-light'>
                                                                {selectedYouth.youthOQ1}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className='card-text fw-normal'>
                                                                    Answer:
                                                                </p>
                                                                <p className='card-text fw-bold'>
                                                                    Test
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-between '>
                                                        <p className='card-text'>Youth reflection :</p>
                                                        <p className='card-text fw-bold'>
                                                            {/* {selectedYouth.youthResponses} */}
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
                                                    <hr />
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='card-text'>Next Call :</p>
                                                        <p className='card-text fw-bold'>{selectedYouth.newAppointment}</p>
                                                        {/* {formatRelative(subDays(new Date(), 3), new Date(pastRecords.dialogue.date), { addSuffix: true })}                                                         */}
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p className='card-text'>Name Of Agent :</p>
                                                    {/* <p className='card-text fw-bold'>{selectedYouth.dialogue.nameOfAgent}</p> */}
                                                    {agent && <div key={agent.id}>
                                                        <Text className=''>
                                                            {agent.firstName}
                                                        </Text>
                                                        {/* <Text className='mb-2 fw-semibold fs-4'>
                                                            {agent.role}
                                                        </Text> */}
                                                        {/* <Text className='agentCompany fw-semibold fs-5' size='$md'>
                                                            {agent.email}
                                                        </Text> */}
                                                        {/* <button onClick={AddNewYouth} >ADD YOUTH</button> */}
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        {/* card 1 ends */}
                                        {/* card 1 starts */}
                                        {/* <div className='card overviewRecordCard'>
                                            <div className='card-body'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h5 className='card-title'>Outcome</h5>
                                                    </div>
                                                </div>
                                                <hr className='border border-1 border-secondary rounded' />
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
                                        </div> */}
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
        </div >
    );
}
