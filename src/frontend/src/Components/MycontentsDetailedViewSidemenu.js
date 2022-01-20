import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";

export default function MC_Sidemenu(){
    const Menu_button = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Oxygen',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        color: '#EDE7E3',
        textDecorationLine: 'underline',
        width: 'auto',
    }));

    return (
        <Box sx={{
            width: 1/6,
            height: 600,
            bgcolor: 'rgba(130, 192, 204, 1)',
            border: '2px solid rgba(72, 159, 181, 1)',
            position: 'relative',
            marginTop: '5%'
            }}
        >
            <div>
                <Menu_button>Summary</Menu_button>
            </div>
            <div>
                <Menu_button>Flash cards</Menu_button>
            </div>
            <div>
                <Menu_button>Original submission</Menu_button>
            </div>      
        </Box>
    )
}