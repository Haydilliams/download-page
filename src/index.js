import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

