import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import { FlashcardComponent } from 'react-flashcard'

export default function MC_Sidemenu(){
    let [contents, setContents] = React.useState('Summary');

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
        fontSize: '0.8vw',
        textDecorationLine: 'underline',
        width: 'auto',
    }));

    const cardData = [
        {
            front: {
                text: "This is a sample question.",
            },
            back: {
                text: "This is a sample solution.",
            }
        }
    ]

    return (
        <Box className='content_box'>
            <Box sx={{
                width: 1/11,
                height: 600,
                bgcolor: 'rgba(130, 192, 204, 1)',
                border: '2px solid rgba(72, 159, 181, 1)',
                position: 'relative',
                marginTop: '2%'
                }}
            >
                <div>
                    <Menu_button onClick={() => setContents('Summary')}>Summary</Menu_button>
                </div>
                <div>
                    <Menu_button onClick={() => setContents('Flash cards')}>Flash cards</Menu_button>
                </div>
                <div>
                    <Menu_button onClick={() => setContents('Original submission')}>Original submission</Menu_button>
                </div>      
            </Box>
            <Box sx={{
                width: 5/6,
                height: 600,
                position: 'relative',
                marginTop: '1%',
                marginLeft: '4%',
                fontSize: '2vw',
                textAlign: 'left'
            }}>
                {contents}
                {(contents == 'Summary') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw'
                }}>
                    {contents}
                </Box>
                }
                {(contents == 'Original submission') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw'
                }}>
                    {contents}
                </Box>
                }
                {(contents == 'Flash cards') &&
                <FlashcardComponent dataSource={cardData} />
                }
            </Box>
        </Box>
    )
}