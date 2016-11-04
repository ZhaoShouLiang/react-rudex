import React from 'react';
import Radium from 'radium';

import courses from '../data/courses';

const Courses = React.createClass({
  render() {
    let styles = {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
    return (
      <div style={styles.root}>
        { courses.map((course, i) => <div key={i} ><img src={course.image} /></div>)}
      </div>
    )
  }
});

export default Radium(Courses);