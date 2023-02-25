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
    // Link 등록 페이지는
    // Comment 는 최대 5? 10? 개 까지 가능 (몇 개까지 가능할 지 고려하기) 
    // 사진은 딱 1장만 가능하도록 구현 

    return (
        <div>
            <div>
                <TextField
                    helperText="Please WRITE your LINK"
                    id="inputLink"
                    placeholder="https://www.naver.com"
                    label="Link"
                    sx={{ width: 600 }}
                />
            </div>
        </div>
    )
}

export default LinkRegist;