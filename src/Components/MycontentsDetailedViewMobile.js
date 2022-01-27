import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { FlashcardComponent } from './TestFlashcardComponent'
import {useContext} from "react";
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import parseQuestions from "../Functions/ParseQuestions";

export default function MC_detailedview_mobile(props){
    const [contents_mobile, setContents_mobile] = React.useState('Summary');
    let [isQuickView, setIsQuickView] = props.isQuickView;
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);

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
            <Typography align='left' fontSize={'6vw'} ml={2} fontFamily={'Oxygen'} color={'rgba(81, 120, 178, 1)'}>
                <Box>{currentTask.taskTitle}</Box>
            </Typography>
            <Typography align='right' fontSize={'2.5vw'} ml={2}>
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
                    border: '2px solid rgba(81, 120, 178, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 500,
                    fontSize: '4vw',
                    overflow: 'auto',
                    textAlign: 'left',
                    backgroundColor: '#fffaf7',
                    p: 1,
                    lineHeight: "150%"
                }}>
                    {currentTask.taskResult}
                </Box>}
                {(contents_mobile === 'Original submission') &&
                <Box sx={{
                    border: '2px solid rgba(81, 120, 178, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 500,
                    fontSize: '4vw',
                    overflow: 'auto',
                    textAlign: 'left'
                }}>
                    {currentTask.taskType === "puretext" && <Typography variant='subtitle1'>{currentTask.taskPreview}</Typography>}
                    {currentTask.taskType === "youtube" && <iframe src={currentTask.taskPreview}
                                                                   title="YouTube video player" frameBorder="0"
                                                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                   allowFullScreen width={"100%"} height={"99%"}></iframe>}
                    {currentTask.taskType === 'website' && <Typography variant='subtitle1'>No preview available</Typography>}
                    {currentTask.taskType === 'file' && <img src={"data:image/jpg;base64, " + currentTask.taskPreview} height={'100%'} style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}/>}
                </Box>}
                {(contents_mobile === 'Flash cards') &&
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />}
            </Box>
        </div>
    )
}
