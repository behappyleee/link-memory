import React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

function LinkRegistPhoto(props: any) {
    // TODO
    // (1) Image Upload 기능 추가하기
    // (2) Image 업로드 하였을 시 미리보기 기능 추가

    // Image Upload 기능 구현
    const inputLinkImage = () => {
    
    }
    
    return (
        <div>
            <div>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" onChange={inputLinkImage}/>
                </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
            </div>
            <div>
                첨부 된 Image
            </div>
        </div>
    )
}

export default LinkRegistPhoto;