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
        <Box sx={{height: '65vh', marginTop: '29vh', marginLeft: '-3.4vw', width: '99.01vw', bgcolor: '#6CA1F0'}}>
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
                            Bridge supports uploading from a wide variety of formats from text, weblinks, youtube videos to even custom videos. Any study material can be easily uploaded and processed through our backend servers keeping your system light and free from the heavy computation.
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
                            Any content can easily be summarised into comprehensive text, made available through implementation of numerous AI technologies such as GPT2 Abstractive Summary model, BERT Extractive Summary model and Bidirectional RNN punctuator model.

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
                    <Typography color={'#FFFFFF'} fontSize={'5vw'} fontFamily={"Oxygen"}>
                        Support wide range of formats
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'3vw'} fontFamily={"Oxygen"}>
                            Bridge supports uploading from a wide variety of formats from text, weblinks, youtube videos to even custom videos. Any study material can be easily uploaded and processed through our backend servers keeping your system light and free from the heavy computation.
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
                    <Typography color={'#FFFFFF'} fontSize={'5vw'} fontFamily={"Oxygen"}>
                        AI summarization
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'3vw'} fontFamily={"Oxygen"}>
                            Any content can easily be summarised into comprehensive text, made available through implementation of numerous AI technologies such as GPT2 Abstractive Summary model, BERT Extractive Summary model and Bidirectional RNN punctuator model.
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
                    <Typography color={'#FFFFFF'} fontSize={'5vw'} fontFamily={"Oxygen"}>
                        Automated question generation
                    </Typography>
                    <div style={{
                        width: "50vw"
                    }}>
                        <Typography color={'#FFFFFF'} fontSize={'3vw'} fontFamily={"Oxygen"}>
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

    var wrapperDivName;
    var wrapperDesc;
    if(isMobile){
        wrapperDivName = "wrapperMobile"
        wrapperDesc = "home_desc_mobile"
    }else{
        wrapperDivName = "wrapper"
        wrapperDesc = "home_desc"
    }



    return(
        <div className = {wrapperDivName}>
            <div className ='home_title'>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                      {...(animationState ? { timeout: 1000 } : {})}>
                    <h1>Bridge</h1>
                </Slide>
            </div>
            <div className ={wrapperDesc}>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                       {...(animationState ? { timeout: 1000 } : {})}>
                    <p style={{
                        fontSize: "2vh",
                        lineHeight: "3vh"
                    }}>
                        Bridge is an innovative solution for students to enhance their studying routine by creating summaries of materials such as videos and text. Bridge allows you to focus on reading and understanding only the most important details of your material through the use of advanced Natural Language Processing Artificial Intelligence algorithms.
                        Summaries, flashcards and quizzes can all be made quickly and easy thanks to Bridge.
                        Click Begin to Bridge the gaps in your knowledge.
                    </p>
                </Slide>

            </div>
            <div style={{
                marginTop: "1vh"
            }}>
                <Slide direction={"left"} in={animationState} style={{ transformOrigin: '0 0 0' }}
                       {...(animationState ? { timeout: 1000 } : {})}>
                    <ColorButton onClick={() => {setCurrentPage('Upload')}} sx={{
                        width: "153.6px",
                        height: "54px"
                    }}>
                        Begin
                        <ArrowForwardIcon sx={{marginLeft: '1em'}}/>
                    </ColorButton>
                </Slide>
            </div>
            {!isMobile && renderDesktopDescription()}
            {isMobile && renderMobileDescription()}
            <Box sx={{height: '65vh', marginLeft: '-3.4vw', width: '99.01vw', bgcolor: '#5178B2'}}>
                <div style={{
                    textAlign: "center"
                }}>
                    <Typography color={'#FFFFFF'} fontSize={'8vh'} fontFamily={"Oxygen"}>
                        About Us
                    </Typography>
                    <Typography color={'#FFFFFF'} fontSize={'6vh'} fontFamily={"Oxygen"}>
                        Created by
                    </Typography>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "10vw",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "3vh"
                }}>
                    <Typography color={'#FFFFFF'} fontSize={'5vh'} fontFamily={"Oxygen"}>
                        Bowen Feng
                    </Typography>
                    <Typography color={'#FFFFFF'} fontSize={'5vh'} fontFamily={"Oxygen"}>
                        Jerry Cheng
                    </Typography>
                    <Typography color={'#FFFFFF'} fontSize={'5vh'} fontFamily={"Oxygen"}>
                        Harrison Langdon
                    </Typography>
                    <Typography color={'#FFFFFF'} fontSize={'5vh'} fontFamily={"Oxygen"}>
                        Kasie Wang
                    </Typography>
                </div>
                <div style={{
                    marginTop: "5vh"
                }}>
                    <img src={"https://cdn.discordapp.com/attachments/930790652189495316/936228156040437810/Screen_Shot_2022-01-12_at_1.png"} style={{
                        width: "99vw",
                        height: "50vh"
                    }}/>
                </div>
            </Box>
        </div>
    )
}

export default Home;
