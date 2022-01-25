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
                        <ListItem button key={text} onClick={() => setContents(text)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider component="li"/>
            <li>
                <Typography variant="caption">
                    Flash cards
                </Typography>
            </li>
            <List>
                {['View', 'Edit'].map((text, index) => (
                    <ListItem button key={text} onClick={() => setContents(text)}>
                        <ListItemText primary={text} /> 
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box className='content_box'>
            <div>
                {
                    ['Side menu'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} sx={{transform: 'rotate(270deg)'}}>
                                <Typography>
                                    {anchor}
                                </Typography>
                            </Button>
                            <Drawer
                                anchor={anchor}
                                open={opendrawer[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))
                }
            </div>
            <Box sx={{
                width: 5/6,
                height: 600,
                position: 'relative',
                marginTop: '1%',
                marginLeft: '4%',
                fontSize: '2vw',
                textAlign: 'left'
            }}>
                {contents}
                {(contents == 'Summary') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw'
                }}>
                    {currentTask.taskResult}
                </Box>
                }
                {(contents == 'Original submission') &&
                <Box sx={{
                    border: '2px solid rgba(72, 159, 181, 1)',
                    borderRadius: '8px',
                    marginTop: 1,
                    height: 550,
                    textAlign: 'left',
                    overflow: 'auto',
                    fontSize: '1vw'
                }}>
                    {contents}
                </Box>
                }
                {(contents == 'View') &&
                <FlashcardComponent dataSource={parseQuestions(currentTask.questions)} />
                }
            </Box>
        </Box>
    )
}
