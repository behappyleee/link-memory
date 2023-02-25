import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LinkRegistComments() {

    const plusInputComment = () => {

    }

    return (
        <div>
            <div>
                <Button variant="contained" style={{ textAlign: 'right' }} onClick={plusInputComment}>코멘트 추가</Button>
            </div>    
                <TextField
                        helperText="Please WRITE your COMMENTS"
                        id="inputComment"
                        placeholder="Comment 입력해 주세요!"
                        label="Comment"
                        sx={{ width: 600, marginTop: 5 }}
                    />
        </div>
    )
}

export default LinkRegistComments;