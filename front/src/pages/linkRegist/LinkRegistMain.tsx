import React from "react";
import LinkRegist from "../../components/linkRegist/LinkRegist";
import LinkRegistComments from "../../components/linkRegist/LinkRegistComments";
import LinkRegistPhoto from "../../components/linkRegist/LinkRegistPhoto";

function LinkRegistMain() {
    // Link 등록 페이지는
    // Comment 는 최대 5? 10? 개 까지 가능 (몇 개까지 가능할 지 고려하기) 
    // 사진은 딱 1장만 가능하도록 구현 

    return (
        <div>
             <h1>LINK 등록 페이지</h1>
             <div>
                    <LinkRegist />
             </div>
             <div>
                    <LinkRegistComments />
             </div>
             <div>
                    <LinkRegistPhoto />
             </div>
        </div>
    )
}

export default LinkRegistMain;