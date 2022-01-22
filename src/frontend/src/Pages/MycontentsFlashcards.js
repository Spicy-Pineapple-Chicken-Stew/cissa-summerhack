import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { styled } from '@mui/material';

//test data
let cards = ['flash card 1', 'flash card 2', 'flash card 3'];


export default function Flashcardslist(){
    const ContentButton = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Oxygen',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        color: '#489FB5',
        backgroundColor: '#EDE7E3',
        border: '2px solid',
        justifyContent: 'left',
        fontSize: '0.9vw',
        '&:hover': {
            backgroundColor: '#59a9bd',
            color: '#FFFFFF'
        },
        '&:active': {
            backgroundColor:'#4896b5',
        },
    }));

    return (
        <div>
            <Box sx={{textAlign: 'Left', fontSize: '2vw', mt: '1vw', ml: '7vw'}}>
                Flash cards
            </Box>
            <Box sx={{
                border: '3px solid #16697A', 
                borderRadius: 2,
                height: '32vw', 
                marginTop: '5vw',
                overflow: 'auto'
                }}
            >
                {cards.map((card) => (
                    <ContentButton fullWidth sx={{marginBottom: '0.25vw', marginTop: '0.25vw'}}>{card}</ContentButton>
                ))}
            </Box>
            
        </div>
    )
}