import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { FlashcardComponent } from 'react-flashcard'

export default function MC_detailedview_mobile(props){
    const [contents_mobile, setContents_mobile] = React.useState('Summary');
    let [isQuickView, setIsQuickView] = props.isQuickView;

    const handleContentChange = (Event) => {
        setContents_mobile(Event.target.value);
    };

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
        <div>
            <Typography align='left' fontSize={'4vw'} ml={2} fontFamily={'Oxygen'} color={'rgba(22, 105, 122, 1)'}>
                <Box>Studymaterialaccleratedmath2lec21.mp4</Box>
            </Typography>
            <Typography align='left' fontSize={'3vw'} ml={2}>
                <Box>
                    Change view: Default
                    <Switch
                        checked={!isQuickView}
                        onClick={() => {setIsQuickView(!isQuickView)}}
                    />
                    Detailed
                </Box>
            </Typography>
            <Box fullWidth>
                <Box sx={{width: 1/2, position: 'relative', marginLeft: "25%"}} >
                    <FormControl fullWidth>
                        <InputLabel id="content-select-label">content</ InputLabel>
                        <Select
                            labelId="content-select-label"
                            id="content-select"
                            value={contents_mobile}
                            label="Content"
                            onChange={handleContentChange}
                        >
                            <MenuItem value={'Summary'}>Summary</MenuItem>
                            <MenuItem value={'Flash cards'}>Flash cards</MenuItem>
                            <MenuItem value={'Original submission'}>Original submission</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box fullWidth>
                {(contents_mobile === 'Summary') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 500,
                    fontSize: '4vw',
                    textAlign: 'left'
                }}>
                    {contents_mobile}
                </Box>}
                {(contents_mobile === 'Original submission') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 500,
                    fontSize: '4vw',
                    textAlign: 'left'
                }}>
                    {contents_mobile}
                </Box>}
                {(contents_mobile === 'Flash cards') &&
                <FlashcardComponent dataSource={cardData} />}
            </Box>
        </div>
    )
}
