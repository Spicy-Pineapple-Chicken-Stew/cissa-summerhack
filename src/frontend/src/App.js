import React, {useState} from 'react'
import './App.css';
<<<<<<< HEAD
=======
import Global_MenuBar from './Components/global_menubar';
import Upload_Phone from './Pages/Upload_Phone'
>>>>>>> 30c31c55241754a6b5b362a80174a64528d16734
import Home from './Pages/Home';
import Global_MenuBar from './Components/global_menubar';
import Upload_desktop from './Pages/Upload_desktop_ver';
import UploadConfirmation from "./Pages/UploadConfirmation";
import {CurrentPageContext} from "./Contexts/CurrentPageContext";



function App() {
  let [currentPage, setCurrentPage] = useState('uploadconfirm');

  return (
<<<<<<< HEAD
      <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
          <div>
              <div>
                  <Global_MenuBar/>
              </div>
              <div className="App">
                  {currentPage === 'main' && <Home/>}
                  {currentPage === 'upload' && <Upload_desktop/>}
                  {currentPage === 'uploadconfirm' && <UploadConfirmation/>}
              </div>
          </div>
      </CurrentPageContext.Provider>
=======
    <div>
      <div>
        <Global_MenuBar/>
      </div>
      <div className="App">
        <Upload_Phone />
      </div>
    </div>
>>>>>>> 30c31c55241754a6b5b362a80174a64528d16734
    )
}
export default App;
