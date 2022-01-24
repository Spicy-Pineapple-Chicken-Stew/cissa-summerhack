import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {Zoom} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useContext, useEffect, useRef, useState} from "react";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import { Box } from '@mui/system';
import Success_Upload from "../Components/success";
import Fail_Upload from "../Components/fail";
import {CustomTextField} from "../Components/CustomTextField";
import axios from "axios";

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
        width: '26vw',
        height: '14vw',
        margin: "-5vw",
        marginTop: '-1vw',
        border: '2px solid rgba(72, 159, 181, 1)',
        borderRadius: '16px',
        fontSize: '1.65vw',
        color: '#16697A'
    }

    const descriptionBoxPT = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >
            Click the button above and enter or past text to be summarised
        </Box>
    )

    const descriptionBoxLink = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >
            Click the button above and enter or past a url to be summarised
        </Box>
    )

    const descriptionBoxYV = (
        <Box
        sx={descriptBox}
        className = {'descriptionBox'}
        >
            Click the button above and upload a video to be summarised
        </Box>
    )

    const button_style = {
        fontSize: "1.8vw",
        width: '26vw',
        height: "3.5vw",
        margin: "-4.9vw",
        marginTop: "-10vh"
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
                <div className={'wrapperButtonRow'}>
                    {descriptionBoxPT}
                    {descriptionBoxLink}
                    {descriptionBoxYV}
                </div>
            )
        }else{
            if(animationState === false){
                var timer = setInterval(() => {setAnimationState(true)}, 5)
            }else{
                clearInterval(timer)
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
                        fontSize: 42}}>Choose what to upload:</h1>
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
                            button_style
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
                        axios.get(props.url + "/api/text_summary?text=" + pureTextRef.current.value).then((response)=>{
                            props.setTaskList([{
                                taskID: response.data.task_id,
                                isDone: false,
                                taskTitle: "Text",
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
                    }else if(currentSelection === 'link'){
                        try{
                            var parseURL = new URL(linkTextRef.current.value);
                        }catch{
                            alert("Please enter a valid URL")
                        }

                        if(parseURL.hostname === 'www.youtube.com' || parseURL.hostname === 'youtube.com'){
                            axios.get(props.url + "/api/youtube_summary?url=" + linkTextRef.current.value).then((response)=>{
                                props.setTaskList([{
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
