import './App.css';
import Home from './pages/Home';
import Video from './components/video';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>

    <Routes>

      <Route exact path='/' Component={Home}/>
      <Route path='/video' Component={Video}/>


    </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
