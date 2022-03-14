import './App.css';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Profile from './components/Profile';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/ink-inc-frontend' element={<Home/>}/>
        <Route path='/ink-inc-frontend/Profile' element={<Profile/>}/>
        <Route path='/ink-inc-frontend/Post' element={<Post/>}/>
        <Route path='/ink-inc-frontend/About' element={<About/>}/>
      </Routes>
      
    </>
  );
}

export default App;