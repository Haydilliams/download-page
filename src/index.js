import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Download from './pages/Download';
import NotFoundPage from './pages/NotFoundPage';

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/download/:imageName" render={(props) => <Download {...props} />} />
      <Route component={NotFoundPage} />
    </Switch>
    
  </HashRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
