import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <h1>Hello Puneeth</h1> */}
      <Router>
        
      <Header />
        <Switch>
          <Route  path="/search/:searchtTerm">
            {/* <h1>Search Page</h1> */}
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route exact path="/">
            {/* <h1>Home Page</h1> */}
            <div className="app_page">
              <Sidebar />
              <Videos />
            </div>
          </Route>
        </Switch>
        
      </Router>
      </div>
    
  );
}

export default App;
