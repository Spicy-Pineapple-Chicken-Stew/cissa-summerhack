import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext, useState} from "react";
import {Grow, Slide, Zoom} from "@mui/material";

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
                    <ColorButton onClick={() => {setCurrentPage('Upload')}}>Begin</ColorButton>
                </Slide>
            </div>
        </div>
    )
}

export default Home;
