import React from 'react';
import { render } from 'react-dom';
import  App  from './components/App';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';
import css from './styles/style.css';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
	<Provider store={store} >
		  <Router history={history}>
		    <Route path="/" component={App}>
		      <IndexRoute component={Courses}></IndexRoute>
		      <Route path="/view/:courseId" component={ShowCourse}></Route>
		    </Route>
		  </Router>
	</Provider>

)

render(router, document.getElementById('root'));
