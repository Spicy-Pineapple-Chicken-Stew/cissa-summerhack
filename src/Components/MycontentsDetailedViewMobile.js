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

    var border = "";
    var bgcolor = ""

    if(currentTask.taskType === "puretext"){
        border = '2px solid #5178B2'
        bgcolor = "#fffaf7"
    }else{
        border = ''
        bgcolor = ""
    }

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
            <div>
                <Box sx =
                         {{flexWrap: 'wrap',
                             display:'flex',
                             flexDirection:'column',
                             alignContent: 'flex-start',
                             marginLeft: '3%',
                             marginTop: '5%'}}>
                    <Typography
                        sx = {{
                            fontSize:'180%',
                            fontFamily: 'Oxygen',
                            color: '#265191'
                        }} >
                        <Box
                            sx ={{flexWrap: 'wrap',
                                display:'flex',
                                flexDirection:'row'}}>

                            {currentTask.taskTitle}</Box>

                    </Typography>


                    <Typography align='right' fontSize={'2.5vw'} fontFamily={'Oxygen'}>
                        <Box>
                            Change view: Default
                            <Switch
                                checked={!isQuickView}
                                onClick={() => {setIsQuickView(!isQuickView)}}
                            />
                            Detailed
                        </Box>
                    </Typography>
                </Box>
            </div>

            <Box fullWidth>
                <Box sx={{width: 1/2, position: 'relative', marginLeft: "25%"}} >
                    <FormControl fullWidth>
                        <InputLabel id="content-select-label">
                            <Typography fontFamily={'Oxygen'}> Content </Typography>
                        </ InputLabel>
                        <Select
                            labelId="content-select-label"
                            id="content-select"
                            value={contents_mobile}
                            label="Content"
                            onChange={handleContentChange}
                        >
                            <MenuItem value={'Summary'}><Typography fontFamily={'Oxygen'}> Summary </Typography></MenuItem>
                            <MenuItem value={'Flash cards'}><Typography fontFamily={'Oxygen'}> Flash Cards </Typography></MenuItem>
                            <MenuItem value={'Original submission'}><Typography fontFamily={'Oxygen'}> Original Submission </Typography></MenuItem>
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
                    border: border,
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 500,
                    fontSize: '4vw',
                    overflow: 'auto',
                    textAlign: 'left',
                    backgroundColor: bgcolor
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
                <Box sx={{position: 'relative', marginTop: '18vw'}}>
                    <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
                </Box>}
            </Box>
        </div>
    )
}
