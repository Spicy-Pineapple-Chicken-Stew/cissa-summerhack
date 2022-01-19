import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    fontFamily: [
        'Oxygen',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    color: '#ffffff',
    backgroundColor: '#489fb5',
    padding: '6px 12px',
    border: '1px solid',
    fontSize: 16,
    '&:hover': {
        backgroundColor: '#59a9bd',
<<<<<<< HEAD
        color: '#676767'
=======
>>>>>>> 30c31c55241754a6b5b362a80174a64528d16734
    },
    '&:active': {
        backgroundColor:'#4896b5',
    },
}));

export default ColorButton;
