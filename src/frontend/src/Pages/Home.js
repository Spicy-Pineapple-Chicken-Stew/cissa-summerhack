import * as React from 'react';
import ColorButton from '../Components/ButtonDef';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


import DeleteIcon from '@mui/icons-material/Delete';
function Home(props){

    return(
        <div className = 'wrapper'>
            <div className ='home_title'>
                <h1>Bridge</h1>
            </div>
            <div className ='home_desc'>
                <p>Add description   </p>
            </div>
            <div>
            <ColorButton>Begin</ColorButton>





            
            </div>
        </div>
    )

}

export default Home;