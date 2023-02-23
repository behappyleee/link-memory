import { isIP } from "net";
import React, { useState, useMemo } from "react";

// const HeaderTest = (props) => { // 이와 같이 받거나
const HeaderTest = ({ab, zc}: any) => { // 이와 같이 받거나
    console.log('HEADER TEST DATA :  ' + JSON.stringify(ab));
    console.log('HEADER TEST DATA :  ' + JSON.stringify(zc));
    return (
        <div>

        </div>
    )
}

const hardCalculate = (number: number) => {
    console.log('어려운 계산');
    for(let i=0; i<500; i++) {}
    return number + 100;
}

const easyCalculate = (number: number) => {
    console.log('쉬운 계산 !!!');
    for(let i=0; i<10; i++) {

    }
    return (number + 1);
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
    
    // useMemo 구조
    // useMemo 는 useEffect 처럼 첫번째 인자로 콜백 함수, 두 번쨰 인자로 의존성 배열 (dependancyArray)를 받는다
    // 의존성 배열에 값이 업데이트 될 떄에만 콜백 함수를 다시 호출하여 메모리에 저장된 값을 업데이트
    // 만약 빈 배열일 시 useEffect 처럼 처음 rendering 될 떄에만 값을 계산을 하고 그 이후로는 계속 Memorization 된 값을 꺼내와 사용한다.
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardSum = hardCalculate(hardNumber);
    const easySum = easyCalculate(easyNumber);


    // setNumber 값만 변경이 되어도 set
    const [number, setNumber] = useState(1);
    const [isKorea, setIsKorea] = useState(true);

    const location = {
        country: isKorea ? "한국" : "일본"
    };

    // useMemo 사용 시 
    const location_memo = useMemo(() => {
        return {
            country: isKorea ? "한국" : "일본",
        }
    }, [isKorea]);


    return (
        <div>   
            <span> USE STATE 값 변경 :  {isUseState}
                   NUMBER 값 출력 : {numTest}  
                <button onClick={stateChange}>클릭</button>
                <button onClick={numberUp}>숫자 업</button>   
                <button onClick={numberDown}>숫자 다운</button>  
                <HeaderTest ab="x" zc="y" bx="k"></HeaderTest>
            </span>

            <div>
                <h3>어려운 계산기</h3>
                <input 
                    type="number"
                    value={hardNumber}
                    onChange={(e) => setHardNumber(parseInt(e.target.value)+1)}
                />
                <span> +10000 = {hardSum}</span>
            </div>

            <div>
                <h3>쉬운 계산기</h3>
                <input 
                    type="number"
                    value={easyNumber}
                    onChange={(e) => setEasyNumber(parseInt(e.target.value)+1)}
                />
                <span> +10 = {easySum} </span>
            </div>  

            {/* 자바스크립트에서 객체는 원시 타입과는 다르게 값이 저장 될 시 주소 값으로 저장이 되어
                그렇기 떄문에 리액트에서는 numberState 바뀌면 컴포넌트가 재 호출이 되면서 location 의 주소값이
                변경이 되어 location 값이 변경이 되었다고 인식이 됨


            */}

            <h2>하루에 몇 끼 먹어요?</h2>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <hr />

            <h2>내가 있는 나라는?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Update</button>
        </div>
    )
}

export default HookTest;