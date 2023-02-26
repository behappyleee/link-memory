import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

let commentsArrayTest: string[] = [];

function LinkRegistComments(props: any) {
    function CommentTextField() {
        return (
            <TextField
                helperText="Please WRITE your COMMENTS"
                placeholder="Comment 입력해 주세요!"
                label="Comment"
                sx={{ width: 600, marginTop: 5 }}
                multiline={true}
            />
        )
    }
    
    const [inputCommentBox, setInputCommentBox] = useState<Array<any>>([<CommentTextField />]);    
    const [inputCommentArray, setInputCommentArray] = useState<string[]>([]);

    const increaseInputComment = () => {
        let commentBoxLength = inputCommentBox.length;
        if(commentBoxLength > 4) {
            alert('코멘트 등록은 최대 5개까지 가능합니다.');
            return false;
        }
        setInputCommentBox(
            [...inputCommentBox,
            <CommentTextField />]
        );
    }

    // TODO 
    // 부모 Components 에 Comments Array Data 넘겨줄 시 데이터 확인 하기 !!!
    const userInputComments = (e: any, inputCommentIndex: number) => {
        commentsArrayTest[inputCommentIndex] = e.target.value;
        setInputCommentArray(commentsArrayTest);
        props.inputCommentsTest(inputCommentArray);
    }

    return (
        <div>
            <div>
                <Button variant="contained" style={{ textAlign: 'right' }} onClick={increaseInputComment}>코멘트 추가</Button>
            </div>    
            <div>
                    {
                        inputCommentBox.map((commentData: any, index: any): any => (
                            <div key={index} onChange={(e) => userInputComments(e, index)}>
                                {commentData}
                            </div>    
                        ))
                    }
            </div>
        </div>
    )
}

export default LinkRegistComments;