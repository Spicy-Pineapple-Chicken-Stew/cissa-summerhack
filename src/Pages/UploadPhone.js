import * as React from 'react';
import PhoneButton from '../Components/PhoneButton';
import TextboxPopup from '../Components/upload_popup';
import FilePopup from '../Components/upload_popup_file';
import LinkIcon from '@mui/icons-material/Link';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


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
                <PhoneButton
                    text='Pure textㅤ'
                    description={"Click to enter or paste text to be summarised"}
                    OnClick={handleOpenPT}
                    icon={<LibraryBooksIcon style={{color: '#ede7e3'}}/>}
                />
                <TextboxPopup
                    text='Pure text'
                    openpop={openPT}
                    closepop={handleClosePT}
                    type={"puretext"}
                    taskList={props.taskList}
                    setTaskList={props.setTaskList}
                    url={props.url}
                />
            </div>
            <div>
                <PhoneButton
                    text='Linkㅤ'
                    description={"Click to enter or paste link to be summarised"}
                    OnClick={handleOpenL}
                    icon={<LinkIcon style={{color: '#ede7e3'}}/>}
                />
                <TextboxPopup
                    text='Link'
                    openpop={openL}
                    closepop={handleCloseL}
                    type={"link"}
                    taskList={props.taskList}
                    setTaskList={props.setTaskList}
                    url={props.url}
                />
            </div>
            <div>
                <PhoneButton
                    text='Your videoㅤ'
                    description={"Click to upload a video to be summarised"}
                    OnClick={handleOpenYV}
                    icon={<AttachFileIcon style={{color: '#ede7e3'}}/>}
                />
                <FilePopup
                    text='Your Video'
                    openpop={openYV}
                    closepop={handleCloseYV}
                    taskList={props.taskList}
                    setTaskList={props.setTaskList}
                    url={props.url}
                />
            </div>
        </div>
    )

}

export default UploadPhone;
