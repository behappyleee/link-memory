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
    const [modalPop, setModalPop] = useState<boolean>(false);
    const [closeModal, setCloseModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setModalPop(!modalPop);
    }, [modalPop]);

    useEffect(() => {
        // TODO Link Image 사진 가져오기
        console.log('LINK DATA CHECKDDD A: ' + JSON.stringify(linkData));
        mainImageSearch();
    }, [])

    const mainImageSearch = async () => {
        
    }

    console.log('LINK CARD LINK DATA CHECK : ' + JSON.stringify(linkData));

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {linkData.linkData.user_id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {linkData.linkData.user_email}    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{linkData.linkData.id}</Button>
                    <Button onClick={onClickToggleModal} size="small">Learn More</Button>
                </CardActions>
            </Card>
        {
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
        }
        {/* <Modal
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
