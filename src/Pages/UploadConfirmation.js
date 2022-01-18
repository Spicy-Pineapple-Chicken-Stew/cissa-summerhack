import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {TextField, Zoom} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";

export default function UploadConfirmation(props){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [hasSelected, setHasSelected] = useState(false);
    let [currentSelection, setCurrentSelection] = useState(null);
    let [animationState, setAnimationState] = useState(false);
    let [file, setFile] = useState(null);

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

    const descriptionTextField = (
        <CustomTextField
            id={'pure-text-input'}
            label={'Enter your text'}
            multiline
            rows={16}
            sx={{width: '17vw', marginTop: '-3vh'}}
            focused
        />
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
                    {descriptionTextField}
                    {descriptionTextField}
                    {descriptionTextField}
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
                            {file.name}
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
        formData.forEach((elem) => console.log(elem))
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
                        accept={[".gif"]} id={"contained-button-file"} type={"file"}
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
                <SubmitButton sx={{width: '13vw'}} onClick={() => {onFileUpload()}}>Submit</SubmitButton>
            </div>}
        </div>
    )
}
