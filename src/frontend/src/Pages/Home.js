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
import {MobileContext} from "../Contexts/MobileContext";


function renderDesktopDescription(){
    return(
        <Box sx={{height: '100vh', marginTop: '27%', marginLeft: '-3.4vw', width: '99.01vw', bgcolor: '#6CA1F0'}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "10vw"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10vh",
                    alignItems: "center"
                }}>
                    <img src={des1} height={"220vh"} width={"250vw"}/>
                    <Typography color={'#FFFFFF'} fontSize={'1.5vw'} fontFamily={"Oxygen"}>
                        Support wide range of formats
                    </Typography>
                    <div style={{
                        textAlign: "center",
                        marginTop: "2vh",
                        width: "20vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'1vw'} fontFamily={"Oxygen"}>
                            Bridge supports uploading a wide variety of formats from text, weblinks, youtube videos to even custom videos. Any study material can be easily uploaded and processed through our backend servers keeping your system light and free from the heavy computation.
                        </Typography>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10vh",
                    alignItems: "center"
                }}>
                    <img src={des2} height={"220vh"}/>
                    <Typography color={'#FFFFFF'} fontSize={'1.5vw'} fontFamily={"Oxygen"}>
                        AI summarization
                    </Typography>
                    <div style={{
                        textAlign: "center",
                        marginTop: "2vh",
                        width: "20vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'1vw'} fontFamily={"Oxygen"}>
                            Any content can easily be summaries in comprehensive text, made available through implementation of numerous AI technologies such as GPT2 Abstractive Summary model, BERT Extractive Summary model and Bidirectional RNN punctuator model.

                        </Typography>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10vh",
                    alignItems: "center"
                }}>
                    <img src={des3} height={"220vh"}/>
                    <Typography color={'#FFFFFF'} fontSize={'1.5vw'} fontFamily={"Oxygen"}>
                        Automated question generation
                    </Typography>
                    <div style={{
                        textAlign: "center",
                        marginTop: "2vh",
                        width: "20vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'1vw'} fontFamily={"Oxygen"}>
                            Create quick and easy flashcards with the help of automated question generation, using advanced AI models such as Structured BERT SRL predictor and NLTK Pos Tagger. Any summarized text will have questions generated based on information extracted from the text.

                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    )
}

function renderMobileDescription(){
    return(
        <Box sx={{marginTop: '27%', marginLeft: '-3.4vw', width: '99.01vw', bgcolor: '#6CA1F0'}}>
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center"
                }}>
                    <img src={des1} height={"220vh"}/>
                    <Typography color={'#FFFFFF'} fontSize={'3vw'}>
                        Support wide range of formats
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'2vw'}>
                            Bridge supports uploading a wide variety of formats from text, weblinks, youtube videos to even custom videos. Any study material can be easily uploaded and processed through our backend servers keeping your system light and free from the heavy computation.
                        </Typography>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: "3vh"
                }}>
                    <img src={des2} height={'300vh'}/>
                    <Typography color={'#FFFFFF'} fontSize={'3vw'}>
                        AI summarization
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'2vw'}>
                            Any content can easily be summaries in comprehensive text, made available through implementation of numerous AI technologies such as GPT2 Abstractive Summary model, BERT Extractive Summary model and Bidirectional RNN punctuator model.
                        </Typography>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: "3vh"
                }}>
                    <img src={des3} width={'60%'}/>
                    <Typography color={'#FFFFFF'} fontSize={'3vw'}>
                        Automated question generation
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'2vw'}>
                            Create quick and easy flashcards with the help of automated question generation, using advanced AI models such as Structured BERT SRL predictor and NLTK Pos Tagger. Any summarized text will have questions generated based on information extracted from the text.
                        </Typography>
                    </div>
                </div>

            </div>
        </Box>
    )
}


function Home(props){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [animationState, setAnimationState] = useState(true);
    let [isMobile, setIsMobile] = useContext(MobileContext);

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
                    <p>
                        Bridge is an innovative solution for students to enhance their studying routine by creating summaries of materials such as videos and text. Bridge allows you to focus on reading and understanding only the most important details of your material through the use of advanced Natural Language Processing Artificial Intelligence algorithms.
                        Summaries, flashcards and quizzes can all be made quickly and easy thanks to Bridge.
                        Click Begin to Bridge the gaps in your knowledge.
                    </p>
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
            {!isMobile && renderDesktopDescription()}
            {isMobile && renderMobileDescription()}
        </div>
    )
}

export default Home;
