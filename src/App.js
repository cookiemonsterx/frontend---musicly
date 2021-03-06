import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ArtistView from './views/ArtistView'
// import AlbumView from './views/AlbumView'
// import SongView from './views/SongView'
import {
    ApolloProvider,
  } from 'react-apollo'
  import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/graphql/'
})

const client = new ApolloClient({
  cache:cache,
  link:link
})
  
//   const networkInterface = createLiteral({
//     uri: 'http://localhost:8000/graphql',
//     batchInterval: 10,
//     opts: {
//       credentials: 'same-origin',
//     },
//   })
  
 /* const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',

  })*/
  



class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
      <Router>
        {/* <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/albums/">Albums</Link></li>
            <li><Link to="/songs/">Songs</Link></li>
            
          </ul> */}
          <Route exact path="/" component={ArtistView} />
          {/* <Route exact path="/albums/" component={AlbumView} />
          <Route exact path="/songs/" component={SongView} /> */}
        
        {/* </div> */}
      </Router>
      </ApolloProvider>
    )
  }
}

export default App