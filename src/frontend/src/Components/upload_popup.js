import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Success_Upload from "./success";
import Fail_Upload from "./fail";


export default function TextboxPopup(prop){
    let [successModal, setSuccessModal] = useState(false)
    let [failModal, setFailModal] = useState(false)

    const SubmitButton = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Oxygen',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        color: '#ffffff',
        backgroundColor: '#FFA62B',
        padding: '6px 12px',
        border: '1px solid',
        fontSize: 16,
        '&:hover': {
            backgroundColor: '#f1bb73',
            color: '#676767'
        },
        '&:active': {
            backgroundColor:'#FFA62B',
        },
    }));

    const CustomTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#489fb5',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#489fb5',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#489fb5',
            },
            '&:hover fieldset': {
                borderColor: '#489fb5',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#489fb5',
            },
        },
    });


    return (
        <div>
            <Modal
                open={prop.openpop}
                onClose={prop.closepop}
                aria-labelledby="modal-title"
                aria-describedby="modal-content"
                sx={{
                    width: 3/4,
                    position: 'absolute',
                    top: '30%',
                    left: '12.5%'
                    }}
            >
                <Box sx={{
                    bgcolor: 'rgba(130, 192, 204, 1)',
                    border: '2px solid rgba(72, 159, 181, 1)'}}
                >
                    <Typography
                        id="modal-title"
                        variant="h4"
                        align='center'
                        color='rgba(237, 231, 227, 1)'
                    >
                        {prop.text}
                    </Typography>
                    <CustomTextField
                        id="modal-content"
                        label="Enter in this box"
                        multiline
                        maxRows={10}
                        fullWidth
                    />
                    <SubmitButton
                    sx={{
                        width: 1/4,
                        position: 'relative',
                        left: '37.5%'
                        }}
                    onClick={() => {setFailModal(true)}}
                    >
                        Submit
                    </SubmitButton>
                </Box>
            </Modal>
            <Success_Upload open={successModal} handleClose={() => {setSuccessModal(false)}}/>
            <Fail_Upload open={failModal} handleClose={() => {setFailModal(false)}}/>
        </div>
    )
}
