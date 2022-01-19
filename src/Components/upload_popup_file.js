import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from "@mui/material/styles";



export default function FilePopup(prop){
    let [file, setFile] = React.useState(null);

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
        formData.forEach((elem) => console.log(elem))
    };

    const Input = styled('input')({
        display: 'none',
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
                    <Box>
                        <label htmlFor={"contained-button-file"}>
                            <Input
                                accept={[".gif"]} id={"contained-button-file"} type={"file"}
                                onChange={(event) => {
                                    setFile(event.target.files[0])
                                }}
                            />
                            <Button variant='contained'>
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
                    onClick={() => {onFileUpload()}}
                    >
                        Submit
                    </SubmitButton>}
                </Box>
            </Modal>
        </div>
    )
}