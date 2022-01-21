import * as React from 'react';
import ColorButton from '../Components/ButtonDef'
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext} from "react";

function Home(props){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div className = 'wrapper'>
            <div className ='home_title'>
                <h1>Bridge</h1>
            </div>
            <div className ='home_desc'>
                <p>Add description   </p>
            </div>
            <div>
                <ColorButton onClick={() => {setCurrentPage('Upload')}}>Begin</ColorButton>
            </div>
        </div>
    )
}

export default Home;
