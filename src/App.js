import './App.css';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Profile from './components/Profile';
import { Routes, Route, Router} from 'react-router-dom';
// import { Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/ink-inc-frontend/Profile' element={<Profile/>}/>
        <Route path='/ink-inc-frontend/Post' element={<Post/>}/>
        <Route path='/ink-inc-frontend/About' element={<About/>}/> */}
      </Routes>
      </Router>
      
      
    </>
  );
}

export default App;