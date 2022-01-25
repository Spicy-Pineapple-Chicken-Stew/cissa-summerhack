import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {FlashcardComponent} from './TestFlashcardComponent';
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import {useContext, useEffect} from "react";
import parseQuestions from "../Functions/ParseQuestions";

export default function MycontentsQuickViewDesktop(props){
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
                width: "94%",
                marginLeft: '3%',
                marginTop: '3%',
                border: '2px solid #16697A',
                borderRadius: "4px"}}>
                    <Typography
                    sx = {{
                    fontSize:'260%',
                    fontFamily: 'Oxygen',
                    color: 'rgba(22, 105, 122, 1)'
                    }} >
                    <Box
                    sx ={{flexWrap: 'wrap',
                        display:'flex',
                        flexDirection:'row',
                        p: 1}}>

                        {currentTask.taskTitle}</Box>

                </Typography>

                <Typography variant='subtitle1'>
                    <Box fullWidth sx={{marginLeft: '70vw'}}>
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
            <div style ={{margin:'3%', marginTop: '1%'}}>

            

            <Box sx={{
                fontSize: '1.5vw',
                textAlign: 'left',
                width: '100%',
                marginTop: '1%',
                p: 0.5
            }}
            >
                Summary
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 240,
                    border: '2px solid #489FB5',
                    marginRight: '2%',
                    borderRadius: '4px',
                    flexShrink: 1,
                    overflow: 'auto',
                    '&:hover': {
                        border: '2px solid #16697A',
                        opacity: 0.9,
                    },

                }}>
                <Typography sx={{
                    fontFamily: 'Oxygen',
                    fontSize: 22,
                    textAlign: "left",
                    marginTop: "-0.5%",
                    p: 2}}
                >{currentTask.taskResult}</Typography>
            </Box>
            
        
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{
                    width: '60%',
                    fontSize: '1.3vw',
                    textAlign: 'left',
                    marginTop: "1%",
                }}
                >
                    Flash cards
                </Box>
                <Box sx={{
                    width: '37.5%',
                    marginLeft: '-1.5%',
                    fontSize: '1.3vw',
                    textAlign: 'left',
                    marginTop: "1%",
                }}
                >
                    Original submission
                </Box>
            </Box>
            
           <Box sx ={{
               position: 'relative',
               flexWrap: 'wrap',
               display:'flex',
               flexDirection:'row',
               alignContent: 'flex-start',
               justifyContent: 'flex-start',
               marginTop: 1
            }}>

                        <Box
                sx={{
                    position: 'relative',
                    width: '55%',
                    height: 283,
                }}>
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '41.5%',
                    height: 280,
                    border: '2px solid #489FB5',
                    borderRadius: '4px',
                    overflow: 'auto',
                    marginLeft: "3vw",
                    '&:hover': {
                        border: '2px solid #16697A',
                        opacity: 0.9,
                    },
                }}>
                <Typography variant='subtitle1'>Original submission</Typography>
            </Box>


            </Box>
            </div>
        </div>
    )
}
