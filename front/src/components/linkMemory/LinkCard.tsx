import React, { useState, useCallback, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Grid, Box} from "@material-ui/core";
import Box from '@mui/material/Box';
import { Grid } from "@material-ui/core";
import CustomModal from '../modal/CustomModal';
import { Modal } from '@mui/material';


function LinkCard(linkData: any) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    console.log('Link Card Main Data Check : ' + JSON.stringify(linkData));

    let linkName = linkData.linkKey;
    let comments = linkData.linkData;
    const [modalPop, setModalPop] = useState<boolean>(false);
    const [closeModal, setCloseModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setModalPop(!modalPop);
    }, [modalPop]);

    // 해당 Link 클릭 하였을 시 Detail Pop 업 보여 줄 시 사진 보여주기 !
    useEffect(() => {
        // TODO Link Image 사진 가져오기
        mainImageSearch();
    }, [])

    const mainImageSearch = async () => {
        
    }

    const handleModalOpen = () => setModalPop(true);
    const handleModalClose = () => setModalPop(false);

    return (
        <div>
            <Box sx={{ minWidth: 275, backgroundColor: 'black'}}>
                <Card variant="outlined" style={{backgroundColor: '#2196f3'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        Test ^^ Test ^^
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={handleModalOpen}>Learn More</Button>
                    </CardActions>
                    {/* {linkName} */}
                </Card>
            </Box>
            <Modal
                open={modalPop}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>   


            {/* <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/images/test_image_1.jpg"
                    title="test image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {linkName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            comments &&
                            comments.map((comment: any, index: number) => (
                                <div key={index}>  
                                    <span>{comment.user_email}</span><br/>
                                    <span>{comment.comment}</span>
                                </div>
                            ))
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{linkData.linkData.id}</Button>
                    <Button onClick={onClickToggleModal} size="small">Learn More</Button>
                </CardActions>
            </Card> */}





        {/* {
            modalPop && (
                <Modal
                    open={modalPop}
                    onClose={() => {
                        alert('CLOSE TEST !!!!');     
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            )
        } */}
        
        {/* 
        <Modal
            open={modalPop}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal> */}

        </div>
    )
}

export default LinkCard;
