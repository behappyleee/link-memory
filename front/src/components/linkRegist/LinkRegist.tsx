import React from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { textAlign } from "@mui/system";

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function LinkRegist() {
    // TODO Comment 입력 란 추가 하기 !!
    const plusInputComment = () => {
        alert('COMMENT 추가 !!!');
    }

    return (
        <div>
            <h1>LINK 등록 페이지</h1>
            <div>
                <TextField
                    helperText="Please WRITE your LINK"
                    id="inputLink"
                    placeholder="https://www.naver.com"
                    label="Link"
                    sx={{ width: 600 }}
                />
            </div>
            <div>
               <div>
                {/* TODO 
                    (1) 버튼 오른쪽으로 정렬 하기 <!DOCTYPE html>
                    (2) Button 클릭 시 Comment 입력 란 추가로 늘어나는 기능 추가 하기
                
                */}
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
            <div>

            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
            
            <div>
                첨부 된 Image
            </div>

            </div>
        </div>
    )
}

export default LinkRegist;