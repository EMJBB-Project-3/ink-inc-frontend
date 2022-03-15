import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    
      <Router>
        <>
          
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            {/* <Route 
              path='/saved' 
              element={<SavedBooks />} 
            />
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            /> */}
          </Routes>
        </>
      </Router>
    

  );
}

export default App;
