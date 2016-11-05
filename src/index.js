import React from 'react';
import { render } from 'react-dom';
import { Main } from './components/Main';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';
import css from './styles/style.css';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
	<Provider store={store} >
		  <Router history={history}>
		    <Route path="/" component={Main}>
		      <IndexRoute component={Courses}></IndexRoute>
		      <Route path="/view/:courseId" component={ShowCourse}></Route>
		    </Route>
		  </Router>
	</Provider>

)

render(router, document.getElementById('root'));
