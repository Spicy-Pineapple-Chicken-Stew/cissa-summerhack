import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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
    backgroundColor: '#5178B2',
    padding: '6px 12px',
    border: '1px solid',
    fontSize: 16,
    '&:hover': {
        backgroundColor: '#82ACEB',
        color: '#676767'
    },
    '&:active': {
        backgroundColor:'#5178B2',
    },
}));

export default ColorButton;
