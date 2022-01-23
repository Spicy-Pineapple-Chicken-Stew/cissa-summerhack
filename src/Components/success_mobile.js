import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Light_Button from '../Components/ButtonDef_light'
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext} from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75vw',
  bgcolor: '#82C0CC',
  border: '1px round',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Success_Upload(props) {
  let [currentPage, setCurrentPage] = useContext(CurrentPageContext);

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
            Upload Success, see progress in
            <br></br>
            "My Contents"
            </Box>

          <Box>
          <Light_Button
              sx={{
            width: '30vw',
            position: "relative",
                }}
              onClick={() => {
                setCurrentPage('Task List')
              }}
          >My Contents</Light_Button>
          <Light_Button sx={{
            width: '35vw',
            position: "relative",
            left: '15%',
          }}
                        onClick={props.handleClose}
          >Add another content</Light_Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
