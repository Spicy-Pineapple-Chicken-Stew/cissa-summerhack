import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Upload_desktop()
{
    return (
    <Typography component="div">
        <Box sx={{
        textAlign: 'center',
        fontSize: 52,
        fontWeight: 900,
        fontFamily: 'Oxygen',
        lineHeight: 3,
        m: 1
        }}>
            Choose what to upload:
        </Box>
    </Typography>
    );
}

export default Upload_desktop;