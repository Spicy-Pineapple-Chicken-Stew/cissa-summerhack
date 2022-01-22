import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Light_Button from '../Components/ButtonDef_light'

const style = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    width: '40vw',
    height: '20vw',
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
                fontSize: 20,
                fontWeight: 900,
                fontFamily: 'Oxygen',
                m: 1}}>
            Error, please try again
            </Box>

          <Box>
          <Light_Button sx={{
                  top: "10%",
                  left: "5%",
                  height: "10vw",
                  width: '35vw',
                  position: "relative"
          }}
                        onClick={props.handleClose}
          >Try again</Light_Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
