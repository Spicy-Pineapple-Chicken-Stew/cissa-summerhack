import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext, useState} from "react";
import {Grow, Slide, Typography, Zoom} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { typography } from '@mui/system';
import { Box } from '@mui/system';
import des1 from '../images/fileformaticon.png'
import des2 from '../images/AI_summarization.png';
import des3 from '../images/aiquestionicon2.png';


function Home(props){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [animationState, setAnimationState] = useState(true);

    return(
        <div className = 'wrapper'>
            <div className ='home_title'>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                      {...(animationState ? { timeout: 1000 } : {})}>
                    <h1>Bridge</h1>
                </Slide>
            </div>
            <div className ='home_desc'>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                       {...(animationState ? { timeout: 1000 } : {})}>
                    <p>Add description   </p>
                </Slide>

            </div>
            <div>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                       {...(animationState ? { timeout: 1000 } : {})}>
                    <ColorButton onClick={() => {setCurrentPage('Upload')}}>
                        Begin
                        <ArrowForwardIcon sx={{marginLeft: '1em'}}/>
                    </ColorButton>
                </Slide>
            </div>
            <Box sx={{height: '1080px', marginTop: '27%', marginLeft: '-3.4vw', width: '99.01vw', bgcolor: '#6CA1F0'}}>
                <Box sx={{marginTop: '9vw', height: '360px', display: 'flex', flexDirection: 'row'}}>
                    <Box width={'30%'} sx={{position: 'relative', marginLeft: '6vw'}}>
                        <img src={des1} width={'80%'}/>
                    </Box>
                    <Box width={'30%'} sx={{position: 'relative', marginLeft: '9vw'}}>
                        <img src={des2} width={'30%'}/>
                    </Box>
                    <Box width={'30%'}>
                        <img src={des3} width={'60%'}/>
                    </Box>
                </Box>
                <Box sx={{marginTop: '2vw', display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{marginLeft: '6vw'}}>
                        <Typography color={'#FFFFFF'} fontSize={'1.5vw'}>
                            Support wide range of formats
                        </Typography>
                    </Box>
                    <Box sx={{marginLeft: '15vw'}}>
                        <Typography color={'#FFFFFF'} fontSize={'1.5vw'}>
                            AI summarization
                        </Typography>
                    </Box>
                    <Box sx={{marginLeft: '16vw'}}>
                        <Typography color={'#FFFFFF'} fontSize={'1.5vw'}>
                            Automated question generation
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home;
