import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MC_Sidemenu from '../Components/MycontentsDetailedViewSidemenu';


export default function MC_detailedview(){

    return (
        <div>
            <Typography align='left' fontSize={'2vw'} ml={'13.2vw'} fontFamily={'Oxygen'} color={'rgba(22, 105, 122, 1)'} mt={2}>
                <Box>Studymaterialaccleratedmath2lec21.mp4</Box>
            </Typography>
            <Typography align='left' fontSize={'1vw'} ml={'70vw'}>
                <Box>
                    Change view: Default
                    <Switch />
                    Detailed
                </Box>
            </Typography>
            <Box sx={{width: 'auto', height: 'auto'}}>                
                <MC_Sidemenu />
            </Box>
        </div>
    )
}