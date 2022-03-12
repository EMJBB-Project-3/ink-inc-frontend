import './App.css';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Post/>
      <Profile/>
    </div>
  );
}

export default App;