import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import {CustomTextField} from '../Components/CustomTextField';


export default function MC_detailedview(){
    return (
        <div>
            <div></div>
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
            <div>
            <Box sx={{ display: 'block', alignItems: 'center', display:'flex'}} >
            <Typography variant='subtitle1' ml={20}>
                <Box
                    sx={{
                        width: 150,
                        height: 300,
                        border: '1px solid #489FB5',
                        borderRadius: '4px',
                        '&:hover': {
                            border: '1px solid #16697A',
                            opacity: 0.9,
                        },
                    }}>
                    Text here
                </Box>
            </Typography>
            </Box>
        </div>
        </div>
    )
}