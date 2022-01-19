import React, {useState} from 'react'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import UploadPhone from './Pages/UploadPhone'
import Home from './Pages/Home'
import Upload_desktop from './Components/UploadDesktopDescription';
import UploadDesktop from "./Pages/UploadDesktop";
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
                  {currentPage === 'uploadconfirm' && <UploadDesktop/>}
                  {false && <UploadPhone />}
              </div>
          </div>
      </CurrentPageContext.Provider>
    )
}
export default App;
