import * as React from 'react';
import ColorButton from '../Components/ButtonDef';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ButtonBases from '../Components/Imagebutton';
import PhoneButton from '../Components/PhoneButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextboxPopup from '../Components/upload_popup';
import FilePopup from '../Components/upload_popup_file';



function UploadPhone(props){
    const [openPT, setOpenPT] = React.useState(false);
    const [openL, setOpenL] = React.useState(false);
    const [openYV, setOpenYV] = React.useState(false);
    const handleOpenPT = () => setOpenPT(true);
    const handleOpenL = () => setOpenL(true);
    const handleOpenYV = () => setOpenYV(true);
    const handleClosePT = () => setOpenPT(false);
    const handleCloseL = () => setOpenL(false);
    const handleCloseYV = () => setOpenYV(false);


    return(
        <div className ='upload_wrapper'>
            <div className ='upload_title'>
                <h1>Uploads</h1>
            </div>
            <div>
                <PhoneButton text='Pure text' OnClick={handleOpenPT} />
                <TextboxPopup text='Pure text' openpop={openPT} closepop={handleClosePT} />
            </div>
            <div>
                <PhoneButton text='Link' OnClick={handleOpenL} />
                <TextboxPopup text='Link' openpop={openL} closepop={handleCloseL} />
            </div>
            <div>
                <PhoneButton text='Your video' OnClick={handleOpenYV}/>
                <FilePopup text='Your Video' openpop={openYV} closepop={handleCloseYV} />
            </div>

        </div>
    )

}

export default UploadPhone;
