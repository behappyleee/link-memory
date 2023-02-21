import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from "@material-ui/core";

function CustomModal(): any {
    const [modalPop, setModalPop] = useState<boolean>(false);
    const [closeModal, setCloseModal] = useState<boolean>(false);

    useEffect(() => {
       
    }, [modalPop])

    return (
        <div>
             {/* <Modal
                open={modalPop}
                // onClose={closeModal}
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
                
            </Modal>  */}
        </div>
    )
}

export default CustomModal;