import * as React from 'react';
import ColorButton from '../Components/ButtonDef';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ButtonBases from '../Components/Imagebutton';
import PhoneButton from '../Components/PhoneButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Upload_Phone(props){

    return(
        <div className ='upload_wrapper'>
            <div className ='upload_title'>
                <h1>Uploads</h1>
            </div>
            <div>
                <PhoneButton/>
            </div>


            
        </div>
    )

}

export default Upload_Phone;

/* working before!

<div className = 'wrapper'>
            <div className ='home_title'>
                <h1>Uploads</h1>
            </div>
            <div>
            <ColorButton variant="outlined" startIcon={<Avatar
                src={
                "http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png"
                }
            />}> Delete </ColorButton>
            </div>


            <div>
                <ButtonBases/>
            </div>
        </div>


*/