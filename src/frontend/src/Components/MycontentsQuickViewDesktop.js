import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {FlashcardComponent} from 'react-flashcard';
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import {useContext, useEffect} from "react";
import parseQuestions from "../Functions/ParseQuestions";

export default function MycontentsQuickViewDesktop(props){
    let [isQuickView, setIsQuickView] = props.isQuickView;
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);


    /*
    const cardData = [
        {
            front: {
                text: "Sample question",
            },
            back: {
                text: "Sample solution",
            }
        }
    ];
     */

    return (
        <div>
            <div>
                <Box sx =
                {{flexWrap: 'wrap',
                display:'flex',
                flexDirection:'column',
                alignContent: 'flex-start',
                marginLeft: '3%',
                marginTop: '5%',
                border: '1px solid #000000'}}>
                    <Typography
                    sx = {{
                    fontSize:'300%',
                    fontFamily: 'Oxygen',
                    color: 'rgba(22, 105, 122, 1)'
                    }} >
                    <Box
                    sx ={{flexWrap: 'wrap',
                        display:'flex',
                        flexDirection:'row'}}>

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

            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{
                    width: '60%',
                    fontSize: '1vw',
                    textAlign: 'left'
                }}
                >
                    Summary
                </Box>
                <Box sx={{
                    width: '37.5%',
                    marginLeft: '2%',
                    fontSize: '1vw',
                    textAlign: 'left'
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
            }}>
            <Box
                sx={{
                    width: '60%',
                    height: 130,
                    border: '1px solid #489FB5',
                    marginRight: '2%',
                    borderRadius: '4px',
                    flexShrink: 1,
                    '&:hover': {
                        border: '1px solid #16697A',
                        opacity: 0.9,
                    },

                }}>
                <Typography variant='subtitle1'>{currentTask.taskResult}</Typography>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '37.5%',
                    height: 130,
                    border: '1px solid #489FB5',
                    borderRadius: '4px',
                    '&:hover': {
                        border: '1px solid #16697A',
                        opacity: 0.9,
                    },
                }}>
                <Typography variant='subtitle1'>Original submission</Typography>
            </Box>

            <Box sx={{
                fontSize: '1vw',
                textAlign: 'left',
                width: '100%',
                marginTop: '1%'
            }}
            >
                Flash card
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 300,
                    border: '1px solid #489FB5',
                    borderRadius: '4px',
                    '&:hover': {
                        border: '1px solid #16697A',
                        opacity: 0.9,
                    },
                }}>
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
            </Box>
            </Box>
            </div>
        </div>
    )
}
