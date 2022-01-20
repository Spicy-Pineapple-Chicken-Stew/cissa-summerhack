import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ColorButton from '../Components/ButtonDef'
import Success_Upload from "../Components/success";
import Fail_Upload from "../Components/fail";


function Upload_desktop()
{
    return (
    <Typography component="div">
        <Box sx={{
        textAlign: 'center',
        fontSize: 52,
        fontWeight: 900,
        fontFamily: 'Oxygen',
        lineHeight: 4,
        m: 1
        }}>
            Choose what to upload:
        </Box>
        <Box className='upload_desktop_buttons'>
            <Box
            sx={{width: 1/6}}
            >
                <ColorButton fullWidth = 'true'>Pure text</ColorButton>
            </Box>
            <Box
            sx={{width: 1/6}}
            >
                <ColorButton fullWidth = 'true'>Link</ColorButton>
            </Box>
            <Box
            sx={{width: 1/6}}
            >
                <ColorButton fullWidth = 'true'>Your video</ColorButton>
            </Box>
            <Success_Upload>Test</Success_Upload>
            <Fail_Upload>Test</Fail_Upload>
        </Box>

        <Box>
            a box
        </Box>
    </Typography>

    );
}
export default Upload_desktop;
