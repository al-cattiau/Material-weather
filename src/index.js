import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import Nav from './Nav';
import Connectedabout from './About';
import Addview from './Addview';
import { Router, Route, browserHistory } from 'react-router'
import AllCity from './Allcity'
import store from './Model';
import Playground from './Playground'

injectTapEventPlugin();




ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Nav} >            
        <Route path="/add" component={Addview}/>
        <Route path="/all" component={AllCity}/>
        <Route path="setting" component={Connectedabout}/>
        <Route path="playground" component={Playground}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))




