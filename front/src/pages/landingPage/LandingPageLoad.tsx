import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LandingPageLoad() {
    const navigate = useNavigate();
    useEffect(() => {
        isCurrentUserLogin();
    }, [])

    const isCurrentUserLogin = async () => {
    await axios.get('/api/existUserSession')
        .then((res) => {
        let sessionSearchResult: string = res.data.EXIST_SESSION_RESULT;
        if(sessionSearchResult === 'EXISTS') {
             navigate("/dashBoardMain");
            return;
        }
        if(sessionSearchResult === 'NONE') {
            navigate("/login");
            return;
        }
        }).catch((err) => {
            navigate("/login");
            return;
        })
    }  
    return (
        <div>
        </div>
    )
}

export default LandingPageLoad;