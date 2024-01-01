import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Themodal = ({open ,setOpen,first,last,email,phone}) => {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <h1>first name :{first}</h1>
          <h1>last name :{last}</h1>
          <h2>email : {email}</h2>
          <h2>phone : {phone}</h2>
          
          </Box>
        </Fade>
      </Modal>
        </div>
    );
}

export default Themodal;
