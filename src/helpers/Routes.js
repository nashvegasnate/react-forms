import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Students from '../views/Students';
import AddStudent from '../views/AddStudent';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route path='/students'
          component={() => <Students students={students} setStudents={setStudents}/>}/>
        <Route path='/add-student'
          component={() => <AddStudent students={students} setStudents={setStudents}/>}/>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
