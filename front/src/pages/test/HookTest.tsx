import { isIP } from "net";
import React, { useState } from "react";


// const HeaderTest = (props) => { // 이와 같이 받거나
const HeaderTest = ({ab, zc}: any) => { // 이와 같이 받거나

    console.log('HEADER TEST DATA :  ' + JSON.stringify(ab));
    console.log('HEADER TEST DATA :  ' + JSON.stringify(zc));

    return (
        <div>

        </div>
    )
}

function HookTest() {
    // 1. useState
    // 상태 값 관리를 위하여 사용
    const [isUseState, setIsUseState] = useState<boolean>(false);
    const [numTest, setNumTest] = useState(0);
    const stateChange = () => {
        console.log('BEFORE ISUSE STATE  : ' + isUseState);
        setIsUseState(!isUseState);
        console.log('AFTER IS USE STATE : ' + isUseState);
    }
    const numberUp = () => {
        setNumTest((numTest+1));
    }
    const numberDown = () => {
        setNumTest((numTest-1));
    }

    // 2. useMemo
    // useMemo 는 memorization 기본적인 컨셉은 재사용임 (동일한 인풋에 대해 아웃풋이 동일하다면 이를 저장)
    // 동일한 인풋에 대해 아웃풋이 동일하다면 이를 저장해두고, 동일한 입력에 대응하는 방식
    // 리액트의 state 값이 없데이트 되면 관련 컴포넌트의 re-rendering 은 불가피함, 페이지가 1개 컴포넌트라면 1번의 렌더링이 일어나겠지만
    // Atomic 과 같은 디자인 패턴을 적용하였을 시 수십가지의 컴포넌트로 페이지로 구성되었을 시 크리티컬한 성능 저하와 더불어 극악의 사용자 경험을 함

    return (
        <div>   
            <span> USE STATE 값 변경 :  {isUseState}
                   NUMBER 값 출력 : {numTest}  
                <button onClick={stateChange}>클릭</button>
                <button onClick={numberUp}>숫자 업</button>   
                <button onClick={numberDown}>숫자 다운</button>  
                <HeaderTest ab="x" zc="y" bx="k"></HeaderTest>
            </span>
        </div>
    )
}

export default HookTest;