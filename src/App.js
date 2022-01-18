import React, {useState} from 'react'
import './App.css';
import Home from './Pages/Home';
import Global_MenuBar from './Components/global_menubar';
import Upload_desktop from './Pages/Upload_desktop_ver';
import Home from "./Pages/Home";
import UploadConfirmation from "./Pages/UploadConfirmation";
import {CurrentPageContext} from "./Contexts/CurrentPageContext";

function App() {
  let [currentPage, setCurrentPage] = useState('uploadconfirm');

  return (
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
    )
}
export default App;
