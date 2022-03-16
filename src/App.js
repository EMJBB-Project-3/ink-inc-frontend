import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Profile from './components/Profile'

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
              path='./components/Profile' 
              element={<Profile />} 
            />
            {/* <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            /> */}
          </Routes>
        </>
      </Router>
    

  );
}

export default App;
