import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import MyProfile from './components/MyProfile'
import Post from './components/Post'

function App() {
  return (
    
      <Router>
        <>
          
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='./components/MyProfile' 
              element={<MyProfile />} 
            />
            <Route 
              path='./components/Post'
              element={<Post />}
            />
          </Routes>
        </>
      </Router>
    

  );
}

export default App;
