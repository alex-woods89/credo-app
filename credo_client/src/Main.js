import React, {Component, Fragment } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import PipeContainer from './containers/pipeContainer';
import UserContainer from './containers/userContainer';
import ValveContainer from './containers/valveContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{

render(){
    return (
        <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pipes" component={PipeContainer} />
            <Route path="/users" component={UserContainer} />
            <Route path="/valves" component={ValveContainer} />
            
          </Switch>

        </Fragment>
      </Router>
    )
}


}

export default Main 

