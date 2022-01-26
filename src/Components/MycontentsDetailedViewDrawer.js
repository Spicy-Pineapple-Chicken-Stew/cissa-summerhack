import * as React from 'react';
import { Box } from '@mui/system';
import { FlashcardComponent } from './TestFlashcardComponent';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import {useContext} from "react";
import {CurrentTaskContext} from "../Contexts/CurrentTaskContext";
import parseQuestions from "../Functions/ParseQuestions";
import Flashcard_edit from './MycontentsFlashcardEdit';
import MenuIcon from '@mui/icons-material/Menu';

export default function MC_Drawer(){
    let [contents, setContents] = React.useState('Summary');
    const [opendrawer, setOpendrawer] = React.useState(false);
    let [currentTask, setCurrentTask] = useContext(CurrentTaskContext);

    const toggleDrawer = (anchor, open) => (Event) => {
        if (Event.type === 'keydown' && (Event.key === 'Tab' || Event.key === 'Shift')){
            return;
        }

        setOpendrawer({opendrawer, [anchor]: open});
    };

    
    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
            <List>
                {
                    ['Summary', 'Original submission'].map((text, index) => (
                        <ListItem button key={text} onClick={() => setContents(text)} sx={{width: '250px'}}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
                <Typography variant="subtitle 1" sx={{position: 'relative', marginLeft: "0.9vw"}}>
                    Flash cards
                </Typography>
            <List>
                {['View', 'Edit'].map((text, index) => (
                    <ListItem button key={text} onClick={() => setContents(text)}>
                        <ListItemText primary={text} sx={{position: 'relative', marginLeft: '1.5vw'}} /> 
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box className='content_box'>
            
            <Box sx={{
                width: 5/6,
                height: 600,
                fontSize: '2vw',
                textAlign: 'left',
            }}>
                <Typography sx={{position: 'relative', marginTop: '1vw', marginLeft: '6vw', fontSize: '2vw'}}>{contents}</Typography>
                <Box>
                {
                    ['Side menu'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} sx={{position: 'absolute', marginTop: '1vw'}}>
                                <MenuIcon fontSize='large' sx={{color: '#5178B2'}}/>
                            </Button>
                            <Drawer
                                anchor='left'
                                open={opendrawer[anchor]}
                                onClose={toggleDrawer(anchor, false)} 
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))
                }
                </Box>
                {(contents == 'Summary') &&
                <Box sx={{
                    border: '2px solid rgba(81, 120, 178, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw',
                    position: 'relative',
                    marginLeft: '6vw'
                }}>
                    {currentTask.taskResult}
                </Box>
                }
                {(contents == 'Original submission') &&
                <Box sx={{
                    border: '2px solid rgba(81, 120, 178, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw',
                    position: 'relative',
                    marginLeft: '6vw'
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
                </Box>
                }
                {(contents == 'View') &&
                <Box sx={{position: 'relative', marginLeft: '6vw'}}>
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
                </Box>
                }
                {(contents == 'Edit') &&
                <Flashcard_edit />}
            </Box>
        </Box>
    )
}
