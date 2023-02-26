import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

function LinkRegistPhoto({ inputImage }: any) {
    const [inputUploadImage, setInputUploadImage] = useState('');

    // TODO
    // (1) Image Upload 기능 추가하기
    // (2) Image 업로드 하였을 시 미리보기 기능 추가

    // Image Upload 기능 구현
    // accept='image/jpg,impge/png,image/jpeg,image/gif' 
    const inputLinkImage = (e: any) => {
        let uploadImageFile = e.target.files; 
        inputImage(uploadImageFile);
    }
    
    return (
        <div>
            <div>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept=".jpg, .jpeg, .png" multiple type="file" onChange={inputLinkImage}/>
                </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept='image/jpg,impge/png,image/jpeg,image/gif'  type="file" />
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