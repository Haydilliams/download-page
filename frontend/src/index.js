import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Download from './pages/Download';
import NotFoundPage from './pages/NotFoundPage';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/download/:imageName" render={(props) => <Download {...props} />} />
      <Route component={NotFoundPage} />
    </Switch>
    
  </BrowserRouter>
), document.getElementById('root'))

