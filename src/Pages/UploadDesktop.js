import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {Zoom} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import { Box } from '@mui/system';
import Success_Upload from "../Components/success";
import Fail_Upload from "../Components/fail";
import {CustomTextField} from "../Components/CustomTextField";
import axios from "axios";

export default function UploadDesktop(props){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [hasSelected, setHasSelected] = useState(false);
    let [currentSelection, setCurrentSelection] = useState(null);
    let [animationState, setAnimationState] = useState(false);
    let [file, setFile] = useState(null);
    let [successModal, setSuccessModal] = useState(false)
    let [failModal, setFailModal] = useState(false);


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

    const linkTextField = (
        <CustomTextField
            id={'pure-text-input'}
            label={'Enter your link'}
            multiline
            rows={1}
            maxRows={1}
            sx={{width: '81vw', marginLeft: '9vw', marginTop: '5vh'}}
            focused
        />
    );

    const puretextTextField = (
        <CustomTextField
            id={'pure-text-input'}
            label={'Enter your text'}
            multiline
            rows={16}
            sx={{width: '81vw', marginLeft: '9vw', marginTop: '5vh'}}
            focused
        />
    )

    const descriptionBoxPT = (
        <Box
        sx={{
            width: '17vw',
            height: '10vw',
            marginTop: '-3vh',
            border: '2px solid rgba(72, 159, 181, 1)',
            borderRadius: '16px',
            fontSize: '1.3vw',
            color: '#16697A'
            }}
        className = {'descriptionBox'}
        >
            Click the button above and enter texts in the textbox
        </Box>
    )

    const descriptionBoxLink = (
        <Box
        sx={{
            width: '17vw',
            height: '10vw',
            marginTop: '-3vh',
            border: '2px solid rgba(72, 159, 181, 1)',
            borderRadius: '16px',
            fontSize: '1.3vw',
            color: '#16697A'
            }}
        className = {'descriptionBox'}
        >
            Click the button above and enter a link in the textbox
        </Box>
    )

    const descriptionBoxYV = (
        <Box
        sx={{
            width: '17vw',
            height: '10vw',
            marginTop: '-3vh',
            border: '2px solid rgba(72, 159, 181, 1)',
            borderRadius: '16px',
            fontSize: '1.3vw',
            color: '#16697A'
            }}
        className = {'descriptionBox'}
        >
            Click the button above and choose a video to upload
        </Box>
    )

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
            setSuccessModal(true)
        }).catch((error) => {
            alert(error)
            console.log(error.response)
        })
    };

    return(
        <div className={'wrapperUploadConfirmation'}>
            <h1 style={{marginTop: '5vh'}}>Choose what to upload</h1>
            <div className={'wrapperButtonRow'}>
                <ColorButton
                    sx={{width: '17vw'}}
                    onClick={() => {
                        setHasSelected(true)
                        setCurrentSelection('puretext')
                    }}
                >Pure text</ColorButton>
                <ColorButton
                    sx={{width: '17vw'}}
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
                        sx={{width: '17vw'}}
                        component={"span"}
                    >Your video</ColorButton>
                </label>
            </div>
            {renderTextField()}
            {hasSelected && <div className={'wrapperButtonRow'}>
                <SubmitButton sx={{width: '13vw'}} onClick={() => {
                    if(currentSelection === 'customvideo'){
                        onFileUpload()
                    }
                }}>Submit</SubmitButton>
            </div>}
            <Success_Upload open={successModal} handleClose={() => {setSuccessModal(false)}}/>
            <Fail_Upload open={failModal} handleClose={() => {setFailModal(false)}}/>
        </div>
    )
}
