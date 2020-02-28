import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Recent from './components/Recent';
import Post from './components/Post';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Recent}/>
      <Route path="/:id" component={Post}/>
    </Router>
  );
}

export default App;
