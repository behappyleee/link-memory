import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LinkMemory from '../../components/linkMemory/LinkMemory';
import LinkRegistMain from '../linkRegist/LinkRegistMain';
import FaqMain from '../faq/FaqMain';

function DashBoardMainContents(props: any) {
    const [contentsIndex, setContentsIndex] = useState(0);

    useEffect(() => {
        let propsContentIndex = props.contentsIndex;
        setContentsIndex(propsContentIndex);
    }, [props])

    return (
        <React.Fragment>
            {/* 저장 된 Link 페이지 */}
            {contentsIndex == 0 &&
                <LinkMemory />
            }
            
            {/* Link 등록 페이지 */}
            {contentsIndex == 1 &&
                <LinkRegistMain />
            }   
            
            {/* 1:1 문의 페이지 */}
            {contentsIndex == 2 &&
                <LinkRegistMain />
            }  

            {/* 자주 묻는 질문 페이지 */}
            {contentsIndex == 3 &&
               <FaqMain />
            } 

            {/* <div> */}
            {/* <Title>Recent Deposits</Title> */}
            {/* <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    TITLE MAIN TEST !
                </Typography>
                <Typography component="p" variant="h4">
                    $3,024.00
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    on 15 March, 2019
                </Typography>
                <div> */}
                    {/* <Link color="primary" href="#">
                        View balance
                    </Link>
                </div>
            </div> */}
        </React.Fragment>
    )
}

export default DashBoardMainContents;