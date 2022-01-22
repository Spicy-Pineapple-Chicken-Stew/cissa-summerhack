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
    backgroundColor: '#489fb5',
    padding: '6px 12px',
    border: '1px solid',
    fontSize: 16,
    '&:hover': {
        backgroundColor: '#59a9bd',
        color: '#676767'
    },
    '&:active': {
        backgroundColor:'#4896b5',
    },
}));

export default ColorButton;