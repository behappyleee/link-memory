import React, { useState, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box} from "@material-ui/core";
import CustomModal from '../modal/CustomModal';
import { Modal } from '@mui/material';

function LinkCard(linkData: any) {
    const [modalPop, setModalPop] = useState<boolean>(false);
    const [closeModal, setCloseModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setModalPop(!modalPop);
      }, [modalPop]);

    console.log('LINK CARD LINK DATA CHECK : ' + JSON.stringify(linkData));

    return (
        <div>
            <Card sx={{ maxWidth: 190 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button onClick={onClickToggleModal} size="small">Learn More</Button>
                </CardActions>
            </Card>

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
        </Modal>

        </div>
        

    )
}

export default LinkCard;
