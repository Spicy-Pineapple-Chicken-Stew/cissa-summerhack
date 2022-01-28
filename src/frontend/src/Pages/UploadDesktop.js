import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {Zoom} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useEffect, useRef, useState} from "react";
import { Box } from '@mui/system';
import Success_Upload from "../Components/success";
import Fail_Upload from "../Components/fail";
import {CustomTextField} from "../Components/CustomTextField";
import axios from "axios";
import getParameterByName from "../Functions/GetURLParams";
import Typography from "@mui/material/Typography";

export default function UploadDesktop(props){
    let [hasSelected, setHasSelected] = useState(false);
    let [currentSelection, setCurrentSelection] = useState(null);
    let [animationState, setAnimationState] = useState(false);
    let [file, setFile] = useState(null);
    let [successModal, setSuccessModal] = useState(false)
    let [failModal, setFailModal] = useState(false);

    const pureTextRef = useRef('');
    const linkTextRef = useRef('');


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
        backgroundColor: '#5178B2',
        padding: '6px 12px',
        border: '1px solid',
        fontSize: 16,
        '&:hover': {
            backgroundColor: '#82ACEB',
            color: '#676767'
        },
        '&:active': {
            backgroundColor:'#5178B2',
        },
    }));

    const input_style = {
        width: '88.4vw', marginLeft: '5.4vw', marginTop: '5vh'
    }

    const linkTextField = (
        <CustomTextField
            id={'link-text-input'}
            label={'Enter your link'}
            multiline
            rows={1}
            maxRows={1}
            sx={input_style}
            focused
            inputRef={linkTextRef}
        />
    );

    const puretextTextField = (
        <CustomTextField
            id={'pure-text-input'}
            label={'Enter your text'}
            multiline
            rows={16}
            sx={input_style}
            focused
            inputRef={pureTextRef}
        />
    )

    const descriptBox = {
        textAlign: "center",
        width: '25.4vw',
        height: '14vw',
        margin: "-5vw",
        marginTop: '-1vw',
        p: 1,
        border: '2px solid rgba(81, 120, 178, 1)',
        borderRadius: '14px',
        fontSize: '1.65vw',
        color: '#16697A'
    }

    const descriptionBoxPT = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >
            Click the button above and enter or paste text to be summarised
        </Box>
    )

    const descriptionBoxLink = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >
            Click the button above and enter or paste a url to be summarised
        </Box>
    )

    const descriptionBoxYV = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >Click the button above and upload a video to be summarised
        </Box>
    )

    const button_style = {
        fontSize: "1.8vw",
        width: '27vw',
        height: "3.5vw",
        borderRadius: '14px',
        margin: "-5vw",
        marginTop: "-10vh"
    }

    const button_video = {
        fontSize: "1.8vw",
        width: '27vw',
        height: "3.5vw",
        borderRadius: '14px',
        margin: "-5vw",
        marginTop: "-10.8vh"
    }


    const Input = styled('input')({
        display: 'none',
    });

    useEffect(() => {
        setAnimationState(false);
    }, [currentSelection])

    function renderTextField(){
        if(!hasSelected){
            return(
                <div className={'wrapperTextRow'}>
                    {descriptionBoxPT}
                    {descriptionBoxLink}
                    {descriptionBoxYV}
                </div>
            )
        }else{
            if(animationState === false){
                setTimeout(() => {setAnimationState(true)}, 150);
            }

            if(currentSelection === 'puretext'){
                return(
                    <Zoom in={animationState}>{puretextTextField}</Zoom>
                )
            }else if(currentSelection === 'link'){
                return(
                    <Zoom in={animationState}>{linkTextField}</Zoom>
                )
            }else{
                return(
                    <div>
                        {file != null && <h3>
                            Current File: {file.name}
                        </h3>}
                    </div>
                )
            }
        }
    }

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
                taskType: "file",
                taskPreview: "",
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

    return(
        <div className={'wrapperUploadConfirmation'}>
            <h1 style={{
                        marginTop: '10vh',
                        textAlign: "center",
                        fontSize: 42}}><Typography fontFamily={"Oxygen"} fontSize={"5vh"}>Choose what to upload:</Typography> </h1>
            <div className={'wrapperButtonRow'}>
                <ColorButton
                    sx={button_style}
                    onClick={() => {
                        setHasSelected(true)
                        setCurrentSelection('puretext')
                    }}
                >Pure text</ColorButton>
                <ColorButton
                    sx={button_style}
                    onClick={() => {
                        setHasSelected(true)
                        setCurrentSelection('link')
                    }}
                >Link</ColorButton>
                <label htmlFor={"contained-button-file"}>
                    <Input
                        accept={[".webm", ".mkv", ".flv", ".avi", ".mov", ".wmv", ".mp4"]} id={"contained-button-file"} type={"file"}
                        onChange={(event) => {
                            setFile(event.target.files[0])
                            setHasSelected(true)
                            setCurrentSelection('customvideo')
                        }}

                    />
                    <ColorButton
                        sx={
                            button_video
                        }
                        component={"span"}
                    >Your video</ColorButton>
                </label>
            </div>
            {renderTextField()}
            {hasSelected && <div className={'wrapperButtonRow'}>
                <SubmitButton sx={{
                    width: '14vw',
                height: "3.4vw",
            fontSize: "1.5vw",
        marginTop: "-4vw"}} onClick={() => {
                    if(currentSelection === 'customvideo'){
                        onFileUpload()
                    }else if(currentSelection === 'puretext'){
                        if(pureTextRef.current.value.length < 11){
                            alert("Not enough text provided")
                        }else{
                            axios.get(props.url + "/api/text_summary?text=" + pureTextRef.current.value).then((response)=>{
                                props.setTaskList([{
                                    taskType: "puretext",
                                    taskID: response.data.task_id,
                                    isDone: false,
                                    taskTitle: pureTextRef.current.value.slice(0, 10) + "...",
                                    taskPreview: pureTextRef.current.value,
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
                        }
                    }else if(currentSelection === 'link'){
                        try{
                            var parseURL = new URL(linkTextRef.current.value);
                        }catch{
                            alert("Please enter a valid URL")
                        }

                        if(parseURL.hostname === 'www.youtube.com' || parseURL.hostname === 'youtube.com' || parseURL.hostname === 'youtu.be'){
                            axios.get(props.url + "/api/youtube_summary?url=" + linkTextRef.current.value).then((response)=>{
                                const videoID = getParameterByName("v", linkTextRef.current.value)
                                props.setTaskList([{
                                    taskType: "youtube",
                                    taskPreview: `https://www.youtube.com/embed/${videoID}`,
                                    taskID: response.data.task_id,
                                    isDone: false,
                                    taskTitle: linkTextRef.current.value,
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
                            axios.get(props.url + "/api/website_summary?url=" + linkTextRef.current.value).then((response)=>{
                                props.setTaskList([{
                                    taskType: "website",
                                    taskID: response.data.task_id,
                                    isDone: false,
                                    taskTitle: linkTextRef.current.value,
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
                }}>Submit</SubmitButton>
            </div>}
            <Success_Upload open={successModal} handleClose={() => {setSuccessModal(false)}}/>
            <Fail_Upload open={failModal} handleClose={() => {setFailModal(false)}}/>
        </div>
    )
}
