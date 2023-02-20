import React, { useEffect, useState } from 'react';

function CardTest(dataList: any) {
    const [testDataList, setTestDataList] = useState<any>([]);
    
    console.log('DATA LIST CHECK : ' + JSON.stringify(dataList));
    
    useEffect(() => {
        let resultList = dataList.listData;
        setTestDataList(resultList);
    }, [dataList])

    return (
        <>
            { testDataList.length > 0 &&
                testDataList.map((eachData: any, index: number): any => (
                    <ul>
                        <li>{eachData.id}</li>
                        <li>{eachData.user_email}</li>
                        <li>{eachData.link}</li>
                        <li>{eachData.user_id}</li>    
                    </ul>
                ))
            }
        </>
    )
}

export default CardTest;