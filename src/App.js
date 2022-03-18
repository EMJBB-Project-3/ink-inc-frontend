import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './components/Home'
import MyProfile from './components/MyProfile'
import Post from './components/Post'
import Login from './components/Login'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
      <ApolloProvider client={client}>
      <Router>
        <>
          
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/MyProfile' 
              element={<MyProfile />} 
            />
            <Route 
              path='/Post'
              element={<Post />}
            />
            <Route 
              path='/Login'
              element={<Login/>}
            />
          </Routes>
        </>
      
      </Router>
      </ApolloProvider>
  );
}

export default App;
