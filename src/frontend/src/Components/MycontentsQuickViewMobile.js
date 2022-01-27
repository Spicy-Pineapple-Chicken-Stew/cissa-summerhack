import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {FlashcardComponent} from './TestFlashcardComponent';
import {useContext} from "react";
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import parseQuestions from "../Functions/ParseQuestions";

export default function MycontentsQuickViewMobile(props){
    let [isQuickView, setIsQuickView] = props.isQuickView;
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);

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
                    color: 'rgba(22, 105, 122, 1)'
                }} >
                    <Box
                    sx ={{flexWrap: 'wrap',
                        display:'flex',
                        flexDirection:'row'}}>

                        {currentTask.taskTitle}</Box>

                </Typography>


                <Typography align='left' fontSize={'1vw'} ml={'70vw'} fontFamily={'Oxygen'}>
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

            <div style ={{margin:'3%', marginTop: '-0.5%'}}>

            <Box sx ={{
               position: 'relative',
               flexWrap: 'wrap',
               display:'flex',
               flexDirection:'column',
               alignContent: 'flex-start',
               justifyContent: 'flex-start',
            }}>

            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "flex-start",
                    marginLeft: '1%'
                }}>
                <Typography variant='h5' align= "left">Summary</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: 180,
                    marginBottom: '3%',
                    border: '1px solid #5178B2',
                    borderRadius: '4px',
                    flexShrink: 1,
                    overflow: 'auto',
                    '&:hover': {
                        border: '1px solid #82ACEB',
                        opacity: 0.9,
                    },

                }}>
                <Typography variant='subtitle1'>{currentTask.taskResult}</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "flex-start",
                    marginLeft: '1%'
                }}>
                <Typography variant='h5' align= "left">Flashcards</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: 250,
                    marginBottom: '3%',
                    borderRadius: '4px',
                    flexShrink: 1,
                    

                }}>
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
            </Box>
            </Box>
            </div>
        </div>
    )
}
