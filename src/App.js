import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Homepage/Homepage'
import Mantra from './Components/Mantra/Mantra';

class App extends React.Component {
  state = {

  }


  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
      <Route exact path="/" component= { Homepage }/>
      <Route path="/mantra" component = { Mantra } />
      
    </div>
    )
  }
}

export default withRouter(App);
