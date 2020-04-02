import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import App from './App';
import CreatePost from './pages/create/CreatePost';
import Admin from './pages/admin/Admin';
import EditPost from './pages/edit/EditPost';
import ReadPost from './pages/read/ReadPost';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path={`/read/:id`} component={ReadPost} />
        <Route path={`/post/:id`} component={EditPost} />
        <Route path="/post" exact={true} component={CreatePost} />
        <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
