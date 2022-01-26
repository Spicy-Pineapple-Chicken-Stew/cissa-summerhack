import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {useRef, useState} from "react";
import Success_Upload from "./success_mobile";
import Fail_Upload from "./fail_mobile";
import axios from "axios";
import getParameterByName from "../Functions/GetURLParams";


export default function TextboxPopup(props){
    let [successModal, setSuccessModal] = useState(false)
    let [failModal, setFailModal] = useState(false)

    const textFieldRef = useRef('');

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
                    <CustomTextField
                        id="modal-content"
                        label="Enter in this box"
                        multiline
                        maxRows={10}
                        fullWidth
                        inputRef={textFieldRef}
                    />
                    <SubmitButton
                    sx={{
                        width: 1/4,
                        position: 'relative',
                        left: '37.5%'
                        }}
                    onClick={() => {
                        if(props.type === 'puretext'){
                            axios.get(props.url + "/api/text_summary?text=" + textFieldRef.current.value).then((response)=>{
                                props.setTaskList([{
                                    taskType: "puretext",
                                    taskID: response.data.task_id,
                                    isDone: false,
                                    taskTitle: textFieldRef.current.value.slice(0, 10) + "...",
                                    taskPreview: textFieldRef.current.value,
                                    taskStatus: "pending",
                                    taskResult: "",
                                    isError: false,
                                    errorMessage: ""
                                }, ...props.taskList])
                                setSuccessModal(true)
                            }).catch((error) => {
                                setFailModal(true)
                                console.log(error)
                            })
                        }else if(props.type === 'link'){
                            try{
                                var parseURL = new URL(textFieldRef.current.value);
                            }catch{
                                alert("Please enter a valid URL")
                            }

                            if(parseURL.hostname === 'www.youtube.com' || parseURL.hostname === 'youtube.com' || parseURL.hostname === 'youtu.be'){
                                axios.get(props.url + "/api/youtube_summary?url=" + textFieldRef.current.value).then((response)=>{
                                    const videoID = getParameterByName("v", textFieldRef.current.value)
                                    props.setTaskList([{
                                        taskType: "youtube",
                                        taskPreview: `https://www.youtube.com/embed/${videoID}`,
                                        taskID: response.data.task_id,
                                        isDone: false,
                                        taskTitle: textFieldRef.current.value,
                                        taskStatus: "pending",
                                        taskResult: "",
                                        isError: false,
                                        errorMessage: ""
                                    }, ...props.taskList])
                                    setSuccessModal(true)
                                }).catch((error) => {
                                    setFailModal(true)
                                    console.log(error)
                                })
                            }else{
                                axios.get(props.url + "/api/website_summary?url=" + textFieldRef.current.value).then((response)=>{
                                    props.setTaskList([{
                                        taskType: "website",
                                        taskID: response.data.task_id,
                                        isDone: false,
                                        taskTitle: textFieldRef.current.value,
                                        taskStatus: "pending",
                                        taskResult: "",
                                        questions: null,
                                        isError: false,
                                        errorMessage: ""
                                    }, ...props.taskList])
                                    setSuccessModal(true)
                                }).catch((error) => {
                                    setFailModal(true)
                                    console.log(error)
                                })
                            }
                        }
                    }}
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
