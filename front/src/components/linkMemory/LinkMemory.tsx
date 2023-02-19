import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LinkMemory() {
    const [userLinkData, setUserLinkData] =  useState<Array<Object>>([]);
    
    useEffect(() => {
        userSavedLinkData();
    }, [])

    async function userSavedLinkData() {
        console.log('userSavedLinkData Exce !!!');
        await axios.get('/api/userSavedLinkData')
            .then((res) => {
                let result = res.data.DATA_SEARCH;
                if(result == 'SUCCESS') {
                    let listData = res.data.USER_LINK_DATA;
                    setUserLinkData(listData);
                }
            }).catch((err) => {
                console.log('USER SAVED LINKED DATA ERR : ' + JSON.stringify(err));
            }) 
    }

    useEffect(() => {

        console.log('USE EFFECT USER LINK DATA CHECK : ' + JSON.stringify(userLinkData));

    }, [userLinkData])

    // TODO
    // axios 로 User 데이터 가져 온 후 다시 re - rendering 하여 주기
    // 다시 RE-RENDERING 필요
    return (
        <>
            아직 저장된 LINK 가 없습니다.
            {
                userLinkData.map((eachData) => {
                    <div>
                        {/* { eachData.user_email } */}
                    </div>
                })
            }
        </>
    )
}

export default LinkMemory;