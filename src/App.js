import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Global_MenuBar from './Components/global_menubar';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <div>
        <Global_MenuBar/>
      </div>
      <div className="App">
        <Home/>
      </div>
    </div>
    )
}
export default App;
