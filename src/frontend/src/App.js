import React from 'react'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import Upload_desktop from './Pages/Upload_desktop_ver';
import Home from "./Pages/Home";

function App() {
  var displayHome = false;
  return (
    <div>
      <div>
        <Global_MenuBar/>
      </div>
      <div className="App">
        {displayHome && <Home/>}
        {displayHome && <Upload_desktop/>}
      </div>
    </div>
    )
}
export default App;
