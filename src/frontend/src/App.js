import React, {useEffect, useState} from 'react'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import UploadPhone from './Pages/UploadPhone'
import Home from './Pages/Home'
import UploadDesktop from "./Pages/UploadDesktop";
import {CurrentPageContext} from "./Contexts/CurrentPageContext";
import {MobileContext} from "./Contexts/MobileContext";
import Global_MenuBar_mobile from "./Components/global_menubar_mobile";
import LoginRegistration from "./Pages/LoginRegistration";
import {UserContext} from "./Contexts/UserContext";
import MycontentsQuickViewDesktop from './Pages/MycontentsQuickViewDesktop';
import MycontentsQuickViewMobile from './Pages/MycontentsQuickViewMobile';

function App() {

    let [currentPage, setCurrentPage] = useState('MycontentsQuickViewMobile');
    let [isMobile, setIsMobile] = useState(false);
    let [user, setUser] = useState(null);
  
      function handleWindowSizeChange() {
          setIsMobile(window.innerWidth <= 768);
      }
      useEffect(() => {
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, []);
    return (


        <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
            <MobileContext.Provider value={[isMobile, setIsMobile]}>
                <UserContext.Provider value={[user, setUser]}>
                    <div>
                        <div>
                            {isMobile ? <Global_MenuBar_mobile/> : <Global_MenuBar />}
                        </div>
                        <div className="App">
                            {currentPage === 'MycontentsQuickViewMobile' && <MycontentsQuickViewMobile/>}
                            {currentPage === 'Upload' && !isMobile && <UploadDesktop/>}
                            {currentPage === 'Upload' && isMobile && <UploadPhone />}
                            {currentPage === 'Log in' && <LoginRegistration/>}
                        </div>
                    </div>
                </UserContext.Provider>
            </MobileContext.Provider>
        </CurrentPageContext.Provider>

      )
  }
  export default App;
  