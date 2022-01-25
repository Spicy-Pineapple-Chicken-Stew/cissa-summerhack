import * as React from 'react';
import { Box } from '@mui/system';
import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';

export default function Flashcard_edit(){
    let [currentTask, setCurrentTask] = React.useContext(CurrentTaskContext);
    const [openModel, setOpenModel] = React.useState(false);
    const handleOpen = () => setOpenModel(true);
    const handleClose = () => setOpenModel(false);
    const [addNewModal, setAddNewModal] = React.useState(false);
    const handleAddNewOpen = () => setAddNewModal(true);
    const handleAddNewClose = () => setAddNewModal(false);
    const [taskQuestion, setTaskQuestion] = React.useState(null);
    const [taskAnswer, setTaskAnswer] = React.useState(null);
    const saveNewQuestion = () => {
        currentTask.questions.forEach(element => {
            if (element.question == taskQuestion){
                alert("saving")
                element.question = questionTextRef.current.value;
                element.answer = answerTextRef.current.value;
                setOpenModel(false);
            }
        });
    }

    const deleteQuestion = () => {
        for(var i  = 0; i < currentTask.questions.length; i++){
            if(currentTask.questions[i].question == taskQuestion){
                currentTask.questions.splice(i, 1);
                setOpenModel(false);
            }
        }
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
        color: '#16697A',
        fontSize: '0.8vw',
        height: 150,
        width: '90%',
        border: '2px solid rgba(72, 159, 181, 1)',
        borderRadius: '16px',
        marginTop: '0.25vw',
        marginBottom: '0.25vw',
        position: 'relative',
        marginLeft: '5%',
        textTransform: 'capitalize',
    }));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: '#82C0CC',
        border: '2px solid #16697A',
        boxShadow: 24,
        height: 600,
      };

    return (
        <div>
            <Box sx={{
                border: '2px solid rgba(72, 159, 181, 1)',
                borderRadius: '8px',
                height: 600,
                flexDirection: 'row',
                overflow: 'auto',
            }}>
                {currentTask.questions.map((quest) => (
                    <Box>
                        <Flashcard_button onClick={() => {
                                                        handleOpen(); 
                                                        setTaskQuestion(quest.question);
                                                        setTaskAnswer(quest.answer);
                                                        }}>
                            <Typography sx={{width: '60%'}}>
                                Question: {quest.question}
                            </Typography>
                            <Typography sx={{width: '40%'}}>
                                Answer: {quest.answer}
                            </Typography>
                        </Flashcard_button>
                        
                        <Button onClick={() => {
                            alert("sdfjlksdfj")
                            setTaskQuestion(quest.question);
                            setTaskAnswer(quest.answer);
                            deleteQuestion();
                        }} sx={{position: 'relative', marginLeft: '0.5%', color: '#489FB5'}}>
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
                            <Button onClick={saveNewQuestion}>Save</Button>
                            <Button onClick={deleteQuestion}>Delete</Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>

            <Button onClick={handleAddNewOpen}>Add new</Button>
            <Modal 
            open={addNewModal}
            onClose={handleAddNewClose}
            aria-labelledby="add-new-modal-title"
            >
                <Box sx={style}>
                    <Box>
                        <TextField 
                            id="question" 
                            label="Question" 
                            multiline
                            rows={20} 
                            sx={{
                                width: '41%',
                                position: 'relative',
                                marginTop: '1vw',
                                marginLeft: '6%',
                            }}
                            inputRef={newQuestionTextRef}
                            />
                        <TextField 
                            id="answer" 
                            label="Answer"  
                            multiline
                            rows={20} 
                            sx={{
                                width: '41%',
                                position: 'relative',
                                marginTop: '1vw',
                                marginLeft: '6%',
                            }}
                            inputRef={newAnswerTextRef}
                            />
                    </Box>
                    <Box sx={{marginTop: '1vw'}}>
                        <Button onClick={handleAddNewClose}>Save</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}