import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import Upload_desktop from './Pages/Upload_desktop_ver';

function App() {
  return (
    <div>
      <Global_MenuBar />
      <div>
        <Upload_desktop />
      </div>
    </div>
    );
}
export default App;
