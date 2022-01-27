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
    
    fontSize: 16,
    '&:hover': {
        backgroundColor: '#82ACEB',
        color: '#676767',
        border: '1px solid #FFFFFF',
    },
    '&:active': {
        backgroundColor:'#5178B2',
    },
}));

export default ColorButton;
