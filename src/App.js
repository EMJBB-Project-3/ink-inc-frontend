import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './components/Home'
import MyProfile from './components/MyProfile'
import Post from './components/Post'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
      <ApolloProvider>
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
      </ApolloProvider>
    

  );
}

export default App;
