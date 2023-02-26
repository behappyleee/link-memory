import React, { useState, useEffect } from "react";
import LinkRegist from "../../components/linkRegist/LinkRegist";
import LinkRegistComments from "../../components/linkRegist/LinkRegistComments";
import LinkRegistPhoto from "../../components/linkRegist/LinkRegistPhoto";
import Button from '@mui/material/Button';
import axios from "axios";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function LinkRegistMain() {
    const [inputLink, setInputLink] = useState<string>('');
    const [inputComments, setInputComments] = useState<string[]>([]);

    useEffect(() => {
       console.log('LINK REGIST MAIN PAGE USEEFFECT INPUT COMMENTS TEST  : ' + JSON.stringify(inputComments));
    }, [inputComments])


    useEffect(() => {
       console.log('셋셋 인풋 코멘트트트츠츠 : ' + JSON.stringify(setInputComments));
    }, [setInputComments])


    // Link 등록 페이지는
    // Comment 는 최대 5? 10? 개 까지 가능 (몇 개까지 가능할 지 고려하기) 
    // 사진은 딱 1장만 가능하도록 구현 
    const saveUserInputLink = () => {
       alert('링크 등록 !');
       axios.post('/api/saveUserInputLink', {'TEST': 'TEST_BODY'})
              .then((res) => {
                     console.log('SAVE USER LINK RES : ' + JSON.stringify(res));
              })       
              .catch((err) => {
                     console.log('save user input link err data 1 : ' + err);
                     console.log('save user input link err data 2 : ' + JSON.stringify(err));
              })
    }
   
    return (
        <div>
             <h1>LINK 등록 페이지</h1>
             <Divider variant="inset" />
             <div>
                    <LinkRegist inputLink={setInputLink} />
             </div>
             <Divider variant="inset" />
             <div>
                    <LinkRegistComments inputCommentsTest={setInputComments}/>
             </div>
             <Divider variant="inset" />
             <div>
                    <LinkRegistPhoto />
             </div>
             <Divider variant="inset" />
             <div>
                     <Button variant="outlined" onClick={saveUserInputLink}>링크 등록하기</Button>
             </div>
        </div>
    )
}

export default LinkRegistMain;