import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Light_Button from '../Components/ButtonDef_light'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: '#82C0CC',
  border: '1px round', 
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const text_format = {
  fontFamily: [
    'Oxygen',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontColor: '#EAEAEA',
};

export default function Success_Upload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Success</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
          <Light_Button sx={{
            width: 300,
            position: "relative",
            left: '5%',
          }}>My Contents</Light_Button>
          <Light_Button sx={{
            width: 300,
            position: "relative",
            left: '20%',
          }}>Add another content</Light_Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}