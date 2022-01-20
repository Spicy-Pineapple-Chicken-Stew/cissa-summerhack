import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function MC_detailedview(){
    return (
        <div>
            <Typography align='left' variant='h2' ml={20} fontFamily={'Oxygen'} color={'rgba(22, 105, 122, 1)'}>
                <Box>Title</Box>
            </Typography>
            <Typography align='left' variant='subtitle1' ml={20}>
                <Box>
                    Change view: Default
                    <Switch />
                    Detailed
                </Box>
            </Typography>
        </div>
    )
}