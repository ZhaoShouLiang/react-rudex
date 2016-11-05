import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import comments from './comments';

const rootReducer = combineReducers({courses, comments, routing: routerReducer });

export default rootReducer;
//reducer用来处理actions中变化的数据存入store中