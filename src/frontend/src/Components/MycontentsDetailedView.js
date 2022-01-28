import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import MC_Drawer from './MycontentsDetailedViewDrawer';
import {useContext} from "react";
import { alpha, styled } from '@mui/material';


const BlueSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#5178B2',
        '&:hover': {
            backgroundColor: alpha('#5178B2', theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#5178B2',
    },
}));

export default function MC_detailedview(props){
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
                borderRadius: "4px"}}>
                    <Typography
                    sx = {{
                    fontSize:'260%',
                    fontFamily: 'Oxygen',
                    color: '#265191'
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
                        <BlueSwitch
                            checked={!isQuickView}
                            onClick={() => {setIsQuickView(!isQuickView)}}
                            color="info"
                        />
                        Detailed
                    </Box>
                </Typography>
                <Box sx={{width: 'auto', height: 'auto'}}>
                    <MC_Drawer/>
            </Box>
               
                </Box>
            </div>

        </div>
    )
}
