import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import Upload_Phone from './Pages/Upload_Phone'
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <div>
        <Global_MenuBar/>
      </div>
      <div className="App">
        <Upload_Phone/>
      </div>
    </div>
    )
}
export default App;
