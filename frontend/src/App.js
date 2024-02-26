import './App.css';
import Home from './pages/Home';
import Video from './components/video';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Upload from './pages/Upload';


function App() {
  return (

    <BrowserRouter>

    <Routes>

      <Route exact path='/' Component={Home}/>
      {/* <Route path='/video' Component={Video}/> */}
      <Route path='/video/:videoId' Component={Video}/>
      <Route path='/upload' Component={Upload}/>

      
      


    </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
