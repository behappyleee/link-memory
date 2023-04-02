import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LandingPageLoad() {

    console.log('FIRST PAGE LOAD !');

    const navigate = useNavigate();
    const greetingsLandingPage = ['Hello', 'It is LinkMemory Web Site'];


    useEffect(() => {
        // isCurrentUserLogin();
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
            Command Line Design 구현 하기 Testing !!!!!
            {greetingsLandingPage && 
                greetingsLandingPage.map((greeting, index) => (
                    <ul key={index}>
                        <li> {greeting} </li>
                    </ul>
                ))
            }


        </div>
    )
}

export default LandingPageLoad;