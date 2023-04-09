import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../styles/Landing.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function LandingPageLoad() {
    const navigate = useNavigate();
    const greetingsLandingPage = ['Testing ...', 'Hello World !', 'It is LinkMemory Web Site ...'];
    const [showGreetingComment, setShowGreetingComment] = useState<Array<String>>([]);  // Main 페이지에 보여 줄 Comment Array State
    const [greetingCount, setGreetingCount] = useState<any>(0); // 현재 페이지에 Comment 몇개 표출 되었는 지 Count

    useEffect(() => {   
        document.body.style.backgroundColor = "black";
        // isCurrentUserLogin();
        loadGreet();
    }, []);
   
    useEffect(() => {
        loadGreet();
    }, [greetingCount])

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

    function loadGreet() {
       if(greetingCount < greetingsLandingPage.length) {
            setTimeout(() => {
                let greetingComment = greetingsLandingPage[greetingCount];
                // useState 가 Array 인 경우 아래와 같이 Push 대신 아래에 문법으로 사용 !
                setShowGreetingComment([...showGreetingComment, greetingComment]);
                setGreetingCount(greetingCount+1);
            }, 1000); 
       }    
    }

    return (
        <div>
            <br />
            {showGreetingComment.map((comment, index) => (
                <p key={index} className='commanTextColor'>{comment}</p>                
            ))}
            <br />
            <div>
                <Button variant="contained" endIcon={<SendIcon />} onClick={isCurrentUserLogin}>
                    MainPage 이동
                </Button>
            </div>
        </div>
    )
}

export default LandingPageLoad;