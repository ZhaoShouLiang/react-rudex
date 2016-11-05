import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import App from './App';

function mapStateToProps(state) {
  return {
    courses: state.courses,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispachToProps)(App);

export default Main;