import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Light_Button from '../Components/ButtonDef_light'

const style = {
    position: 'relative',
    top: '45%',
    left: '35%',
    width: '25vw',
    height: '8vw',
    bgcolor: '#5178B2',
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
                color: "#5178B2",
                fontSize: "1.2vw",
                fontWeight: 900,
                fontFamily: 'Oxygen',
                m: 1}}>
            Error, please try again
            </Box>

          <Box>
          <Light_Button sx={{
                  position: "relative",
                  top: "50%",
                  left: "30%",
                  width: '10vw',
                  height: "3vw",
                  fontSize: "1vw"
          }}
                        onClick={props.handleClose}
          >Try again</Light_Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
