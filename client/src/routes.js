import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPost from "./components/ui/NewPost";
import ShowPost from "./components/ui/ShowPost";
import EditPost from "./components/ui/EditPost"


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path="/write" component={NewPost}/>
      <Route path="/posts/:id" component={ShowPost}/>
      <Route path="/posts/:id/edit" component={EditPost}/>
    </Route>
  </Router>
);
