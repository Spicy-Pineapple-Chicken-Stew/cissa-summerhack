import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Light_Button from '../Components/ButtonDef_light'

const style = {
    position: 'relative',
    top: '40%',
    left: '20%',
    width: '50vw',
    height: '15vw',
    bgcolor: '#289FB5',
    border: '1px round',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function Fail_Upload(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <Box sx={
              {textAlign: 'center',
                color: "#EAEAEA",
                fontSize: "4vw",
                fontWeight: 900,
                fontFamily: 'Oxygen',
                m: 1}}>
            Error, please try again
            </Box>

          <Box>
          <Light_Button sx={{
                  position: "relative",
                  top: "10%",
                  left: "25%",
                  width: '25vw',
                  height: "8vw",
                  fontSize: "3vw"
          }}
                        onClick={props.handleClose}
          >Try again</Light_Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
