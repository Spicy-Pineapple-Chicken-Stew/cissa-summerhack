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
import MyContents from "./Pages/MyContents";
import TaskListPage from "./Pages/TaskList";
import {CurrentTaskContext} from "./Contexts/CurrentTaskContext";
import axios from "axios";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  let [currentPage, setCurrentPage] = useState('Home');
  let [isMobile, setIsMobile] = useState(false);
  let [user, setUser] = useState(null);
  let [currentTask, setCurrentTask] = useState(null);
  let [taskList, setTaskList] = useState([]);
  const url = "https://194.193.55.245:9000";


    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth < window.innerHeight || window.innerWidth < 768);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        setIsMobile(window.innerWidth < window.innerHeight || window.innerWidth < 768);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        if(user != null){
            axios.get(url + "/api/get_tasks?userid=" + user).then((response) => {
                setTaskList(response.data.tasks)
            }).catch((error) => {
                alert(error.response)
                console.log(error.response)
            })
        }
    }, [user])

    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

  return (
      <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
          <MobileContext.Provider value={[isMobile, setIsMobile]}>
              <UserContext.Provider value={[user, setUser]}>
                  <CurrentTaskContext.Provider value={[currentTask, setCurrentTask]}>
                      <div>
                          <div>
                              {isMobile ? <Global_MenuBar_mobile/> : <Global_MenuBar />}
                          </div>
                          <div className="App">
                              {currentPage === 'Home' && <Home/>}
                              {currentPage === 'Upload' && !isMobile && <UploadDesktop taskList={taskList} setTaskList={setTaskList} url={url}/>}
                              {currentPage === 'Upload' && isMobile && <UploadPhone taskList={taskList} setTaskList={setTaskList} url={url}/>}
                              {currentPage === 'Log in' && <LoginRegistration taskList={taskList} url={url}/>}
                              {currentPage === 'My Contents' && <MyContents />}
                              {currentPage === 'Task List' && <TaskListPage taskList={taskList} setTaskList={setTaskList} url={url}/>}
                          </div>
                      </div>
                  </CurrentTaskContext.Provider>
              </UserContext.Provider>
          </MobileContext.Provider>
      </CurrentPageContext.Provider>
    )
}
export default App;
