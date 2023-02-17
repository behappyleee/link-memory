import React, { useState } from 'react';


function testFunction() {
    const [testNum, setTestNum] = useState(0);
    const onIncreaseNum = () => {
        setTestNum(testNum + 1);
    }    
    const onDecreaseNum = () => {
        setTestNum(testNum - 1);
    }
    return (
        <div>
            <span>TEST VALUE : {testNum}</span>
            <button onClick={onIncreaseNum}>testNumUp</button>
            <button onClick={onDecreaseNum}>testNumDown</button>
        </div>  
    )
}

export default testFunction;