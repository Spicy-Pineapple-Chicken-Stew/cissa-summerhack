import * as React from 'react';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import { Box, fontSize, typography } from '@mui/system';
import axios from "axios";
import {alpha, Switch, Typography} from "@mui/material";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import {UserContext} from "../Contexts/UserContext";

import WebIcon from '@mui/icons-material/Web';
import VideocamIcon from '@mui/icons-material/Videocam';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function TaskListPage(props){
    let [hasSelected, setHasSelected] = useState(false);
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);
    let [user, setUser] = useContext(UserContext);

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

    const success_box = {
        fontSize: 24,
        p: 1.2,
        display: "flex",
        textColor: "#5178B2",
        width   : "80",
        height: "20",
        border: '3px solid rgba(17, 221, 74, 1)',
        borderRadius: "8px",
        margin: 2,
        backgroundColor: '#fffcfa',
        '&:hover': {
            backgroundColor: '#ffffff',
            cursor: "pointer"
        },
    };

    const in_progress = {
        p: 1.2,
        display: "flex",
        width   : "80",
        height: "20",
        border: '3px solid rgba(174, 192, 255, 1)',
        borderRadius: "8px",
        margin: 2
    };

    const error_box = {
        p: 1.2,
        display: "flex",
        width   : "80",
        height: "20",
        border: '3px solid rgb(204,2,2)',
        borderRadius: "8px",
        backgroundColor: '#fffcfa',
        margin: 2,
        '&:hover': {
            backgroundColor: '#ffffff',
            cursor: "pointer"
        },
    };

    const Input = styled('input')({
        display: 'none',
    });

    const box_style = {
        width: '90vw',
        height: '35vw',
        marginLeft: '5vw',
        border: '2px solid rgba(81, 120, 178, 1)',
        borderRadius: '16px',
        fontSize: 24,
        color: '#16697A',
        overflowY: "scroll",
        backgroundColor: '#fffaf7'
    }

    const icon_style ={
        display: "flex",
        marginLeft: 2,
        marginRight: 2
    }

    useEffect(() => {
        var timer = setInterval(() => {
            props.taskList.forEach((taskObj) => {
                if(!taskObj.isDone && !taskObj.isError){
                    axios.get(props.url + "/api/get_status?task_id=" + taskObj.taskID).then((response)=>{
                        if(response.data.title != null){
                            taskObj.taskTitle = response.data.title;
                        }

                        if(response.data.status === 'done'){
                            if(response.data.preview != null){
                                taskObj.taskPreview = response.data.preview
                            }
                            taskObj.isDone = true;
                            taskObj.taskStatus = response.data.status
                            taskObj.taskResult = response.data.result
                            taskObj.questions = response.data.questions
                            if(user != null){
                                axios.post(props.url + "/api/save_task?userid=" + user, taskObj).then((response) => {

                                }).catch((error) => {
                                    alert(error.response)
                                    console.log(error.response)
                                })
                            }
                        }else if(response.data.error != null){
                            taskObj.isError = true;
                            taskObj.errorMessage = response.data.error
                        }else{
                            taskObj.taskStatus = response.data.status
                        }
                        props.setTaskList([...props.taskList])
                    })
                }
            })
        }, 1000)

        return () => {clearInterval(timer)}
    }, [])

    function renderIcon(taskObj){
        if(taskObj.taskType === 'puretext'){
            return (<FileCopyIcon sx={icon_style} />)
        }else if(taskObj.taskType === 'website'){
            return (<WebIcon sx={icon_style}/>)
        }else{
            return (<VideocamIcon sx={icon_style}/>)
        }
    }

    function renderTextField(){
        if(!hasSelected){
            return(
                <Box justifyContent={"center"} sx={box_style}>
                    {props.taskList != null && props.taskList.map((taskObj) => {
                        if(taskObj.isDone){
                            return(
                                <Box sx={success_box} onClick={() => {
                                    setCurrentPage("My Contents")
                                    setCurrentTask(taskObj)
                                }}>
                                    
                                    {renderIcon(taskObj)}

                                    {taskObj.taskTitle} - {taskObj.taskStatus}
                                    </Box>
                            )
                        }else{
                            return(
                                <div>

                                </div>
                            );
                        }
                    })}
                </Box>
            )
        }else{
            return(
                <Box justifyContent={"center"} sx={box_style}>
                    {props.taskList != null && props.taskList.map((taskObj) => {
                        if(taskObj.isDone){
                            return(
                                <Box sx={success_box} onClick={() => {
                                    setCurrentPage("My Contents")
                                    setCurrentTask(taskObj)
                                }}>
                                    {renderIcon(taskObj)}
                                    {taskObj.taskTitle} - {taskObj.taskStatus}</Box>
                            )
                        }else if(taskObj.isError){
                            return(
                                <Box sx={error_box}>
                                    {renderIcon(taskObj)}
                                    {taskObj.taskTitle} - ERROR - {taskObj.errorMessage}</Box>
                            )
                        }else{
                            return(
                                <Box sx={in_progress}>
                                    {renderIcon(taskObj)}
                                    {taskObj.taskTitle} - {taskObj.taskStatus}</Box>
                            );
                        }
                    })}
                </Box>
            )
        }
    }


    return(
        <div className={'wrapperUploadConfirmation'}>
            <div style={{
                marginTop: "2vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <h1 style={{
                    marginLeft: "5vw"
                }}><Typography fontFamily={"Oxygen"} fontSize={33} color={"#5178B2"}>
                    My Content
                </Typography></h1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "4vw"
                }}>
                    <h3 style={{
                        marginTop: "4vh"
                    }}><Typography fontFamily={"Oxygen"}>
                        See in progress tasks
                    </Typography></h3>
                    <BlueSwitch
                        sx={{
                        marginTop: "3vh",
                            color: "#5178B2"
                         }}
                        checked={hasSelected}
                        onClick={() => {setHasSelected(!hasSelected)}}
                    />
                </div>
            </div>

            <div style={{
                marginTop: "5vh",
                textAlign: "center"
            }}>
                {renderTextField()}
            </div>
        </div>
    )
}
