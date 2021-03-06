import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Light_Button = styled(Button)(({ theme }) => ({
    fontFamily: [
        'Oxygen',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    fontColor: '#EAEAEA',
    backgroundColor: '#EAEAEA',
    padding: '6px 12px',
    border: '1px solid',
    fontSize: 16,
    '&:hover': {
        backgroundColor: '#ffffff',
    },
    '&:active': {
        backgroundColor:'#5178B2',
    },
}));

export default Light_Button;
