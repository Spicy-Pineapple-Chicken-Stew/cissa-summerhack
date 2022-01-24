import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Success_Upload from "./success_mobile";
import Fail_Upload from "./fail_mobile";
import axios from "axios";


export default function FilePopup(props){
    let [file, setFile] = React.useState(null);
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

    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "files",
            file,
            file.name
        );

        // Details of the uploaded file
        axios.post("http://194.193.55.245:9000/api/file_summary", formData).then((response) => {
            props.setTaskList([{
                taskID: response.data.task_id,
                isDone: false,
                taskTitle: file.name,
                taskStatus: "pending",
                taskResult: "",
                isError: false,
                errorMessage: ""
            }, ...props.taskList])
            setSuccessModal(true)
        }).catch((error) => {
            setFailModal(true)
            console.log(error.response)
        })
    };

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <div>
            <Modal
                open={props.openpop}
                onClose={props.closepop}
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
                        {props.text}
                    </Typography>
                    <Box>
                        <label htmlFor={"contained-button-file"}>
                            <Input
                                accept={[".webm", ".mkv", ".flv", ".avi", ".mov", ".wmv", ".mp4"]} id={"contained-button-file"} type={"file"}
                                onChange={(event) => {
                                    setFile(event.target.files[0])
                                }}
                            />
                            <Button variant='contained' component={"span"}>
                                Upload file
                            </Button>
                        </label>
                        {file != null &&
                        <h3>
                            current file:  {file.name}
                        </h3>}
                    </Box>
                    {file != null &&
                    <SubmitButton
                    sx={{
                        width: 1/4,
                        position: 'relative',
                        left: '37.5%'
                        }}
                    onClick={() => {
                        onFileUpload()
                    }}
                    >
                        Submit
                    </SubmitButton>}
                </Box>
            </Modal>
            <Success_Upload open={successModal} handleClose={() => {setSuccessModal(false)}}/>
            <Fail_Upload open={failModal} handleClose={() => {setFailModal(false)}}/>
        </div>
    )
}
