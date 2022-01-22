import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Home from './Pages/Home';
import Global_MenuBar from './Components/global_menubar';
import Upload_desktop from './Pages/Upload_desktop_ver';

function App() {
<<<<<<< Updated upstream
  var displayHome = false;
=======
  let [currentPage, setCurrentPage] = useState('Home');
  let [isMobile, setIsMobile] = useState(false);
  let [user, setUser] = useState(true);

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 768);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

>>>>>>> Stashed changes
  return (
    <div>
      <div>
        <Global_MenuBar/>
      </div>
      <div className="App">
    {displayHome && <Home/>}
        <Upload_desktop />
      </div>
    </div>
    )
}
export default App;
