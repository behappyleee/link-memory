import React, { useState } from 'react';


function TestFunction() {
    const [testNum, setTestNum] = useState<number>(0);
    
    const onIncreaseNum = () => {
        setTestNum(testNum + 1);
    }

    const onDecreaseNum = () => {
        setTestNum(testNum - 1);
    }

    type myTypeTest = 'kim' | 'park';
    let typeTest : myTypeTest = 'kim';

    function checkType(paramTest : number | string) : number | string | number[] {
        return [1,2,3];
    }

    return (
        <div>
            <span>TEST VALUE : {testNum}</span>
            <button onClick={onIncreaseNum}>testNumUp</button>
            <button onClick={onDecreaseNum}>testNumDown</button>
        </div>  
    )
}

export default TestFunction;