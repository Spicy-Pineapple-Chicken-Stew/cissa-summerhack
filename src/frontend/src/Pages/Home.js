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
                    <p>Add description   </p>
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
