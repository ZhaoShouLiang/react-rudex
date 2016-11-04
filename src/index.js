import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Courses}></IndexRoute>
      <Route path="/view/:courseId" component={ShowCourse}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
