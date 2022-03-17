import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Post from './components/Post';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    
      <Router>
        <>
          
          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/MyProfile' element={<MyProfile />} />
               
            <Route path='/Post' element={<Post />} />

            <Route path='/SignUp' element={<SignUp />} />

            <Route path='/Login' element={<Login />} />


          </Routes>
        </>
      </Router>
    

  );
}

export default App;
            
              
              
            
          
