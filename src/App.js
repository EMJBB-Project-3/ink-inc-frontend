import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './components/Home'
import MyProfile from './components/MyProfile'
import Post from './components/Post'
import Login from './components/Login'
import CreatePost from './components/CreatePost'

const url = process.env.NODE_ENV === 'development'
? 'graphql': 'https://ink-inc-backend.herokuapp.com/'; 

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: url
});




// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
              element={<Login />} 
            />
            <Route 
              path='/MyProfile' 
              element={<MyProfile />} 
            />
            <Route 
              path='/Home'
              element={<Home />}
            />
            {/* <Route 
              path='/Login'
              element={<Login/>}
            /> */}
            <Route 
              path='/createpost'
              element={<CreatePost/>}
            />
          </Routes>
        </>
      
      </Router>
      </ApolloProvider>
  );
}

export default App;
