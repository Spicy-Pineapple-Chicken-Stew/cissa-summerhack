import * as React from 'react';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import { Box } from '@mui/system';
import axios from "axios";
import {Switch} from "@mui/material";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";

export default function TaskListPage(props){
    let [hasSelected, setHasSelected] = useState(false);
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);

    const success_box = {
        width   : "80",
        height: "20",
        border: '3px solid rgba(17, 221, 74, 1)',
        borderRadius: "8px",
        margin: 2,
        '&:hover': {
            backgroundColor: 'rgba(103,103,103,0.36)',
            cursor: "pointer"
        },
    };

    const in_progress = {
        width   : "80",
        height: "20",
        border: '3px solid rgba(255, 138, 0, 1)',
        borderRadius: "8px",
        margin: 2
    };

    const Input = styled('input')({
        display: 'none',
    });

    const box_style = {
        width: '90vw',
        height: '35vw',
        marginLeft: '5vw',
        border: '2px solid rgba(72, 159, 181, 1)',
        borderRadius: '16px',
        fontSize: 24,
        color: '#16697A',
    }

    useEffect(() => {
        var timer = setInterval(() => {
            console.log(props.taskList)
            var newList = []
            props.taskList.forEach(async (taskObj) => {
                if(!taskObj.isDone){
                    var response = await axios.get(props.url + "/api/get_status?task_id=" + taskObj.taskID)
                    if(response.data.status === 'done'){
                        taskObj.isDone = true;
                        taskObj.taskStatus = response.data.status
                        taskObj.taskResult = response.data.result
                    }else if(response.data.error != null){
                        taskObj.isError = true;
                        taskObj.errorMessage = response.data.error
                    }else{
                        taskObj.taskStatus = response.data.status
                    }
                }
                newList.push(taskObj)
            })
            props.setTaskList([...newList])
        }, 1000)

        return () => {clearInterval(timer)}
    }, [])

    function renderTextField(){
        if(!hasSelected){
            return(
                <Box justifyContent={"center"} sx={box_style}>
                    {props.taskList.map((taskObj) => {
                        if(taskObj.isDone){
                            return(
                                <Box sx={success_box} onClick={() => {
                                    setCurrentPage("My Contents")
                                    setCurrentTask(taskObj)
                                }}>Task ID: {taskObj.taskID} Task Status: {taskObj.taskStatus}</Box>
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
                    {props.taskList.map((taskObj) => {
                        return(
                            <Box
                                sx={taskObj.isDone ? success_box : in_progress}
                                onClick={taskObj.isDone && (() => {
                                    setCurrentPage("My Contents")
                                    setCurrentTask(taskObj)
                                })}
                            >Task ID: {taskObj.taskID} Task Status: {taskObj.taskStatus}</Box>
                        )
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
                }}>My Content</h1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "4vw"
                }}>
                    <h3 style={{
                        marginTop: "4vh"
                    }}>See in progres tasks</h3>
                    <Switch
                        sx={{
                        marginTop: "3vh"
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
