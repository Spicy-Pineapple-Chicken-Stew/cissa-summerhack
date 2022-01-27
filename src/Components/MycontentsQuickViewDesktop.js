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
                width: "93%",
                marginLeft: '3%',
                marginTop: '3%',
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
                        }}>

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
            <div style ={{margin:'3%', marginTop: '-2%'}}>



            <Box sx={{
                fontSize: '2vw',
                textAlign: 'left',
                width: '100%',
                marginTop: '1%',
                marginBottom: '0.5%',
                p: 0.5
            }}
            >
                Summary
            </Box>
            <Box
                sx={{
                    width: '99.7%',
                    height: 240,
                    border: '2px solid #5178b2',
                    marginRight: '2%',
                    borderRadius: '4px',
                    flexShrink: 1,
                    overflow: 'auto',
                    '&:hover': {
                        border: '2px solid #82ACEB',
                        opacity: 0.9,
                    },

                }}>
                <Typography sx={{
                    fontFamily: 'Oxygen',
                    fontSize: 20,
                    textAlign: "left",
                    marginTop: "-0.5%",
                    p: 2.5,
                    backgroundColor: '#fffaf7'}}
                >{currentTask.taskResult}</Typography>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{
                    width: '60%',
                    fontSize: '1.7vw',
                    textAlign: 'left',
                    marginTop: 2,
                }}
                >
                    Flash cards
                </Box>
                <Box sx={{
                    width: '37.5%',
                    marginLeft: '-1.5%',
                    fontSize: '1.7vw',
                    textAlign: 'left',
                    marginTop: 2,
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
                    width: 'calc(100% - 55% - 3.9%)',
                    minwidth: '20vw',
                    height: 280,
                    border: '2px solid #5178B2',
                    borderRadius: '4px',
                    overflow: 'auto',
                    marginLeft: "3vw",
                    '&:hover': {
                        border: '2px solid #82ACEB',
                        opacity: 0.9,
                    },
                }}>
                {currentTask.taskType === "puretext" && <Typography variant='subtitle1'>{currentTask.taskPreview}</Typography>}
                {currentTask.taskType === "youtube" && <iframe src={currentTask.taskPreview}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen width={"100%"} height={"99%"}></iframe> }
                {currentTask.taskType === 'website' && <Typography variant='subtitle1' sx = {{p : 2, fontSize: 18 }}>No preview available</Typography>}
                {currentTask.taskType === 'file' && <img src={"data:image/jpg;base64, " + currentTask.taskPreview} height={'100%'}/>}
            </Box>

            </Box>
            </div>
        </div>
    )
}
