import React, { useEffect, useState } from "react";
import { Grid, Avatar, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";
import TopNavbar from "../Components/TopNavbar";

import Youth from "../Components/Youth";
import { getAllYouth } from "../Services/Youth";
import AddYouth from "../Components/AddYouth";

import {
    getLocalStorageForObjects,
    setLocalStorageAsString,
    setLocalStorageForObjects
} from "../Utils/localStorageUtils";

export default function Dashboard() {
    const agent = getLocalStorageForObjects("user");
    const navigate = useNavigate();
    const [youth, setYouth] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function onLogOut() {
        setLocalStorageAsString("token", "");
        setLocalStorageForObjects("user", {});
        navigate("/");
    }

    const getAllYouthData = async () => {
        const youthData = await getAllYouth();
        setLoading(false);

        if (youthData.error) return setError(youthData.error);
        setYouth(youthData.data.data.all);
    }

    useEffect(() => {
        getAllYouthData();
    }, []);

    // ADD YOUTH BTN
    function AddNewYouth() {
        const x = document.getElementById("modalBox")
        if (x.style.display === "none") {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    }

    return (
        <div className='dashB container-fluid'>
            {/* navbar component inside dashboard */}
            <>
                <TopNavbar onLogOut={onLogOut} />
            </>
            {/* navbar component ends here */}
            <div className='row'>
                {/* left Content of dashboard is agents info */}
                {agent && <div className='leftDashboard col-3' key={agent.id}>
                    <Grid.Container className='d-flex justify-content-center align-items-center'>
                        <Grid className='d-flex flex-column align-items-center'>
                            <Avatar
                                src={agent.imgUrl}
                                css={{ size: "8rem" }}
                                className='mt-4'
                                bordered
                            />
                            <Text className='mt-2 mb-1 fw-bold fs-3'>
                                {agent.firstName}
                            </Text>
                            <Text className='mb-2 fw-semibold fs-4'>
                                {agent.role}
                            </Text>
                            <Text className='agentCompany fw-semibold fs-5' size='$md'>
                                {agent.email}
                            </Text>
                        </Grid>
                    </Grid.Container>
                    <hr className='border border-2 border-secondary opacity-50 rounded mt-1' />
                    <button onClick={AddNewYouth} >ADD YOUTH</button>
                </div>}

                {/* agents left content of dashboard ends here */}

                {/* Youths profiles on dashboard starts here */}
                <div className='rightDashboard col-9 d-flex justify-content-evenly mb-5'>
                    <div className='row mb-5'>
                        {loading && <div>content is loading....</div>}
                        {error}
                        {youth && <Youth youth={youth} />}
                        <div id="modalBox" className="modalBox" >
                            <AddYouth />
                        </div>
                    </div>
                </div>
                {/* Youths profiles of dashboard ends here */}
            </div>
        </div>
    );
}
