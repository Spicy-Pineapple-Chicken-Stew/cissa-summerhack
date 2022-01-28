import * as React from 'react';
import { Box } from '@mui/system';
import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import axios from "axios";
import {UserContext} from "../Contexts/UserContext";
import ButtonDef from './ButtonDef';
import ColorButton from './ButtonDef';
import { display } from '@mui/system';


export default function Flashcard_edit(){
    let [currentTask, setCurrentTask] = React.useContext(CurrentTaskContext);
    let [user, setUser] = React.useContext(UserContext)
    const [openModel, setOpenModel] = React.useState(false);
    const handleOpen = () => setOpenModel(true);
    const handleClose = () => setOpenModel(false);
    const [addNewModal, setAddNewModal] = React.useState(false);
    const handleAddNewOpen = () => setAddNewModal(true);
    const handleAddNewClose = () => setAddNewModal(false);
    const [taskQuestion, setTaskQuestion] = React.useState(null);
    const [taskAnswer, setTaskAnswer] = React.useState(null);
    const [forceRefresh, setForceRefresh] = React.useState(false);
    const url = "https://194.193.55.245:9000";

    const saveNewQuestion = () => {
        currentTask.questions.forEach(element => {
            if (element.question == taskQuestion){
                element.question = questionTextRef.current.value;
                element.answer = answerTextRef.current.value;
                axios.post(url + "/api/update_questions?userid=" + user, currentTask).then((response) => {
                    setOpenModel(false);
                }).catch((error) => {
                    alert(error.response)
                    console.log(error.response)
                })
            }
        });
    }

    const deleteQuestion = (taskQ) => {
        for(var i  = 0; i < currentTask.questions.length; i++){
            if(taskQ != null){
                if(currentTask.questions[i].question === taskQ){
                    currentTask.questions.splice(i, 1);
                    axios.post(url + "/api/update_questions?userid=" + user, currentTask).then((response) => {
                        setOpenModel(false)
                    }).catch((error) => {
                        alert(error.response)
                        console.log(error.response)
                    })
                }
            }else{
                if(currentTask.questions[i].question === taskQuestion){
                    currentTask.questions.splice(i, 1);
                    axios.post(url + "/api/update_questions?userid=" + user, currentTask).then((response) => {
                        setOpenModel(false)
                    }).catch((error) => {
                        alert(error.response)
                        console.log(error.response)
                    })
                }
            }
        }
    }

    const addNewQuestion = () => {
        currentTask.questions.push({
            question: newQuestionTextRef.current.value,
            answer: newAnswerTextRef.current.value
        });
        axios.post(url + "/api/update_questions?userid=" + user, currentTask).then((response) => {
            setAddNewModal(false);
        }).catch((error) => {
            alert(error.response)
            console.log(error.response)
        })
    }



    const questionTextRef = React.useRef('');
    const answerTextRef = React.useRef('');
    const newQuestionTextRef = React.useRef('');
    const newAnswerTextRef = React.useRef('');


    const Flashcard_button = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Oxygen',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        color: '#000000',
        backgroundColor: '#fffefc',
        fontSize: '0.8vw',
        height: 118,
        width: '97%',
        border: '2px solid #6ca1f0',
        borderRadius: '16px',
        marginTop: '0.25vw',
        position: 'relative',
        marginLeft: '5%',
        textTransform: 'capitalize'
    }));
    
    const style = {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: '#fffaf7',
        border: '2px solid #5178B2',
        borderRadius: '4px',
        boxShadow: 24,
        height: 600,
      };

    return (
        <div>
            <Box sx={{
                border: '2px solid #5178B2',
                borderRadius: '4px',
                marginTop: '0.5%',
                height: '56vh',
                flexDirection: 'row',
                width: '90.7vw',
                
                marginLeft: '4.65vw',
                backgroundColor: '#fffaf7',
            }}> 
                {currentTask.questions.map((quest) => (
                    <Box
                    sx ={{
                        marginLeft: '0vw',
                        marginTop: '1%',
                        width: '100%',
                    }}>
                        <Flashcard_button 
                            onClick={() => {
                                handleOpen(); 
                                setTaskQuestion(quest.question);
                                setTaskAnswer(quest.answer);
                            }}
                            sx ={{marginLeft: '1.5%'}}>
                            <Typography sx={{width: '60%', marginTop:'15%', fontFamily:'Oxygen'}}>
                                Question: {quest.question}
                            </Typography>
                            <Typography sx={{width: '25%'}}>
                                Answer: {quest.answer}
                            </Typography>
                        </Flashcard_button>
                        
                        <Button onClick={() => {
                            deleteQuestion(quest.question);
                            setForceRefresh(!forceRefresh);
                        }} sx={{position: 'relative', marginLeft: '-7%', color: '#5178B2'}}>
                                <DeleteForeverIcon />
                        </Button>
                    </Box>
                ))}
                <Modal
                    open={openModel}
                    onClose={handleClose}
                    aria-labelledby="quest-modal-title"    
                >
                    <Box sx={style}>
                        <Box>
                            <TextField 
                                id="question" 
                                label="Question" 
                                defaultValue={taskQuestion}
                                multiline
                                rows={20} 
                                sx={{
                                    width: '41%',
                                    position: 'relative',
                                    marginTop: '1vw',
                                    marginLeft: '6%',
                                }}
                                inputRef={questionTextRef}
                                />
                            <TextField 
                                id="answer" 
                                label="Answer" 
                                defaultValue={taskAnswer} 
                                multiline
                                rows={20} 
                                sx={{
                                    width: '41%',
                                    position: 'relative',
                                    marginTop: '1vw',
                                    marginLeft: '6%',
                                }}
                                inputRef={answerTextRef}
                                />
                        </Box>
                        <Box sx={{marginTop: '1vw'}}>
                            <ColorButton onClick={saveNewQuestion}>Save</ColorButton>
                            <ColorButton 
                                onClick={() => {
                                    deleteQuestion(null)
                                }}
                                sx={{position: 'relaive', marginLeft: '0.5vw'}}
                            >
                                Delete</ColorButton>
                        </Box>
                    </Box>
                </Modal>
            </Box>

            <ColorButton
                onClick={handleAddNewOpen}
                sx = {{ marginTop: '1%',
                        marginLeft: '50vw',
                        marginBottom: '1%'}}
            >Add new</ColorButton>
            <Modal 
            open={addNewModal}
            onClose={handleAddNewClose}
            aria-labelledby="add-new-modal-title"
            >
                <Box sx={style}>
                    <Box>
                        <Typography 
                            fontfamily ='Oxygen' 
                            fontSize={20}
                            sx = {{
                                marginLeft:'4.5vw',
                                marginTop: '2vh',
                                marginBottom: '-2vh'}}
                        >Edit</Typography>
                        <TextField 
                            id="question" 
                            label="Question" 
                            multiline
                            rows={19} 
                            sx={{
                                width: '41%',
                                height: '35%',
                                position: 'relative',
                                marginTop: '3vh',
                                marginLeft: '6%',
                                border: '#5178B2',
                                backgroundColor: '#fffefc',
                                color: '#5178B2'
                            }}
                            inputRef={newQuestionTextRef}
                            />  
                        <TextField 
                            id="answer" 
                            label="Answers"  
                            multiline
                            rows={19} 
                            sx={{
                                width: '41%',
                                height: '35%',
                                position: 'relative',
                                marginTop: '3vh',
                                marginLeft: '6%',
                                border: '#5178B2',
                                backgroundColor: '#fffefc',
                                color: '#5178B2'
                            }}
                            inputRef={newAnswerTextRef}
                            />
                    </Box>
                    <Box sx={{marginTop: '2vh', marginLeft: '31.5vw'}}>
                        <ColorButton onClick={addNewQuestion}>Save</ColorButton></Box>
                </Box>
            </Modal>
        </div>
    )
}